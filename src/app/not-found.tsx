import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Page not found | Steadfast Protocol",
};

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main>
                <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 text-center md:pt-28">
                    <div className="inline-flex items-center gap-2 font-mono text-sm text-text">
                        <span className="h-2 w-2 rounded-full bg-signal" />
                        status: 404 — route not found
                    </div>
                    <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">
                        This page doesn&apos;t exist.
                    </h1>
                    <p className="mt-6 text-base text-muted md:text-lg">
                        The link may be out of date, or the address was mistyped.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-block rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
                    >
                        Back to home
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
