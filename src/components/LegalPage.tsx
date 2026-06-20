import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

type Section = { heading: string; body: string };

export default function LegalPage({
    title,
    sections,
}: {
    title: string;
    sections: Section[];
}) {
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-12">
                    <FadeIn>
                        <p className="font-mono text-xs text-muted">// legal</p>
                        <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                            {title}
                        </h1>
                    </FadeIn>
                    <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                        <span>Last updated: {lastUpdated}</span>
                        <span aria-hidden="true">·</span>
                        <span>Steadfast Protocol, LLC</span>
                    </div>
                    <Link
                        href="/"
                        className="mt-6 inline-block text-sm text-muted transition-colors hover:text-text"
                    >
                        ← Back to home
                    </Link>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-16">
                        <FadeIn>
                            <div className="rounded-md border border-wheat/30 bg-wheat/10 px-4 py-3 text-sm text-wheat">
                                This document is a placeholder. It has not been reviewed by
                                legal counsel and does not constitute legal advice or create
                                binding obligations. Replace before publishing.
                            </div>

                            <div className="mt-10 space-y-8">
                                {sections.map((section, i) => (
                                    <div key={section.heading}>
                                        <h2 className="font-sans text-base font-semibold text-text">
                                            {i + 1}. {section.heading}
                                        </h2>
                                        <p className="mt-2 text-sm text-muted md:text-base">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 border-t border-line pt-8">
                                <h2 className="font-sans text-base font-semibold text-text">
                                    Questions about this policy?
                                </h2>
                                <p className="mt-2 text-sm text-muted md:text-base">
                                    Reach out at{" "}
                                    <a
                                        href="mailto:mmedeles@steadfastprotocol.com"
                                        className="text-signal hover:underline"
                                    >
                                        mmedeles@steadfastprotocol.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
