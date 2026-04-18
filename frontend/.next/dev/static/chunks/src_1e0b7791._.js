(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBooking",
    ()=>createBooking,
    "fetchAPI",
    ()=>fetchAPI,
    "generateTrail",
    ()=>generateTrail,
    "getCategories",
    ()=>getCategories,
    "getExperience",
    ()=>getExperience,
    "getExperiences",
    ()=>getExperiences,
    "getFeaturedTrails",
    ()=>getFeaturedTrails,
    "getImpactDistribution",
    ()=>getImpactDistribution,
    "getImpactStats",
    ()=>getImpactStats,
    "getTrail",
    ()=>getTrail,
    "getTrails",
    ()=>getTrails,
    "getUserDashboard",
    ()=>getUserDashboard,
    "login",
    ()=>login,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// ============================================================
// API Client — Fetches data from the Express backend
// ============================================================
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
async function fetchAPI(endpoint, options) {
    const url = `${API_BASE}${endpoint}`;
    try {
        const res = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers
            }
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return await res.json();
    } catch  {
        console.warn(`API fetch failed for ${endpoint}, using fallback data`);
        return null;
    }
}
const getExperiences = (params)=>fetchAPI(`/experiences${params ? `?${params}` : ""}`);
const getExperience = (id)=>fetchAPI(`/experiences/${id}`);
const getCategories = ()=>fetchAPI("/experiences/categories");
const getTrails = ()=>fetchAPI("/trails");
const getFeaturedTrails = ()=>fetchAPI("/trails/featured");
const getTrail = (id)=>fetchAPI(`/trails/${id}`);
const generateTrail = (data)=>fetchAPI("/trails/generate", {
        method: "POST",
        body: JSON.stringify(data)
    });
const getImpactStats = ()=>fetchAPI("/impact/stats");
const getImpactDistribution = ()=>fetchAPI("/impact/distribution");
const login = (email, password)=>fetchAPI("/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        })
    });
const register = (data)=>fetchAPI("/auth/register", {
        method: "POST",
        body: JSON.stringify(data)
    });
const createBooking = (data)=>fetchAPI("/bookings", {
        method: "POST",
        body: JSON.stringify(data)
    });
