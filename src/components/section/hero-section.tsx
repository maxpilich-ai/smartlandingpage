"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { heroContent, siteConfig } from "@/lib/config";

function AnimatedCounter({
  target, prefix = "", suffix = "", format = "number", delay = 0,
}: {
  target: number; prefix?: string; suffix?: string; format?: string; delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started.current) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const run = useCallback(() => {
    const duration = 2000;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(ease(p) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (!visible) return;
    started.current = true;
    const t = setTimeout(run, delay);
    return () => clearTimeout(t);
  }, [visible, run, delay]);

  const display =
    format === "currency" ? `$${(count / 1_000_000).toFixed(1)}M`
    : count >= 10000       ? `${Math.floor(count / 1000)}K`
    :                        count.toLocaleString();

  return <span ref={ref} className="tabular-nums">{prefix}{display}{suffix}</span>;
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-[66px]">
      {/* Layered ambient background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="glow-orb w-[900px] h-[700px] bg-primary/10 top-[-200px] left-1/2 -translate-x-1/2" />
      <div className="glow-orb w-[500px] h-[500px] bg-[var(--grad-b)]/8 bottom-[-100px] left-[-150px]" style={{ animationDelay: "3s" }} />
      <div className="glow-orb w-[350px] h-[350px] bg-[var(--grad-c)]/8 top-1/3 right-[-80px]" style={{ animationDelay: "5s" }} />
      {/* Vignette at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

        {/* Eyebrow */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="glass rounded-full flex items-center gap-2.5 px-5 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-foreground/75 tracking-wide">
              Minnesota & Florida's #1 Insurance Restoration Contractor
            </span>
          </div>
        </div>

        {/* Headline — pure editorial weight */}
        <h1 className="heading-display text-[clamp(54px,11vw,116px)] text-foreground mb-8 sm:mb-10">
          <span className="block">We Fix Homes.</span>
          <span className="block gradient-text">Any Damage.</span>
          <span className="block">Done Right.</span>
        </h1>

        {/* Sub */}
        <p className="text-[15px] sm:text-lg text-muted-foreground max-w-[520px] mx-auto mb-10 sm:mb-12 leading-[1.7] font-normal">
          Storm damage? We inspect, document every detail, and work with your insurance company to get your home fully restored.{" "}
          <span className="text-foreground/90 font-medium">You pay only your deductible.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 sm:mb-20">
          <a href="#contact" className="btn-primary px-7 py-4 text-[15px] gap-2.5 min-h-[54px]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Book Free Drone Inspection
          </a>
          <a href="#process" className="btn-ghost px-7 py-4 text-[15px] gap-2 min-h-[54px]">
            How It Works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Stats grid — editorial number blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/6 border border-black/8 rounded-2xl overflow-hidden">
          {heroContent.stats.map((s, i) => (
            <div
              key={i}
              className="surface-1 px-6 py-7 sm:px-8 sm:py-8 flex flex-col items-center text-center hover:bg-[oklch(13.5%_0.011_258)] transition-colors"
            >
              <span className="text-[34px] sm:text-[42px] lg:text-[52px] font-black text-foreground leading-none mb-2 tracking-tight">
                <AnimatedCounter
                  target={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  format={s.format}
                  delay={i * 120}
                />
              </span>
              <span className="text-[11px] sm:text-xs text-muted-foreground font-medium tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Micro trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-9 text-[11px] text-muted-foreground/50 tracking-widest uppercase">
          {["BBB A+", "GAF Certified", "IICRC Certified", "MN Licensed", "20+ Years"].map((t, i) => (
            <span key={t} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline-block w-px h-3 bg-current opacity-30" />}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/35 hover:text-muted-foreground/60 transition-colors group"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase group-hover:text-primary/70 transition-colors">Explore</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden flex border-t border-black/8 bg-[oklch(98%_0.004_250/97%)] backdrop-blur-2xl">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-primary border-r border-black/8 min-h-[56px]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.73A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call Now
        </a>
        <a href="#contact" className="flex-1 flex items-center justify-center py-4 text-sm font-black text-white bg-primary min-h-[56px]">
          Free Inspection
        </a>
      </div>
    </section>
  );
}
