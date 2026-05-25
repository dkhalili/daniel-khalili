"use client";

import { motion } from "framer-motion";
import { Code, Users, TrendingUp, Cpu } from "lucide-react";
import FadeIn from "./FadeIn";

const principles = [
  {
    icon: Users,
    number: "01",
    title: "People First",
    description:
      "Great products come from great teams. I invest in engineers through 1:1s, career conversations, and creating space for growth. When people thrive, the code follows.",
  },
  {
    icon: Code,
    number: "02",
    title: "Stay Technical",
    description:
      "I don't manage from a distance. I review code, debate architecture, and build alongside my team. Credibility comes from staying close to the systems.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Think in Outcomes",
    description:
      "Every sprint, every feature, every refactor connects to a business result. I bridge product requirements and engineering execution to ensure what we ship actually matters.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Embrace AI",
    description:
      "AI isn't a buzzword in my workflow — it's a force multiplier. From agentic systems to AI-powered code reviews, I'm exploring what it means to manage both people and agents.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6">
              How I{" "}
              <span className="gradient-text font-medium">Lead</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {principles.map((principle, i) => (
            <FadeIn key={principle.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative bg-bg-card border border-border rounded-xl p-6 sm:p-8 h-full group hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="text-3xl sm:text-4xl font-light text-primary/20 group-hover:text-primary/40 transition-colors">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <principle.icon size={16} className="text-primary" />
                      </div>
                      <h3 className="text-base font-medium">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-body font-light leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
