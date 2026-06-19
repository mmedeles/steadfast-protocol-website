import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact | Steadfast Protocol",
    description:
        "Get in touch with Steadfast Protocol by email or phone to schedule a free discovery call.",
};

const expectations = [
    "You reach out by email or phone.",
    "We schedule a free discovery call — your place or a video call.",
    "After the call, you get a written proposal with a fixed quote.",
];

export default function Contact() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
                    <p className="font-mono text-xs text-muted">contact</p>
                    <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                        Let's talk about what you need.
                    </h1>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        The first step is always a free discovery call — no obligation, in
                        person if you're near Bismarck, ND, or remote from anywhere.
                    </p>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-20">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <a
                                href="mailto:mmedeles@steadfastprotocol.com"
                                className="rounded-lg border border-line bg-surface p-8 transition-colors hover:border-signal/40"
                            >
                                <p className="font-mono text-xs text-muted">email</p>
                                <p className="mt-3 text-lg text-text">
                                    mmedeles@steadfastprotocol.com
                                </p>
                            </a>

                            <a
                                href="tel:+17022725337"
                                className="rounded-lg border border-line bg-surface p-8 transition-colors hover:border-signal/40"
                            >
                                <p className="font-mono text-xs text-muted">phone</p>
                                <p className="mt-3 text-lg text-text">(702) 272-5337</p>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="border-t border-line bg-surface/40">
                    <div className="mx-auto max-w-3xl px-6 py-20">
                        <p className="font-mono text-xs text-muted">what to expect</p>
                        <h2 className="mt-3 font-display text-2xl font-semibold text-text md:text-3xl">
                            How it starts
                        </h2>

                        <ul className="mt-8 space-y-3 font-mono text-sm text-muted">
                            {expectations.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-signal">›</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-3xl px-6 py-12 text-center">
                        <p className="text-sm text-muted">
                            Based in Bismarck, ND. Available for in-person meetings across
                            North Dakota and remotely anywhere.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
