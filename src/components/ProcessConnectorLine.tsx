"use client";

import { motion, useReducedMotion } from "framer-motion";

export const LINE_DELAY = 0.3;
export const LINE_DURATION = 0.6;
export const STEPS_BASE_DELAY = LINE_DELAY + LINE_DURATION;
export const STEP_STAGGER = 0.15;

export default function ProcessConnectorLine() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className="absolute top-4 right-0 left-0 hidden h-px origin-left bg-line md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: prefersReducedMotion ? 0 : LINE_DURATION,
                delay: prefersReducedMotion ? 0 : LINE_DELAY,
                ease: "easeInOut",
            }}
        />
    );
}
