"use client";
import { useState } from "react";

export function PricingSection() {
  const [ded, setDed] = useState(1500);
  const monthly     = Math.round(ded / 18);
  const insEstimate = Math.round(ded * 14);

  const pct = ((ded - 500) / 4500) * 100;
  const trackStyle = {
    background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, oklch(100% 0 0 / 9%) ${pct}%, oklch(100% 0 0 / 9%) 100%)`,
  };

  return (
    <section id="financing" className="section-py divider surface-1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p className="text-label mb-4">Financing</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-md">
              What Does This<br />Cost Me?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[340px] leading-relaxed">
              In most cases — only your deductible. Insurance pays the rest, billed directly.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 items-start">
          {/* Calculator */}
          <div className="card-base rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="glow-orb w-64 h-64 bg-primary/8 top-0 right-0" />
            <div className="relative">
              <h3 className="font-bold text-foreground text-lg mb-8">Deductible Calculator</h3>

              {/* Value display */}
              <div className="mb-6">
                <div className="flex items-end justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Your deductible</span>
                  <span className="text-[42px] font-black text-foreground tabular-nums leading-none">
                    ${ded.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={500} max={5000} step={100}
                  value={ded}
                  onChange={(e) => setDed(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full cursor-pointer accent-primary"
                  style={trackStyle}
                  aria-label="Deductible amount"
                />
                <div className="flex justify-between text-[11px] text-muted-foreground/40 mt-2">
                  <span>$500</span><span>$5,000</span>
                </div>
              </div>

              {/* Breakdown rows */}
              <div className="space-y-0 mb-8 border border-white/6 rounded-2xl overflow-hidden divide-y divide-white/5">
                {[
                  { label: "You pay",           value: `$${ded.toLocaleString()}`,       sub: "One-time deductible",            highlight: false },
                  { label: "Monthly option",    value: `$${monthly}/mo`,                 sub: "0% interest financing available", highlight: false },
                  { label: "Insurance pays",    value: `$${insEstimate.toLocaleString()}+`, sub: "Billed directly to your carrier", highlight: true  },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-[13px] font-semibold text-foreground">{row.label}</p>
                      <p className="text-[11px] text-muted-foreground">{row.sub}</p>
                    </div>
                    <span className={`text-[17px] font-black tabular-nums ${row.highlight ? "text-green-400" : "text-foreground"}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary w-full py-4 text-sm gap-2">
                Book Free Inspection — No Commitment
              </a>
            </div>
          </div>

          {/* Included items */}
          <div>
            <p className="text-label mb-5">What's Included — Always</p>
            <div className="space-y-3">
              {[
                { icon: "🚁", t: "Free Drone Inspection",     d: "Full aerial documentation. Same week, no cost." },
                { icon: "📋", t: "Full Claim Documentation",   d: "Paperwork, Xactimate estimates, negotiation, appeals." },
                { icon: "🔨", t: "Premium Materials Only",    d: "GAF, James Hardie, Andersen — no budget cuts." },
                { icon: "✅", t: "Final Walkthrough",         d: "We don't leave until you're completely satisfied." },
                { icon: "🛡️", t: "GAF System Warranty",      d: "Up to 50 years. Fully transferable to new owners." },
                { icon: "👤", t: "Dedicated Project Manager", d: "One person. One number. Full accountability." },
              ].map((item) => (
                <div key={item.t} className="card-base rounded-2xl p-5 flex items-start gap-4">
                  <div className="icon-box w-10 h-10 text-[18px] flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-bold text-[13px] text-foreground mb-0.5">{item.t}</p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
