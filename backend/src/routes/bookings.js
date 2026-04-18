// ============================================================
// Bookings Routes
// ============================================================

const express = require('express');
const { bookings, experiences } = require('../models/seedData');

const router = express.Router();

// POST /api/bookings — Create booking
router.post('/', (req, res) => {
    const { user_id, experience_id, trail_id, booking_date, num_guests, special_requests } = req.body;

    if (!user_id || (!experience_id && !trail_id) || !booking_date) {
        return res.status(400).json({ error: 'user_id, experience/trail ID, and booking_date are required' });
    }

    const experience = experiences.find(e => e.id === experience_id);
    const total_amount = experience ? experience.price_per_person * (num_guests || 1) : 0;

    const newBooking = {
        id: `book-${Date.now()}`,
        user_id,
        experience_id: experience_id || null,
        trail_id: trail_id || null,
        booking_date,
        num_guests: num_guests || 1,
        total_amount,
        status: 'pending',
        special_requests: special_requests || '',
        created_at: new Date().toISOString()
    };

    bookings.push(newBooking);

    res.status(201).json({
        message: 'Booking created successfully',
        booking: newBooking
    });
});

// GET /api/bookings/user/:userId — User's bookings
router.get('/user/:userId', (req, res) => {
    const userBookings = bookings
        .filter(b => b.user_id === req.params.userId)
        .map(b => {
            const exp = experiences.find(e => e.id === b.experience_id);
            return { ...b, experience: exp ? { title: exp.title, location_name: exp.location_name, category: exp.category } : null };
        });

    res.json({ data: userBookings });
});

module.exports = router;
