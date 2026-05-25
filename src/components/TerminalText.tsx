"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TerminalTextProps {
  lines: { text: string; isCommand?: boolean }[];
  typingSpeed?: number;
  delay?: number;
}

export default function TerminalText({
  lines,
  typingSpeed = 40,
  delay = 500,
}: TerminalTextProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || currentLine >= lines.length) return;

    const line = lines[currentLine];

    // Output lines appear instantly
    if (!line.isCommand) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line.text]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 150);
      return () => clearTimeout(timer);
    }

    // Command lines type character by character
    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          if (currentChar === 0) {
            updated.push(line.text[0]);
          } else {
            updated[updated.length - 1] =
              (updated[updated.length - 1] || "") + line.text[currentChar];
          }
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [started, currentLine, currentChar, lines, typingSpeed]);

  const isTyping = currentLine < lines.length && lines[currentLine].isCommand;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="font-mono text-xs sm:text-sm bg-bg-surface/80 border border-border rounded-lg p-4 sm:p-6 backdrop-blur-sm max-w-xl"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-text-muted ml-2 text-[10px]">
          daniel@khalili ~
        </span>
      </div>

      {displayedLines.map((line, i) => {
        // Determine if this displayed line corresponds to a command
        const lineIndex = i;
        const lineIsCommand = lineIndex < lines.length && lines[lineIndex].isCommand;
        const isLastLine = i === displayedLines.length - 1 && isTyping;

        return (
          <div key={i} className="flex gap-2">
            <span className={`shrink-0 ${lineIsCommand ? "text-primary" : "text-accent"}`}>
              {lineIsCommand ? "$" : "→"}
            </span>
            <span className={lineIsCommand ? "text-text" : "text-text-body"}>
              {line}
              {isLastLine && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
                />
              )}
            </span>
          </div>
        );
      })}

      {/* Waiting for next command */}
      {currentLine < lines.length && !isTyping && displayedLines.length > 0 && (
        <div className="flex gap-2">
          <span className="text-primary shrink-0">$</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary align-middle"
          />
        </div>
      )}

      {/* All done — idle cursor */}
      {currentLine >= lines.length && (
        <div className="flex gap-2 mt-1">
          <span className="text-primary shrink-0">$</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary align-middle"
          />
        </div>
      )}
    </motion.div>
  );
}
