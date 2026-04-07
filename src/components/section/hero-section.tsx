"use client";
import { useEffect, useRef, useState } from "react";
import { heroContent, siteConfig } from "@/lib/config";

function AnimatedCounter({ target, prefix = "", suffix = "", format = "number", duration = 2500 }: {
  target: number; prefix?: string; suffix?: string; format?: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  const formatted = format === "currency"
    ? `$${(count / 1_000_000).toFixed(1)}M`
    : count.toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-primary/10 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {heroContent.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          {heroContent.headline.split("\n").map((line, i) => (
            <span key={i}>
              {i === 1 ? (
                <span className="bg-gradient-to-r from-[var(--gradient-primary)] to-[var(--gradient-secondary)] bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
              {i < heroContent.headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {heroContent.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[52px] flex items-center justify-center text-sm sm:text-base"
          >
            🚁 Book Free Drone Inspection
          </a>
          <a
            href="#process"
            className="bg-muted text-foreground font-semibold px-6 py-4 rounded-xl hover:bg-muted/80 transition-all border border-border min-h-[52px] flex items-center justify-center text-sm sm:text-base"
          >
            {heroContent.secondaryCta} →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {heroContent.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  format={stat.format}
                />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-10 text-xs sm:text-sm text-muted-foreground">
          {["⭐ BBB A+ Rated", "🏅 GAF Master Elite", "✅ IICRC Certified", "📋 MN License BC 63/65/73", "🚁 Free Drone Inspection"].map((item) => (
            <span key={item} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
      </div>

      {/* Sticky phone bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/98 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm text-center min-h-[44px] flex items-center justify-center gap-2"
        >
          📞 Call Now
        </a>
        <a
          href={siteConfig.whatsapp}
          className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl text-sm text-center min-h-[44px] flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}
