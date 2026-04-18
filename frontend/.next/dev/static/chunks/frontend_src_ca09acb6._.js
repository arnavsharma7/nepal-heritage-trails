(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// ============================================================
// API Client — Fetches data from the Express backend
// ============================================================
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
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
"[project]/frontend/src/lib/fallbackData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/frontend/src/app/impact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fallbackData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AnimatedCounter({ end, label, suffix = "", prefix = "" }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
            }["AnimatedCounter.useEffect.timer"], 300);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card rounded-2xl p-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "impact-number text-3xl md:text-4xl mb-1",
                children: [
                    prefix,
                    formatNumber(count),
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/impact/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-medium",
                style: {
                    color: "var(--slate-medium)",
                    fontFamily: "var(--font-heading)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/impact/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/impact/page.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(AnimatedCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = AnimatedCounter;
function BarChart({ data, maxValue }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: data.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                style: {
                                    color: "var(--deep-indigo)",
                                    fontFamily: "var(--font-heading)"
                                },
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                style: {
                                    color: "var(--terracotta)"
                                },
                                children: [
                                    item.percentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 rounded-full overflow-hidden",
                        style: {
                            background: "rgba(27, 42, 74, 0.08)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full transition-all duration-1000 ease-out",
                            style: {
                                width: `${item.value / maxValue * 100}%`,
                                background: `linear-gradient(90deg, var(--terracotta), var(--temple-gold))`,
                                animationDelay: `${idx * 200}ms`
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/frontend/src/app/impact/page.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/impact/page.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c1 = BarChart;
function ImpactPage() {
    _s1();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackImpactStats"]);
    const [distribution, setDistribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackImpactDistribution"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpactPage.useEffect": ()=>{
            async function loadData() {
                const [statsRes, distRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImpactStats"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImpactDistribution"])()
                ]);
                if (statsRes) setStats(statsRes);
                if (distRes) setDistribution(distRes);
            }
            loadData();
        }
    }["ImpactPage.useEffect"], []);
    const catBarData = distribution.categories.map((c)=>({
            label: c.category,
            value: c.amount,
            percentage: c.percentage
        }));
    const maxCatAmount = Math.max(...distribution.categories.map((c)=>c.amount));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20",
        style: {
            background: "var(--himalayan-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-14 lg:py-20 relative overflow-hidden",
                style: {
                    background: "linear-gradient(135deg, var(--deep-indigo), #0F1B33)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 mandala-pattern opacity-15"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                                style: {
                                    background: "rgba(45, 80, 22, 0.2)",
                                    color: "#8CD460",
                                    fontFamily: "var(--font-heading)"
                                },
                                children: "Real Impact Report"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--himalayan-white)"
                                },
                                children: "Community Impact Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-lg max-w-xl mx-auto",
                                style: {
                                    color: "rgba(245, 240, 235, 0.7)"
                                },
                                children: "Every journey on Nepal Heritage Trails directly supports local communities. Here's how your travel makes a difference."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/impact/page.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                end: stats.families_supported,
                                label: "Families Supported"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                end: stats.artisans_employed,
                                label: "Artisans Employed"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                end: stats.travelers_served,
                                label: "Travelers Served",
                                suffix: "+"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                end: stats.community_share_percentage,
                                label: "Revenue to Communities",
                                suffix: "%"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-6",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            color: "var(--deep-indigo)"
                                        },
                                        children: "Revenue Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarChart, {
                                        data: catBarData,
                                        maxValue: maxCatAmount
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-4",
                                        style: {
                                            borderTop: "1px solid rgba(139, 111, 71, 0.1)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "var(--slate-medium)"
                                                    },
                                                    children: "Total Revenue Generated"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold",
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        color: "var(--terracotta)"
                                                    },
                                                    children: [
                                                        "NPR ",
                                                        (stats.total_revenue_generated / 1000000).toFixed(1),
                                                        "M"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card rounded-2xl p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold mb-4",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--deep-indigo)"
                                                },
                                                children: "Cultural Preservation"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl text-center",
                                                        style: {
                                                            background: "rgba(196, 90, 60, 0.06)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                style: {
                                                                    color: "var(--terracotta)",
                                                                    fontFamily: "var(--font-heading)"
                                                                },
                                                                children: stats.heritage_sites_maintained
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs mt-1",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Heritage Sites Maintained"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl text-center",
                                                        style: {
                                                            background: "rgba(212, 168, 67, 0.08)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                style: {
                                                                    color: "var(--warm-brown)",
                                                                    fontFamily: "var(--font-heading)"
                                                                },
                                                                children: stats.cultural_programs_funded
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs mt-1",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Cultural Programs Funded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl text-center",
                                                        style: {
                                                            background: "rgba(45, 80, 22, 0.06)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                style: {
                                                                    color: "var(--forest-green)",
                                                                    fontFamily: "var(--font-heading)"
                                                                },
                                                                children: stats.districts_reached
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs mt-1",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Districts Reached"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-xl text-center",
                                                        style: {
                                                            background: "rgba(232, 160, 181, 0.1)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                style: {
                                                                    color: "#8B3A6A",
                                                                    fontFamily: "var(--font-heading)"
                                                                },
                                                                children: stats.artisans_employed
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs mt-1",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Artisans Employed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card rounded-2xl p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold mb-4",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--deep-indigo)"
                                                },
                                                children: "Our Commitment"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed mb-4",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "Nepal Heritage Trails operates on a community-first model. We ensure that at least 72% of every booking goes directly to local families, guides, artisans, and heritage preservation projects."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl",
                                                style: {
                                                    background: "rgba(45, 80, 22, 0.06)",
                                                    border: "1px solid rgba(45, 80, 22, 0.1)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm font-medium",
                                                    style: {
                                                        color: "var(--forest-green)"
                                                    },
                                                    children: "💚 B-Corp Certified • Fair Trade Tourism Partner"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-2xl p-8 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-6",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "Regional Impact Breakdown"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "2px solid rgba(27, 42, 74, 0.1)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-left py-3 px-4 font-semibold",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "District"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-center py-3 px-4 font-semibold",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "Families"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-3 px-4 font-semibold",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "Revenue (NPR)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "text-right py-3 px-4 font-semibold",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "Impact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: distribution.regional.map((region, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: "1px solid rgba(27, 42, 74, 0.06)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 font-medium",
                                                            style: {
                                                                color: "var(--deep-indigo)"
                                                            },
                                                            children: [
                                                                "📍 ",
                                                                region.district
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-center",
                                                            style: {
                                                                color: "var(--slate-medium)"
                                                            },
                                                            children: region.families
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-right font-medium",
                                                            style: {
                                                                color: "var(--terracotta)"
                                                            },
                                                            children: [
                                                                (region.revenue / 1000000).toFixed(1),
                                                                "M"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-3 px-4 text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-2 rounded-full ml-auto overflow-hidden",
                                                                style: {
                                                                    background: "rgba(27, 42, 74, 0.08)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full rounded-full",
                                                                    style: {
                                                                        width: `${region.revenue / 10000000 * 100}%`,
                                                                        background: "linear-gradient(90deg, var(--forest-green), var(--forest-green-light))"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/impact/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/impact/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-bold mb-4",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "Be Part of the Change"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm max-w-lg mx-auto mb-6",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "Every trip you book contributes to preserving Nepal's cultural heritage and empowering local communities."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 228,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/trail-builder",
                                        className: "btn-gold text-center",
                                        children: "🏔️ Build Your Trail"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/marketplace",
                                        className: "btn-primary text-center",
                                        children: "Browse Experiences"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/impact/page.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/impact/page.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/impact/page.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/impact/page.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s1(ImpactPage, "7CMtcnmjygW5zgXslEwoP9uFCto=");
_c2 = ImpactPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "BarChart");
__turbopack_context__.k.register(_c2, "ImpactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_ca09acb6._.js.map