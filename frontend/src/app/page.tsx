"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getFeaturedTrails, getImpactStats } from "@/lib/api";
import { fallbackTrails, fallbackImpactStats } from "@/lib/fallbackData";

// ============================================================
// Category icons for the search bar
// ============================================================
const categoryIcons: Record<string, string> = {
  Culture: "🏛️",
  Trekking: "🥾",
  Food: "🍜",
  Spirituality: "🕉️",
  Adventure: "⛰️",
  Homestay: "🏡",
  Workshop: "🎨",
};

interface Trail {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: string;
  duration_days: number;
  total_cost_estimate: number;
  currency: string;
  interests: string[];
  travel_style: string;
  avg_rating: number;
  total_bookings: number;
}

// ============================================================
// Animated Counter Component
// ============================================================
function AnimatedCounter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
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

    const timer = setTimeout(() => requestAnimationFrame(animate), 500);
    return () => clearTimeout(timer);
  }, [end]);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toLocaleString();
  };

  return (
    <div className="text-center">
      <div className="impact-number text-4xl md:text-5xl lg:text-6xl mb-2">
        {formatNumber(count)}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium" style={{ color: "rgba(245, 240, 235, 0.7)", fontFamily: "var(--font-heading)" }}>
        {label}
      </div>
    </div>
  );
}

