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
"[project]/frontend/src/app/trail-builder/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrailBuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const interests = [
    {
        id: "Culture",
        icon: "🏛️",
        label: "Culture & Heritage",
        desc: "UNESCO sites, temples, ancient cities"
    },
    {
        id: "Trekking",
        icon: "🥾",
        label: "Trekking & Hiking",
        desc: "Himalayan trails, mountain passes"
    },
    {
        id: "Food",
        icon: "🍜",
        label: "Food & Cuisine",
        desc: "Cooking classes, food tours, local cuisine"
    },
    {
        id: "Spirituality",
        icon: "🕉️",
        label: "Spirituality & Wellness",
        desc: "Meditation, yoga, monasteries"
    },
    {
        id: "Adventure",
        icon: "⛰️",
        label: "Adventure Sports",
        desc: "Rafting, paragliding, climbing"
    }
];
const travelStyles = [
    {
        id: "Cultural Explorer",
        icon: "🎭",
        label: "Cultural Explorer"
    },
    {
        id: "Active Adventurer",
        icon: "🏔️",
        label: "Active Adventurer"
    },
    {
        id: "Spiritual Seeker",
        icon: "🧘",
        label: "Spiritual Seeker"
    },
    {
        id: "Food Enthusiast",
        icon: "🍽️",
        label: "Food Enthusiast"
    },
    {
        id: "Budget Traveler",
        icon: "🎒",
        label: "Budget Traveler"
    },
    {
        id: "Luxury Explorer",
        icon: "✨",
        label: "Luxury Explorer"
    }
];
function TrailBuilderPage() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedInterests, setSelectedInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [budget, setBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50000);
    const [travelStyle, setTravelStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedTrail, setGeneratedTrail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleInterest = (id)=>{
        setSelectedInterests((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const handleGenerate = async ()=>{
        setIsGenerating(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTrail"])({
                interests: selectedInterests,
                duration,
                budget,
                travel_style: travelStyle
            });
            if (result?.trail) {
                setGeneratedTrail(result.trail);
                setStep(5);
            } else {
                // Fallback generated trail
                const fallbackDays = Array.from({
                    length: duration
                }, (_, i)=>({
                        day_number: i + 1,
                        title: `Day ${i + 1}: ${selectedInterests[i % selectedInterests.length] || "Exploration"} Experience`,
                        description: "A curated experience matching your interests, crafted by our AI trail builder.",
                        location: [
                            "Kathmandu",
                            "Bhaktapur",
                            "Pokhara",
                            "Ghandruk",
                            "Patan",
                            "Lumbini",
                            "Nagarkot"
                        ][i % 7],
                        estimated_cost: Math.round(budget / duration)
                    }));
                setGeneratedTrail({
                    id: `trail-gen-${Date.now()}`,
                    title: `${travelStyle || "Custom"} ${duration}-Day Nepal Trail`,
                    description: `A personalized ${duration}-day journey through Nepal tailored to your interests in ${selectedInterests.join(", ")}.`,
                    difficulty: selectedInterests.includes("Trekking") ? "challenging" : "moderate",
                    duration_days: duration,
                    total_cost_estimate: budget,
                    currency: "NPR",
                    interests: selectedInterests,
                    travel_style: travelStyle,
                    days: fallbackDays
                });
                setStep(5);
            }
        } catch  {
            console.error("Trail generation failed");
        } finally{
            setIsGenerating(false);
        }
    };
    const getCategoryBadge = (category)=>{
        const map = {
            homestay: "badge-homestay",
            guide: "badge-guide",
            workshop: "badge-workshop",
            heritage_site: "badge-heritage"
        };
        return map[category] || "badge-heritage";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20",
        style: {
            background: "var(--himalayan-cream)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 lg:py-16",
                style: {
                    background: "var(--deep-indigo)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full",
                            style: {
                                background: "rgba(212, 168, 67, 0.15)",
                                color: "var(--temple-gold)",
                                fontFamily: "var(--font-heading)"
                            },
                            children: "AI-Powered"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                            style: {
                                fontFamily: "var(--font-heading)",
                                color: "var(--himalayan-white)"
                            },
                            children: "Build Your Heritage Trail"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                            lineNumber: 129,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg max-w-xl mx-auto",
                            style: {
                                color: "rgba(245, 240, 235, 0.7)"
                            },
                            children: "Tell us your interests and our AI will craft a personalized journey through Nepal's most authentic experiences."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this),
                        step < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 mt-8",
                            children: [
                                1,
                                2,
                                3,
                                4
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                                            style: {
                                                background: s <= step ? "var(--temple-gold)" : "rgba(255,255,255,0.1)",
                                                color: s <= step ? "var(--deep-indigo)" : "rgba(255,255,255,0.4)",
                                                fontFamily: "var(--font-heading)"
                                            },
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this),
                                        s < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-0.5",
                                            style: {
                                                background: s < step ? "var(--temple-gold)" : "rgba(255,255,255,0.1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, s, true, {
                                    fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                            lineNumber: 139,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "What interests you most?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-8",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "Select one or more interests to personalize your trail."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: interests.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleInterest(interest.id),
                                        className: "glass-card rounded-xl p-6 text-left transition-all",
                                        style: {
                                            borderColor: selectedInterests.includes(interest.id) ? "var(--terracotta)" : undefined,
                                            borderWidth: selectedInterests.includes(interest.id) ? "2px" : undefined,
                                            background: selectedInterests.includes(interest.id) ? "rgba(196, 90, 60, 0.05)" : undefined
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mb-3",
                                                children: interest.icon
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-base mb-1",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--deep-indigo)"
                                                },
                                                children: interest.label
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: interest.desc
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, interest.id, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStep(2),
                                    disabled: selectedInterests.length === 0,
                                    className: "btn-primary disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: "Next: Duration →"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                        lineNumber: 163,
                        columnNumber: 21
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "How many days?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-8",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "Choose your ideal trip duration."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 205,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-6xl font-bold",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--terracotta)"
                                                },
                                                children: duration
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-light ml-2",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "days"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "2",
                                        max: "21",
                                        value: duration,
                                        onChange: (e)=>setDuration(Number(e.target.value)),
                                        className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                        style: {
                                            accentColor: "var(--terracotta)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs mt-2",
                                        style: {
                                            color: "var(--slate-medium)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "2 days"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "1 week"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "2 weeks"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 71
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "3 weeks"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 91
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 207,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(1),
                                        className: "text-sm font-medium",
                                        style: {
                                            color: "var(--terracotta)"
                                        },
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(3),
                                        className: "btn-primary",
                                        children: "Next: Budget →"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                        lineNumber: 201,
                        columnNumber: 21
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "What's your budget?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-8",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "Set your total per-person budget in Nepali Rupees."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                style: {
                                                    color: "var(--slate-medium)"
                                                },
                                                children: "NPR"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-5xl font-bold ml-2",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--terracotta)"
                                                },
                                                children: budget.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "10000",
                                        max: "200000",
                                        step: "5000",
                                        value: budget,
                                        onChange: (e)=>setBudget(Number(e.target.value)),
                                        className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                        style: {
                                            accentColor: "var(--terracotta)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs mt-2",
                                        style: {
                                            color: "var(--slate-medium)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "₨10K"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "₨50K"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "₨100K"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 67
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "₨200K"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-xs mt-4",
                                        style: {
                                            color: "var(--warm-brown)"
                                        },
                                        children: [
                                            "≈ $",
                                            Math.round(budget / 133),
                                            " USD per person"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 243,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(2),
                                        className: "text-sm font-medium",
                                        style: {
                                            color: "var(--terracotta)"
                                        },
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(4),
                                        className: "btn-primary",
                                        children: "Next: Style →"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 268,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                        lineNumber: 237,
                        columnNumber: 21
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                style: {
                                    fontFamily: "var(--font-heading)",
                                    color: "var(--deep-indigo)"
                                },
                                children: "Your travel style?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 278,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-8",
                                style: {
                                    color: "var(--slate-medium)"
                                },
                                children: "This helps us match the right experiences for you."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 281,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                                children: travelStyles.map((style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTravelStyle(style.id),
                                        className: "glass-card rounded-xl p-6 text-center transition-all",
                                        style: {
                                            borderColor: travelStyle === style.id ? "var(--terracotta)" : undefined,
                                            borderWidth: travelStyle === style.id ? "2px" : undefined,
                                            background: travelStyle === style.id ? "rgba(196, 90, 60, 0.05)" : undefined
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mb-2",
                                                children: style.icon
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    fontFamily: "var(--font-heading)",
                                                    color: "var(--deep-indigo)"
                                                },
                                                children: style.label
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, style.id, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 283,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStep(3),
                                        className: "text-sm font-medium",
                                        style: {
                                            color: "var(--terracotta)"
                                        },
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleGenerate,
                                        disabled: !travelStyle || isGenerating,
                                        className: "btn-gold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2",
                                        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "spinner !w-5 !h-5 !border-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 41
                                                }, this),
                                                " Generating..."
                                            ]
                                        }, void 0, true) : "🏔️ Generate My Trail"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 303,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                        lineNumber: 277,
                        columnNumber: 21
                    }, this),
                    step === 5 && generatedTrail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-3",
                                        children: "🎉"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-bold mb-2",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            color: "var(--deep-indigo)"
                                        },
                                        children: generatedTrail.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm max-w-xl mx-auto",
                                        style: {
                                            color: "var(--slate-medium)"
                                        },
                                        children: generatedTrail.description
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 rounded-full text-sm font-medium",
                                                style: {
                                                    background: "rgba(196, 90, 60, 0.1)",
                                                    color: "var(--terracotta)",
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: [
                                                    "📅 ",
                                                    generatedTrail.duration_days,
                                                    " Days"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 rounded-full text-sm font-medium",
                                                style: {
                                                    background: "rgba(45, 80, 22, 0.1)",
                                                    color: "var(--forest-green)",
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: [
                                                    "💰 NPR ",
                                                    generatedTrail.total_cost_estimate.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 339,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 rounded-full text-sm font-medium",
                                                style: {
                                                    background: "rgba(212, 168, 67, 0.1)",
                                                    color: "var(--warm-brown)",
                                                    fontFamily: "var(--font-heading)"
                                                },
                                                children: generatedTrail.difficulty.charAt(0).toUpperCase() + generatedTrail.difficulty.slice(1)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 325,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: generatedTrail.days.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 animate-fade-in-up",
                                        style: {
                                            animationDelay: `${index * 100}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                                                        style: {
                                                            background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))",
                                                            color: "white",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: day.day_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 41
                                                    }, this),
                                                    index < generatedTrail.days.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-0.5 h-full mx-auto mt-2",
                                                        style: {
                                                            background: "linear-gradient(to bottom, var(--temple-gold), transparent)",
                                                            minHeight: "2rem"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 glass-card rounded-xl p-5 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-base",
                                                                style: {
                                                                    fontFamily: "var(--font-heading)",
                                                                    color: "var(--deep-indigo)"
                                                                },
                                                                children: day.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 45
                                                            }, this),
                                                            day.experience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryBadge(day.experience.category)}`,
                                                                children: day.experience.category.replace("_", " ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mb-3",
                                                        style: {
                                                            color: "var(--slate-medium)"
                                                        },
                                                        children: day.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-xs",
                                                        style: {
                                                            color: "var(--warm-brown)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "📍 ",
                                                                    day.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "NPR ",
                                                                    day.estimated_cost?.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 41
                                                    }, this),
                                                    day.experience && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 pt-3",
                                                        style: {
                                                            borderTop: "1px solid rgba(139, 111, 71, 0.1)"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/experience/${day.experience.id}`,
                                                            className: "text-xs font-medium flex items-center gap-1",
                                                            style: {
                                                                color: "var(--terracotta)"
                                                            },
                                                            children: [
                                                                "View Experience Details → ",
                                                                day.experience.avg_rating && `⭐ ${day.experience.avg_rating}`
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, day.day_number, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 349,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl p-6 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold mb-4",
                                        style: {
                                            fontFamily: "var(--font-heading)",
                                            color: "var(--deep-indigo)"
                                        },
                                        children: "Cost Estimation"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            generatedTrail.days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm py-1",
                                                    style: {
                                                        borderBottom: "1px solid rgba(139, 111, 71, 0.08)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--slate-medium)"
                                                            },
                                                            children: [
                                                                "Day ",
                                                                day.day_number,
                                                                ": ",
                                                                day.title.substring(0, 40),
                                                                "..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            style: {
                                                                color: "var(--deep-indigo)"
                                                            },
                                                            children: [
                                                                "NPR ",
                                                                day.estimated_cost?.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, day.day_number, true, {
                                                    fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 37
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-base font-bold pt-3",
                                                style: {
                                                    borderTop: "2px solid var(--terracotta)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--deep-indigo)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: "Total Estimated Cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--terracotta)",
                                                            fontFamily: "var(--font-heading)"
                                                        },
                                                        children: [
                                                            "NPR ",
                                                            generatedTrail.total_cost_estimate.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 393,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center mt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setStep(1);
                                            setGeneratedTrail(null);
                                        },
                                        className: "btn-primary",
                                        children: "🔄 Build Another Trail"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/marketplace",
                                        className: "btn-gold text-center",
                                        children: "Browse All Experiences"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                                lineNumber: 412,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                        lineNumber: 324,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/trail-builder/page.tsx",
        lineNumber: 121,
        columnNumber: 9
    }, this);
}
_s(TrailBuilderPage, "sfrN6kBV3/+fF0QWzS/hrK3nHms=");
_c = TrailBuilderPage;
var _c;
__turbopack_context__.k.register(_c, "TrailBuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_40311106._.js.map