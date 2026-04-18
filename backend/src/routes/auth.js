// ============================================================
// Auth Routes — Registration, Login, OAuth
// ============================================================

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../models/seedData');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'nepal-heritage-trails-secret-key-2024';
const JWT_EXPIRES_IN = '7d';

// POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password, full_name, role } = req.body;

        if (!email || !password || !full_name) {
            return res.status(400).json({ error: 'Email, password, and full name are required' });
        }

        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists with this email' });
        }

        const password_hash = await bcrypt.hash(password, 10);
        const newUser = {
            id: `u-${Date.now()}`,
            email,
            password_hash,
            full_name,
            role: role || 'tourist',
            avatar_url: null,
            is_verified: false,
            is_active: true,
            created_at: new Date().toISOString()
        };

        users.push(newUser);

        const token = jwt.sign(
            { id: newUser.id, email: newUser.email, role: newUser.role },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.status(201).json({
            message: 'Registration successful',
            token,
            user: { id: newUser.id, email: newUser.email, full_name: newUser.full_name, role: newUser.role }
        });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // For demo: accept password "demo123" for seed users
        const isValid = user.password_hash.startsWith('$2b$10$mock')
            ? password === 'demo123'
            : await bcrypt.compare(password, user.password_hash);

        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, email: user.email, full_name: user.full_name, role: user.role }
        });
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// POST /api/auth/google (OAuth stub)
router.post('/google', (req, res) => {
    const { google_token } = req.body;
    // In production: verify google_token with Google OAuth2 API
    // For now, return a demo response
    const token = jwt.sign(
        { id: 'u1-tourist-001', email: 'sarah.chen@email.com', role: 'tourist' },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({
        message: 'Google OAuth login successful',
        token,
        user: { id: 'u1-tourist-001', email: 'sarah.chen@email.com', full_name: 'Sarah Chen', role: 'tourist' }
    });
});

module.exports = router;
