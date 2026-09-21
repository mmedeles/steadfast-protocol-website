"use client";

import { useState, type FormEvent } from "react";

const topics = [
    "General Inquiry",
    "Custom Software",
    "AI Tooling",
    "Workflow Automation",
    "Consulting",
    "Partnership",
];

const inputClasses =
    "w-full rounded-md border border-field-line bg-surface-2 px-3 py-2 text-sm text-text placeholder:text-muted focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30";

// Formspree form ID — public by design, so no environment variable.
// Submissions land in the Formspree dashboard for this form and are
// forwarded by email.
const FORMSPREE_FORM_ID = "xdekgoyb";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const submitting = status === "submitting";

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;

        const data = new FormData(e.currentTarget);
        setStatus("submitting");

        // Only "success" once Formspree confirms receipt; anything else —
        // rejected, offline, blocked — keeps the form and its input intact.
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            setStatus(response.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <p className="font-mono text-sm text-signal">{"// message sent"}</p>
                <p className="mt-3 text-lg text-text">
                    Message received. We&apos;ll be in touch.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot: hidden from sight, tab order and screen readers.
                Formspree drops any submission that fills it in. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
            >
                <label htmlFor="_gotcha">Leave this field empty</label>
                <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block font-mono text-sm text-text">
                        Full Name <span className="text-signal">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={`mt-2 ${inputClasses}`}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-mono text-sm text-text">
                        Email <span className="text-signal">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={`mt-2 ${inputClasses}`}
                    />
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="company" className="block font-mono text-sm text-text">
                        Company
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        className={`mt-2 ${inputClasses}`}
                    />
                </div>
                <div>
                    <label htmlFor="topic" className="block font-mono text-sm text-text">
                        Topic
                    </label>
                    <div className="relative mt-2">
                        <select
                            id="topic"
                            name="topic"
                            defaultValue={topics[0]}
                            className={`${inputClasses} appearance-none pr-8`}
                        >
                            {topics.map((topic) => (
                                <option key={topic} value={topic}>
                                    {topic}
                                </option>
                            ))}
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-muted">
                            ▾
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block font-mono text-sm text-text">
                    Message <span className="text-signal">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`mt-2 resize-none ${inputClasses}`}
                />
            </div>

            {status === "error" && (
                <div
                    role="alert"
                    className="rounded-md border border-line bg-surface-2 px-4 py-3 text-sm text-text"
                >
                    <p className="font-mono text-sm text-signal">{"// send failed"}</p>
                    <p className="mt-2">
                        That message didn&apos;t go through. Your text is still here, so you can
                        try again — or reach us directly at{" "}
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
            )}

            <button
                type="submit"
                disabled={submitting}
                aria-busy={submitting}
                className="group relative inline-flex items-center overflow-hidden rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-signal"
            >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative">{submitting ? "Sending…" : "Send message →"}</span>
            </button>

            <p className="font-mono text-sm text-text">
                or reach us directly at{" "}
                <a
                    href="mailto:mmedeles@steadfastprotocol.com"
                    className="text-text underline-offset-2 transition-colors wrap-anywhere hover:text-signal hover:underline"
                >
                    mmedeles@steadfastprotocol.com
                </a>
            </p>
        </form>
    );
}
