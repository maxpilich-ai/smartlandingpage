import { claimProcess } from "@/lib/config";

export function WorkflowSection() {
  return (
    <section id="process" className="section-py divider surface-1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-label mb-4">The Process</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-sm">
              Four Steps.<br />Zero Stress.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[340px] leading-relaxed">
              We've completed 15,000+ projects. Our process is built to maximize your payout and eliminate every headache.
            </p>
          </div>
        </div>

        {/* Steps — row layout with editorial step numbers */}
        <div className="border border-white/6 rounded-3xl overflow-hidden divide-y divide-white/5">
          {claimProcess.map((step, i) => (
            <div
              key={step.step}
              className="grid sm:grid-cols-[90px_1fr_auto] items-center gap-6 sm:gap-10 bg-card/50 hover:bg-card/80 px-7 py-8 sm:py-10 transition-colors group"
            >
              {/* Big editorial number */}
              <div
                className="text-[72px] sm:text-[88px] font-black leading-none select-none text-white/5 group-hover:text-white/10 transition-colors"
                aria-hidden
              >
                {step.step}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl" aria-hidden>{step.icon}</span>
                  <h3 className="text-[17px] sm:text-xl font-black text-foreground tracking-tight">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
              </div>

              {/* Arrow / done indicator */}
              <div className="hidden sm:block">
                {i < claimProcess.length - 1 ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20 group-hover:text-primary/40 transition-colors" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8l4 4 6-6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          {[
            { val: "98%",  label: "Claim Approval Rate" },
            { val: "24hr", label: "Inspection Response" },
            { val: "$0",   label: "If Claim Is Denied"  },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-primary tabular-nums">{s.val}</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
