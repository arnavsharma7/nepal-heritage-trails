"use client";

import { useState } from "react";
import Link from "next/link";
import { generateTrail } from "@/lib/api";

const interests = [
    { id: "Culture", icon: "🏛️", label: "Culture & Heritage", desc: "UNESCO sites, temples, ancient cities" },
    { id: "Trekking", icon: "🥾", label: "Trekking & Hiking", desc: "Himalayan trails, mountain passes" },
    { id: "Food", icon: "🍜", label: "Food & Cuisine", desc: "Cooking classes, food tours, local cuisine" },
    { id: "Spirituality", icon: "🕉️", label: "Spirituality & Wellness", desc: "Meditation, yoga, monasteries" },
    { id: "Adventure", icon: "⛰️", label: "Adventure Sports", desc: "Rafting, paragliding, climbing" },
];

const travelStyles = [
    { id: "Cultural Explorer", icon: "🎭", label: "Cultural Explorer" },
    { id: "Active Adventurer", icon: "🏔️", label: "Active Adventurer" },
    { id: "Spiritual Seeker", icon: "🧘", label: "Spiritual Seeker" },
    { id: "Food Enthusiast", icon: "🍽️", label: "Food Enthusiast" },
    { id: "Budget Traveler", icon: "🎒", label: "Budget Traveler" },
    { id: "Luxury Explorer", icon: "✨", label: "Luxury Explorer" },
];

interface TrailDay {
    day_number: number;
    title: string;
    description: string;
    location: string;
    estimated_cost: number;
    experience?: {
        id: string;
        title: string;
        category: string;
        avg_rating: number;
        price_per_person: number;
    } | null;
}

interface GeneratedTrail {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    duration_days: number;
    total_cost_estimate: number;
    currency: string;
    interests: string[];
    travel_style: string;
    days: TrailDay[];
}

