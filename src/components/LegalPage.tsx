import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

type Section = { heading: string; body: string };

export default function LegalPage({
    title,
    lastUpdated,
    sections,
}: {
    title: string;
    // Static, human-set date (e.g. "September 18, 2026") — change it only
    // when the page content changes, never derive it from the build.
    lastUpdated: string;
    sections: Section[];
}) {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-12">
                    <FadeIn>
                        <p className="font-mono text-sm text-text">{"// legal"}</p>
                        <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                            {title}
                        </h1>
                    </FadeIn>
                    <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-sm text-text">
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
                            <div className="space-y-8">
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
                                    Questions?
                                </h2>
                                <p className="mt-2 text-sm text-muted md:text-base">
                                    Contact Steadfast Protocol, LLC at{" "}
                                    <a
                                        href="mailto:mmedeles@steadfastprotocol.com"
                                        className="text-signal wrap-anywhere hover:underline"
                                    >
                                        mmedeles@steadfastprotocol.com
                                    </a>{" "}
                                    or{" "}
                                    <a
                                        href="tel:+17022725337"
                                        className="whitespace-nowrap text-signal hover:underline"
                                    >
                                        (702) 272-5337
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
