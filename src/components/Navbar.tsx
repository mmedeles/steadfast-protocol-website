"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const secondaryButtonClasses =
    "rounded-md border border-signal/40 px-4 py-2 text-sm text-signal transition-all duration-200 ease-out hover:border-signal hover:bg-signal/10 hover:brightness-125";

function NavLinkUnderline({ active }: { active: boolean }) {
    const prefersReducedMotion = useReducedMotion();

    if (!active) {
        return (
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 ease-out group-hover:scale-x-100" />
        );
    }

    return (
        <motion.span
            className="absolute -bottom-1 left-0 h-px w-full bg-signal"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
        />
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-mono text-sm tracking-tight text-text">
                    steadfast<span className="text-signal">_</span>protocol
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group relative text-sm transition-colors ${
                                    isActive ? "text-text" : "text-muted hover:text-text"
                                }`}
                            >
                                {link.label}
                                <NavLinkUnderline active={isActive} />
                            </Link>
                        );
                    })}
                    <Link href="/contact" className={secondaryButtonClasses}>
                        Book a free discovery call
                    </Link>
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-muted md:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {open && (
                <nav className="flex flex-col gap-4 border-t border-line px-6 py-6 md:hidden">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`text-sm ${
                                    isActive ? "text-text" : "text-muted hover:text-text"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className={`text-center ${secondaryButtonClasses}`}
                    >
                        Book a free discovery call
                    </Link>
                </nav>
            )}
        </header>
    );
}
