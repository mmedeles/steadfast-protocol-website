"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { STEPS_BASE_DELAY, STEP_STAGGER } from "@/components/ProcessConnectorLine";

type Step = { code: string; description: string };

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: prefersReducedMotion ? 0 : STEPS_BASE_DELAY,
                staggerChildren: prefersReducedMotion ? 0 : STEP_STAGGER,
            },
        },
    };

    const stepVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" },
        },
    };

    const circleVariants: Variants = {
        hidden: { scale: 0.6, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: prefersReducedMotion ? 0 : 0.4,
                ease: prefersReducedMotion ? "linear" : [0.34, 1.56, 0.64, 1],
            },
        },
    };

    return (
        <motion.div
            className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {steps.map((step, i) => (
                <motion.div
                    key={step.code}
                    className="flex items-start gap-4 md:flex-1 md:flex-col md:items-start md:gap-0"
                    variants={stepVariants}
                >
                    <motion.span
                        className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-ink font-mono text-xs text-signal md:mb-4"
                        variants={circleVariants}
                    >
                        {i + 1}
                    </motion.span>
                    <div>
                        <p className="font-mono text-xs tracking-wide text-signal">
                            {step.code}
                        </p>
                        <p className="mt-1 text-sm text-muted">{step.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
