"use client";

import { Code, Users, TrendingUp, Cpu } from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

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
        <SectionHeading
          index="03"
          eyebrow="Philosophy"
          title="How I"
          highlight="Lead"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {principles.map((principle, i) => (
            <FadeIn key={principle.number} delay={i * 0.1}>
              <TiltCard
                tilt={5}
                className="glass rounded-xl p-6 sm:p-8 h-full group"
              >
                <div className="relative z-[2] flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="font-orbit text-3xl sm:text-4xl font-light text-primary/20 group-hover:text-primary/50 transition-colors duration-300">
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
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
