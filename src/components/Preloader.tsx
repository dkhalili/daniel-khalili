"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import DkMark from "./DkMark";

const SESSION_KEY = "dk-intro-seen";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const skip = reduced || !!sessionStorage.getItem(SESSION_KEY);
    if (!skip) document.documentElement.style.overflow = "hidden";

    const duration = 1500;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      if (skip) {
        setDone(true);
        return;
      }
      const t = Math.min(1, (now - start) / duration);
      // ease-out so the counter sprints early and lands softly
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setTimeout(() => setDone(true), 250);
      }
    }
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <>
      <noscript>
        <style>{`.dk-preloader{display:none}`}</style>
      </noscript>
      <AnimatePresence>
        {!done && (
          <motion.div
            className="dk-preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <DkMark className="h-16 w-16" />
            </motion.div>

            <div className="h-px w-48 bg-border overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent origin-left"
                style={{ scaleX: progress / 100 }}
              />
            </div>

            <span className="mt-4 font-mono text-xs text-text-muted tabular-nums tracking-[0.3em]">
              {String(progress).padStart(3, "0")}
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-[10px] uppercase tracking-[0.4em] text-text-muted"
            >
              Engineering &middot; Product &middot; Leadership
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
