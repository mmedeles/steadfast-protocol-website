import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const serviceLinks = ["Custom Software", "AI Tooling", "Workflow Automation", "Consulting"];

const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
];

const linkClasses = "whitespace-nowrap text-muted transition-colors hover:text-text";
const headerClasses = "font-mono text-sm tracking-wider text-text uppercase";

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex w-max items-center gap-3">
                            <Image
                                src="/03-icons/sp-icon-transparent.svg"
                                alt=""
                                width={80}
                                height={103}
                                className="h-20 w-auto"
                            />
                            <span className="flex flex-col leading-none">
                                <span className="font-display text-xl font-bold tracking-[0.08em] text-text">
                                    STEADFAST
                                </span>
                                <span className="font-display text-[0.6rem] font-medium tracking-[1.02em] text-signal mt-1">
                                    PROTOCOL
                                </span>
                            </span>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm text-muted">
                            Custom software, AI tooling, and workflow automation — built in
                            Bismarck, ND.
                        </p>
                        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted">
                            <span className="h-2 w-2 rounded-full bg-signal" />
                            connection: steadfast
                        </div>
                    </div>

                    <div>
                        <p className={headerClasses}>Services</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {serviceLinks.map((label) => (
                                <li key={label}>
                                    <Link
                                        href="/services"
                                        className={`group relative ${linkClasses}`}
                                    >
                                        <ChevronRight
                                            size={14}
                                            className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                        />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={headerClasses}>Company</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={linkClasses}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={headerClasses}>Legal</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={linkClasses}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className={headerClasses}>Contact</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:mmedeles@steadfastprotocol.com"
                                    className="text-muted transition-colors wrap-anywhere hover:text-text"
                                >
                                    mmedeles@steadfastprotocol.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+17022725337" className={linkClasses}>
                                    (702) 272-5337
                                </a>
                            </li>
                            <li className="text-muted">Bismarck, ND</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-text sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Steadfast Protocol, LLC</p>
                    <p>Built in North Dakota.</p>
                </div>
            </div>
        </footer>
    );
}
