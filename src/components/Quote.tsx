"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import DkMark from "./DkMark";

const LINE =
  "I'm not stepping back from the technical side as I grow as a leader. I'm exploring what it means to manage not just people, but {agents} — using agentic workflows to drive results at a different scale.";

function Word({
  children,
  progress,
  range,
  gradient,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  gradient?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${gradient ? "gradient-text-animated font-medium" : ""}`}
    >
      {children}
    </motion.span>
  );
}

/** Words light up one by one as the quote scrolls through the viewport. */
export default function Quote() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = LINE.split(" ");

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="aurora-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-6xl sm:text-7xl text-primary/20 font-serif leading-none">
          &ldquo;
        </span>
        <blockquote
          ref={ref}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-text -mt-6"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const gradient = word.startsWith("{");
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                gradient={gradient}
              >
                {word.replace(/[{}]/g, "")}
              </Word>
            );
          })}
        </blockquote>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-bg font-bold text-xs">
              <DkMark className="h-7 w-7 text-bg" tone="solid" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Daniel Khalili</p>
              <p className="text-xs text-text-muted">
                Engineering Manager @ Kargo
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
