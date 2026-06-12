"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  /** Editorial index, e.g. "01" */
  index: string;
  eyebrow: string;
  /** Plain part of the title */
  title: string;
  /** Word(s) rendered in the animated gradient */
  highlight: string;
  description?: string;
  align?: "center" | "left";
}

function MaskedWord({
  word,
  i,
  gradient,
}: {
  word: string;
  i: number;
  gradient?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
      <motion.span
        className={`inline-block ${gradient ? "gradient-text-animated font-medium" : ""}`}
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.7,
          delay: 0.08 * i,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const titleWords = title.split(" ").filter(Boolean);
  const highlightWords = highlight.split(" ").filter(Boolean);
  const centered = align === "center";

  return (
    <div className={`relative mb-16 ${centered ? "text-center" : ""}`}>
      {/* Ghost index floating behind the heading */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`text-outline pointer-events-none absolute -top-12 select-none font-orbit text-[7rem] font-bold leading-none sm:-top-16 sm:text-[10rem] ${
          centered ? "left-1/2 -translate-x-1/2" : "-left-4"
        }`}
      >
        {index}
      </motion.span>

      <FadeIn>
        <span
          className={`relative inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
        </span>
      </FadeIn>

      <h2 className="relative mt-4 text-3xl font-light sm:text-4xl lg:text-5xl">
        {titleWords.map((w, i) => (
          <span key={`t-${i}`}>
            <MaskedWord word={w} i={i} />{" "}
          </span>
        ))}
        {highlightWords.map((w, i) => (
          <span key={`h-${i}`}>
            <MaskedWord word={w} i={titleWords.length + i} gradient />{" "}
          </span>
        ))}
      </h2>

      {description && (
        <FadeIn delay={0.25}>
          <p
            className={`relative mt-6 max-w-2xl font-light leading-relaxed text-text-body ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
