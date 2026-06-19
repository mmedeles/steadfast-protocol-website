import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Services | Steadfast Protocol",
    description:
        "Custom software development, AI tooling and integration, workflow automation, and technical consulting from Steadfast Protocol.",
};

const services = [
    {
        tag: "// 01",
        title: "Custom Software Development",
        description:
            "This is custom-built software for whatever your business runs on — a customer-facing product, an internal tool, or the system connecting both. We scope the real problem first, then build with technology that fits the job, not whatever's trendy. You get source code you own outright and an architecture sized to your team, not a Silicon Valley playbook. Reach for this when an off-the-shelf tool doesn't fit, or your team has outgrown what spreadsheets and free tiers can handle.",
        goodFit:
            "You need something built around how your business actually works, not the other way around.",
    },
    {
        tag: "// 02",
        title: "AI Tooling & Integration",
        description:
            "AI work that starts with a real bottleneck, not a feature checklist. We integrate language models and AI services into your existing systems — drafting, summarizing, classifying, or extracting data from documents you currently handle by hand. You get a tool that fits into your existing workflow, with sensible guardrails around cost, accuracy, and what the AI is and isn't allowed to decide on its own. This is the right call when a task is repetitive enough to automate but judgment-heavy enough that simple rules won't cut it.",
        goodFit:
            "You have a task that eats hours every week and depends on reading or judgment, not just data entry.",
    },
    {
        tag: "// 03",
        title: "Workflow Automation",
        description:
            "We connect the tools your team already uses and remove the manual steps between them — the copy-pasting between systems, the status checks, the same five-minute task repeated fifty times a week. You get a system that runs in the background and tells you when something needs your attention, instead of the other way around. This is for teams who've hit the point where doing it manually is costing more than it should.",
        goodFit:
            "The same manual process happens on a schedule, and nobody on your team enjoys doing it.",
    },
    {
        tag: "// 04",
        title: "Technical Consulting & Dev Shop Collaboration",
        description:
            "Sometimes you don't need a full project — you need someone who already knows how to build this to look at what you have. We do architecture reviews, code audits, and embedded work alongside your team or another dev shop on a project that's already underway. You get a second set of experienced eyes, a clear read on what's solid and what's risky, and hands-on help filling a gap, without the cost or timeline of a full-time hire.",
        goodFit:
            "You have a team or a dev shop already in motion, and need someone to validate the approach or fill a skills gap.",
    },
];

const steps = [
    {
        code: "HANDSHAKE",
        description:
            "We start with a free discovery call — phone, video, or in person — to understand what you're trying to solve. No pitch deck, no pressure. Just a conversation about what you need and whether we're a good fit to build it.",
    },
    {
        code: "SCOPE",
        description:
            "After the call, you get a written proposal: what we're building, how long it'll take, and a fixed quote. No surprises, and no scope that drifts once work starts.",
    },
    {
        code: "BUILD",
        description:
            "We build to the scope we agreed on, keeping you in the loop as the work progresses rather than disappearing until launch day.",
    },
    {
        code: "DEPLOY",
        description:
            "Once it's ready, we launch it and wire it into the tools and systems you already use, so it fits into your workflow from day one.",
    },
    {
        code: "SUSTAIN",
        description:
            "After launch, we stick around for support and updates. Software that ships and then gets abandoned isn't software that holds up.",
    },
];

export default function Services() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
                    <FadeIn>
                        <p className="font-mono text-xs text-muted">services</p>
                        <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                            What we build
                        </h1>
                    </FadeIn>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        Steadfast Protocol builds custom software, AI tooling, and workflow
                        automation for teams who need their systems to hold up — whether
                        you're shipping a first product or replacing a process that's
                        outgrown spreadsheets and workarounds.
                    </p>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-4xl space-y-10 px-6 py-20">
                        {services.map((service, i) => (
                            <FadeIn key={service.title} delay={i * 0.1}>
                                <div className="rounded-lg border border-line bg-surface p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg hover:shadow-signal/15">
                                    <p className="font-mono text-xs text-signal">
                                        {service.tag}
                                    </p>
                                    <h2 className="mt-3 font-display text-2xl text-text">
                                        {service.title}
                                    </h2>
                                    <p className="mt-4 text-sm text-muted md:text-base">
                                        {service.description}
                                    </p>
                                    <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
                                        <span className="font-mono text-xs tracking-wide text-signal">
                                            good fit if —
                                        </span>{" "}
                                        {service.goodFit}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-4xl px-6 py-20">
                        <FadeIn>
                            <p className="font-mono text-xs text-muted">process</p>
                            <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                                How a project runs
                            </h2>
                        </FadeIn>

                        <ol className="mt-14 space-y-10">
                            {steps.map((step, i) => (
                                <li key={step.code} className="relative">
                                    <FadeIn delay={i * 0.1} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-ink font-mono text-xs text-signal">
                                                {i + 1}
                                            </span>
                                            {i < steps.length - 1 && (
                                                <span className="mt-2 w-px flex-1 bg-line" />
                                            )}
                                        </div>
                                        <div className="pb-2">
                                            <p className="font-mono text-xs tracking-wide text-signal">
                                                {step.code}
                                            </p>
                                            <p className="mt-2 text-sm text-muted md:text-base">
                                                {step.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <FadeIn>
                            <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
                                Ready to talk through what you need?
                            </h2>
                        </FadeIn>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Book a free discovery call, or reach out directly.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/contact"
                                className="group relative inline-block overflow-hidden rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                            >
                                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                <span className="relative">Book a free discovery call</span>
                            </Link>
                            <a
                                href="mailto:mmedeles@steadfastprotocol.com"
                                className="text-sm text-muted transition-colors hover:text-text"
                            >
                                mmedeles@steadfastprotocol.com
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
