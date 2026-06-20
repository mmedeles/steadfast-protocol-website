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
    "w-full rounded-md border border-line bg-surface-2 px-3 py-2 text-sm text-text placeholder:text-muted focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: wire up a real form handler here (e.g. Resend, Formspree)
        // once a backend/email service is connected. This is client-side
        // only for now and does not actually send anything.
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <p className="font-mono text-xs text-signal">// message sent</p>
                <p className="mt-3 text-lg text-text">
                    Message received. We&apos;ll be in touch.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted">
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
                    <label htmlFor="email" className="block font-mono text-xs text-muted">
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
                    <label htmlFor="company" className="block font-mono text-xs text-muted">
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
                    <label htmlFor="topic" className="block font-mono text-xs text-muted">
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
                <label htmlFor="message" className="block font-mono text-xs text-muted">
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

            <button
                type="submit"
                className="group relative inline-flex items-center overflow-hidden rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
            >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative">Send message →</span>
            </button>

            <p className="font-mono text-xs text-muted">
                or reach us directly at{" "}
                <a
                    href="mailto:mmedeles@steadfastprotocol.com"
                    className="text-muted underline-offset-2 transition-colors hover:text-text hover:underline"
                >
                    mmedeles@steadfastprotocol.com
                </a>
            </p>
        </form>
    );
}
