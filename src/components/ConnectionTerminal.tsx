"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Segment = { text: string; className?: string };
type Line = { text: string; segments: Segment[] };

const typedLines: Line[] = [
    {
        text: "$ steadfast connect --target=production",
        segments: [
            { text: "$ ", className: "text-signal" },
            { text: "steadfast connect --target=production" },
        ],
    },
    {
        text: "resolving requirements... done",
        segments: [
            { text: "resolving requirements... " },
            { text: "done", className: "text-text" },
        ],
    },
    {
        text: "provisioning environment... done",
        segments: [
            { text: "provisioning environment... " },
            { text: "done", className: "text-text" },
        ],
    },
    {
        text: "running integration checks... done",
        segments: [
            { text: "running integration checks... " },
            { text: "done", className: "text-text" },
        ],
    },
    {
        text: "establishing connection...",
        segments: [{ text: "establishing connection..." }],
    },
    {
        text: "STATUS: ESTABLISHED",
        segments: [
            { text: "STATUS: ", className: "text-text" },
            { text: "ESTABLISHED", className: "text-signal" },
        ],
    },
];

const LAST_INDEX = typedLines.length - 1;
const TYPE_SPEED_MS = 22;
const LINE_PAUSE_MS = 300;
const FINAL_LINE_PAUSE_MS = 750;

export default function ConnectionTerminal() {
    const prefersReducedMotion = useReducedMotion();
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [finished, setFinished]   = useState(false);

    useEffect(() => {
        if (prefersReducedMotion) {
            setLineIndex(LAST_INDEX);
            setCharIndex(typedLines[LAST_INDEX].text.length);
            setFinished(true);
            return;
        }

        if (finished) return;

        const currentLine = typedLines[lineIndex];
        const isLastLine = lineIndex === LAST_INDEX;

        if (charIndex < currentLine.text.length) {
            const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED_MS);
            return () => clearTimeout(t);
        }

        if (isLastLine) {
            const t = setTimeout(() => setFinished(true), 200);
            return () => clearTimeout(t);
        }

        const isBeforeFinalLine = lineIndex === LAST_INDEX - 1;
        const t = setTimeout(
            () => {
                setLineIndex((i) => i + 1);
                setCharIndex(0);
            },
            isBeforeFinalLine ? FINAL_LINE_PAUSE_MS : LINE_PAUSE_MS,
        );
        return () => clearTimeout(t);
    }, [charIndex, lineIndex, finished, prefersReducedMotion]);

    return (
        <div className="rounded-lg border border-line bg-surface font-mono text-sm shadow-lg shadow-black/20">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="text-xs text-muted">session — client_handshake</span>
                <span className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    live
                </span>
            </div>

            <div className="space-y-1.5 px-4 py-5 text-muted">
                {typedLines.map((line, i) => {
                    if (i > lineIndex) return null;

                    const isLastLine = i === LAST_INDEX;
                    const isActive = i === lineIndex && !finished;
                    const isTyping = isActive && charIndex < line.text.length;
                    const showCursor = isActive || (finished && isLastLine);
                    const cursorBlinks = isTyping || (finished && isLastLine);

                    return (
                        <p key={line.text} className={isLastLine ? "pt-2 text-text" : undefined}>
                            {isTyping ? (
                                <span>{line.text.slice(0, charIndex)}</span>
                            ) : (
                                line.segments.map((seg, si) => (
                                    <span key={si} className={seg.className}>
                                        {seg.text}
                                    </span>
                                ))
                            )}
                            {showCursor && (
                                <span
                                    aria-hidden
                                    className={`ml-1 inline-block h-4 w-[0.5em] bg-signal align-middle ${
                                        cursorBlinks ? "animate-pulse" : ""
                                    }`}
                                />
                            )}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
