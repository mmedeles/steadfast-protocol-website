import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Steadfast Protocol",
    description:
        "Tell Steadfast Protocol what you're working on, or reach out directly by email or phone.",
};

const secondaryButtonClasses =
    "inline-block rounded-md border border-signal/40 px-4 py-2 text-sm text-signal transition-all duration-200 ease-out hover:border-signal hover:bg-signal/10 hover:brightness-125";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
                    <FadeIn>
                        <h1 className="font-display text-5xl font-semibold leading-tight text-text md:text-6xl">
                            Let&apos;s talk
                            <br />
                            <span className="text-signal">protocol.</span>
                        </h1>
                    </FadeIn>
                    <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
                        Tell us what you&apos;re working on and we&apos;ll get back to you
                        within one business day.
                    </p>
                </section>

                <section className="border-t border-line">
                    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
                            <FadeIn className="lg:col-span-3">
                                <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
                                    <p className="font-mono text-xs text-signal">
                                        // send a message
                                    </p>
                                    <h2 className="mt-3 font-display text-xl text-text md:text-2xl">
                                        What are you trying to build?
                                    </h2>
                                    <div className="mt-6">
                                        <ContactForm />
                                    </div>
                                </div>
                            </FadeIn>

                            <div className="flex flex-col gap-6 lg:col-span-2">
                                <FadeIn delay={0}>
                                    <div className="rounded-lg border border-line bg-surface p-6">
                                        <p className="font-mono text-xs text-signal">
                                            // book a call
                                        </p>
                                        <p className="mt-3 text-sm text-muted">
                                            Prefer to talk first? Book a free 30-minute
                                            discovery call — in person if you&apos;re near
                                            Bismarck, ND, or remote anywhere.
                                        </p>
                                        <a
                                            href="mailto:mmedeles@steadfastprotocol.com"
                                            className={`mt-4 ${secondaryButtonClasses}`}
                                        >
                                            Book a discovery call →
                                        </a>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.1}>
                                    <div className="rounded-lg border border-line bg-surface p-6">
                                        <p className="font-mono text-xs text-signal">
                                            // direct contact
                                        </p>
                                        <div className="mt-4 space-y-4">
                                            <a
                                                href="mailto:mmedeles@steadfastprotocol.com"
                                                className="group flex items-start gap-3 border-l-2 border-transparent pl-3 transition-colors hover:border-signal"
                                            >
                                                <Mail size={24} className="mt-0.5 shrink-0 text-signal" />
                                                <span>
                                                    <p className="font-mono text-xs text-muted">
                                                        email
                                                    </p>
                                                    <p className="mt-1 text-sm text-text transition-colors group-hover:text-signal">
                                                        mmedeles@steadfastprotocol.com
                                                    </p>
                                                </span>
                                            </a>
                                            <a
                                                href="tel:+17022725337"
                                                className="group flex items-start gap-3 border-l-2 border-transparent pl-3 transition-colors hover:border-signal"
                                            >
                                                <Phone size={24} className="mt-0.5 shrink-0 text-signal" />
                                                <span>
                                                    <p className="font-mono text-xs text-muted">
                                                        phone
                                                    </p>
                                                    <p className="mt-1 text-sm text-text transition-colors group-hover:text-signal">
                                                        (702) 272-5337
                                                    </p>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <div className="rounded-lg border border-line bg-surface p-6">
                                        <p className="font-mono text-xs text-signal">
                                            // based in
                                        </p>
                                        <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                                            <MapPin size={20} className="mt-0.5 shrink-0 text-muted" />
                                            <span>
                                                Bismarck, ND
                                                <br />
                                                Available in-person across North Dakota
                                                <br />
                                                or fully remote anywhere.
                                            </span>
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
