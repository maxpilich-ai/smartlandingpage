import { siteConfig } from "@/lib/config";

export function CTASection() {
  return (
    <section className="section-py divider surface-1 relative overflow-hidden">
      <div className="glow-orb w-[900px] h-[700px] bg-primary/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

        {/* Recovery counter pill */}
        <div className="inline-flex items-center gap-4 glass rounded-2xl px-6 py-4 mb-12 sm:mb-14">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-foreground">$47,382,100+</p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em]">Recovered from insurance companies</p>
          </div>
        </div>

        {/* Headline */}
        <h2 className="heading-display text-[clamp(52px,10vw,108px)] text-foreground mb-8 sm:mb-10">
          Your Damage<br />
          <span className="shimmer-text">Is Covered.</span>
        </h2>

        <p className="text-muted-foreground text-base sm:text-xl max-w-xl mx-auto mb-12 leading-[1.7]">
          Free drone inspection. 24-hour emergency response. 98% claim approval rate.
          We don't leave until you're made whole.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a href="#contact" className="btn-primary px-9 py-5 text-[15px] sm:text-base gap-2.5 min-h-[58px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Book Free Drone Inspection
          </a>
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-ghost px-9 py-5 text-[15px] sm:text-base gap-2.5 min-h-[58px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.73A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {siteConfig.phone}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
          {["Free Inspection", "Zero Obligation", "24/7 Emergency", "98% Approval Rate", "BBB A+"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
