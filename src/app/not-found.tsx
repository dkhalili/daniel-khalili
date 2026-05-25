import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-light gradient-text mb-4">
          404
        </h1>
        <p className="text-lg text-text-body mb-8">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-bg text-xs font-semibold uppercase tracking-[0.12em] rounded hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 min-h-[44px]"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
