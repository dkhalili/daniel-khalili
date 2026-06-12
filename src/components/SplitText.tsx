"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** "words": blur-fade per word. "chars": masked rise per character. */
  mode?: "words" | "chars";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  mode = "words",
}: SplitTextProps) {
  if (mode === "chars") {
    const chars = text.split("");
    return (
      <span className="inline-block whitespace-nowrap">
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
          >
            <motion.span
              className={`inline-block ${className}`}
              initial={{ y: "115%", rotate: 8 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.3em] ${className}`}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                delay: delay + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
