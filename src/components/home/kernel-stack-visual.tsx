"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Layers, Sparkles, Zap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STACK_LAYERS = [
  { label: "Grow", color: "rgba(244,184,96,0.12)", border: "rgba(244,184,96,0.35)", y: 0, delay: 0 },
  { label: "Run", color: "rgba(110,231,183,0.12)", border: "rgba(110,231,183,0.35)", y: 28, delay: 0.08 },
  { label: "Build", color: "rgba(217,255,91,0.14)", border: "rgba(217,255,91,0.45)", y: 56, delay: 0.16 },
] as const;

const ORBIT_DOTS = [
  { size: 6, duration: 14, reverse: false, color: "bg-accent" },
  { size: 4, duration: 18, reverse: true, color: "bg-accent-2" },
  { size: 3, duration: 22, reverse: false, color: "bg-accent-3" },
] as const;

// Animated hero illustration — stacked "kernel" layers with orbiting
// particles and a pulsing core. Pure CSS + framer-motion, no canvas.
export function KernelStackVisual({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-[420px] ${className ?? ""}`}
      aria-hidden
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-accent/10 blur-3xl" />

      {/* Pulse rings */}
      {!reduced ? (
        <>
          <span className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 animate-kernel-pulse-ring" />
          <span
            className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15 animate-kernel-pulse-ring"
            style={{ animationDelay: "1.4s" }}
          />
        </>
      ) : null}

      {/* Orbiting dots */}
      <div className="absolute inset-0 flex items-center justify-center">
        {ORBIT_DOTS.map((dot, i) =>
          reduced ? null : (
            <span
              key={i}
              className={`absolute left-1/2 top-1/2 size-0 ${dot.reverse ? "animate-kernel-orbit-reverse" : "animate-kernel-orbit"}`}
              style={{ animationDuration: `${dot.duration}s` }}
            >
              <span className={`block rounded-full ${dot.color}`} style={{ width: dot.size, height: dot.size }} />
            </span>
          )
        )}
      </div>

      {/* Stacked layers */}
      <div className="absolute inset-x-6 bottom-[12%] top-[18%]">
        {STACK_LAYERS.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: layer.y + 40, scale: 0.92 }}
            animate={{ opacity: 1, y: layer.y, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 + layer.delay }}
            className={`absolute inset-x-0 h-[72px] rounded-2xl border backdrop-blur-sm ${
              i === 2 ? "animate-kernel-float z-30" : i === 1 ? "animate-kernel-float-delayed z-20" : "z-10"
            }`}
            style={{
              top: `${i * 28}px`,
              background: layer.color,
              borderColor: layer.border,
            }}
          >
            <div className="flex h-full items-center justify-between px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                Layer {i + 1}
              </span>
              <span className="font-display text-sm font-medium text-ink">{layer.label}</span>
            </div>
            {/* Grid lines inside layer */}
            <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/[0.04]" />
          </motion.div>
        ))}
      </div>

      {/* Core chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
        className="absolute left-1/2 top-[22%] z-40 flex size-20 -translate-x-1/2 items-center justify-center rounded-2xl border border-accent/40 bg-surface shadow-[0_0_40px_-8px_rgba(217,255,91,0.5)]"
      >
        <Cpu size={32} className="text-accent" strokeWidth={1.5} />
        {!reduced ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-lg bg-accent text-ink-inverse"
          >
            <Sparkles size={14} />
          </motion.span>
        ) : null}
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
        className="absolute left-0 top-[58%] z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3 py-1.5 backdrop-blur-md"
      >
        <Layers size={12} className="text-accent-2" />
        <span className="font-mono text-[9px] uppercase tracking-wider text-ink-2">Full stack</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
        className="absolute right-0 top-[38%] z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3 py-1.5 backdrop-blur-md"
      >
        <Zap size={12} className="text-accent" />
        <span className="font-mono text-[9px] uppercase tracking-wider text-ink-2">AI-accelerated</span>
      </motion.div>
    </div>
  );
}
