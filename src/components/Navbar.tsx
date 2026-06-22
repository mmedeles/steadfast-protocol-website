"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const ctaClasses =
    "inline-flex items-center justify-center rounded-md bg-signal px-5 py-2.5 font-sans text-sm font-semibold text-white transition-all duration-150 ease-out hover:scale-[1.02] hover:bg-[#3b82f6] hover:brightness-110";

function NavLink({
    href,
    label,
    onClick,
}: {
    href: string;
    label: string;
    onClick?: () => void;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group relative font-sans text-sm font-medium transition-colors duration-200 ease-out ${
                isActive ? "text-text" : "text-muted hover:text-text"
            }`}
        >
            {label}
            <span
                className={`absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-signal transition-transform duration-200 ease-out ${
                    isActive ? "scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100"
                }`}
            />
        </Link>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mobilePanelRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;

        function handleOutsideClick(event: MouseEvent) {
            const target = event.target as Node;
            if (
                mobilePanelRef.current?.contains(target) ||
                toggleButtonRef.current?.contains(target)
            ) {
                return;
            }
            setOpen(false);
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [open]);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
                scrolled
                    ? "border-b border-line bg-ink/92 shadow-lg shadow-black/20 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center font-mono">
                        <Image
                            src="/logo/sp-horizontal-dark.svg"
                            alt="Steadfast Protocol"
                            height={52}
                            width={182}
                            className="h-[52px] w-auto"
                        />
                    </Link>

                    <nav className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </nav>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <Link href="/contact" className={`ml-auto hidden md:inline-flex ${ctaClasses}`}>
                        Book a free discovery call
                    </Link>

                    <button
                        ref={toggleButtonRef}
                        onClick={() => setOpen((v) => !v)}
                        className="text-muted transition-colors duration-200 ease-out hover:text-text md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        >
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={mobilePanelRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
                    >
                        <nav className="flex flex-col gap-4 px-6 py-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    onClick={() => setOpen(false)}
                                />
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={`text-center ${ctaClasses}`}
                            >
                                Book a free discovery call
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
