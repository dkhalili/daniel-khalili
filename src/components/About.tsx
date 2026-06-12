"use client";

import { Code, Users, Lightbulb } from "lucide-react";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { stats } from "../data/skills";

const pillars = [
  {
    icon: Code,
    title: "Engineering",
    description:
      "Hands-on technically. I write code, review architecture, and stay close to the systems I lead. AI is a core part of how I work — building with agentic frameworks to drive results at a different scale.",
  },
  {
    icon: Lightbulb,
    title: "Product",
    description:
      "I think in outcomes, not outputs. Every engineering decision connects to a business result. I gather requirements, scope initiatives, and ensure what we build actually moves the needle.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "I care about the people I work with and their growth. Through 1:1s, career development, and structured feedback, I help engineers advance while delivering on ambitious goals.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          title="The"
          highlight="Trifecta"
          description="I sit at the intersection of engineering, product, and leadership. That combination lets me work effectively across every layer of a technology organization."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <TiltCard className="glass rounded-xl p-6 sm:p-8 h-full">
                <div className="relative z-[2]">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <pillar.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">{pillar.title}</h3>
                  <p className="text-sm text-text-body font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="text-center p-6 rounded-xl glass">
                <div className="font-orbit text-3xl sm:text-4xl font-medium text-primary mb-2 glow-text">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
