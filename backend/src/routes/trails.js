// ============================================================
// Trails Routes — CRUD + AI Trail Generation
// ============================================================

const express = require('express');
const { trails, experiences } = require('../models/seedData');

const router = express.Router();

// GET /api/trails — List featured and public trails
router.get('/', (req, res) => {
    let results = [...trails].filter(t => t.is_featured || t.is_public !== false);

    if (req.query.difficulty) {
        results = results.filter(t => t.difficulty === req.query.difficulty);
    }

    if (req.query.max_days) {
        results = results.filter(t => t.duration_days <= Number(req.query.max_days));
    }

    if (req.query.interest) {
        results = results.filter(t =>
            t.interests.some(i => i.toLowerCase() === req.query.interest.toLowerCase())
        );
    }

    res.json({ data: results, total: results.length });
});

// GET /api/trails/featured — Featured trails only
router.get('/featured', (req, res) => {
    const featured = trails.filter(t => t.is_featured);
    res.json({ data: featured });
});

// GET /api/trails/:id — Single trail detail
router.get('/:id', (req, res) => {
    const trail = trails.find(t => t.id === req.params.id || t.slug === req.params.id);
    if (!trail) {
        return res.status(404).json({ error: 'Trail not found' });
    }

    // Enrich days with experience details
    const enrichedDays = (trail.days || []).map(day => {
        if (day.experience_id) {
            const exp = experiences.find(e => e.id === day.experience_id);
            return { ...day, experience: exp ? { id: exp.id, title: exp.title, category: exp.category, price_per_person: exp.price_per_person, avg_rating: exp.avg_rating } : null };
        }
        return day;
    });

    res.json({ ...trail, days: enrichedDays });
});

// POST /api/trails/generate — AI Trail Builder
router.post('/generate', (req, res) => {
    const { interests, duration, budget, travel_style } = req.body;

    if (!interests || !duration) {
        return res.status(400).json({ error: 'Interests and duration are required' });
    }

    const durationDays = parseInt(duration) || 5;
    const budgetAmount = parseInt(budget) || 50000;

    // Intelligent matching: filter experiences by interests
    const interestMap = {
        'Culture': ['heritage_site', 'workshop'],
        'Trekking': ['guide'],
        'Food': ['workshop'],
        'Spirituality': ['heritage_site', 'homestay'],
        'Adventure': ['guide']
    };

    let matchedCategories = new Set();
    (interests || []).forEach(interest => {
        const cats = interestMap[interest] || [];
        cats.forEach(c => matchedCategories.add(c));
    });

    let matchedExperiences = experiences.filter(e =>
        matchedCategories.has(e.category) && e.is_active && e.is_verified
    );

    // Sort by rating and community impact
    matchedExperiences.sort((a, b) => (b.avg_rating + b.community_impact_score) - (a.avg_rating + a.community_impact_score));

    // Generate day-by-day itinerary
    const days = [];
    let totalCost = 0;
    const usedExperiences = new Set();

    for (let i = 1; i <= durationDays; i++) {
        const available = matchedExperiences.filter(e => !usedExperiences.has(e.id));
        const selected = available[0] || matchedExperiences[i % matchedExperiences.length];

        if (selected) usedExperiences.add(selected.id);

        const dayCost = selected ? selected.price_per_person : 3000;
        totalCost += dayCost;

        days.push({
            day_number: i,
            title: selected ? selected.title : `Free Exploration Day ${i}`,
            description: selected ? selected.short_description : 'Explore local markets, cafes, and hidden gems at your own pace.',
            location: selected ? selected.location_name : 'Kathmandu',
            experience_id: selected ? selected.id : null,
            estimated_cost: dayCost,
            experience: selected ? {
                id: selected.id,
                title: selected.title,
                category: selected.category,
                avg_rating: selected.avg_rating,
                price_per_person: selected.price_per_person
            } : null
        });
    }

    // Build difficulty from interests
    let difficulty = 'moderate';
    if (interests.includes('Trekking') || interests.includes('Adventure')) difficulty = 'challenging';
    if (interests.includes('Spirituality') && !interests.includes('Trekking')) difficulty = 'easy';

    const generatedTrail = {
        id: `trail-gen-${Date.now()}`,
        title: `${travel_style || 'Custom'} ${durationDays}-Day Nepal Trail`,
        description: `A personalized ${durationDays}-day journey through Nepal tailored to your interests in ${interests.join(', ')}. This AI-generated itinerary combines the best-rated experiences with maximum community impact.`,
        difficulty,
        duration_days: durationDays,
        total_cost_estimate: totalCost,
        currency: 'NPR',
        interests: interests || [],
        travel_style: travel_style || 'Custom',
        is_featured: false,
        is_public: false,
        days
    };

    res.json({
        message: 'Trail generated successfully',
        trail: generatedTrail
    });
});

module.exports = router;
