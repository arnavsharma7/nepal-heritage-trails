// ============================================================
// Nepal Heritage Trails — Express.js REST API Server
// ============================================================

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const trailRoutes = require('./routes/trails');
const experienceRoutes = require('./routes/experiences');
const bookingRoutes = require('./routes/bookings');
const impactRoutes = require('./routes/impact');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================================
// Middleware
// ============================================================
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// ============================================================
// Health Check
// ============================================================
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'Nepal Heritage Trails API',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

// ============================================================
// API Routes
// ============================================================
app.use('/api/auth', authRoutes);
app.use('/api/trails', trailRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/impact', impactRoutes);
app.use('/api/users', userRoutes);

// ============================================================
// Error Handling
// ============================================================
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error('Server error:', err.message);
    res.status(err.status || 500).json({
        error: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// ============================================================
// Start Server
// ============================================================
app.listen(PORT, () => {
    console.log(`\n🏔️  Nepal Heritage Trails API Server`);
    console.log(`   Running on http://localhost:${PORT}`);
    console.log(`   Environment: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
