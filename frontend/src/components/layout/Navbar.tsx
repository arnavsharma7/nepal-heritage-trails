"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: "rgba(27, 42, 74, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(212, 168, 67, 0.15)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                            style={{
                                background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))",
                            }}
                        >
                            🏔️
                        </div>
                        <div>
                            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                                Nepal Heritage
                            </span>
                            <span className="hidden sm:inline text-lg font-light ml-1" style={{ fontFamily: "var(--font-heading)", color: "var(--temple-gold)" }}>
                                Trails
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/trail-builder", label: "Trail Builder" },
                            { href: "/marketplace", label: "Experiences" },
                            { href: "/impact", label: "Community Impact" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                                style={{
                                    color: "rgba(245, 240, 235, 0.8)",
                                    fontFamily: "var(--font-heading)",
                                }}
                                onMouseEnter={e => {
                                    (e.target as HTMLElement).style.color = "var(--temple-gold)";
                                    (e.target as HTMLElement).style.background = "rgba(212, 168, 67, 0.1)";
                                }}
                                onMouseLeave={e => {
                                    (e.target as HTMLElement).style.color = "rgba(245, 240, 235, 0.8)";
                                    (e.target as HTMLElement).style.background = "transparent";
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/dashboard" className="text-sm font-medium px-4 py-2 rounded-full transition-all"
                            style={{ color: "rgba(245, 240, 235, 0.8)", fontFamily: "var(--font-heading)" }}
                            onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--temple-gold)"}
                            onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(245, 240, 235, 0.8)"}
                        >
                            Dashboard
                        </Link>
                        <Link href="/trail-builder" className="btn-primary text-sm !py-2 !px-5">
                            Build Your Trail
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg"
                        style={{ color: "var(--himalayan-white)" }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden animate-fade-in" style={{ background: "rgba(27, 42, 74, 0.98)", borderTop: "1px solid rgba(212, 168, 67, 0.1)" }}>
                    <div className="px-4 py-4 space-y-2">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/trail-builder", label: "Trail Builder" },
                            { href: "/marketplace", label: "Experiences" },
                            { href: "/impact", label: "Community Impact" },
                            { href: "/dashboard", label: "Dashboard" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-xl text-base font-medium transition-all"
                                style={{ color: "var(--himalayan-white)", fontFamily: "var(--font-heading)" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Link href="/trail-builder" className="btn-primary block text-center text-sm">
                                Build Your Trail
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
