"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const orbits = [
  {
    radius: 130,
    duration: 22,
    items: [
      { label: "React", color: "#61DAFB" },
      { label: "TypeScript", color: "#3178C6" },
      { label: "Node.js", color: "#68A063" },
      { label: "Laravel", color: "#FF2D20" },
      { label: "Next.js", color: "#FFFFFF" },
      { label: "Python", color: "#3776AB" },
    ],
  },
  {
    radius: 210,
    duration: 34,
    items: [
      { label: "AWS", color: "#FF9900" },
      { label: "Docker", color: "#2496ED" },
      { label: "K8s", color: "#326CE5" },
      { label: "Redis", color: "#DC382D" },
      { label: "MySQL", color: "#4479A1" },
      { label: "PostgreSQL", color: "#4169E1" },
      { label: "MongoDB", color: "#47A248" },
      { label: "Elastic", color: "#FEC514" },
    ],
  },
  {
    radius: 290,
    duration: 45,
    items: [
      { label: "Claude", color: "#D4A574" },
      { label: "MCP", color: "#00D4FF" },
      { label: "Cursor", color: "#7B61FF" },
      { label: "Copilot", color: "#6CC644" },
      { label: "OpenAI", color: "#10A37F" },
      { label: "CI/CD", color: "#E5484D" },
      { label: "Angular", color: "#DD0031" },
      { label: "Vue.js", color: "#4FC08D" },
      { label: "Neuron AI", color: "#FF6B9D" },
    ],
  },
];

export default function TechOrbit() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6">
              Tech{" "}
              <span className="gradient-text font-medium">Universe</span>
            </h2>
            <p className="text-text-body font-light max-w-2xl mx-auto leading-relaxed">
              The tools, frameworks, and AI systems I work with daily —
              orbiting around engineering leadership at the center.
            </p>
          </div>
        </FadeIn>

        {mounted && <FadeIn>
          <div className="relative mx-auto w-full max-w-[640px] aspect-square hidden sm:block">
            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <span className="text-bg font-bold text-sm">DK</span>
              </motion.div>
            </div>

            {/* Orbit rings */}
            {orbits.map((orbit, orbitIndex) => (
              <div key={orbitIndex}>
                {/* Ring visual */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30"
                  style={{
                    width: orbit.radius * 2,
                    height: orbit.radius * 2,
                  }}
                />

                {/* Orbiting items */}
                <motion.div
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: orbit.radius * 2,
                    height: orbit.radius * 2,
                    marginLeft: -orbit.radius,
                    marginTop: -orbit.radius,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: orbit.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {orbit.items.map((item, itemIndex) => {
                    const angle =
                      (360 / orbit.items.length) * itemIndex * (Math.PI / 180);
                    const x = Math.round(Math.cos(angle) * orbit.radius + orbit.radius);
                    const y = Math.round(Math.sin(angle) * orbit.radius + orbit.radius);

                    return (
                      <motion.div
                        key={item.label}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: x, top: y }}
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: orbit.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div
                          className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                          style={{
                            boxShadow: `0 0 12px ${item.color}20`,
                          }}
                        >
                          <span
                            className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider"
                            style={{ color: item.color }}
                          >
                            {item.label}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </FadeIn>}

        {/* Mobile fallback — grid instead of orbit */}
        <div className="sm:hidden grid grid-cols-3 gap-3">
          {orbits.flatMap((orbit) =>
            orbit.items.map((item) => (
              <FadeIn key={item.label}>
                <div
                  className="flex items-center justify-center py-3 px-2 rounded-lg bg-bg-card border border-border"
                  style={{ boxShadow: `0 0 8px ${item.color}15` }}
                >
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </span>
                </div>
              </FadeIn>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
