"use client";
import { trustLogos } from "@/lib/config";

export function CompanyShowcase() {
  const row = [...trustLogos, ...trustLogos, ...trustLogos];

  return (
    <section className="divider py-10 bg-[var(--surface-1)]">
      <p className="text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/50 mb-7">
        Certified &amp; Partnered With Industry Leaders
      </p>

      {/* Scrolling marquee */}
      <div className="relative" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div
          className="marquee-row"
          style={{ "--duration": "32s", "--gap": "0px" } as React.CSSProperties}
          aria-hidden
        >
          {[0, 1].map((run) => (
            <div
              key={run}
              className="flex gap-3 shrink-0"
              style={{ animation: `marquee 32s linear infinite` }}
            >
              {row.map((logo, i) => (
                <div
                  key={`${run}-${i}`}
                  className="flex items-center gap-2.5 card-base-static px-5 py-3 shrink-0 hover:border-primary/25 transition-colors cursor-default"
                >
                  <span className="text-[11px] font-black tracking-tight" style={{ color: logo.color }}>
                    {logo.abbr}
                  </span>
                  <span className="hidden sm:block text-[11px] text-muted-foreground/60 font-medium whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
