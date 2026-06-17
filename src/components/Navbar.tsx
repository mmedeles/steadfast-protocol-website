"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-mono text-sm tracking-tight text-text">
                    steadfast<span className="text-signal">_</span>protocol
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-text"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="rounded-md border border-signal/40 px-4 py-2 text-sm text-signal transition-colors hover:bg-signal/10"
                    >
                        Start a project
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-muted hover:text-text"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="rounded-md border border-signal/40 px-4 py-2 text-center text-sm text-signal"
                    >
                        Start a project
                    </Link>
                </nav>
            )}
        </header>
    );
}