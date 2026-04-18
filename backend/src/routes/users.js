// ============================================================
// Users Routes
// ============================================================

const express = require('express');
const { users, bookings, experiences } = require('../models/seedData');

const router = express.Router();

// GET /api/users/:id — User profile
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const { password_hash, ...safeUser } = user;
    res.json(safeUser);
});

// GET /api/users/:id/dashboard — Dashboard data
router.get('/:id/dashboard', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (user.role === 'provider') {
        // Provider dashboard
        const providerExperiences = experiences.filter(e => e.provider_id === user.id);
        const totalBookings = providerExperiences.reduce((sum, e) => sum + e.total_bookings, 0);
        const totalRevenue = providerExperiences.reduce((sum, e) => sum + (e.total_bookings * e.price_per_person), 0);
        const avgRating = providerExperiences.length > 0
            ? (providerExperiences.reduce((sum, e) => sum + e.avg_rating, 0) / providerExperiences.length).toFixed(1)
            : 0;

        res.json({
            role: 'provider',
            stats: { total_listings: providerExperiences.length, total_bookings: totalBookings, total_revenue: totalRevenue, avg_rating: parseFloat(avgRating) },
            experiences: providerExperiences.map(e => ({ id: e.id, title: e.title, category: e.category, avg_rating: e.avg_rating, total_bookings: e.total_bookings, is_active: e.is_active }))
        });
    } else if (user.role === 'admin') {
        // Admin dashboard
        res.json({
            role: 'admin',
            stats: {
                total_users: users.length,
                total_experiences: experiences.length,
                total_bookings: bookings.length,
                providers: users.filter(u => u.role === 'provider').length,
                tourists: users.filter(u => u.role === 'tourist').length
            },
            recent_bookings: bookings.slice(-5).reverse()
        });
    } else {
        // Tourist dashboard
        const userBookings = bookings.filter(b => b.user_id === user.id).map(b => {
            const exp = experiences.find(e => e.id === b.experience_id);
            return { ...b, experience: exp ? { title: exp.title, location_name: exp.location_name, images: exp.images } : null };
        });

        res.json({
            role: 'tourist',
            stats: { total_trips: userBookings.length, upcoming: userBookings.filter(b => b.status === 'confirmed').length },
            bookings: userBookings
        });
    }
});

module.exports = router;
