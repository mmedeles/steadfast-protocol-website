import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Services | Steadfast Protocol",
    description:
        "Custom software development, AI tooling and integration, workflow automation, and technical consulting from Steadfast Protocol.",
};

const services = [
    {
        title: "Custom Software Development",
        description:
            "We design and build the software your business runs on — web apps, internal tools, and customer-facing products. We pick the right tools for the job and build for the maintainer who inherits this code, not just the demo.",
        capabilities: [
            "Web applications and internal dashboards",
            "APIs and third-party integrations",
            "Legacy system modernization",
            "Architecture and technical design",
        ],
    },
    {
        title: "AI Tooling & Integration",
        description:
            "We bring AI into your stack where it actually earns its place. That means clear use cases, sound data handling, and integration that fits cleanly into what you already have — not a chatbot bolted on for its own sake.",
        capabilities: [
            "LLM-powered features and internal copilots",
            "Document and data extraction pipelines",
            "AI-assisted workflows and decision support",
            "Integrating AI providers into existing products",
        ],
    },
    {
        title: "Workflow Automation",
        description:
            "We connect the tools your team already uses and remove the manual steps in between — the copy-pasting, the status checks, the repetitive busywork that eats a workday without moving the business forward.",
        capabilities: [
            "Cross-tool integrations and data syncing",
            "Notification and alerting systems",
            "Scheduled jobs and background processing",
            "Internal process automation",
        ],
    },
    {
        title: "Technical Consulting / Dev Shop Collaboration",
        description:
            "We work alongside your team, or another dev shop, as an extra set of hands. That can mean architecture review, code audits, or filling a technical gap on a project that's already underway — without the overhead of a full hire.",
        capabilities: [
            "Architecture and code review",
            "Embedded collaboration with existing teams",
            "Technical due diligence",
            "Fractional technical lead support",
        ],
    },
];

export default function Services() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
                    <p className="font-mono text-xs text-muted">services</p>
                    <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                        What we build
                    </h1>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        Four ways we help teams ship software that holds up — pick one, or
                        combine them as the project calls for it.
                    </p>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-6xl px-6 py-20">
                        <div className="grid gap-12 md:grid-cols-2">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-lg border border-line bg-surface p-8"
                                >
                                    <h2 className="font-display text-xl text-text">
                                        {service.title}
                                    </h2>
                                    <p className="mt-3 text-sm text-muted">
                                        {service.description}
                                    </p>
                                    <ul className="mt-6 space-y-2 border-t border-line pt-6 font-mono text-xs text-muted">
                                        {service.capabilities.map((capability) => (
                                            <li key={capability} className="flex gap-2">
                                                <span className="text-signal">›</span>
                                                {capability}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                            Not sure which one fits?
                        </h2>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Tell us what you're working on and we'll figure out the right
                            scope together.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                        >
                            Start a project
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
