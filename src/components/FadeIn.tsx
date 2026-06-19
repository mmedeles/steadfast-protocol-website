"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function FadeIn({
    children,
    delay = 0,
    className,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
