"use client";
import { useState } from "react";
import { services } from "@/lib/config";

const CHECK = (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2 6l3 3 5-5" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export function DemoSection() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section id="services" className="section-py divider bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <p className="text-label mb-4">Services</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-sm">
              Every Inch,<br />Covered.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[340px] leading-relaxed">
              Roof, siding, windows, full storm restoration. We document, claim, and build. You approve the shingle color.
            </p>
          </div>
        </div>

        {/* Tab rail */}
        <div className="flex gap-1.5 p-1.5 card-base-static mb-10 overflow-x-auto" role="tablist" aria-label="Service type">
          {services.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`service-panel-${i}`}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all min-h-[44px] flex-shrink-0 ${
                active === i
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/6"
              }`}
            >
              <span className="text-[16px]" aria-hidden>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          id={`service-panel-${active}`}
          role="tabpanel"
          className="grid lg:grid-cols-[1fr_1.05fr] gap-8 items-start"
        >
          {/* Text column */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-4 leading-tight">
              {svc.headline}
            </h3>
            <p className="text-muted-foreground text-[15px] mb-8 leading-relaxed">{svc.description}</p>

            <ul className="space-y-3 mb-10" role="list">
              {svc.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="check-icon">{CHECK}</div>
                  <span className="text-sm text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary gap-2 px-6 py-3.5 text-sm">
              Get Free {svc.title} Inspection {ARROW}
            </a>
          </div>

          {/* Visual card */}
          <div className="card-base rounded-3xl p-8 sm:p-10 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/7 via-transparent to-transparent pointer-events-none rounded-3xl" />
            <div className="glow-orb w-48 h-48 bg-primary/12 top-2 right-2" />

            <div className="relative">
              <div className="text-[72px] mb-5 leading-none select-none" aria-hidden>{svc.icon}</div>
              <h4 className="text-xl font-black text-foreground mb-1.5 tracking-tight">{svc.headline}</h4>
              <p className="text-sm text-muted-foreground">Insurance billed directly · No upfront cost</p>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-2.5">
              {[
                { label: "Avg. Claim",    value: "$28,400"        },
                { label: "Your Cost",     value: "Deductible only"},
                { label: "Timeline",      value: "2–4 weeks"      },
                { label: "Approval Rate", value: "98%"            },
              ].map((item) => (
                <div key={item.label} className="bg-white/4 rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
