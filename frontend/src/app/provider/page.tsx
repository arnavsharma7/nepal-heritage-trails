"use client";

import { useState } from "react";
import Link from "next/link";

const mockListings = [
    { id: "exp-001", title: "Ghandruk Gurung Homestay Experience", category: "homestay", avg_rating: 4.8, total_bookings: 340, is_active: true, revenue: 1190000 },
    { id: "exp-005", title: "Annapurna Sunrise Yoga & Meditation Retreat", category: "homestay", avg_rating: 4.9, total_bookings: 190, is_active: true, revenue: 2280000 },
    { id: "exp-008", title: "Pokhara Lakeside Kayaking & Village Experience", category: "guide", avg_rating: 4.6, total_bookings: 310, is_active: true, revenue: 930000 },
];

export default function ProviderDashboardPage() {
    const [activeTab, setActiveTab] = useState("overview");

    const totalRevenue = mockListings.reduce((sum, l) => sum + l.revenue, 0);
    const totalBookings = mockListings.reduce((sum, l) => sum + l.total_bookings, 0);
    const avgRating = (mockListings.reduce((sum, l) => sum + l.avg_rating, 0) / mockListings.length).toFixed(1);

    return (
        <div className="min-h-screen pt-20" style={{ background: "var(--himalayan-cream)" }}>
            <div className="py-10" style={{ background: "linear-gradient(135deg, var(--forest-green), var(--forest-green-light))" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: "rgba(255,255,255,0.2)" }}>🏡</div>
                        <div>
                            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "white" }}>
                                Provider Dashboard
                            </h1>
                            <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                                Ram Bahadur Gurung • Ghandruk, Kaski
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Total Revenue", value: `NPR ${(totalRevenue / 1000000).toFixed(1)}M`, icon: "💰", color: "var(--forest-green)" },
                        { label: "Total Bookings", value: totalBookings, icon: "📋", color: "var(--terracotta)" },
                        { label: "Avg Rating", value: avgRating, icon: "⭐", color: "var(--temple-gold)" },
                        { label: "Active Listings", value: mockListings.length, icon: "📌", color: "var(--deep-indigo)" },
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-card rounded-xl p-5 text-center">
                            <div className="text-2xl mb-1">{stat.icon}</div>
                            <div className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)", color: stat.color }}>{stat.value}</div>
                            <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6" style={{ borderBottom: "2px solid rgba(27, 42, 74, 0.1)" }}>
                    {["overview", "listings", "earnings"].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className="px-5 py-3 text-sm font-medium transition-all rounded-t-lg"
                            style={{
                                color: activeTab === tab ? "var(--forest-green)" : "var(--slate-medium)",
                                borderBottom: activeTab === tab ? "2px solid var(--forest-green)" : "2px solid transparent",
                                fontFamily: "var(--font-heading)",
                                marginBottom: "-2px",
                            }}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
                        <div className="glass-card rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Recent Activity
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { action: "New booking received", detail: "Ghandruk Homestay - 2 guests", time: "2 hours ago", icon: "📩" },
                                    { action: "New review", detail: "⭐⭐⭐⭐⭐ on Yoga Retreat", time: "1 day ago", icon: "💬" },
                                    { action: "Payment received", detail: "NPR 24,000 credited", time: "3 days ago", icon: "💰" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: idx === 0 ? "rgba(45, 80, 22, 0.04)" : "transparent" }}>
                                        <span>{item.icon}</span>
                                        <div>
                                            <div className="text-sm font-medium" style={{ color: "var(--deep-indigo)" }}>{item.action}</div>
                                            <div className="text-xs" style={{ color: "var(--slate-medium)" }}>{item.detail}</div>
                                            <div className="text-xs mt-1" style={{ color: "var(--warm-brown)" }}>{item.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Community Impact
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Families Supported", value: "12", color: "#2D5016" },
                                    { label: "Jobs Created", value: "8", color: "#D4A843" },
                                    { label: "Revenue Shared", value: "72%", color: "#C45A3C" },
                                    { label: "Repeat Travelers", value: "45%", color: "#1B2A4A" },
                                ].map((item, idx) => (
                                    <div key={idx} className="p-3 rounded-lg text-center" style={{ background: `${item.color}10` }}>
                                        <div className="text-xl font-bold" style={{ color: item.color, fontFamily: "var(--font-heading)" }}>{item.value}</div>
                                        <div className="text-xs" style={{ color: "var(--slate-medium)" }}>{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "listings" && (
                    <div className="space-y-4 animate-fade-in">
                        {mockListings.map(listing => (
                            <div key={listing.id} className="glass-card rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                                        style={{ background: listing.category === "homestay" ? "rgba(139, 111, 71, 0.1)" : "rgba(45, 80, 22, 0.1)" }}>
                                        {listing.category === "homestay" ? "🏡" : "🧭"}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm" style={{ color: "var(--deep-indigo)" }}>{listing.title}</h4>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs" style={{ color: "var(--warm-brown)" }}>⭐ {listing.avg_rating}</span>
                                            <span className="text-xs" style={{ color: "var(--slate-medium)" }}>{listing.total_bookings} bookings</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs px-3 py-1 rounded-full font-medium"
                                        style={{ background: listing.is_active ? "rgba(45, 80, 22, 0.1)" : "rgba(196, 90, 60, 0.1)", color: listing.is_active ? "var(--forest-green)" : "var(--terracotta)" }}>
                                        {listing.is_active ? "Active" : "Inactive"}
                                    </span>
                                    <span className="text-sm font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--forest-green)" }}>
                                        NPR {(listing.revenue / 1000).toFixed(0)}K
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div className="text-center mt-6">
                            <button className="btn-primary">+ Add New Listing</button>
                        </div>
                    </div>
                )}

                {activeTab === "earnings" && (
                    <div className="glass-card rounded-xl p-6 animate-fade-in">
                        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>Earnings Summary</h3>
                        <div className="space-y-3">
                            {mockListings.map(listing => (
                                <div key={listing.id} className="flex justify-between py-2 text-sm" style={{ borderBottom: "1px solid rgba(27, 42, 74, 0.06)" }}>
                                    <span style={{ color: "var(--slate-medium)" }}>{listing.title}</span>
                                    <span className="font-bold" style={{ color: "var(--forest-green)" }}>NPR {listing.revenue.toLocaleString()}</span>
                                </div>
                            ))}
                            <div className="flex justify-between py-3 text-base font-bold" style={{ borderTop: "2px solid var(--forest-green)" }}>
                                <span style={{ color: "var(--deep-indigo)" }}>Total Earnings</span>
                                <span style={{ color: "var(--forest-green)" }}>NPR {totalRevenue.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
