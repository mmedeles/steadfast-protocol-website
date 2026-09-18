"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Plays the CSS timeline animation only while it's on screen. It toggles
// data-play; the keyframes live in ServiceTimeline's stylesheet.
//   no attribute → static completed state (SSR, no JS, reduced motion)
//   "pause"      → animation applied but frozen (off screen)
//   "run"        → animating
export default function TimelinePlayer({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        el.dataset.play = "pause";
        const observer = new IntersectionObserver(
            ([entry]) => {
                el.dataset.play = entry.isIntersecting ? "run" : "pause";
            },
            { threshold: 0.4 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="sp-tl">
            {children}
        </div>
    );
}
