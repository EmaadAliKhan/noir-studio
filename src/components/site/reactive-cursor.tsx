"use client";

import * as React from "react";

// ReactiveCursor — a custom soft-blur dot that follows the mouse, scales up
// over interactive elements, and disappears on touch devices. Adds the
// "alive" feel called out in the deep-research design notes.
export function ReactiveCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Bail on touch / coarse pointer devices.
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      // Smoothly lerp the ring towards the mouse.
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      if (interactive) {
        ring.classList.add("is-hover");
      } else {
        ring.classList.remove("is-hover");
      }
    };

    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-2 rounded-full bg-accent mix-blend-difference transition-opacity duration-200"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] size-9 rounded-full border border-accent/70 mix-blend-difference transition-[width,height,opacity,border-color,background-color] duration-200 ease-out [&.is-hover]:size-14 [&.is-hover]:bg-accent/15 [&.is-hover]:border-accent"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
