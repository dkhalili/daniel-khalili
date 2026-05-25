"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, RefreshCw } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ParticleField from "./ParticleField";
import SplitText from "./SplitText";
import TerminalText from "./TerminalText";
import { LAST_UPDATED } from "../data/meta";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleField />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg z-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/8 px-4 py-2 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Engineering Manager
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-text-muted ml-3">
                <RefreshCw size={10} className="text-text-muted" />
                Updated{" "}
                {new Date(LAST_UPDATED + "T00:00:00").toLocaleDateString(
                  "en-US",
                  { month: "short", year: "numeric" }
                )}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-6">
              <SplitText text="Daniel" delay={0.3} />
              <br />
              <SplitText
                text="Khalili"
                delay={0.6}
                className="gradient-text font-medium"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-base sm:text-lg text-text-body font-light leading-relaxed max-w-lg mb-8"
            >
              Building high-performance teams and shipping impactful products
              at the intersection of engineering, product, and leadership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-bg text-xs font-semibold uppercase tracking-[0.12em] rounded hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 min-h-[44px]"
              >
                <Mail size={14} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/danielkhalili"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 min-h-[44px]"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://github.com/dkhalili"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 min-h-[44px]"
              >
                <GithubIcon size={18} />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <TerminalText
              lines={[
                { text: "whoami", isCommand: true },
                { text: "Engineering Manager @ Kargo" },
                { text: "cat skills.txt", isCommand: true },
                { text: "Ad Tech | Agentic AI | Full-Stack" },
                { text: "ls initiatives/", isCommand: true },
                { text: "ad-manager-mcp  multi-surface-arch  deployment-transform" },
                { text: "echo $PHILOSOPHY", isCommand: true },
                { text: "Build teams. Ship products. Lead with code." },
              ]}
              delay={800}
              typingSpeed={30}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
