import FadeIn from "@/components/FadeIn";

// PLACEHOLDER COPY — everything in [BRACKETS] must be personalized by the
// owner before launch. Nothing specific here (years, domains, credentials)
// is a fact until it's filled in; delete any line that doesn't apply.
const bio = [
    "I'm [NAME], [TITLE — what you call yourself, e.g. founder and lead engineer] of Steadfast Protocol. [Confirm or edit: When you work with us, you work with me — the person on the discovery call is the person doing the work.]",
    "I've spent [NUMBER] years building software, much of it in [DOMAINS — e.g. ICS/OT security, NERC CIP compliance]. That work taught me [WHAT IT TAUGHT YOU — e.g. that systems people depend on have to be built to hold up, not just to pass a demo].",
    "I started Steadfast Protocol because [WHY YOU STARTED IT — e.g. businesses here deserve dependable software without big-firm overhead or a vendor who disappears after launch].",
    "[SOMETHING HUMAN — where you're from, why North Dakota, what you care about outside of work.]",
];

const focus = [
    "[NUMBER] years in software development",
    "[DOMAIN — e.g. ICS/OT security]",
    "[DOMAIN — e.g. NERC CIP compliance]",
    "Custom software, AI tooling and workflow automation",
    "Based in Bismarck, ND",
    "[CREDENTIAL OR CERTIFICATION — delete if none]",
];

export default function FounderBio() {
    return (
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
            <FadeIn>
                {/* Photo slot — replace this box with a next/image portrait
                    (roughly 4:5, e.g. 800×1000) when one is available. */}
                <div className="mx-auto aspect-[4/5] w-full max-w-xs rounded-lg border border-line bg-surface p-3 md:mx-0 md:max-w-none">
                    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line bg-surface-2 text-center">
                        <p className="font-mono text-sm text-signal">// photo</p>
                        <p className="font-mono text-sm text-text">[PORTRAIT, 4:5]</p>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="space-y-4 text-base text-text md:text-lg">
                    {bio.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-8 border-t border-line pt-6">
                    <p className="font-mono text-sm text-signal">// focus</p>
                    <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-text sm:grid-cols-2">
                        {focus.map((item) => (
                            <li key={item} className="flex items-baseline gap-2">
                                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-signal" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
        </div>
    );
}
