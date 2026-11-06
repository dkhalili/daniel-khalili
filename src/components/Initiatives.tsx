"use client";

import {
  Bot,
  Layers,
  Rocket,
  Zap,
  Wrench,
  Activity,
  Tv,
  ChartColumn,
} from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { initiatives } from "../data/initiatives";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  bot: Bot,
  layers: Layers,
  rocket: Rocket,
  zap: Zap,
  wrench: Wrench,
  activity: Activity,
  tv: Tv,
  chart: ChartColumn,
};

export default function Initiatives() {
  return (
    <section id="initiatives" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-bg-surface/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Impact"
          title="Notable"
          highlight="Initiatives"
          description="Shared platforms, governed AI workflows, and reliable delivery — selected work across my Tech Lead and Engineering Manager roles."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {initiatives.map((initiative, i) => {
            const Icon = iconMap[initiative.icon] || Zap;
            return (
              <FadeIn key={initiative.title} delay={i * 0.08}>
                <TiltCard className="glass rounded-xl p-6 sm:p-8 h-full">
                  <div className="relative z-[2] flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      {initiative.impact && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/8 px-3 py-1 rounded-full">
                          {initiative.impact}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-medium mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-text-body font-light leading-relaxed mb-4 flex-1">
                      {initiative.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {initiative.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium uppercase tracking-wider text-text-muted bg-bg-surface px-2.5 py-1 rounded"
                        >
                          {tag}
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
