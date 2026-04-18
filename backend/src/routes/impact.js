// ============================================================
// Community Impact Routes
// ============================================================

const express = require('express');
const { impactStats } = require('../models/seedData');

const router = express.Router();

// GET /api/impact/stats — Overall impact statistics
router.get('/stats', (req, res) => {
    res.json({
        families_supported: impactStats.families_supported,
        total_revenue_generated: impactStats.total_revenue_generated,
        community_share_percentage: impactStats.community_share_percentage,
        cultural_programs_funded: impactStats.cultural_programs_funded,
        artisans_employed: impactStats.artisans_employed,
        heritage_sites_maintained: impactStats.heritage_sites_maintained,
        districts_reached: impactStats.districts_reached,
        travelers_served: impactStats.travelers_served
    });
});

// GET /api/impact/distribution — Revenue distribution
router.get('/distribution', (req, res) => {
    res.json({
        categories: impactStats.distribution,
        regional: impactStats.regional
    });
});

module.exports = router;
