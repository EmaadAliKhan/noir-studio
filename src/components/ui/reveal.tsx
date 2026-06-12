"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Reveal({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={baseVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

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
