// ============================================================
// Experiences Routes — Marketplace CRUD & Search
// ============================================================

const express = require('express');
const { experiences, reviews } = require('../models/seedData');

const router = express.Router();

// GET /api/experiences — List all (with filtering)
router.get('/', (req, res) => {
    let results = [...experiences].filter(e => e.is_active);

    // Category filter
    if (req.query.category) {
        results = results.filter(e => e.category === req.query.category);
    }

    // Search filter
    if (req.query.search) {
        const search = req.query.search.toLowerCase();
        results = results.filter(e =>
            e.title.toLowerCase().includes(search) ||
            e.description.toLowerCase().includes(search) ||
            e.location_name.toLowerCase().includes(search)
        );
    }

    // Price range filter
    if (req.query.min_price) {
        results = results.filter(e => e.price_per_person >= Number(req.query.min_price));
    }
    if (req.query.max_price) {
        results = results.filter(e => e.price_per_person <= Number(req.query.max_price));
    }

    // District filter
    if (req.query.district) {
        results = results.filter(e => e.district === req.query.district);
    }

    // Rating filter
    if (req.query.min_rating) {
        results = results.filter(e => e.avg_rating >= Number(req.query.min_rating));
    }

    // Sorting
    const sortBy = req.query.sort || 'rating';
    if (sortBy === 'price_low') results.sort((a, b) => a.price_per_person - b.price_per_person);
    else if (sortBy === 'price_high') results.sort((a, b) => b.price_per_person - a.price_per_person);
    else if (sortBy === 'rating') results.sort((a, b) => b.avg_rating - a.avg_rating);
    else if (sortBy === 'popular') results.sort((a, b) => b.total_bookings - a.total_bookings);

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const startIdx = (page - 1) * limit;
    const paginatedResults = results.slice(startIdx, startIdx + limit);

    res.json({
        data: paginatedResults,
        pagination: {
            total: results.length,
            page,
            limit,
            totalPages: Math.ceil(results.length / limit)
        }
    });
});

// GET /api/experiences/categories — Category summary
router.get('/categories', (req, res) => {
    const categories = ['homestay', 'guide', 'workshop', 'heritage_site'];
    const summary = categories.map(cat => ({
        category: cat,
        label: cat.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase()),
        count: experiences.filter(e => e.category === cat && e.is_active).length,
        avg_price: Math.round(
            experiences.filter(e => e.category === cat).reduce((sum, e) => sum + e.price_per_person, 0) /
            experiences.filter(e => e.category === cat).length
        )
    }));
    res.json(summary);
});

// GET /api/experiences/:id — Single experience detail
router.get('/:id', (req, res) => {
    const experience = experiences.find(e => e.id === req.params.id || e.slug === req.params.id);
    if (!experience) {
        return res.status(404).json({ error: 'Experience not found' });
    }

    const experienceReviews = reviews.filter(r => r.experience_id === experience.id);

    res.json({
        ...experience,
        reviews: experienceReviews
    });
});

module.exports = router;
