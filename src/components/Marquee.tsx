"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";

const ITEMS = [
  "Engineering Manager",
  "Agentic AI",
  "Ad Tech",
  "Product Minded",
  "Team Builder",
  "Full-Stack",
  "MCP Pioneer",
  "New York City",
];

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function Row({ baseVelocity }: { baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });
  const directionFactor = useRef(baseVelocity < 0 ? -1 : 1);
  const reduced = useReducedMotion();

  // Each row renders 4 copies of the list, so one copy spans 25% —
  // wrapping x between -25% and 0% loops seamlessly.
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * Math.abs(baseVelocity) * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -Math.sign(baseVelocity) || -1;
    else if (vf > 0) directionFactor.current = Math.sign(baseVelocity) || 1;
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="flex w-max items-center" style={{ x }}>
        {Array.from({ length: 4 }).map((_, copy) => (
          <span key={copy} className="flex items-center">
            {ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center text-2xl font-light uppercase tracking-[0.15em] sm:text-4xl"
              >
                <span className="px-6 text-text/80 sm:px-10">{item}</span>
                <span className="text-primary/60">&#10022;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Scroll-velocity-reactive marquee: speeds up and flips with scroll direction. */
export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative -my-2 select-none overflow-hidden py-10 sm:py-14"
    >
      <div className="rotate-[-1.5deg] space-y-4 border-y border-border/60 py-6">
        <Row baseVelocity={-1.5} />
        <div className="opacity-30">
          <Row baseVelocity={1} />
        </div>
      </div>
    </section>
  );
}
