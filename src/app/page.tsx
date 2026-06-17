import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectionTerminal from "@/components/ConnectionTerminal";

const services = [
    {
        title: "Custom Software Development",
        description:
            "We design and build the systems your business runs on — internal tools, customer-facing products, and everything that needs to keep working long after launch.",
    },
    {
        title: "AI Tooling & Integration",
        description:
            "We bring AI into your stack where it actually earns its place — automating decisions, surfacing insights, and integrating cleanly with what you already have.",
    },
    {
        title: "Workflow Automation",
        description:
            "We connect your tools and remove the manual busywork in between, so your team spends time on the work that actually needs a person.",
    },
    {
        title: "Technical Consulting / Dev Shop Collaboration",
        description:
            "We work alongside your team or another dev shop as an extra set of hands — technical guidance and execution without the overhead of a full hire.",
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
                                    Start a project
                                </Link>
                                <Link
                                    href="/services"
                                    className="text-sm text-muted transition-colors hover:text-text"
                                >
                                    See what we build →
                                </Link>
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
                                    <h3 className="font-display text-lg text-text">
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
                    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
                        <p className="font-mono text-xs text-muted">about</p>
                        <p className="mt-4 text-base text-muted md:text-lg">
                            Steadfast Protocol is a software consultancy based in North Dakota,
                            built on the idea that a system you can depend on beats one that
                            just impresses in a demo. That's the standard behind everything we
                            build.
                        </p>
                        <Link
                            href="/about"
                            className="mt-4 inline-block text-sm text-signal hover:underline"
                        >
                            Learn more about us →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}