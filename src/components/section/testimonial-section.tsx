"use client";
import { testimonials } from "@/lib/config";

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const sourceColors: Record<string, string> = {
    BBB: "text-blue-600",
    Google: "text-yellow-600",
    Facebook: "text-blue-500",
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shrink-0 w-72 sm:w-80 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} className="text-yellow-500 text-sm">★</span>
          ))}
        </div>
        <span className={`text-xs font-medium ${sourceColors[t.source] || "text-muted-foreground"}`}>
          via {t.source}
        </span>
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
      <div>
        <p className="font-semibold text-sm text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.location}</p>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const row2 = [...testimonials.slice(half), ...testimonials.slice(half)];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-muted/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Customer Stories
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Real Results From Real Homeowners
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          185+ reviews on Google, BBB, and Facebook. These are real people who trusted us with their biggest investment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {[
            { icon: "⭐", label: "163 Google Reviews", href: "#" },
            { icon: "🏛️", label: "BBB A+ Rated", href: "#" },
            { icon: "👥", label: "22 Facebook Reviews", href: "#" },
          ].map((b) => (
            <a
              key={b.label}
              href={b.href}
              className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg text-sm hover:border-primary/30 transition-colors min-h-[44px]"
            >
              <span>{b.icon}</span>
              <span className="text-muted-foreground">{b.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex overflow-hidden mb-4" style={{ "--duration": "40s", "--gap": "1rem" } as React.CSSProperties}>
        <div className="flex gap-4 animate-[marquee_40s_linear_infinite] shrink-0">
          {row1.map((t, i) => <TestimonialCard key={`r1a-${i}`} t={t} />)}
        </div>
        <div className="flex gap-4 animate-[marquee_40s_linear_infinite] shrink-0" aria-hidden>
          {row1.map((t, i) => <TestimonialCard key={`r1b-${i}`} t={t} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none" />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex overflow-hidden" style={{ "--duration": "45s", "--gap": "1rem" } as React.CSSProperties}>
        <div className="flex gap-4 animate-[marquee_45s_linear_infinite_reverse] shrink-0">
          {row2.map((t, i) => <TestimonialCard key={`r2a-${i}`} t={t} />)}
        </div>
        <div className="flex gap-4 animate-[marquee_45s_linear_infinite_reverse] shrink-0" aria-hidden>
          {row2.map((t, i) => <TestimonialCard key={`r2b-${i}`} t={t} />)}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
