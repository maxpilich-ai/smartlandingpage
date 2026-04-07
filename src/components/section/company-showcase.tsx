"use client";
import { trustLogos } from "@/lib/config";

export function CompanyShowcase() {
  const logos = [...trustLogos, ...trustLogos]; // doubled for seamless loop

  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <p className="text-center text-xs sm:text-sm text-muted-foreground mb-6 tracking-widest uppercase font-medium">
        Certified & Partnered With Industry Leaders
      </p>
      <div className="relative flex overflow-hidden" style={{ "--duration": "30s", "--gap": "2rem" } as React.CSSProperties}>
        <div className="flex animate-[marquee_30s_linear_infinite] gap-8 items-center shrink-0">
          {logos.map((logo, i) => (
            <div
              key={`${logo.abbr}-${i}`}
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 shrink-0 hover:border-primary/30 transition-colors"
            >
              <span
                className="text-xs font-bold tracking-tight"
                style={{ color: logo.color }}
              >
                {logo.abbr}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless scroll */}
        <div className="flex animate-[marquee_30s_linear_infinite] gap-8 items-center shrink-0" aria-hidden>
          {logos.map((logo, i) => (
            <div
              key={`${logo.abbr}-dup-${i}`}
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 shrink-0"
            >
              <span
                className="text-xs font-bold tracking-tight"
                style={{ color: logo.color }}
              >
                {logo.abbr}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
