import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="mandala-border"
            style={{
                background: "linear-gradient(180deg, var(--deep-indigo) 0%, #111827 100%)",
                color: "var(--himalayan-white)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                                style={{ background: "linear-gradient(135deg, var(--terracotta), var(--temple-gold))" }}
                            >
                                🏔️
                            </div>
                            <div>
                                <span className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                                    Nepal Heritage{" "}
                                </span>
                                <span className="text-lg font-light" style={{ fontFamily: "var(--font-heading)", color: "var(--temple-gold)" }}>
                                    Trails
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                            Connecting travelers with authentic Nepali cultural experiences while supporting local communities and preserving heritage.
                        </p>
                        <div className="flex gap-3 mt-5">
                            {["Facebook", "Instagram", "Twitter"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                                    style={{
                                        background: "rgba(212, 168, 67, 0.1)",
                                        color: "var(--temple-gold)",
                                        border: "1px solid rgba(212, 168, 67, 0.2)",
                                    }}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "/marketplace?category=homestay", label: "Homestays" },
                                { href: "/marketplace?category=guide", label: "Local Guides" },
                                { href: "/marketplace?category=workshop", label: "Artisan Workshops" },
                                { href: "/marketplace?category=heritage_site", label: "Heritage Sites" },
                                { href: "/trail-builder", label: "Trail Builder" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors"
                                        style={{ color: "rgba(245, 240, 235, 0.6)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {["About Us", "Community Impact", "Become a Provider", "Careers", "Press Kit"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Community Impact" ? "/impact" : "#"}
                                        className="text-sm transition-colors"
                                        style={{ color: "rgba(245, 240, 235, 0.6)" }}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--temple-gold)", fontFamily: "var(--font-heading)" }}>
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {["Help Center", "Safety Information", "Travel Insurance", "Cancellation Policy", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm transition-colors" style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(212, 168, 67, 0.1)" }}
                >
                    <p className="text-xs" style={{ color: "rgba(245, 240, 235, 0.4)" }}>
                        © 2024 Nepal Heritage Trails. All rights reserved. Made with ❤️ for Nepal.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                            <a key={item} href="#" className="text-xs transition-colors" style={{ color: "rgba(245, 240, 235, 0.4)" }}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
