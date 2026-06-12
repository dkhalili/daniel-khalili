"use client";

import {
  Users,
  Code,
  Blocks,
  Brain,
  Cloud,
  Database,
} from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  users: Users,
  code: Code,
  blocks: Blocks,
  brain: Brain,
  cloud: Cloud,
  database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Arsenal"
          title="Technical"
          highlight="Skills"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <FadeIn key={category.name} delay={i * 0.08}>
                <TiltCard className="glass rounded-xl p-6 sm:p-8 h-full">
                  <div className="relative z-[2]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-base font-medium">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs text-text-body bg-bg-surface px-3 py-1.5 rounded border border-border hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
