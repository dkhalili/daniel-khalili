"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  // The bright line draws itself downward as the section scrolls through view
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section id="experience" className="relative py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Journey"
          title="Career"
          highlight="Timeline"
        />

        <div ref={trackRef} className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary origin-top shadow-[0_0_12px_rgba(0,212,255,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />

          {experience.map((exp, expIndex) => (
            <div key={exp.company} className="mb-12 last:mb-0">
              {exp.roles.map((role, roleIndex) => (
                <FadeIn
                  key={`${exp.company}-${roleIndex}`}
                  delay={expIndex * 0.1 + roleIndex * 0.05}
                >
                  <div className="relative pl-12 sm:pl-20 pb-8 last:pb-0 group">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-bg z-10 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(0,212,255,0.8)] transition-all duration-300"
                    />

                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="glass rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-base font-medium">
                            {role.title}
                            {role.type && (
                              <span className="text-primary ml-2 text-sm font-normal">
                                / {role.type}
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-text-muted mt-1">
                            <Briefcase size={13} />
                            <span className="font-medium text-text-body">
                              {exp.company}
                            </span>
                            <span>&middot;</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span className="text-xs text-text-muted font-mono shrink-0">
                          {role.period}
                        </span>
                      </div>

                      <p className="text-sm text-text-body font-light leading-relaxed mb-3">
                        {role.description}
                      </p>

                      <ul className="space-y-1.5">
                        {role.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2 text-sm text-text-body font-light"
                          >
                            <ChevronRight
                              size={14}
                              className="text-primary mt-0.5 shrink-0"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {role.stack && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border">
                          {role.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-medium text-primary bg-primary/8 px-2.5 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
