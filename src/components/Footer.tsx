import { Mail, RefreshCw } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { LAST_UPDATED } from "../data/meta";

export default function Footer() {
  const formatted = new Date(LAST_UPDATED + "T00:00:00").toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">
                <span className="text-primary">D</span>
                <span className="text-text">K</span>
              </span>
              <span className="text-xs text-text-muted">
                &copy; {new Date().getFullYear()} Daniel Khalili
              </span>
            </div>
            <span className="hidden sm:block text-text-muted">·</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted">
              <RefreshCw size={10} />
              Last synced {formatted}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:dkhalili93@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 min-h-[44px]"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com/in/danielkhalili"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 min-h-[44px]"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://github.com/dkhalili"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded border border-border text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200 min-h-[44px]"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
