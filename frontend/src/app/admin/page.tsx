"use client";

import { useState } from "react";

const mockUsers = [
    { id: "u1", name: "Sarah Chen", role: "tourist", email: "sarah.chen@email.com", status: "active" },
    { id: "u2", name: "Ram Bahadur Gurung", role: "provider", email: "ram.gurung@email.com", status: "active" },
    { id: "u3", name: "Sita Thapa", role: "provider", email: "sita.thapa@email.com", status: "active" },
    { id: "u4", name: "Dorje Sherpa", role: "provider", email: "dorje.sherpa@email.com", status: "active" },
];

export default function AdminPanelPage() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen pt-20" style={{ background: "var(--himalayan-cream)" }}>
            <div className="py-10" style={{ background: "linear-gradient(135deg, #1A1A2E, var(--deep-indigo))" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                            style={{ background: "rgba(212, 168, 67, 0.2)" }}>⚙️</div>
                        <div>
                            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                                Admin Panel
                            </h1>
                            <p className="text-sm" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                                Nepal Heritage Trails • System Administration
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Total Users", value: "4,521", icon: "👥", color: "var(--deep-indigo)" },
                        { label: "Active Experiences", value: "10", icon: "🗺️", color: "var(--forest-green)" },
                        { label: "Total Bookings", value: "2,340", icon: "📋", color: "var(--terracotta)" },
                        { label: "Revenue (MTD)", value: "NPR 4.2M", icon: "💰", color: "var(--temple-gold)" },
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
                    {["overview", "users", "content", "analytics"].map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className="px-5 py-3 text-sm font-medium transition-all rounded-t-lg"
                            style={{
                                color: activeTab === tab ? "var(--deep-indigo)" : "var(--slate-medium)",
                                borderBottom: activeTab === tab ? "2px solid var(--deep-indigo)" : "2px solid transparent",
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
                                System Health
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { service: "Frontend (Next.js)", status: "Healthy", color: "#2D5016" },
                                    { service: "Backend API (Express)", status: "Healthy", color: "#2D5016" },
                                    { service: "Database (PostgreSQL)", status: "Healthy", color: "#2D5016" },
                                    { service: "AI Service (Python)", status: "Standby", color: "#D4A843" },
                                    { service: "Payment Gateway", status: "Configured", color: "#2D5016" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "rgba(27, 42, 74, 0.03)" }}>
                                        <span className="text-sm" style={{ color: "var(--deep-indigo)" }}>{item.service}</span>
                                        <span className="text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
                                            style={{ background: `${item.color}15`, color: item.color }}>
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                                Recent Activity
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { action: "New provider registered", detail: "Karma Dolma - Mustang", time: "1h ago" },
                                    { action: "Experience approved", detail: "Upper Mustang Cave Tour", time: "3h ago" },
                                    { action: "Booking dispute resolved", detail: "#BK-2340", time: "5h ago" },
                                    { action: "Content flagged for review", detail: "Review #R-521", time: "8h ago" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-2">
                                        <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: "var(--temple-gold)" }} />
                                        <div>
                                            <div className="text-sm font-medium" style={{ color: "var(--deep-indigo)" }}>{item.action}</div>
                                            <div className="text-xs" style={{ color: "var(--slate-medium)" }}>{item.detail} • {item.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "users" && (
                    <div className="glass-card rounded-xl p-6 animate-fade-in">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>User Management</h3>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Search users..." className="px-3 py-2 text-sm rounded-lg border outline-none" style={{ borderColor: "rgba(27, 42, 74, 0.15)" }} />
                            </div>
                        </div>
                        <table className="w-full text-sm">
                            <thead>
                                <tr style={{ borderBottom: "2px solid rgba(27, 42, 74, 0.1)" }}>
                                    <th className="text-left py-3 px-2 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Name</th>
                                    <th className="text-left py-3 px-2 font-semibold hidden sm:table-cell" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Email</th>
                                    <th className="text-center py-3 px-2 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Role</th>
                                    <th className="text-center py-3 px-2 font-semibold" style={{ color: "var(--deep-indigo)", fontFamily: "var(--font-heading)" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockUsers.map(user => (
                                    <tr key={user.id} style={{ borderBottom: "1px solid rgba(27, 42, 74, 0.06)" }}>
                                        <td className="py-3 px-2 font-medium" style={{ color: "var(--deep-indigo)" }}>{user.name}</td>
                                        <td className="py-3 px-2 hidden sm:table-cell" style={{ color: "var(--slate-medium)" }}>{user.email}</td>
                                        <td className="py-3 px-2 text-center">
                                            <span className="text-xs px-2 py-0.5 rounded-full capitalize"
                                                style={{
                                                    background: user.role === "admin" ? "rgba(27, 42, 74, 0.1)" : user.role === "provider" ? "rgba(45, 80, 22, 0.1)" : "rgba(212, 168, 67, 0.1)",
                                                    color: user.role === "admin" ? "var(--deep-indigo)" : user.role === "provider" ? "var(--forest-green)" : "var(--warm-brown)",
                                                }}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-center">
                                            <span className="w-2 h-2 inline-block rounded-full" style={{ background: "var(--forest-green)" }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "content" && (
                    <div className="glass-card rounded-xl p-6 animate-fade-in text-center py-16">
                        <div className="text-5xl mb-4">📝</div>
                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>Content Moderation</h3>
                        <p className="text-sm mb-4" style={{ color: "var(--slate-medium)" }}>No items currently pending review</p>
                        <div className="text-xs px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(45, 80, 22, 0.1)", color: "var(--forest-green)" }}>
                            ✅ All content up to date
                        </div>
                    </div>
                )}

                {activeTab === "analytics" && (
                    <div className="glass-card rounded-xl p-6 animate-fade-in">
                        <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>Platform Analytics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl text-center" style={{ background: "rgba(196, 90, 60, 0.05)" }}>
                                <div className="text-3xl font-bold" style={{ color: "var(--terracotta)", fontFamily: "var(--font-heading)" }}>84%</div>
                                <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Booking Conversion Rate</div>
                            </div>
                            <div className="p-4 rounded-xl text-center" style={{ background: "rgba(45, 80, 22, 0.05)" }}>
                                <div className="text-3xl font-bold" style={{ color: "var(--forest-green)", fontFamily: "var(--font-heading)" }}>4.8</div>
                                <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Average Platform Rating</div>
                            </div>
                            <div className="p-4 rounded-xl text-center" style={{ background: "rgba(212, 168, 67, 0.08)" }}>
                                <div className="text-3xl font-bold" style={{ color: "var(--warm-brown)", fontFamily: "var(--font-heading)" }}>62%</div>
                                <div className="text-xs mt-1" style={{ color: "var(--slate-medium)" }}>Repeat Customer Rate</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
