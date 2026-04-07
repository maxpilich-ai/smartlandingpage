"use client";
import { claimProcess } from "@/lib/config";

export function WorkflowSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Storm to Restored in 4 Steps
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            We've done this 15,000 times. You handle one thing — picking your shingle color. We handle everything else.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {claimProcess.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < claimProcess.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0 -translate-x-4" />
              )}
              <div className="relative z-10 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-sm group">
                <div className="text-xs font-bold text-primary/60 tracking-widest mb-3">
                  STEP {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4">
            <span className="text-2xl">🎯</span>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">98% of our claims get approved</p>
              <p className="text-xs text-muted-foreground">Denied? We appeal and fight until you win.</p>
            </div>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors min-h-[44px] flex items-center whitespace-nowrap"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
