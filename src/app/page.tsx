import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectionTerminal from "@/components/ConnectionTerminal";
import FadeIn from "@/components/FadeIn";
import ProcessConnectorLine from "@/components/ProcessConnectorLine";
import ProcessTimeline from "@/components/ProcessTimeline";

const trustSignals = [
    "You get it in writing before you spend a cent",
    "You’ll watch it come together — not just get a bill",
    "Everything we build is yours. No rented templates",
];

const services = [
    {
        tag: "// custom-software",
        title: "Custom Software Development",
        description:
            "We design and build the systems your business runs on — internal tools, customer-facing products, and everything that needs to keep working long after launch.",
    },
    {
        tag: "// ai-integration",
        title: "AI Tooling & Integration",
        description:
            "We bring AI into your stack where it actually earns its place — automating decisions, surfacing insights, and integrating cleanly with what you already have.",
    },
    {
        tag: "// automation",
        title: "Workflow Automation",
        description:
            "We connect your tools and remove the manual busywork in between, so your team spends time on the work that actually needs a person.",
    },
    {
        tag: "// consulting",
        title: "Technical Consulting & Dev Shop Collaboration",
        description:
            "We work alongside your team or another dev shop as an extra set of hands — technical guidance and execution without the overhead of a full hire.",
    },
];

const steps = [
    {
        code: "HANDSHAKE",
        description: "A free discovery call to understand what you need.",
    },
    {
        code: "SCOPE",
        description: "A written proposal with a fixed quote — no surprises.",
    },
    {
        code: "BUILD",
        description: "Engineered to the agreed scope, start to finish.",
    },
    {
        code: "DEPLOY",
        description: "Launched and wired into what you already use.",
    },
    {
        code: "SUSTAIN",
        description: "Ongoing support and updates after launch.",
    },
];

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
                        <div>
                            <FadeIn>
                                <p className="font-mono text-xs text-muted">
                                    Software, AI tooling, automation — that’s the job.
                                </p>
                                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-text md:text-5xl">
                                    Demos are easy. We build what comes after.
                                </h1>
                            </FadeIn>
                            <p className="mt-6 text-base text-muted md:text-lg">
                                We build custom software, AI tools, and automation for people
                                who need it to actually work — not just look good in a pitch
                                meeting.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <Link
                                    href="/contact"
                                    className="group relative inline-block overflow-hidden rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                                >
                                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                    <span className="relative">Book a free discovery call</span>
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-sm text-muted transition-colors hover:text-text"
                                >
                                    See what we build →
                                </Link>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                                {trustSignals.map((signal, i) => (
                                    <span key={signal} className="flex items-center gap-2">
                                        {i > 0 && <span aria-hidden="true">·</span>}
                                        <span>{signal}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <ConnectionTerminal />
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">what we do</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                Where we help
                            </h2>
                        </FadeIn>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {services.map((service, i) => (
                                <FadeIn key={service.title} delay={i * 0.1}>
                                    <div className="h-full rounded-lg border border-line bg-surface p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/15">
                                        <p className="font-mono text-xs text-signal">
                                            {service.tag}
                                        </p>
                                        <h3 className="mt-2 font-display text-lg text-text">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted">
                                            {service.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">process</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                How a project runs
                            </h2>
                        </FadeIn>

                        <div className="relative mt-14">
                            <ProcessConnectorLine />
                            <ProcessTimeline steps={steps} />
                        </div>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">about</p>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            We’d rather build something boring that keeps working than
                            something clever that impresses for a week and breaks the next.
                            You’re the one who has to live with it — so that’s who we build
                            for.
                        </p>
                        <Link
                            href="/about"
                            className="mt-4 inline-block text-sm text-signal hover:underline"
                        >
                            Learn more about us →
                        </Link>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <div className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                            <span className="h-2 w-2 rounded-full bg-signal" />
                            based in Bismarck, ND
                        </div>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            We’re in Bismarck, North Dakota — not a co-working space in some
                            “tech hub” pretending otherwise. We work with clients across the
                            state, in person if that’s easier or fully remote if it’s not.
                        </p>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                                Ready to talk through your project?
                            </h2>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Grab some time on the calendar and tell us what you’re dealing
                            with. The call’s free, and there’s no pitch waiting at the end of
                            it.
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
