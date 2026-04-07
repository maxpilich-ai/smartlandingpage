"use client";
import { useState } from "react";
import { services } from "@/lib/config";

export function DemoSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Every Inch of Your Home, Covered
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Storm damage hits fast. We move faster. From roofing to siding, windows to full restoration — we handle the work and the insurance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
              }`}
            >
              <span>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {services[active].headline}
            </h3>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              {services[active].description}
            </p>
            <ul className="space-y-3 mb-8">
              {services[active].bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all min-h-[44px] text-sm"
            >
              Get Free {services[active].title} Inspection →
            </a>
          </div>

          {/* Visual card */}
          <div className="bg-muted/50 border border-border rounded-2xl p-8 aspect-video flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <span className="text-6xl">{services[active].icon}</span>
            <div className="text-center">
              <p className="font-semibold text-foreground text-lg">{services[active].headline}</p>
              <p className="text-sm text-muted-foreground mt-1">Free inspection • Direct insurance billing</p>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
