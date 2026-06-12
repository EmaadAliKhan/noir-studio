"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Reveal — drop-in scroll-triggered reveal. Subagents wrap any block in
// this for tasteful entrance animations. Respects prefers-reduced-motion
// because framer-motion does so automatically when the user opts out.
const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({
  className,
  delay = 0,
  children,
  as = "div",
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "span";
}) {
  const MotionTag = motion[as as "div"];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={baseVariants}
      transition={{ ...baseVariants.show, delay } as Variants["show"]}
    >
      {children}
    </MotionTag>
  );
}

// RevealStagger — animates children in sequence. Each direct child gets
// the same fade-up with an automatic per-index delay.
export function RevealStagger({
  className,
  children,
  step = 0.07,
}: {
  className?: string;
  children: React.ReactNode;
  step?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step } },
      }}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={baseVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
