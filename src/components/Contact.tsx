"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          eyebrow="Connect"
          title="Let's"
          highlight="Talk"
          description="Whether it's about engineering leadership, a role, or just connecting — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              <a
                href="mailto:dkhalili93@gmail.com"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-sm text-text group-hover:text-primary transition-colors">
                    dkhalili93@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/danielkhalili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <LinkedinIcon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    LinkedIn
                  </p>
                  <p className="text-sm text-text group-hover:text-primary transition-colors">
                    /in/danielkhalili
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/dkhalili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GithubIcon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    GitHub
                  </p>
                  <p className="text-sm text-text group-hover:text-primary transition-colors">
                    /dkhalili
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-sm text-text">New York City</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-bg text-xs font-semibold uppercase tracking-[0.12em] rounded hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-200 disabled:opacity-50 min-h-[44px]"
                >
                  <Send size={14} />
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Sent!"
                      : "Send Message"}
                </button>
              </Magnetic>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400 mt-4"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400 mt-4"
                >
                  Something went wrong. Try emailing me directly at
                  dkhalili93@gmail.com
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
