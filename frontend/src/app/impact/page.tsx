"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getImpactStats, getImpactDistribution } from "@/lib/api";
import { fallbackImpactStats, fallbackImpactDistribution } from "@/lib/fallbackData";

interface DistData {
    categories: { category: string; percentage: number; amount: number }[];
    regional: { district: string; families: number; revenue: number }[];
}

function AnimatedCounter({ end, label, suffix = "", prefix = "" }: { end: number; label: string; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 2000;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        const timer = setTimeout(() => requestAnimationFrame(animate), 300);
        return () => clearTimeout(timer);
    }, [end]);

    const formatNumber = (n: number) => {
        if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
        if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
        return n.toLocaleString();
    };

    return (
        <div className="glass-card rounded-2xl p-6 text-center">
            <div className="impact-number text-3xl md:text-4xl mb-1">
                {prefix}{formatNumber(count)}{suffix}
            </div>
            <div className="text-sm font-medium" style={{ color: "var(--slate-medium)", fontFamily: "var(--font-heading)" }}>
                {label}
            </div>
        </div>
    );
}

function BarChart({ data, maxValue }: { data: { label: string; value: number; percentage: number }[]; maxValue: number }) {
    return (
        <div className="space-y-4">
            {data.map((item, idx) => (
                <div key={idx}>
                    <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>{item.label}</span>
                        <span className="font-bold" style={{ color: "var(--terracotta)" }}>{item.percentage}%</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(27, 42, 74, 0.08)" }}>
                        <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                                width: `${(item.value / maxValue) * 100}%`,
                                background: `linear-gradient(90deg, var(--terracotta), var(--temple-gold))`,
                                animationDelay: `${idx * 200}ms`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ImpactPage() {
    const [stats, setStats] = useState(fallbackImpactStats);
    const [distribution, setDistribution] = useState<DistData>(fallbackImpactDistribution);

    useEffect(() => {
        async function loadData() {
            const [statsRes, distRes] = await Promise.all([
                getImpactStats(),
                getImpactDistribution(),
            ]);
            if (statsRes) setStats(statsRes);
            if (distRes) setDistribution(distRes);
        }
        loadData();
    }, []);

    const catBarData = distribution.categories.map(c => ({
        label: c.category,
        value: c.amount,
        percentage: c.percentage,
    }));

    const maxCatAmount = Math.max(...distribution.categories.map(c => c.amount));

    return (
        <div className="min-h-screen pt-20" style={{ background: "var(--himalayan-cream)" }}>
            {/* Header */}
            <div className="py-14 lg:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--deep-indigo), #0F1B33)" }}>
                <div className="absolute inset-0 mandala-pattern opacity-15" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(45, 80, 22, 0.2)", color: "#8CD460", fontFamily: "var(--font-heading)" }}>
                        Real Impact Report
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                        Community Impact Dashboard
                    </h1>
                    <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "rgba(245, 240, 235, 0.7)" }}>
                        Every journey on Nepal Heritage Trails directly supports local communities. Here&apos;s how your travel makes a difference.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                    <AnimatedCounter end={stats.families_supported} label="Families Supported" />
                    <AnimatedCounter end={stats.artisans_employed} label="Artisans Employed" />
                    <AnimatedCounter end={stats.travelers_served} label="Travelers Served" suffix="+" />
                    <AnimatedCounter end={stats.community_share_percentage} label="Revenue to Communities" suffix="%" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Revenue Distribution */}
                    <div className="glass-card rounded-2xl p-8">
                        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            Revenue Distribution
                        </h2>
                        <BarChart data={catBarData} maxValue={maxCatAmount} />
                        <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(139, 111, 71, 0.1)" }}>
                            <div className="text-center">
                                <span className="text-xs" style={{ color: "var(--slate-medium)" }}>Total Revenue Generated</span>
                                <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--terracotta)" }}>
                                    NPR {(stats.total_revenue_generated / 1000000).toFixed(1)}M
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Stats */}
                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-8">
                            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Cultural Preservation
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl text-center" style={{ background: "rgba(196, 90, 60, 0.06)" }}>
                                    <div className="text-2xl font-bold" style={{ color: "var(--terracotta)", fontFamily: "var(--font-heading)" }}>{stats.heritage_sites_maintained}</div>
                                    <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Heritage Sites Maintained</div>
                                </div>
                                <div className="p-4 rounded-xl text-center" style={{ background: "rgba(212, 168, 67, 0.08)" }}>
                                    <div className="text-2xl font-bold" style={{ color: "var(--warm-brown)", fontFamily: "var(--font-heading)" }}>{stats.cultural_programs_funded}</div>
                                    <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Cultural Programs Funded</div>
                                </div>
                                <div className="p-4 rounded-xl text-center" style={{ background: "rgba(45, 80, 22, 0.06)" }}>
                                    <div className="text-2xl font-bold" style={{ color: "var(--forest-green)", fontFamily: "var(--font-heading)" }}>{stats.districts_reached}</div>
                                    <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Districts Reached</div>
                                </div>
                                <div className="p-4 rounded-xl text-center" style={{ background: "rgba(232, 160, 181, 0.1)" }}>
                                    <div className="text-2xl font-bold" style={{ color: "#8B3A6A", fontFamily: "var(--font-heading)" }}>{stats.artisans_employed}</div>
                                    <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Artisans Employed</div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card rounded-2xl p-8">
                            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Our Commitment
                            </h2>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--slate-medium)" }}>
                                Nepal Heritage Trails operates on a community-first model. We ensure that at least 72% of every booking goes directly to local families, guides, artisans, and heritage preservation projects.
                            </p>
                            <div className="p-4 rounded-xl" style={{ background: "rgba(45, 80, 22, 0.06)", border: "1px solid rgba(45, 80, 22, 0.1)" }}>
                                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--forest-green)" }}>
                                    💚 B-Corp Certified &bull; Fair Trade Tourism Partner
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Impact Table */}
                <div className="glass-card rounded-2xl p-8 mb-12">
                    <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                        Regional Impact Breakdown
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr style={{ borderBottom: "2px solid rgba(27, 42, 74, 0.1)" }}>
                                    <th className="text-left py-3 px-4 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>District</th>
                                    <th className="text-center py-3 px-4 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Families</th>
                                    <th className="text-right py-3 px-4 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Revenue (NPR)</th>
                                    <th className="text-right py-3 px-4 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {distribution.regional.map((region, idx) => (
                                    <tr key={idx} style={{ borderBottom: "1px solid rgba(27, 42, 74, 0.06)" }}>
                                        <td className="py-3 px-4 font-medium" style={{ color: "var(--deep-indigo)" }}>📍 {region.district}</td>
                                        <td className="py-3 px-4 text-center" style={{ color: "var(--slate-medium)" }}>{region.families}</td>
                                        <td className="py-3 px-4 text-right font-medium" style={{ color: "var(--terracotta)" }}>
                                            {(region.revenue / 1000000).toFixed(1)}M
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <div className="w-20 h-2 rounded-full ml-auto overflow-hidden" style={{ background: "rgba(27, 42, 74, 0.08)" }}>
                                                <div className="h-full rounded-full" style={{
                                                    width: `${(region.revenue / 10000000) * 100}%`,
                                                    background: "linear-gradient(90deg, var(--forest-green), var(--forest-green-light))",
                                                }} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center py-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                        Be Part of the Change
                    </h2>
                    <p className="text-sm max-w-lg mx-auto mb-6" style={{ color: "var(--slate-medium)" }}>
                        Every trip you book contributes to preserving Nepal&apos;s cultural heritage and empowering local communities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/trail-builder" className="btn-gold text-center">🏔️ Build Your Trail</Link>
                        <Link href="/marketplace" className="btn-primary text-center">Browse Experiences</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
