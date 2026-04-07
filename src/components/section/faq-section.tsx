"use client";
import { useState } from "react";
import { faqs } from "@/lib/config";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py divider bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-16 items-start">

          {/* Left sticky */}
          <div className="lg:sticky lg:top-24">
            <p className="text-label mb-4">FAQ</p>
            <h2 className="heading-display text-[clamp(40px,6vw,64px)] text-foreground mb-6 leading-[0.95]">
              Questions<br />Answered.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Insurance restoration is confusing by design. Here's everything you need to know before we talk.
            </p>
            <a href="#contact" className="btn-primary gap-2 px-6 py-3.5 text-sm">
              Still Have Questions?
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Accordion */}
          <div className="space-y-2" role="list">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  role="listitem"
                  className={`card-base rounded-2xl overflow-hidden transition-all ${isOpen ? "border-primary/30" : ""}`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left group min-h-[60px]"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-[14px] sm:text-[15px] pr-4 transition-colors leading-snug ${isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 text-lg leading-none transition-all duration-200 ${
                        isOpen
                          ? "bg-primary border-primary text-white rotate-45"
                          : "border-white/15 text-muted-foreground group-hover:border-white/30"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-white/5">
                      <p className="text-sm text-muted-foreground leading-[1.75] pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
