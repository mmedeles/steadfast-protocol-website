import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BackLink from "@/components/BackLink";

type Section = { heading: string; body: string };

export default function LegalPage({
    title,
    sections,
}: {
    title: string;
    sections: Section[];
}) {
    const lastUpdated = new Date().toLocaleDateString();

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
                    <p className="mt-4 font-mono text-xs text-muted">
                        Last updated: {lastUpdated}
                    </p>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-16">
                        <FadeIn>
                            <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
                                <BackLink />

                                <div className="mt-6 rounded-md border border-wheat/40 bg-wheat/10 px-4 py-3 text-sm text-wheat">
                                    // TODO: Replace this placeholder with reviewed legal copy
                                    before publishing.
                                </div>

                                <div className="mt-8 space-y-8">
                                    {sections.map((section) => (
                                        <div key={section.heading}>
                                            <h2 className="font-sans text-base font-semibold text-text">
                                                {section.heading}
                                            </h2>
                                            <p className="mt-2 text-sm text-muted md:text-base">
                                                {section.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