const getUserDashboard = (userId)=>fetchAPI(`/users/${userId}/dashboard`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fallbackData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Fallback Data — Used when backend is not running
// ============================================================
__turbopack_context__.s([
    "fallbackExperiences",
    ()=>fallbackExperiences,
    "fallbackImpactDistribution",
    ()=>fallbackImpactDistribution,
    "fallbackImpactStats",
    ()=>fallbackImpactStats,
    "fallbackTrails",
    ()=>fallbackTrails
]);
const fallbackExperiences = [
    {
        id: "exp-001",
        title: "Ghandruk Gurung Homestay Experience",
        slug: "ghandruk-gurung-homestay",
        short_description: "Stay with a Gurung family in Ghandruk with panoramic Annapurna views and authentic cultural immersion.",
        category: "homestay",
        price_per_person: 3500,
        currency: "NPR",
        duration_hours: 48,
        location_name: "Ghandruk, Kaski District",
        district: "Kaski",
        is_verified: true,
        avg_rating: 4.8,
        total_reviews: 124,
        total_bookings: 340,
        community_impact_score: 9.2,
        amenities: [
            "Traditional meals",
            "Mountain views",
            "Cultural program",
            "Guided village walk",
            "Hot shower"
        ],
        languages: [
            "Nepali",
            "English",
            "Gurung"
        ]
    },
    {
        id: "exp-002",
        title: "Bhaktapur Thangka Painting Workshop",
        slug: "bhaktapur-thangka-workshop",
        short_description: "Master the ancient art of Thangka painting with a master artist in Bhaktapur Durbar Square.",
        category: "workshop",
        price_per_person: 5500,
        currency: "NPR",
        duration_hours: 8,
        location_name: "Bhaktapur Durbar Square",
        district: "Bhaktapur",
        is_verified: true,
        avg_rating: 4.9,
        total_reviews: 87,
        total_bookings: 210,
        community_impact_score: 8.8,
        amenities: [
            "Art materials provided",
            "Newari lunch",
            "Gallery tour",
            "Take-home artwork",
            "Certificate"
        ],
        languages: [
            "Nepali",
            "English",
            "Newari"
        ]
    },
    {
        id: "exp-003",
        title: "Everest Base Camp Trek with Sherpa Guide",
        slug: "everest-base-camp-sherpa-guide",
        short_description: "Trek to Everest Base Camp with a 3x Everest summiter and Sherpa cultural guide.",
        category: "guide",
        price_per_person: 85000,
        currency: "NPR",
        duration_hours: 336,
        location_name: "Namche Bazaar to Everest Base Camp",
        district: "Solukhumbu",
        is_verified: true,
        avg_rating: 5.0,
        total_reviews: 56,
        total_bookings: 120,
        community_impact_score: 9.5,
        amenities: [
            "Experienced guide",
            "Porter support",
            "Teahouse accommodation",
            "Meals included",
            "Permit assistance"
        ],
        languages: [
            "Nepali",
            "English",
            "Sherpa"
        ]
    },
    {
        id: "exp-004",
        title: "Patan Durbar Square Heritage Walk",
        slug: "patan-heritage-walk",
        short_description: "Guided heritage walk through Patan's UNESCO temples, artisan workshops, and ancient squares.",
        category: "heritage_site",
        price_per_person: 2500,
        currency: "NPR",
        duration_hours: 4,
        location_name: "Patan Durbar Square, Lalitpur",
        district: "Lalitpur",
        is_verified: true,
        avg_rating: 4.7,
        total_reviews: 203,
        total_bookings: 580,
        community_impact_score: 8.5,
        amenities: [
            "Expert guide",
            "Museum entry",
            "Artisan workshop visit",
            "Cultural briefing",
            "Refreshments"
        ],
        languages: [
            "Nepali",
            "English",
            "Hindi",
            "Newari"
        ]
    },
    {
        id: "exp-005",
        title: "Annapurna Sunrise Yoga & Meditation Retreat",
        slug: "annapurna-yoga-meditation",
        short_description: "Yoga and meditation retreat nestled in the Annapurna foothills with Himalayan wellness traditions.",
        category: "homestay",
        price_per_person: 12000,
        currency: "NPR",
        duration_hours: 72,
        location_name: "Australian Camp, Kaski",
        district: "Kaski",
        is_verified: true,
        avg_rating: 4.9,
        total_reviews: 68,
        total_bookings: 190,
        community_impact_score: 9.0,
        amenities: [
            "Yoga sessions",
            "Meditation",
            "Organic meals",
            "Eco-lodge",
            "Singing bowls"
        ],
        languages: [
            "Nepali",
            "English"
        ]
    },
    {
        id: "exp-006",
        title: "Newari Cooking Class & Food Tour",
        slug: "newari-cooking-food-tour",
        short_description: "Hands-on Newari cooking class with a food walking tour through Kathmandu's ancient streets.",
        category: "workshop",
        price_per_person: 4000,
        currency: "NPR",
        duration_hours: 6,
        location_name: "Asan, Kathmandu",
        district: "Kathmandu",
        is_verified: true,
        avg_rating: 4.8,
        total_reviews: 156,
        total_bookings: 420,
        community_impact_score: 8.3,
        amenities: [
            "Cooking ingredients",
            "Recipe booklet",
            "Market tour",
            "Full meal",
            "Local guide"
        ],
        languages: [
            "Nepali",
            "English"
        ]
    },
    {
        id: "exp-007",
        title: "Langtang Valley Cultural Trek",
        slug: "langtang-valley-trek",
        short_description: "Trek through the Langtang Valley visiting Tamang villages and supporting earthquake recovery.",
        category: "guide",
        price_per_person: 45000,
        currency: "NPR",
        duration_hours: 168,
        location_name: "Langtang National Park",
        district: "Rasuwa",
        is_verified: true,
        avg_rating: 4.7,
        total_reviews: 42,
        total_bookings: 95,
        community_impact_score: 9.8,
        amenities: [
            "Experienced guide",
            "Porter support",
            "Permits",
            "Teahouse stays",
            "Meals included"
        ],
        languages: [
            "Nepali",
            "English",
            "Tamang"
        ]
    },
    {
        id: "exp-008",
        title: "Pokhara Lakeside Kayaking & Village Experience",
        slug: "pokhara-kayaking-village",
        short_description: "Kayak on Phewa Lake, visit a fishing village, and explore Pokhara's natural beauty.",
        category: "guide",
        price_per_person: 3000,
        currency: "NPR",
        duration_hours: 6,
        location_name: "Phewa Lake, Pokhara",
        district: "Kaski",
        is_verified: true,
        avg_rating: 4.6,
        total_reviews: 92,
        total_bookings: 310,
        community_impact_score: 7.5,
        amenities: [
            "Kayak gear",
            "Life jacket",
            "Fish lunch",
            "Village tour",
            "Temple visit"
        ],
        languages: [
            "Nepali",
            "English"
        ]
    },
    {
        id: "exp-009",
        title: "Bhaktapur Pottery & Ceramics Workshop",
        slug: "bhaktapur-pottery-workshop",
        short_description: "Learn 800-year-old pottery techniques at Bhaktapur's iconic Pottery Square.",
        category: "workshop",
        price_per_person: 3500,
        currency: "NPR",
        duration_hours: 5,
        location_name: "Pottery Square, Bhaktapur",
        district: "Bhaktapur",
        is_verified: true,
        avg_rating: 4.7,
        total_reviews: 78,
        total_bookings: 200,
        community_impact_score: 8.6,
        amenities: [
            "Clay materials",
            "Expert instruction",
            "Take-home pottery",
            "Traditional tea"
        ],
        languages: [
            "Nepali",
            "English",
            "Newari"
        ]
    },
    {
        id: "exp-010",
        title: "Lumbini Buddhist Pilgrimage Tour",
        slug: "lumbini-buddhist-pilgrimage",
        short_description: "Pilgrimage to Lumbini, the birthplace of Buddha, with guided monastery tours and meditation.",
        category: "heritage_site",
        price_per_person: 6000,
        currency: "NPR",
        duration_hours: 10,
        location_name: "Lumbini Sacred Garden",
        district: "Rupandehi",
        is_verified: true,
        avg_rating: 4.8,
        total_reviews: 145,
        total_bookings: 450,
        community_impact_score: 8.0,
        amenities: [
            "Expert Buddhist guide",
            "Meditation session",
            "Monastery visits",
            "Lunch",
            "Transport"
        ],
        languages: [
            "Nepali",
            "English",
            "Hindi"
        ]
    }
];
const fallbackTrails = [
    {
        id: "trail-001",
        title: "Kathmandu Valley Heritage Circuit",
        slug: "kathmandu-heritage-circuit",
        description: "A 5-day deep dive into the art, architecture, and living culture of the Kathmandu Valley.",
        difficulty: "easy",
        duration_days: 5,
        total_cost_estimate: 25000,
        currency: "NPR",
        interests: [
            "Culture",
            "Food",
            "Spirituality"
        ],
        travel_style: "Cultural Explorer",
        is_featured: true,
        total_bookings: 230,
        avg_rating: 4.8
    },
    {
        id: "trail-002",
        title: "Annapurna Culture & Adventure Trail",
        slug: "annapurna-culture-adventure",
        description: "Combine breathtaking mountain scenery with authentic Gurung culture over 7 unforgettable days.",
        difficulty: "moderate",
        duration_days: 7,
        total_cost_estimate: 35000,
        currency: "NPR",
        interests: [
            "Trekking",
            "Culture",
            "Adventure"
        ],
        travel_style: "Active Adventurer",
        is_featured: true,
        total_bookings: 180,
        avg_rating: 4.9
    },
    {
        id: "trail-003",
        title: "Sacred Nepal Spiritual Journey",
        slug: "sacred-nepal-spiritual",
        description: "A soul-stirring 6-day pilgrimage across Nepal's most sacred sites from Lumbini to Kathmandu.",
        difficulty: "easy",
        duration_days: 6,
        total_cost_estimate: 30000,
        currency: "NPR",
        interests: [
            "Spirituality",
            "Culture"
        ],
        travel_style: "Spiritual Seeker",
        is_featured: true,
        total_bookings: 150,
        avg_rating: 4.7
    }
];
const fallbackImpactStats = {
    families_supported: 1247,
    total_revenue_generated: 45200000,
    community_share_percentage: 72,
    cultural_programs_funded: 34,
    artisans_employed: 389,
    heritage_sites_maintained: 12,
    districts_reached: 28,
    travelers_served: 8940
};
const fallbackImpactDistribution = {
    categories: [
        {
            category: "Homestay Families",
            percentage: 35,
            amount: 15820000
        },
        {
            category: "Local Guides",
            percentage: 25,
            amount: 11300000
        },
        {
            category: "Artisan Workshops",
            percentage: 20,
            amount: 9040000
        },
        {
            category: "Heritage Preservation",
            percentage: 12,
            amount: 5424000
        },
        {
            category: "Community Education",
            percentage: 8,
            amount: 3616000
        }
    ],
    regional: [
        {
            district: "Kaski",
            families: 280,
            revenue: 9800000
        },
        {
            district: "Bhaktapur",
            families: 195,
            revenue: 7200000
        },
        {
            district: "Solukhumbu",
            families: 165,
            revenue: 8500000
        },
        {
            district: "Lalitpur",
            families: 150,
            revenue: 5400000
        },
        {
            district: "Kathmandu",
            families: 180,
            revenue: 6300000
        },
        {
            district: "Rasuwa",
            families: 95,
            revenue: 3200000
        },
        {
            district: "Rupandehi",
            families: 82,
            revenue: 2800000
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Homepage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fallbackData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ============================================================
// Category icons for the search bar
// ============================================================
const categoryIcons = {
    Culture: "🏛️",
    Trekking: "🥾",
    Food: "🍜",
    Spirituality: "🕉️",
    Adventure: "⛰️",
    Homestay: "🏡",
    Workshop: "🎨"
};
// ============================================================
// Animated Counter Component
// ============================================================
function AnimatedCounter({ end, label, suffix = "" }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            let startTime;
            const duration = 2000;
            const animate = {
                "AnimatedCounter.useEffect.animate": (currentTime)=>{
                    if (!startTime) startTime = currentTime;
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.floor(easeOut * end));
                    if (progress < 1) requestAnimationFrame(animate);
                }
            }["AnimatedCounter.useEffect.animate"];
            const timer = setTimeout({
                "AnimatedCounter.useEffect.timer": ()=>requestAnimationFrame(animate)
            }["AnimatedCounter.useEffect.timer"], 500);
            return ({
                "AnimatedCounter.useEffect": ()=>clearTimeout(timer)
            })["AnimatedCounter.useEffect"];
        }
    }["AnimatedCounter.useEffect"], [
        end
    ]);
    const formatNumber = (n)=>{
        if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
        if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
        return n.toLocaleString();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "impact-number text-4xl md:text-5xl lg:text-6xl mb-2",
                children: [
                    formatNumber(count),
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm md:text-base font-medium",
                style: {
                    color: "rgba(245, 240, 235, 0.7)",
                    fontFamily: "var(--font-heading)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(AnimatedCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = AnimatedCounter;
function Homepage() {
    _s1();
    const [trails, setTrails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [impactStats, setImpactStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchInterest, setSearchInterest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Homepage.useEffect": ()=>{
            async function loadData() {
                const [trailsRes, impactRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeaturedTrails"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImpactStats"])()
                ]);
                setTrails(trailsRes?.data || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackTrails"]);
                setImpactStats(impactRes || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackImpactStats"]);
            }
            loadData();
        }
    }["Homepage.useEffect"], []);
    const stats = impactStats || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackImpactStats"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 hero-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 mandala-pattern opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 animate-float",
                        style: {
                            background: "radial-gradient(circle, var(--temple-gold), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-float delay-500",
                        style: {
                            background: "radial-gradient(circle, var(--terracotta), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-8 animate-float delay-300",
                        style: {
                            background: "radial-gradient(circle, var(--lotus-pink), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full animate-fade-in-up",
                                style: {
                                    background: "rgba(212, 168, 67, 0.15)",
                                    border: "1px solid rgba(212, 168, 67, 0.3)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            background: "var(--temple-gold)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-medium",
                                        style: {
                                            color: "var(--temple-gold)",
                                            fontFamily: "var(--font-heading)"
                                        },
                                        children: "Sustainable Tourism Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--himalayan-white)"
                                },
                                children: [
                                    "Discover",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: "linear-gradient(135deg, var(--temple-gold), var(--temple-gold-light))",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: "Authentic Nepal."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light",
                                        style: {
                                            color: "rgba(245, 240, 235, 0.85)"
                                        },
                                        children: "Travel Beyond the Map."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200",
                                style: {
                                    color: "rgba(245, 240, 235, 0.7)",
                                    fontFamily: "var(--font-body)",
                                    lineHeight: 1.7
                                },
                                children: "Connect with verified local guides, community homestays, artisan workshops, and heritage experiences across the Himalayas."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto mb-12 animate-fade-in-up delay-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-2 flex flex-col sm:flex-row gap-2",
                                        style: {
                                            background: "rgba(255, 255, 255, 0.1)",
                                            backdropFilter: "blur(20px)",
                                            border: "1px solid rgba(255, 255, 255, 0.15)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex items-center gap-3 px-4 py-3 rounded-xl",
                                                style: {
                                                    background: "rgba(255, 255, 255, 0.08)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: "🔍"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Where do you want to explore? (e.g., Kathmandu, Annapurna...)",
                                                        className: "flex-1 bg-transparent outline-none text-sm md:text-base",
                                                        style: {
                                                            color: "var(--himalayan-white)",
                                                            fontFamily: "var(--font-body)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/trail-builder${searchInterest ? `?interest=${searchInterest}` : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn-gold w-full sm:w-auto whitespace-nowrap !py-3 !px-6",
                                                    children: "Build Your Trail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-2 mt-4",
                                        children: Object.entries(categoryIcons).map(([interest, icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSearchInterest(interest),
                                                className: "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all",
                                                style: {
                                                    background: searchInterest === interest ? "rgba(212, 168, 67, 0.25)" : "rgba(255, 255, 255, 0.08)",
                                                    color: searchInterest === interest ? "var(--temple-gold)" : "rgba(245, 240, 235, 0.6)",
                                                    border: `1px solid ${searchInterest === interest ? "rgba(212, 168, 67, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: [
                                                    icon,
                                                    " ",
                                                    interest
                                                ]
                                            }, interest, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in delay-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-10 rounded-full mx-auto flex items-start justify-center p-1.5",
                                    style: {
                                        border: "2px solid rgba(245, 240, 235, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-3 rounded-full animate-bounce",
                                        style: {
                                            background: "var(--temple-gold)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-28 mandala-pattern",
                style: {
                    background: "var(--himalayan-cream)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                                    style: {
                                        background: "rgba(196, 90, 60, 0.1)",
                                        color: "var(--terracotta)",
                                        fontFamily: "var(--font-heading)"
                                    },
                                    children: "Curated Journeys"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        color: "var(--deep-indigo)"
                                    },
                                    children: "Featured Heritage Trails"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-lg max-w-2xl mx-auto",
                                    style: {
                                        color: "var(--slate-medium)"
                                    },
                                    children: "Carefully crafted multi-day experiences that combine cultural immersion, adventure, and community impact."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: (trails.length > 0 ? trails : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackTrails"]).map((trail, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/trail-builder?trail=${trail.slug}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card rounded-2xl overflow-hidden cursor-pointer group",
                                        style: {
                                            animationDelay: `${index * 150}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-48 relative overflow-hidden",
                                                style: {
                                                    background: index === 0 ? "linear-gradient(135deg, #1B2A4A, #C45A3C)" : index === 1 ? "linear-gradient(135deg, #2D5016, #D4A843)" : "linear-gradient(135deg, #8B6F47, #E8A0B5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 mandala-pattern opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 left-4 right-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 mb-2",
                                                                children: trail.interests.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs px-2 py-0.5 rounded-full",
                                                                        style: {
                                                                            background: "rgba(255,255,255,0.2)",
                                                                            color: "white",
                                                                            fontFamily: "var(--font-heading)"
                                                                        },
                                                                        children: interest
                                                                    }, interest, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold px-3 py-1 rounded-full",
                                                                style: {
                                                                    background: trail.difficulty === "easy" ? "rgba(45, 80, 22, 0.8)" : trail.difficulty === "moderate" ? "rgba(212, 168, 67, 0.8)" : "rgba(196, 90, 60, 0.8)",
                                                                    color: "white",
                                                                    fontFamily: "var(--font-heading)"
                                                                },
                                                                children: trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold mb-2 group-hover:text-terracotta transition-colors",
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            color: "var(--deep-indigo)"
                                                        },
                                                        children: trail.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mb-4 line-clamp-2",
                                                        style: {
                                                            color: "var(--slate-medium)"
                                                        },
                                                        children: trail.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1",
                                                                        style: {
                                                                            color: "var(--warm-brown)"
                                                                        },
                                                                        children: [
                                                                            "📅 ",
                                                                            trail.duration_days,
                                                                            " Days"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1 star-rating",
                                                                        children: [
                                                                            "⭐ ",
                                                                            trail.avg_rating
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs",
                                                                        style: {
                                                                            color: "var(--slate-medium)"
                                                                        },
                                                                        children: "From"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-bold",
                                                                        style: {
                                                                            fontFamily: "var(--font-heading)",
                                                                            color: "var(--terracotta)"
                                                                        },
                                                                        children: [
                                                                            "NPR ",
                                                                            trail.total_cost_estimate.toLocaleString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this)
                                }, trail.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                className: "btn-primary inline-block text-base",
                                children: "Explore All Experiences"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-28",
                style: {
                    background: "var(--deep-indigo)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                                    style: {
                                        background: "rgba(212, 168, 67, 0.15)",
                                        color: "var(--temple-gold)",
                                        fontFamily: "var(--font-heading)"
                                    },
                                    children: "Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        color: "var(--himalayan-white)"
                                    },
                                    children: "Authentic Experiences"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-lg max-w-2xl mx-auto",
                                    style: {
                                        color: "rgba(245, 240, 235, 0.6)"
                                    },
                                    children: "Discover curated experiences across four categories, each verified for authenticity and community benefit."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                {
                                    icon: "🏡",
                                    title: "Homestays",
                                    desc: "Live with local families in traditional homes across rural Nepal.",
                                    count: "50+ Stays",
                                    color: "#E8D5B8",
                                    href: "/marketplace?category=homestay"
                                },
                                {
                                    icon: "🧭",
                                    title: "Local Guides",
                                    desc: "Expert guides who share deep knowledge of terrain, culture and history.",
                                    count: "120+ Guides",
                                    color: "#D4EFC4",
                                    href: "/marketplace?category=guide"
                                },
                                {
                                    icon: "🎨",
                                    title: "Artisan Workshops",
                                    desc: "Learn traditional crafts — Thangka painting, pottery, weaving, and more.",
                                    count: "35+ Workshops",
                                    color: "#E8C8D8",
                                    href: "/marketplace?category=workshop"
                                },
                                {
                                    icon: "🏛️",
                                    title: "Heritage Sites",
                                    desc: "Explore UNESCO sites and sacred places with expert cultural guides.",
                                    count: "25+ Sites",
                                    color: "#C8D8F0",
                                    href: "/marketplace?category=heritage_site"
                                }
                            ].map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: cat.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card-dark rounded-2xl p-8 text-center cursor-pointer group h-full",
                                        style: {
                                            animationDelay: `${idx * 100}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4 group-hover:scale-110 transition-transform duration-300",
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--himalayan-white)"
                                                },
                                                children: cat.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mb-4",
                                                style: {
                                                    color: "rgba(245, 240, 235, 0.6)"
                                                },
                                                children: cat.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block text-xs font-semibold px-3 py-1 rounded-full",
                                                style: {
                                                    background: `${cat.color}20`,
                                                    color: cat.color,
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: cat.count
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, this)
                                }, cat.title, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-28 relative overflow-hidden",
                style: {
                    background: "linear-gradient(135deg, var(--deep-indigo) 0%, #0F1B33 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 mandala-pattern opacity-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                                        style: {
                                            background: "rgba(45, 80, 22, 0.2)",
                                            color: "#8CD460",
                                            fontFamily: "var(--font-heading)"
                                        },
                                        children: "Real Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            color: "var(--himalayan-white)"
                                        },
                                        children: "Tourism That Transforms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg max-w-2xl mx-auto",
                                        style: {
                                            color: "rgba(245, 240, 235, 0.6)"
                                        },
                                        children: "Every booking directly supports local communities, preserves cultural heritage, and empowers artisans."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        end: stats.families_supported,
                                        label: "Families Supported"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        end: stats.artisans_employed,
                                        label: "Artisans Employed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        end: stats.heritage_sites_maintained,
                                        label: "Heritage Sites Preserved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                        end: stats.travelers_served,
                                        label: "Travelers Served"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/impact",
                                    className: "btn-secondary inline-block text-sm",
                                    children: "View Full Impact Report →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-28 mandala-pattern",
                style: {
                    background: "var(--himalayan-cream)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
                            style: {
                                fontFamily: "var(--font-heading)",
                                color: "var(--deep-indigo)"
                            },
                            children: [
                                "Ready to",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    },
                                    children: "Build Your Trail?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mb-10",
                            style: {
                                color: "var(--slate-medium)"
                            },
                            children: "Tell us your interests, budget, and travel style — our AI will craft a personalized journey through Nepal's most authentic experiences."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trail-builder",
                            className: "btn-gold inline-block text-lg",
                            children: "🏔️ Start Building Your Trail"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s1(Homepage, "bYUMWVXgjhFsVL1UMOU3OWJ9DT4=");
_c1 = Homepage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "Homepage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1e0b7791._.js.map