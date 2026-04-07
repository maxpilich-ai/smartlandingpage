"use client";
import { useState } from "react";
import { faqs } from "@/lib/config";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Questions We Get Every Day
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Confused about the insurance process? You're not alone. Here are the questions every homeowner asks.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left min-h-[56px]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm sm:text-base text-foreground pr-4">{faq.q}</span>
                <span
                  className={`text-primary text-xl flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Still have questions?{" "}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
