module.exports = [
"[project]/frontend/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// ============================================================
// API Client — Fetches data from the Express backend
// ============================================================
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
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
}),
"[project]/frontend/src/lib/fallbackData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/frontend/src/app/marketplace/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fallbackData.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const categories = [
    {
        id: "all",
        label: "All Experiences",
        icon: "✨"
    },
    {
        id: "homestay",
        label: "Homestays",
        icon: "🏡"
    },
    {
        id: "guide",
        label: "Local Guides",
        icon: "🧭"
    },
    {
        id: "workshop",
        label: "Workshops",
        icon: "🎨"
    },
    {
        id: "heritage_site",
        label: "Heritage Sites",
        icon: "🏛️"
    }
];
const sortOptions = [
    {
        value: "rating",
        label: "Top Rated"
    },
    {
        value: "price_low",
        label: "Price: Low to High"
    },
    {
        value: "price_high",
        label: "Price: High to Low"
    },
    {
        value: "popular",
        label: "Most Popular"
    }
];
function getCategoryBadgeClass(category) {
    const map = {
        homestay: "badge-homestay",
        guide: "badge-guide",
        workshop: "badge-workshop",
        heritage_site: "badge-heritage"
    };
    return map[category] || "badge-heritage";
}
function formatDuration(hours) {
    if (hours >= 48) return `${Math.round(hours / 24)} Days`;
    return `${hours} Hours`;
}
function MarketplacePage() {
    const [experiences, setExperiences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("rating");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadExperiences() {
            setIsLoading(true);
            const params = new URLSearchParams();
            if (activeCategory !== "all") params.set("category", activeCategory);
            if (sortBy) params.set("sort", sortBy);
            if (searchQuery) params.set("search", searchQuery);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExperiences"])(params.toString());
            setExperiences(res?.data || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackExperiences"].filter((e)=>activeCategory === "all" || e.category === activeCategory));
            setIsLoading(false);
        }
        loadExperiences();
    }, [
        activeCategory,
        sortBy,
        searchQuery
    ]);
    const filteredExperiences = searchQuery && experiences === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackExperiences"] ? experiences.filter((e)=>e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.location_name.toLowerCase().includes(searchQuery.toLowerCase())) : experiences;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20",
        style: {
            background: "var(--himalayan-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 lg:py-16",
                style: {
                    background: "var(--deep-indigo)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                                    style: {
                                        background: "rgba(212, 168, 67, 0.15)",
                                        color: "var(--temple-gold)",
                                        fontFamily: "var(--font-heading)"
                                    },
                                    children: "Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    style: {
                                        fontFamily: "var(--font-heading)",
                                        color: "var(--himalayan-white)"
                                    },
                                    children: "Experience Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-lg max-w-xl mx-auto",
                                    style: {
                                        color: "rgba(245, 240, 235, 0.7)"
                                    },
                                    children: "Discover verified cultural experiences across Nepal — from mountain homestays to ancient artisan workshops."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-5 py-3 rounded-xl",
                                style: {
                                    background: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search experiences, locations...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "flex-1 bg-transparent outline-none text-sm",
                                        style: {
                                            color: "var(--himalayan-white)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(cat.id),
                                        className: "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all",
                                        style: {
                                            background: activeCategory === cat.id ? "var(--terracotta)" : "rgba(27, 42, 74, 0.06)",
                                            color: activeCategory === cat.id ? "white" : "var(--deep-indigo)",
                                            fontFamily: "var(--font-heading)"
                                        },
                                        children: [
                                            cat.icon,
                                            " ",
                                            cat.label
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                className: "px-4 py-2 rounded-lg text-sm border outline-none",
                                style: {
                                    borderColor: "rgba(27, 42, 74, 0.15)",
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: sortOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                            lineNumber: 160,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                        lineNumber: 159,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: filteredExperiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/experience/${exp.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-2xl overflow-hidden group cursor-pointer animate-fade-in-up",
                                    style: {
                                        animationDelay: `${index * 80}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 relative overflow-hidden",
                                            style: {
                                                background: exp.category === "homestay" ? "linear-gradient(135deg, #8B6F47 0%, #D4A843 100%)" : exp.category === "guide" ? "linear-gradient(135deg, #2D5016 0%, #4A7A2E 100%)" : exp.category === "workshop" ? "linear-gradient(135deg, #8B3A6A 0%, #E8A0B5 100%)" : "linear-gradient(135deg, #1B2A4A 0%, #2A3F6E 100%)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 mandala-pattern opacity-15"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 left-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-2.5 py-1 rounded-full font-medium ${getCategoryBadgeClass(exp.category)}`,
                                                            children: exp.category.replace("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase())
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 45
                                                        }, this),
                                                        exp.is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "verified-badge",
                                                            children: "✓ Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-3 right-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs px-2 py-1 rounded-full font-medium",
                                                        style: {
                                                            background: "rgba(0,0,0,0.5)",
                                                            color: "white"
                                                        },
                                                        children: [
                                                            "⏱️ ",
                                                            formatDuration(exp.duration_hours)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity",
                                                    children: exp.category === "homestay" ? "🏡" : exp.category === "guide" ? "🧭" : exp.category === "workshop" ? "🎨" : "🏛️"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-bold leading-tight line-clamp-2 group-hover:text-terracotta transition-colors flex-1",
                                                        style: {
                                                            fontFamily: "var(--font-heading)",
                                                            color: "var(--deep-indigo)"
                                                        },
                                                        children: exp.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mb-3 line-clamp-2",
                                                    style: {
                                                        color: "var(--slate-medium)"
                                                    },
                                                    children: exp.short_description
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-3 text-xs",
                                                    style: {
                                                        color: "var(--warm-brown)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "📍 ",
                                                            exp.location_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "star-rating text-sm",
                                                                    children: "⭐"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold",
                                                                    style: {
                                                                        color: "var(--deep-indigo)"
                                                                    },
                                                                    children: exp.avg_rating
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    style: {
                                                                        color: "var(--slate-medium)"
                                                                    },
                                                                    children: [
                                                                        "(",
                                                                        exp.total_reviews,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: "💚"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    style: {
                                                                        color: "var(--forest-green)"
                                                                    },
                                                                    children: [
                                                                        "Impact: ",
                                                                        exp.community_impact_score,
                                                                        "/10"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-3",
                                                    style: {
                                                        borderTop: "1px solid rgba(139, 111, 71, 0.1)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    style: {
                                                                        color: "var(--slate-medium)"
                                                                    },
                                                                    children: "From "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold",
                                                                    style: {
                                                                        fontFamily: "var(--font-heading)",
                                                                        color: "var(--terracotta)"
                                                                    },
                                                                    children: [
                                                                        "NPR ",
                                                                        exp.price_per_person.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    style: {
                                                                        color: "var(--slate-medium)"
                                                                    },
                                                                    children: "/person"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium px-3 py-1 rounded-full",
                                                            style: {
                                                                background: "rgba(196, 90, 60, 0.1)",
                                                                color: "var(--terracotta)",
                                                                fontFamily: "var(--font-heading)"
                                                            },
                                                            children: "View →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 33
                                }, this)
                            }, exp.id, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 165,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, this),
                    filteredExperiences.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl mb-4",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 255,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-2",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "No experiences found"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 256,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "Try adjusting your search or category filters."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                        lineNumber: 254,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/marketplace/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/marketplace/page.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_bd261842._.js.map