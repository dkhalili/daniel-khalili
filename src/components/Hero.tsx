"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowDown, Mail, RefreshCw } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ParticleField from "./ParticleField";
import SplitText from "./SplitText";
import TerminalText from "./TerminalText";
import Magnetic from "./Magnetic";
import { LAST_UPDATED } from "../data/meta";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Cinematic exit: the hero sinks, fades, and shrinks as you scroll past it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Aurora blobs drift toward the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 20 });
  const smy = useSpring(my, { stiffness: 50, damping: 20 });
  const blob1X = useTransform(smx, [-0.5, 0.5], [-50, 50]);
  const blob1Y = useTransform(smy, [-0.5, 0.5], [-30, 30]);
  const blob2X = useTransform(smx, [-0.5, 0.5], [40, -40]);
  const blob2Y = useTransform(smy, [-0.5, 0.5], [25, -25]);

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX / rect.width - 0.5);
    my.set(e.clientY / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      id="hero"
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleField />

      {/* Aurora + blueprint grid backdrop */}
      <div className="hero-grid absolute inset-0 z-0 pointer-events-none" />
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="aurora-blob absolute -top-40 left-1/4 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="aurora-blob absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[140px] pointer-events-none [animation-delay:-9s]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg z-10 pointer-events-none" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/8 px-4 py-2 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Engineering Manager
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-text-muted ml-3">
            <RefreshCw size={10} className="text-text-muted" />
            Updated{" "}
            {new Date(LAST_UPDATED + "T00:00:00").toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </motion.div>

        {/* Oversized kinetic name */}
        <h1 className="font-semibold uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(3.2rem,11.5vw,10rem)] mb-8">
          <SplitText text="Daniel" mode="chars" delay={0.25} />
          <br />
          <SplitText
            text="Khalili"
            mode="chars"
            delay={0.55}
            className="gradient-text-animated"
          />
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-base sm:text-lg text-text-body font-light leading-relaxed max-w-lg mb-8"
            >
              Building shared advertising platforms and developing engineers
              into technical leaders through{" "}
              <span className="text-text">engineering</span>,{" "}
              <span className="text-text">product</span>, and{" "}
              <span className="text-text">leadership</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Magnetic>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-bg text-xs font-semibold uppercase tracking-[0.12em] rounded hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-200 min-h-[44px]"
                >
                  <Mail size={14} />
                  Get in Touch
                </a>
              </Magnetic>
              <Magnetic strength={0.45}>
                <a
                  href="https://linkedin.com/in/danielkhalili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200 min-h-[44px]"
                >
                  <LinkedinIcon size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.45}>
                <a
                  href="https://github.com/dkhalili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200 min-h-[44px]"
                >
                  <GithubIcon size={18} />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="hidden lg:block"
          >
            <TerminalText
              lines={[
                { text: "whoami", isCommand: true },
                { text: "Engineering Manager @ Kargo | Activation Infrastructure" },
                { text: "cat skills.txt", isCommand: true },
                { text: "Ad Tech | Agentic AI | Full-Stack" },
                { text: "ls initiatives/", isCommand: true },
                { text: "platform-modernization  ad-manager-mcp  multi-surface-arch" },
                { text: "echo $PHILOSOPHY", isCommand: true },
                { text: "Build teams. Ship products. Lead with code." },
              ]}
              delay={1200}
              typingSpeed={30}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