export default function TrailBuilderPage() {
    const [step, setStep] = useState(1);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [duration, setDuration] = useState(5);
    const [budget, setBudget] = useState(50000);
    const [travelStyle, setTravelStyle] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedTrail, setGeneratedTrail] = useState<GeneratedTrail | null>(null);

    const toggleInterest = (id: string) => {
        setSelectedInterests(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const result = await generateTrail({
                interests: selectedInterests,
                duration,
                budget,
                travel_style: travelStyle,
            });

            if (result?.trail) {
                setGeneratedTrail(result.trail);
                setStep(5);
            } else {
                // Fallback generated trail
                const fallbackDays: TrailDay[] = Array.from({ length: duration }, (_, i) => ({
                    day_number: i + 1,
                    title: `Day ${i + 1}: ${selectedInterests[i % selectedInterests.length] || "Exploration"} Experience`,
                    description: "A curated experience matching your interests, crafted by our AI trail builder.",
                    location: ["Kathmandu", "Bhaktapur", "Pokhara", "Ghandruk", "Patan", "Lumbini", "Nagarkot"][i % 7],
                    estimated_cost: Math.round(budget / duration),
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
                    days: fallbackDays,
                });
                setStep(5);
            }
        } catch {
            console.error("Trail generation failed");
        } finally {
            setIsGenerating(false);
        }
    };

    const getCategoryBadge = (category: string) => {
        const map: Record<string, string> = {
            homestay: "badge-homestay",
            guide: "badge-guide",
            workshop: "badge-workshop",
            heritage_site: "badge-heritage",
        };
        return map[category] || "badge-heritage";
    };

    return (
        <div className="min-h-screen pt-20" style={{ background: "var(--himalayan-cream)" }}>
            {/* Header */}
            <div className="py-12 lg:py-16" style={{ background: "var(--deep-indigo)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(212, 168, 67, 0.15)", color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
                        AI-Powered
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                        Build Your Heritage Trail
                    </h1>
                    <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "rgba(245, 240, 235, 0.7)" }}>
                        Tell us your interests and our AI will craft a personalized journey through Nepal&apos;s most authentic experiences.
                    </p>

                    {/* Progress Steps */}
                    {step < 5 && (
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {[1, 2, 3, 4].map(s => (
                                <div key={s} className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                                        style={{
                                            background: s <= step ? "var(--temple-gold)" : "rgba(255,255,255,0.1)",
                                            color: s <= step ? "var(--deep-indigo)" : "rgba(255,255,255,0.4)",
                                            fontFamily: "var(--font-heading)",
                                        }}>
                                        {s}
                                    </div>
                                    {s < 4 && (
                                        <div className="w-8 h-0.5" style={{ background: s < step ? "var(--temple-gold)" : "rgba(255,255,255,0.1)" }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Step 1: Interests */}
                {step === 1 && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            What interests you most?
                        </h2>
                        <p className="text-sm mb-8" style={{ color: "var(--slate-medium)" }}>Select one or more interests to personalize your trail.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {interests.map(interest => (
                                <button
                                    key={interest.id}
                                    onClick={() => toggleInterest(interest.id)}
                                    className="glass-card rounded-xl p-6 text-left transition-all"
                                    style={{
                                        borderColor: selectedInterests.includes(interest.id) ? "var(--terracotta)" : undefined,
                                        borderWidth: selectedInterests.includes(interest.id) ? "2px" : undefined,
                                        background: selectedInterests.includes(interest.id) ? "rgba(196, 90, 60, 0.05)" : undefined,
                                    }}
                                >
                                    <div className="text-3xl mb-3">{interest.icon}</div>
                                    <h3 className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                        {interest.label}
                                    </h3>
                                    <p className="text-xs" style={{ color: "var(--slate-medium)" }}>{interest.desc}</p>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button onClick={() => setStep(2)} disabled={selectedInterests.length === 0}
                                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                                Next: Duration →
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Duration */}
                {step === 2 && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            How many days?
                        </h2>
                        <p className="text-sm mb-8" style={{ color: "var(--slate-medium)" }}>Choose your ideal trip duration.</p>

                        <div className="glass-card rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <span className="text-6xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--terracotta)" }}>
                                    {duration}
                                </span>
                                <span className="text-2xl font-light ml-2" style={{ color: "var(--slate-medium)" }}>days</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="21"
                                value={duration}
                                onChange={e => setDuration(Number(e.target.value))}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{ accentColor: "var(--terracotta)" }}
                            />
                            <div className="flex justify-between text-xs mt-2" style={{ color: "var(--slate-medium)" }}>
                                <span>2 days</span><span>1 week</span><span>2 weeks</span><span>3 weeks</span>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(1)} className="text-sm font-medium" style={{ color: "var(--terracotta)" }}>← Back</button>
                            <button onClick={() => setStep(3)} className="btn-primary">Next: Budget →</button>
                        </div>
                    </div>
                )}

                {/* Step 3: Budget */}
                {step === 3 && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            What&apos;s your budget?
                        </h2>
                        <p className="text-sm mb-8" style={{ color: "var(--slate-medium)" }}>Set your total per-person budget in Nepali Rupees.</p>

                        <div className="glass-card rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <span className="text-lg" style={{ color: "var(--slate-medium)" }}>NPR</span>
                                <span className="text-5xl font-bold ml-2" style={{ fontFamily: "var(--font-heading)", color: "var(--terracotta)" }}>
                                    {budget.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="200000"
                                step="5000"
                                value={budget}
                                onChange={e => setBudget(Number(e.target.value))}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                style={{ accentColor: "var(--terracotta)" }}
                            />
                            <div className="flex justify-between text-xs mt-2" style={{ color: "var(--slate-medium)" }}>
                                <span>₨10K</span><span>₨50K</span><span>₨100K</span><span>₨200K</span>
                            </div>
                            <p className="text-center text-xs mt-4" style={{ color: "var(--warm-brown)" }}>
                                ≈ ${Math.round(budget / 133)} USD per person
                            </p>
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(2)} className="text-sm font-medium" style={{ color: "var(--terracotta)" }}>← Back</button>
                            <button onClick={() => setStep(4)} className="btn-primary">Next: Style →</button>
                        </div>
                    </div>
                )}

                {/* Step 4: Travel Style */}
                {step === 4 && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            Your travel style?
                        </h2>
                        <p className="text-sm mb-8" style={{ color: "var(--slate-medium)" }}>This helps us match the right experiences for you.</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {travelStyles.map(style => (
                                <button
                                    key={style.id}
                                    onClick={() => setTravelStyle(style.id)}
                                    className="glass-card rounded-xl p-6 text-center transition-all"
                                    style={{
                                        borderColor: travelStyle === style.id ? "var(--terracotta)" : undefined,
                                        borderWidth: travelStyle === style.id ? "2px" : undefined,
                                        background: travelStyle === style.id ? "rgba(196, 90, 60, 0.05)" : undefined,
                                    }}
                                >
                                    <div className="text-3xl mb-2">{style.icon}</div>
                                    <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                        {style.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(3)} className="text-sm font-medium" style={{ color: "var(--terracotta)" }}>← Back</button>
                            <button
                                onClick={handleGenerate}
                                disabled={!travelStyle || isGenerating}
                                className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="spinner !w-5 !h-5 !border-2" /> Generating...
                                    </>
                                ) : (
                                    "🏔️ Generate My Trail"
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 5: Generated Itinerary */}
                {step === 5 && generatedTrail && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-10">
                            <div className="text-4xl mb-3">🎉</div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                {generatedTrail.title}
                            </h2>
                            <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--slate-medium)" }}>
                                {generatedTrail.description}
                            </p>

                            {/* Summary Stats */}
                            <div className="flex flex-wrap justify-center gap-4 mt-6">
                                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(196, 90, 60, 0.1)", color: "var(--terracotta)", fontFamily: "var(--font-heading)" }}>
                                    📅 {generatedTrail.duration_days} Days
                                </div>
                                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(45, 80, 22, 0.1)", color: "var(--forest-green)", fontFamily: "var(--font-heading)" }}>
                                    💰 NPR {generatedTrail.total_cost_estimate.toLocaleString()}
                                </div>
                                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "rgba(212, 168, 67, 0.1)", color: "var(--warm-brown)", fontFamily: "var(--font-heading)" }}>
                                    {generatedTrail.difficulty.charAt(0).toUpperCase() + generatedTrail.difficulty.slice(1)}
                                </div>
                            </div>
                        </div>

                        {/* Day-by-Day Timeline */}
                        <div className="space-y-6">
                            {generatedTrail.days.map((day, index) => (
                                <div key={day.day_number} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    {/* Day Number Circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                                            style={{ background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))", color: "white", fontFamily: "var(--font-heading)" }}>
                                            {day.day_number}
                                        </div>
                                        {index < generatedTrail.days.length - 1 && (
                                            <div className="w-0.5 h-full mx-auto mt-2" style={{ background: "linear-gradient(to bottom, var(--temple-gold), transparent)", minHeight: "2rem" }} />
                                        )}
                                    </div>

                                    {/* Day Content */}
                                    <div className="flex-1 glass-card rounded-xl p-5 mb-2">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                                {day.title}
                                            </h3>
                                            {day.experience && (
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryBadge(day.experience.category)}`}>
                                                    {day.experience.category.replace("_", " ")}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm mb-3" style={{ color: "var(--slate-medium)" }}>{day.description}</p>
                                        <div className="flex items-center justify-between text-xs" style={{ color: "var(--warm-brown)" }}>
                                            <span>📍 {day.location}</span>
                                            <span className="font-semibold">NPR {day.estimated_cost?.toLocaleString()}</span>
                                        </div>
                                        {day.experience && (
                                            <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(139, 111, 71, 0.1)" }}>
                                                <Link href={`/experience/${day.experience.id}`} className="text-xs font-medium flex items-center gap-1" style={{ color: "var(--terracotta)" }}>
                                                    View Experience Details → {day.experience.avg_rating && `⭐ ${day.experience.avg_rating}`}
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cost Breakdown */}
                        <div className="glass-card rounded-2xl p-6 mt-8">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Cost Estimation
                            </h3>
                            <div className="space-y-2">
                                {generatedTrail.days.map(day => (
                                    <div key={day.day_number} className="flex justify-between text-sm py-1" style={{ borderBottom: "1px solid rgba(139, 111, 71, 0.08)" }}>
                                        <span style={{ color: "var(--slate-medium)" }}>Day {day.day_number}: {day.title.substring(0, 40)}...</span>
                                        <span className="font-medium" style={{ color: "var(--deep-indigo)" }}>NPR {day.estimated_cost?.toLocaleString()}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between text-base font-bold pt-3" style={{ borderTop: "2px solid var(--terracotta)" }}>
                                    <span style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Total Estimated Cost</span>
                                    <span style={{ color: "var(--terracotta)", fontFamily: "var(--font-heading)" }}>NPR {generatedTrail.total_cost_estimate.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <button onClick={() => { setStep(1); setGeneratedTrail(null); }} className="btn-primary">
                                🔄 Build Another Trail
                            </button>
                            <Link href="/marketplace" className="btn-gold text-center">
                                Browse All Experiences
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
