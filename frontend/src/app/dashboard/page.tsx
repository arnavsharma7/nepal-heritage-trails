"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getUserDashboard } from "@/lib/api";

interface Booking {
    id: string;
    booking_date: string;
    num_guests: number;
    total_amount: number;
    status: string;
    experience?: {
        title: string;
        location_name: string;
        images?: string[];
    };
}

interface DashboardData {
    role: string;
    stats: {
        total_trips: number;
        upcoming: number;
    };
    bookings: Booking[];
}

const statusColors: Record<string, { bg: string; text: string }> = {
    confirmed: { bg: "rgba(45, 80, 22, 0.1)", text: "var(--forest-green)" },
    pending: { bg: "rgba(212, 168, 67, 0.1)", text: "var(--warm-brown)" },
    completed: { bg: "rgba(27, 42, 74, 0.08)", text: "var(--deep-indigo)" },
    cancelled: { bg: "rgba(196, 90, 60, 0.1)", text: "var(--terracotta)" },
};

export default function DashboardPage() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        async function loadDashboard() {
            const res = await getUserDashboard("u1-tourist-001");
            if (res) {
                setData(res);
            } else {
                setData({
                    role: "tourist",
                    stats: { total_trips: 3, upcoming: 1 },
                    bookings: [
                        { id: "book-001", booking_date: "2024-03-15", num_guests: 2, total_amount: 7000, status: "confirmed", experience: { title: "Ghandruk Gurung Homestay", location_name: "Ghandruk, Kaski" } },
                        { id: "book-002", booking_date: "2024-03-18", num_guests: 2, total_amount: 8000, status: "completed", experience: { title: "Newari Cooking Class & Food Tour", location_name: "Kathmandu" } },
                    ],
                });
            }
        }
        loadDashboard();
    }, []);

    if (!data) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center" style={{ background: "var(--himalayan-cream)" }}>
                <div className="spinner" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20" style={{ background: "var(--himalayan-cream)" }}>
            {/* Header */}
            <div className="py-10" style={{ background: "var(--deep-indigo)" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))" }}>
                            👤
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                                Welcome back, Sarah
                            </h1>
                            <p className="text-sm" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                                Tourist Dashboard • {data.stats.total_trips} trips • {data.stats.upcoming} upcoming
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Total Trips", value: data.stats.total_trips, icon: "🗺️", color: "var(--terracotta)" },
                        { label: "Upcoming", value: data.stats.upcoming, icon: "📅", color: "var(--forest-green)" },
                        { label: "Countries Visited", value: 1, icon: "🌍", color: "var(--warm-brown)" },
                        { label: "Impact Score", value: "92/100", icon: "💚", color: "var(--deep-indigo)" },
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-card rounded-xl p-5 text-center">
                            <div className="text-2xl mb-1">{stat.icon}</div>
                            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: stat.color }}>{stat.value}</div>
                            <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6" style={{ borderBottom: "2px solid rgba(27, 42, 74, 0.1)" }}>
                    {["overview", "bookings", "saved"].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className="px-5 py-3 text-sm font-medium transition-all rounded-t-lg"
                            style={{
                                color: activeTab === tab ? "var(--terracotta)" : "var(--slate-medium)",
                                borderBottom: activeTab === tab ? "2px solid var(--terracotta)" : "2px solid transparent",
                                fontFamily: "var(--font-heading)",
                                marginBottom: "-2px",
                            }}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
                        <div className="glass-card rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Upcoming Trip
                            </h3>
                            {data.bookings.filter(b => b.status === "confirmed").length > 0 ? (
                                data.bookings.filter(b => b.status === "confirmed").map(booking => (
                                    <div key={booking.id} className="p-4 rounded-lg" style={{ background: "rgba(45, 80, 22, 0.04)" }}>
                                        <h4 className="font-bold text-sm" style={{ color: "var(--deep-indigo)" }}>{booking.experience?.title}</h4>
                                        <p className="text-xs mt-1" style={{ color: "var(--warm-brown)" }}>📍 {booking.experience?.location_name}</p>
                                        <p className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>📅 {new Date(booking.booking_date).toLocaleDateString()} • {booking.num_guests} guests</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: statusColors.confirmed.bg, color: statusColors.confirmed.text }}>
                                                Confirmed
                                            </span>
                                            <span className="text-sm font-bold" style={{ color: "var(--terracotta)" }}>NPR {booking.total_amount.toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm" style={{ color: "var(--slate-medium)" }}>No upcoming trips. Start planning your next adventure!</p>
                            )}
                        </div>

                        <div className="glass-card rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <Link href="/trail-builder" className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50">
                                    <span className="text-xl">🏔️</span>
                                    <div>
                                        <span className="text-sm font-medium" style={{ color: "var(--deep-indigo)" }}>Build New Trail</span>
                                        <p className="text-xs" style={{ color: "var(--slate-medium)" }}>Let AI plan your next journey</p>
                                    </div>
                                </Link>
                                <Link href="/marketplace" className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50">
                                    <span className="text-xl">🎨</span>
                                    <div>
                                        <span className="text-sm font-medium" style={{ color: "var(--deep-indigo)" }}>Browse Experiences</span>
                                        <p className="text-xs" style={{ color: "var(--slate-medium)" }}>Find something new</p>
                                    </div>
                                </Link>
                                <Link href="/impact" className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50">
                                    <span className="text-xl">💚</span>
                                    <div>
                                        <span className="text-sm font-medium" style={{ color: "var(--deep-indigo)" }}>Your Impact</span>
                                        <p className="text-xs" style={{ color: "var(--slate-medium)" }}>See how your travels help</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "bookings" && (
                    <div className="space-y-4 animate-fade-in">
                        {data.bookings.map(booking => (
                            <div key={booking.id} className="glass-card rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                                        style={{ background: "rgba(196, 90, 60, 0.1)" }}>
                                        🗺️
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm" style={{ color: "var(--deep-indigo)" }}>{booking.experience?.title}</h4>
                                        <p className="text-xs" style={{ color: "var(--warm-brown)" }}>📍 {booking.experience?.location_name}</p>
                                        <p className="text-xs" style={{ color: "var(--slate-medium)" }}>📅 {new Date(booking.booking_date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs px-3 py-1 rounded-full font-medium"
                                        style={{ background: statusColors[booking.status]?.bg || statusColors.pending.bg, color: statusColors[booking.status]?.text || statusColors.pending.text }}>
                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </span>
                                    <span className="text-base font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--terracotta)" }}>
                                        NPR {booking.total_amount.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "saved" && (
                    <div className="text-center py-16 animate-fade-in">
                        <div className="text-5xl mb-4">❤️</div>
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                            No Saved Experiences Yet
                        </h3>
                        <p className="text-sm mb-6" style={{ color: "var(--slate-medium)" }}>
                            Browse the marketplace and save experiences for later!
                        </p>
                        <Link href="/marketplace" className="btn-primary inline-block">Browse Marketplace</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
