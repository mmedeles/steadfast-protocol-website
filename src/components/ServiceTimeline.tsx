import TimelinePlayer from "@/components/TimelinePlayer";

export type TimelineStep = { label: string; description: string };

// Loop timing, as percentages of one CYCLE. Steps activate evenly from 0%
// to LAST_STEP_AT, each fading in over STEP_IN; everything holds until
// HOLD_UNTIL, then fades out together and the loop restarts.
const CYCLE = "10s";
const LAST_STEP_AT = 72;
const STEP_IN = 4;
const HOLD_UNTIL = 95;

const round = (n: number) => Math.round(n * 100) / 100;

// Keyframes are generated per step count so every step shares one cycle and
// resets on the same frame (animation-delay would stagger the resets).
// Only opacity and transform are animated, so it stays on the compositor.
function timelineCss(n: number) {
    const at = (i: number) => round((LAST_STEP_AT * i) / (n - 1));
    const scope = `.sp-tl .sp-n${n}`;
    let css = `@media (min-width: 64rem) { ${scope} { grid-template-columns: repeat(${n}, minmax(0, 1fr)); } }\n`;

    for (let i = 0; i < n; i++) {
        const start = at(i);
        css += `@keyframes sp-n${n}-s${i} {
  0%${start > 0 ? `, ${start}%` : ""} { opacity: 0; transform: translateY(6px); animation-timing-function: ease-out; }
  ${round(start + STEP_IN)}%, ${HOLD_UNTIL}% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(0); }
}
.sp-tl[data-play] .sp-n${n} > .sp-step-${i} :is(.sp-mark-fill, .sp-copy) { animation: sp-n${n}-s${i} ${CYCLE} linear infinite; }\n`;

        if (i < n - 1) {
            const from = round(start + STEP_IN / 2);
            const to = at(i + 1);
            for (const [axis, fn] of [["v", "scaleY"], ["h", "scaleX"]] as const) {
                css += `@keyframes sp-n${n}-${axis}${i} {
  0%, ${from}% { opacity: 1; transform: ${fn}(0); }
  ${to}%, ${HOLD_UNTIL}% { opacity: 1; transform: ${fn}(1); }
  100% { opacity: 0; transform: ${fn}(1); }
}\n`;
            }
            css += `.sp-tl[data-play] .sp-n${n} > .sp-step-${i} .sp-seg-fill { animation: sp-n${n}-v${i} ${CYCLE} linear infinite; }
@media (min-width: 64rem) { .sp-tl[data-play] .sp-n${n} > .sp-step-${i} .sp-seg-fill { animation-name: sp-n${n}-h${i}; } }\n`;
        }
    }

    // !important: the per-step `animation` shorthand above resets play-state
    // and is more specific, so pausing has to win explicitly.
    css += `.sp-tl[data-play="pause"] :is(.sp-mark-fill, .sp-copy, .sp-seg-fill) { animation-play-state: paused !important; }
@media (prefers-reduced-motion: reduce) { .sp-tl :is(.sp-mark-fill, .sp-copy, .sp-seg-fill) { animation: none !important; } }\n`;
    return css;
}

// Render once per page with every step count in use. Kept separate from
// ServiceTimeline so N timelines don't serialize N copies of the CSS into the
// page payload. Without it, timelines simply show their completed state.
export function ServiceTimelineStyles({ counts }: { counts: number[] }) {
    return (
        <style href="service-timeline" precedence="default">
            {[...new Set(counts)].map(timelineCss).join("")}
        </style>
    );
}

export default function ServiceTimeline({ steps }: { steps: TimelineStep[] }) {
    const n = steps.length;

    return (
        <TimelinePlayer>
            <ol className={`sp-n${n} grid gap-6 lg:gap-4`}>
                {steps.map((step, i) => (
                    <li key={step.label} className={`sp-step-${i} relative flex gap-4 lg:flex-col lg:gap-0`}>
                        <span className="relative z-10 mt-1 h-3 w-3 shrink-0 border border-signal/40 bg-surface lg:mt-0">
                            <span className="sp-mark-fill absolute inset-0 bg-signal" />
                        </span>

                        {i < n - 1 && (
                            <span
                                aria-hidden="true"
                                className="absolute top-5 bottom-[-24px] left-[5px] w-0.5 bg-line lg:top-[5px] lg:right-[-12px] lg:bottom-auto lg:left-4 lg:h-0.5 lg:w-auto"
                            >
                                <span className="sp-seg-fill absolute inset-0 origin-top bg-signal lg:origin-left" />
                            </span>
                        )}

                        <div className="sp-copy lg:mt-4">
                            <p className="font-mono text-sm tracking-wide text-signal">{step.label}</p>
                            <p className="mt-1 text-sm text-text">{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </TimelinePlayer>
    );
}
