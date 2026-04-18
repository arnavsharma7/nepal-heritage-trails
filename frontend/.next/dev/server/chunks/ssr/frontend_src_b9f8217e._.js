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
"[project]/frontend/src/app/experience/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceDetailPage
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
function formatDuration(hours) {
    if (hours >= 48) return `${Math.round(hours / 24)} Days`;
    return `${hours} Hours`;
}
function StarRating({ rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-0.5",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base",
                style: {
                    color: star <= rating ? "var(--temple-gold)" : "#ddd"
                },
                children: "★"
            }, star, false, {
                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
function ExperienceDetailPage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const [experience, setExperience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bookingDate, setBookingDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showBookingSuccess, setShowBookingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadExperience() {
            setIsLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExperience"])(id);
            if (res) {
                setExperience(res);
            } else {
                const fb = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fallbackData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallbackExperiences"].find((e)=>e.id === id);
                if (fb) setExperience({
                    ...fb,
                    description: fb.short_description,
                    max_guests: 10,
                    province: "",
                    reviews: []
                });
            }
            setIsLoading(false);
        }
        loadExperience();
    }, [
        id
    ]);
    const handleBooking = ()=>{
        setShowBookingSuccess(true);
        setTimeout(()=>setShowBookingSuccess(false), 3000);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen pt-20 flex items-center justify-center",
            style: {
                background: "var(--himalayan-cream)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spinner"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this);
    }
    if (!experience) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen pt-20 flex flex-col items-center justify-center",
            style: {
                background: "var(--himalayan-cream)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl mb-4",
                    children: "🔍"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-2",
                    style: {
                        fontFamily: "var(--font-heading)",
                        color: "var(--deep-indigo)"
                    },
                    children: "Experience Not Found"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/marketplace",
                    className: "btn-primary mt-4",
                    children: "Browse All Experiences"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this);
    }
    const getCategoryColor = ()=>{
        switch(experience.category){
            case "homestay":
                return "linear-gradient(135deg, #8B6F47 0%, #D4A843 100%)";
            case "guide":
                return "linear-gradient(135deg, #2D5016 0%, #4A7A2E 100%)";
            case "workshop":
                return "linear-gradient(135deg, #8B3A6A 0%, #E8A0B5 100%)";
            default:
                return "linear-gradient(135deg, #1B2A4A 0%, #2A3F6E 100%)";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20",
        style: {
            background: "var(--himalayan-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 sm:h-80 lg:h-96",
                style: {
                    background: getCategoryColor()
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 mandala-pattern opacity-15"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-white px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl mb-4 opacity-30",
                                    children: experience.category === "homestay" ? "🏡" : experience.category === "guide" ? "🧭" : experience.category === "workshop" ? "🎨" : "🏛️"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium px-3 py-1 rounded-full inline-block mb-4",
                                    style: {
                                        background: "rgba(255,255,255,0.2)"
                                    },
                                    children: "🌐 360° Heritage Preview Available"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 sm:left-8 flex items-center gap-2 text-sm",
                        style: {
                            color: "rgba(255,255,255,0.7)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-white",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                className: "hover:text-white",
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-medium",
                                children: experience.title
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-3 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-3 py-1 rounded-full font-medium ${experience.category === "homestay" ? "badge-homestay" : experience.category === "guide" ? "badge-guide" : experience.category === "workshop" ? "badge-workshop" : "badge-heritage"}`,
                                                    children: experience.category.replace("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase())
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 33
                                                }, this),
                                                experience.is_verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "verified-badge",
                                                    children: "✓ Verified"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 60
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-2 py-1 rounded-full",
                                                    style: {
                                                        background: "rgba(45, 80, 22, 0.1)",
                                                        color: "var(--forest-green)"
                                                    },
                                                    children: [
                                                        "💚 Impact: ",
                                                        experience.community_impact_score,
                                                        "/10"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-3",
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                color: "var(--deep-indigo)"
                                            },
                                            children: experience.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-4 text-sm",
                                            style: {
                                                color: "var(--warm-brown)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        "📍 ",
                                                        experience.location_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        "⏱️ ",
                                                        formatDuration(experience.duration_hours)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        "👤 Max ",
                                                        experience.max_guests,
                                                        " guests"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                                            rating: Math.round(experience.avg_rating)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold",
                                                            style: {
                                                                color: "var(--deep-indigo)"
                                                            },
                                                            children: experience.avg_rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "(",
                                                                experience.total_reviews,
                                                                " reviews)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-6",
                                    style: {
                                        borderBottom: "2px solid rgba(27, 42, 74, 0.1)"
                                    },
                                    children: [
                                        "overview",
                                        "location",
                                        "amenities",
                                        "reviews"
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(tab),
                                            className: "px-5 py-3 text-sm font-medium transition-all rounded-t-lg",
                                            style: {
                                                color: activeTab === tab ? "var(--terracotta)" : "var(--slate-medium)",
                                                borderBottom: activeTab === tab ? "2px solid var(--terracotta)" : "2px solid transparent",
                                                fontFamily: "var(--font-heading)",
                                                marginBottom: "-2px"
                                            },
                                            children: tab.charAt(0).toUpperCase() + tab.slice(1)
                                        }, tab, false, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this),
                                activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-6 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold mb-3",
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        color: "var(--deep-indigo)"
                                                    },
                                                    children: "About This Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed whitespace-pre-line",
                                                    style: {
                                                        color: "var(--slate-medium)"
                                                    },
                                                    children: experience.description
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold mb-3",
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        color: "var(--deep-indigo)"
                                                    },
                                                    children: "Languages Spoken"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: experience.languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-3 py-1.5 rounded-full",
                                                            style: {
                                                                background: "rgba(27, 42, 74, 0.06)",
                                                                color: "var(--deep-indigo)"
                                                            },
                                                            children: [
                                                                "🗣️ ",
                                                                lang
                                                            ]
                                                        }, lang, true, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 29
                                }, this),
                                activeTab === "amenities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in glass-card rounded-xl p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold mb-4",
                                            style: {
                                                fontFamily: "var(--font-heading)",
                                                color: "var(--deep-indigo)"
                                            },
                                            children: "What's Included"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                            children: experience.amenities.map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-3 rounded-lg",
                                                    style: {
                                                        background: "rgba(45, 80, 22, 0.04)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                                                            style: {
                                                                background: "var(--forest-green)",
                                                                color: "white"
                                                            },
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            style: {
                                                                color: "var(--deep-indigo)"
                                                            },
                                                            children: amenity
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, amenity, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                activeTab === "location" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold mb-4",
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        color: "var(--deep-indigo)"
                                                    },
                                                    children: "📍 Location & Interactive Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-96 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-6xl mb-4",
                                                                children: "🗺️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-medium",
                                                                style: {
                                                                    color: "var(--deep-indigo)"
                                                                },
                                                                children: "Interactive Map"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm mt-2",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Mapbox integration coming soon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-4",
                                                    style: {
                                                        color: "var(--slate-medium)"
                                                    },
                                                    children: [
                                                        experience.location_name,
                                                        ", ",
                                                        experience.district,
                                                        ", ",
                                                        experience.province
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        experience.panorama_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold mb-4",
                                                    style: {
                                                        fontFamily: "var(--font-heading)",
                                                        color: "var(--deep-indigo)"
                                                    },
                                                    children: "🌐 360° Heritage Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-6xl mb-4",
                                                                children: "🌐"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-medium",
                                                                style: {
                                                                    color: "var(--deep-indigo)"
                                                                },
                                                                children: "360° Panorama Viewer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm mt-2",
                                                                style: {
                                                                    color: "var(--slate-medium)"
                                                                },
                                                                children: "Interactive 360° view coming soon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this),
                                activeTab === "reviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fade-in space-y-4",
                                    children: experience.reviews && experience.reviews.length > 0 ? experience.reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRating, {
                                                            rating: review.rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: "var(--slate-medium)"
                                                            },
                                                            children: new Date(review.created_at).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-sm mb-1",
                                                    style: {
                                                        color: "var(--deep-indigo)"
                                                    },
                                                    children: review.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    style: {
                                                        color: "var(--slate-medium)"
                                                    },
                                                    children: review.comment
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, review.id, true, {
                                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 41
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-3",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "No reviews yet. Be the first to share your experience!"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-6 sticky top-24 animate-pulse-glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "From"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--terracotta)"
                                                },
                                                children: [
                                                    "NPR ",
                                                    experience.price_per_person.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "per person"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold block mb-1",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "📅 Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: bookingDate,
                                                        onChange: (e)=>setBookingDate(e.target.value),
                                                        className: "w-full px-3 py-2.5 rounded-lg text-sm border outline-none",
                                                        style: {
                                                            borderColor: "rgba(27, 42, 74, 0.15)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-semibold block mb-1",
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "👤 Guests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: guests,
                                                        onChange: (e)=>setGuests(Number(e.target.value)),
                                                        className: "w-full px-3 py-2.5 rounded-lg text-sm border outline-none",
                                                        style: {
                                                            borderColor: "rgba(27, 42, 74, 0.15)"
                                                        },
                                                        children: Array.from({
                                                            length: experience.max_guests
                                                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: i + 1,
                                                                children: [
                                                                    i + 1,
                                                                    " ",
                                                                    i === 0 ? "Guest" : "Guests"
                                                                ]
                                                            }, i + 1, true, {
                                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mb-6 text-sm",
                                        style: {
                                            borderTop: "1px solid rgba(139, 111, 71, 0.1)",
                                            paddingTop: "1rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "NPR ",
                                                            experience.price_per_person.toLocaleString(),
                                                            " × ",
                                                            guests
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "NPR ",
                                                            (experience.price_per_person * guests).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Service fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "NPR ",
                                                            Math.round(experience.price_per_person * guests * 0.05).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-bold pt-2",
                                                style: {
                                                    borderTop: "1px solid rgba(139, 111, 71, 0.15)",
                                                    color: "var(--deep-indigo)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "NPR ",
                                                            Math.round(experience.price_per_person * guests * 1.05).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBooking,
                                        className: "btn-gold w-full text-center",
                                        children: "Book Now"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 29
                                    }, this),
                                    showBookingSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 rounded-lg text-center text-sm animate-fade-in",
                                        style: {
                                            background: "rgba(45, 80, 22, 0.1)",
                                            color: "var(--forest-green)"
                                        },
                                        children: "✅ Booking request sent! Check your dashboard for confirmation."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 p-4 rounded-xl",
                                        style: {
                                            background: "rgba(45, 80, 22, 0.06)",
                                            border: "1px solid rgba(45, 80, 22, 0.1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider mb-2",
                                                style: {
                                                    color: "var(--forest-green)",
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: "💚 Community Impact"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: [
                                                    "72% of your payment goes directly to local families and communities. This experience has supported ",
                                                    experience.total_bookings,
                                                    "+ travelers."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                                lineNumber: 286,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                            lineNumber: 285,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/experience/[id]/page.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_b9f8217e._.js.map