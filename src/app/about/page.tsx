import Link from "next/link";
import { Shield, Eye, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import FounderBio, { SHOW_FOUNDER_BIO } from "@/components/FounderBio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
    title: "About | Steadfast Protocol",
    description:
        "Steadfast Protocol builds software meant to hold up under real-world use, not just impress in a demo.",
    path: "/about",
});

// Sections alternate between plain and tinted. Which one a section gets
// depends on whether the bio sits above it, so the rhythm holds either way.
const plain = "border-t border-line";
const tinted = "border-t border-line bg-surface/40";

const principles = [
    {
        icon: Shield,
        label: "DURABLE",
        title: "Built for the six-month mark, not the kickoff meeting.",
        body: "A demo works once. We build for every day after.",
    },
    {
        icon: Eye,
        label: "TRANSPARENT",
        title: "You understand what you're getting.",
        body: "Plain answers, your source code, and full access.",
    },
    {
        icon: Handshake,
        label: "CONNECTED",
        title: "The relationship doesn't end at launch.",
        body: "We stay reachable after launch, when real questions start.",
    },
];

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
                    <FadeIn>
                        <p className="font-mono text-sm text-text">about</p>
                        <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                            We build solutions that are meant to hold, not just to launch.
                        </h1>
                    </FadeIn>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        Steadfast Protocol exists for the gap between a working demo and
                        tools people actually depend on. That&apos;s the bar we build to on
                        every project, whether it&apos;s custom software, AI tooling, or
                        workflow automation.
                    </p>
                </section>

                {SHOW_FOUNDER_BIO && (
                    <section className={tinted}>
                        <div className="mx-auto max-w-6xl px-6 py-20">
                            <FadeIn>
                                <p className="font-mono text-sm text-text">who you&apos;re working with</p>
                                <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                    Hi, I&apos;m [NAME].
                                </h2>
                            </FadeIn>
                            <FounderBio />
                        </div>
                    </section>
                )}

                <section className={SHOW_FOUNDER_BIO ? plain : tinted}>
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <FadeIn>
                            <p className="font-mono text-sm text-text">principles</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                What that looks like in practice
                            </h2>
                        </FadeIn>

                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {principles.map((principle, i) => (
                                <FadeIn key={principle.label} delay={i * 0.1}>
                                    <div className="h-full rounded-lg border border-line bg-surface p-6">
                                        <div className="flex items-center gap-2">
                                            <principle.icon size={50} className="text-signal" />
                                            <p className="font-mono text-2xl text-signal">
                                                {principle.label}
                                            </p>
                                        </div>
                                        <h3 className="mt-3 font-display text-lg text-text">
                                            {principle.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted">{principle.body}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={SHOW_FOUNDER_BIO ? tinted : plain}>
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                                How we work
                            </h2>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            A real conversation up front, a clear written plan, and regular
                            check-ins while the work happens. No surprise invoices, no
                            disappearing for weeks. We&apos;re based in Bismarck and work with
                            clients across North Dakota, in person or remote.
                        </p>
                    </div>
                </section>

                <section className={SHOW_FOUNDER_BIO ? plain : tinted}>
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                                Think we&apos;d be a good fit?
                            </h2>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Let&apos;s talk about what you&apos;re building.
                        </p>
                        <Link
                            href="/contact"
                            className="group relative mt-8 inline-block overflow-hidden rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                        >
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                            <span className="relative">Book a free discovery call</span>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
