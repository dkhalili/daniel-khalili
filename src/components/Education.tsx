"use client";

import { GraduationCap, Award } from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

const education = [
  {
    icon: GraduationCap,
    institution: "Stony Brook University",
    location: "Stony Brook, NY",
    period: "2011 — 2015",
    description: "Foundation in computer science and engineering principles.",
  },
  {
    icon: Award,
    institution: "General Assembly",
    location: "New York, NY",
    period: "Jul 2015 — Sep 2015",
    description:
      "Web Development Immersive — intensive full-stack engineering bootcamp.",
  },
];

export default function Education() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Foundation"
          title="My"
          highlight="Education"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.institution} delay={i * 0.1}>
              <TiltCard className="glass rounded-xl p-6 sm:p-8 h-full">
                <div className="relative z-[2]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <edu.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-xs text-text-muted font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-base font-medium mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-text-muted mb-3">{edu.location}</p>
                  <p className="text-sm text-text-body font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
