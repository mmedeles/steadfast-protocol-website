import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "About | Steadfast Protocol",
    description:
        "Steadfast Protocol builds software meant to hold up under real-world use, not just impress in a demo.",
};

const principles = [
    {
        label: "DURABLE",
        title: "Built for the six-month mark, not the kickoff meeting.",
        body: "A demo only has to work once, in front of a friendly audience. Production has to work every day, under real data and real users who never read the documentation. We design for that second case from the start, favoring tools we can keep running over ones that just look impressive on day one.",
    },
    {
        label: "TRANSPARENT",
        title: "You understand what you're getting.",
        body: "We explain what we're building and why, in plain language, not jargon that keeps you dependent on us. You get the source code, the infrastructure access, and a straight answer whenever you ask how something works.",
    },
    {
        label: "CONNECTED",
        title: "The relationship doesn't end at launch.",
        body: "Launch day isn't the finish line — it's when the software starts actually getting used, which is when real questions come up. We stay reachable after deployment instead of disappearing once the invoice clears.",
    },
];

export default function About() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
                    <FadeIn>
                        <p className="font-mono text-xs text-muted">about</p>
                        <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                            We build software that's meant to hold, not just to launch.
                        </h1>
                    </FadeIn>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        Steadfast Protocol exists for the gap between a working demo and
                        software people actually depend on. That's the bar we build to on
                        every project, whether it's custom software, AI tooling, or
                        workflow automation.
                    </p>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">principles</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                What that looks like in practice
                            </h2>
                        </FadeIn>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {principles.map((principle, i) => (
                                <FadeIn key={principle.label} delay={i * 0.1}>
                                    <div className="h-full rounded-lg border border-line bg-surface p-6">
                                        <p className="font-mono text-xs text-signal">
                                            {principle.label}
                                        </p>
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

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">how we work</p>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            We work the way most good working relationships do: a real
                            conversation up front, a clear written plan, and regular check-ins
                            while the work is happening — no surprise invoices, no
                            disappearing for weeks at a time. We're based in Bismarck, North
                            Dakota, and work with clients across the state, in person when
                            that's useful and fully remote when it's not.
                        </p>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                                Think we'd be a good fit?
                            </h2>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Let's talk about what you're building.
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
