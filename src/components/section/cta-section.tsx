"use client";
import { siteConfig } from "@/lib/config";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Counter */}
        <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-3 mb-8">
          <span className="text-2xl">💰</span>
          <div className="text-left">
            <p className="font-bold text-primary text-lg sm:text-2xl">$47,382,100+</p>
            <p className="text-xs text-muted-foreground">Recovered from insurance companies</p>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
          Your Storm Damage Is{" "}
          <span className="bg-gradient-to-r from-[var(--gradient-primary)] to-[var(--gradient-secondary)] bg-clip-text text-transparent">
            Covered
          </span>
          . Let's Prove It.
        </h2>
        <p className="text-muted-foreground text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Free drone inspection. Zero out-of-pocket in most cases. Our team is available 24/7 for storm emergencies. Call now or book online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[56px] flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            🚁 Book Free Drone Inspection
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="bg-card border border-border text-foreground font-bold px-8 py-4 rounded-xl hover:bg-muted transition-all min-h-[56px] flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            📞 {siteConfig.phone}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
          {[
            "✓ Free inspection — no obligation",
            "✓ 24/7 emergency response",
            "✓ 98% claim approval rate",
            "✓ BBB A+ rated since 2010",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
