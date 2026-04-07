import { testimonials } from "@/lib/config";

const STAR = (filled: boolean) => (
  <svg key={String(filled)} width="13" height="13" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke={filled ? "#f59e0b" : "#334155"} strokeWidth="1.5" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function Card({ t }: { t: typeof testimonials[0] }) {
  const sourceColor: Record<string, string> = {
    Google:   "text-yellow-500",
    Facebook: "text-blue-400",
    BBB:      "text-blue-500",
  };
  return (
    <article className="card-base rounded-2xl p-6 sm:p-7 shrink-0 w-[300px] sm:w-[336px] flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => STAR(i < t.rating))}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${sourceColor[t.source] ?? "text-muted-foreground"}`}>
          {t.source}
        </span>
      </div>
      <blockquote className="text-[13.5px] text-foreground/75 leading-[1.7] flex-1">
        "{t.text}"
      </blockquote>
      <footer className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-black text-primary flex-shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-bold text-sm text-foreground block">{t.name}</cite>
          <span className="text-[11px] text-muted-foreground">{t.location}</span>
        </div>
      </footer>
    </article>
  );
}

export function TestimonialSection() {
  const half = Math.ceil(testimonials.length / 2);
  const r1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const r2 = [...testimonials.slice(half),    ...testimonials.slice(half)];

  return (
    <section id="testimonials" className="section-py divider bg-background overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 mb-14">
        <p className="text-label mb-4">Social Proof</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-lg">
            Real Homeowners.<br />Real Settlements.
          </h2>
          <div className="flex gap-3">
            {[
              { n: "163", label: "Google",   color: "text-yellow-500" },
              { n: "22",  label: "Facebook", color: "text-blue-400" },
              { n: "6",   label: "BBB",      color: "text-blue-500" },
            ].map((r) => (
              <div key={r.label} className="card-base-static rounded-xl px-5 py-3 text-center">
                <p className={`text-xl font-black ${r.color}`}>{r.n}</p>
                <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 1 → — clip-path hard-cuts the right edge, no z-index issues */}
      <div className="mb-4 py-2" style={{ clipPath: "inset(0 120px 0 0)" }}>
        <div className="marquee-row" style={{ "--duration": "48s", "--gap": "0px" } as React.CSSProperties} aria-hidden>
          {[0, 1].map((run) => (
            <div key={run} className="flex gap-4 pl-4 shrink-0" style={{ animation: "marquee 48s linear infinite" }}>
              {r1.map((t, i) => <Card key={`${run}-${i}`} t={t} />)}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 ← */}
      <div className="py-2" style={{ clipPath: "inset(0 120px 0 0)" }}>
        <div className="marquee-row" style={{ "--duration": "54s", "--gap": "0px" } as React.CSSProperties} aria-hidden>
          {[0, 1].map((run) => (
            <div key={run} className="flex gap-4 pl-4 shrink-0" style={{ animation: "marquee 54s linear infinite reverse" }}>
              {r2.map((t, i) => <Card key={`${run}-${i}`} t={t} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
