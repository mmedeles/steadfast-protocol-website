import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectionTerminal from "@/components/ConnectionTerminal";

const trustSignals = [
    "A written proposal after the discovery call",
    "You see what's being built before you commit",
    "You own the code and infrastructure — no rented templates",
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
                            <p className="font-mono text-xs text-muted">
                                custom software · AI tooling · workflow automation
                            </p>
                            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-text md:text-5xl">
                                Software built to hold up under real-world use — not just look
                                good in a demo.
                            </h1>
                            <p className="mt-6 text-base text-muted md:text-lg">
                                Steadfast Protocol designs and ships custom software, AI tooling,
                                and workflow automation for teams who need it to keep working,
                                not just keep impressing.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-6">
                                <Link
                                    href="/contact"
                                    className="rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                                >
                                    Book a free discovery call
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
                        <p className="font-mono text-xs text-muted">what we do</p>
                        <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                            Where we help
                        </h2>

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-lg border border-line bg-surface p-6"
                                >
                                    <p className="font-mono text-xs text-signal">{service.tag}</p>
                                    <h3 className="mt-2 font-display text-lg text-text">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <p className="font-mono text-xs text-muted">process</p>
                        <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                            How a project runs
                        </h2>

                        <div className="relative mt-14">
                            <div className="absolute top-4 right-0 left-0 hidden h-px bg-line md:block" />
                            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
                                {steps.map((step, i) => (
                                    <div
                                        key={step.code}
                                        className="flex items-start gap-4 md:flex-1 md:flex-col md:items-start md:gap-0"
                                    >
                                        <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-ink font-mono text-xs text-signal md:mb-4">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className="font-mono text-xs tracking-wide text-signal">
                                                {step.code}
                                            </p>
                                            <p className="mt-1 text-sm text-muted">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <p className="font-mono text-xs text-muted">about</p>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Steadfast Protocol is built on a simple idea: software should be
                            dependable first, impressive second. We favor plain, maintainable
                            engineering over clever tricks that are hard to support six months
                            from now.
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
                            Steadfast Protocol is based in Bismarck, North Dakota, and works
                            with clients across the state. Meetings happen in person or fully
                            remote, depending on what works best for you.
                        </p>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                            Ready to talk through your project?
                        </h2>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Book a free discovery call and we'll figure out the right scope
                            together.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                        >
                            Book a free discovery call
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
