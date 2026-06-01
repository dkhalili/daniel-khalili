"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import DkMark from "./DkMark";

export default function Quote() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-5xl sm:text-6xl text-primary/20 font-serif leading-none">
              &ldquo;
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-text -mt-6">
              I&apos;m not stepping back from the technical side as I grow as a
              leader. I&apos;m exploring what it means to manage not just people,
              but{" "}
              <span className="gradient-text font-medium">agents</span> —
              using agentic workflows to drive results at a different scale.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
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
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