// ============================================================
// HOMEPAGE
// ============================================================
export default function Homepage() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [impactStats, setImpactStats] = useState<typeof fallbackImpactStats | null>(null);
  const [searchInterest, setSearchInterest] = useState("");

  useEffect(() => {
    async function loadData() {
      const [trailsRes, impactRes] = await Promise.all([
        getFeaturedTrails(),
        getImpactStats(),
      ]);
      setTrails(trailsRes?.data || fallbackTrails);
      setImpactStats(impactRes || fallbackImpactStats);
    }
    loadData();
  }, []);

  const stats = impactStats || fallbackImpactStats;

  return (
    <div className="min-h-screen">
      {/* ================================================
          HERO SECTION
          ================================================ */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 mandala-pattern opacity-30" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 animate-float"
          style={{ background: "radial-gradient(circle, var(--temple-gold), transparent)" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-float delay-500"
          style={{ background: "radial-gradient(circle, var(--terracotta), transparent)" }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-8 animate-float delay-300"
          style={{ background: "radial-gradient(circle, var(--lotus-pink), transparent)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full animate-fade-in-up"
            style={{ background: "rgba(212, 168, 67, 0.15)", border: "1px solid rgba(212, 168, 67, 0.3)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--temple-gold)" }} />
            <span className="text-lg font-medium" style={{ color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
              Sustainable Tourism Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}
          >
            Discover{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--temple-gold), var(--temple-gold-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Authentic Nepal.
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light" style={{ color: "rgba(245, 240, 235, 0.85)" }}>
              Travel Beyond the Map.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200"
            style={{ color: "rgba(245, 240, 235, 0.7)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
            Connect with verified local guides, community homestays, artisan workshops, and heritage experiences across the Himalayas.
          </p>

          {/* Smart Search Bar */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up delay-300">
            <div
              className="rounded-2xl p-2 flex flex-col sm:flex-row gap-2"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(255, 255, 255, 0.08)" }}>
                <span className="text-lg">🔍</span>
                <input
                  type="text"
                  placeholder="Where do you want to explore? (e.g., Kathmandu, Annapurna...)"
                  className="flex-1 bg-transparent outline-none text-sm md:text-base"
                  style={{ color: "var(--himalayan-white)", fontFamily: "var(--font-body)" }}
                />
              </div>
              <Link href={`/trail-builder${searchInterest ? `?interest=${searchInterest}` : ""}`}>
                <button className="btn-gold w-full sm:w-auto whitespace-nowrap !py-3 !px-6">
                  Build Your Trail
                </button>
              </Link>
            </div>

            {/* Quick Interest Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {Object.entries(categoryIcons).map(([interest, icon]) => (
                <button
                  key={interest}
                  onClick={() => setSearchInterest(interest)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: searchInterest === interest ? "rgba(212, 168, 67, 0.25)" : "rgba(255, 255, 255, 0.08)",
                    color: searchInterest === interest ? "var(--temple-gold)" : "rgba(245, 240, 235, 0.6)",
                    border: `1px solid ${searchInterest === interest ? "rgba(212, 168, 67, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {icon} {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in delay-700">
            <div className="w-6 h-10 rounded-full mx-auto flex items-start justify-center p-1.5"
              style={{ border: "2px solid rgba(245, 240, 235, 0.3)" }}>
              <div className="w-1.5 h-3 rounded-full animate-bounce"
                style={{ background: "var(--temple-gold)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          FEATURED TRAILS
          ================================================ */}
      <section className="py-20 lg:py-28 mandala-pattern" style={{ background: "var(--himalayan-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(196, 90, 60, 0.1)", color: "var(--terracotta)", fontFamily: "var(--font-heading)" }}>
              Curated Journeys
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
              Featured Heritage Trails
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--slate-medium)" }}>
              Carefully crafted multi-day experiences that combine cultural immersion, adventure, and community impact.
            </p>
          </div>

          {/* Trail Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(trails.length > 0 ? trails : fallbackTrails).map((trail, index) => (
              <Link href={`/trail-builder?trail=${trail.slug}`} key={trail.id}>
                <div
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card Header with gradient */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      background: index === 0
                        ? "linear-gradient(135deg, #1B2A4A, #C45A3C)"
                        : index === 1
                          ? "linear-gradient(135deg, #2D5016, #D4A843)"
                          : "linear-gradient(135deg, #8B6F47, #E8A0B5)",
                    }}
                  >
                    <div className="absolute inset-0 mandala-pattern opacity-20" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-2">
                        {trail.interests.map((interest) => (
                          <span key={interest} className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(255,255,255,0.2)", color: "white", fontFamily: "var(--font-heading)" }}>
                            {interest}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: trail.difficulty === "easy" ? "rgba(45, 80, 22, 0.8)" : trail.difficulty === "moderate" ? "rgba(212, 168, 67, 0.8)" : "rgba(196, 90, 60, 0.8)",
                          color: "white",
                          fontFamily: "var(--font-heading)",
                        }}>
                        {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-terracotta transition-colors"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
                      {trail.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--slate-medium)" }}>
                      {trail.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1" style={{ color: "var(--warm-brown)" }}>
                          📅 {trail.duration_days} Days
                        </span>
                        <span className="flex items-center gap-1 star-rating">
                          ⭐ {trail.avg_rating}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs" style={{ color: "var(--slate-medium)" }}>From</span>
                        <div className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--terracotta)" }}>
                          NPR {trail.total_cost_estimate.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/marketplace" className="btn-primary inline-block text-base">
              Explore All Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          EXPERIENCE CATEGORIES
          ================================================ */}
      <section className="py-20 lg:py-28" style={{ background: "var(--deep-indigo)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(212, 168, 67, 0.15)", color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
              Marketplace
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
              Authentic Experiences
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
              Discover curated experiences across four categories, each verified for authenticity and community benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏡", title: "Homestays", desc: "Live with local families in traditional homes across rural Nepal.", count: "50+ Stays", color: "#E8D5B8", href: "/marketplace?category=homestay" },
              { icon: "🧭", title: "Local Guides", desc: "Expert guides who share deep knowledge of terrain, culture and history.", count: "120+ Guides", color: "#D4EFC4", href: "/marketplace?category=guide" },
              { icon: "🎨", title: "Artisan Workshops", desc: "Learn traditional crafts — Thangka painting, pottery, weaving, and more.", count: "35+ Workshops", color: "#E8C8D8", href: "/marketplace?category=workshop" },
              { icon: "🏛️", title: "Heritage Sites", desc: "Explore UNESCO sites and sacred places with expert cultural guides.", count: "25+ Sites", color: "#C8D8F0", href: "/marketplace?category=heritage_site" },
            ].map((cat, idx) => (
              <Link href={cat.href} key={cat.title}>
                <div className="glass-card-dark rounded-2xl p-8 text-center cursor-pointer group h-full"
                  style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                    {cat.desc}
                  </p>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${cat.color}20`, color: cat.color, fontFamily: "var(--font-heading)" }}>
                    {cat.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          COMMUNITY IMPACT STATS
          ================================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--deep-indigo) 0%, #0F1B33 100%)" }}>
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(45, 80, 22, 0.2)", color: "#8CD460", fontFamily: "var(--font-heading)" }}>
              Real Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--himalayan-white)" }}>
              Tourism That Transforms
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
              Every booking directly supports local communities, preserves cultural heritage, and empowers artisans.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter end={stats.families_supported} label="Families Supported" />
            <AnimatedCounter end={stats.artisans_employed} label="Artisans Employed" />
            <AnimatedCounter end={stats.heritage_sites_maintained} label="Heritage Sites Preserved" />
            <AnimatedCounter end={stats.travelers_served} label="Travelers Served" />
          </div>

          <div className="text-center mt-12">
            <Link href="/impact" className="btn-secondary inline-block text-sm">
              View Full Impact Report →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          CTA SECTION
          ================================================ */}
      <section className="py-20 lg:py-28 mandala-pattern" style={{ background: "var(--himalayan-cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--deep-indigo)" }}>
            Ready to{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Build Your Trail?
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--slate-medium)" }}>
            Tell us your interests, budget, and travel style — our AI will craft a personalized journey through Nepal&apos;s most authentic experiences.
          </p>
          <Link href="/trail-builder" className="btn-gold inline-block text-lg">
            🏔️ Start Building Your Trail
          </Link>
        </div>
      </section>
    </div>
  );
}
