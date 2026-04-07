"use client";
import { useState } from "react";

export function PricingSection() {
  const [deductible, setDeductible] = useState(1500);

  const monthly = Math.round(deductible / 18);
  const insurancePays = Math.round(deductible * 15); // rough claim value estimate

  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Financing Available
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Does This Cost Me?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            In most cases — only your deductible. Insurance pays everything else. Use the calculator below to see your estimated cost.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Calculator */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="font-bold text-foreground text-lg mb-6">Your Deductible Calculator</h3>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Your deductible</span>
                <span className="font-bold text-foreground text-lg">${deductible.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={5000}
                step={100}
                value={deductible}
                onChange={(e) => setDeductible(Number(e.target.value))}
                className="w-full h-2 rounded-full accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$500</span>
                <span>$5,000</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">You pay</span>
                <span className="font-bold text-foreground">${deductible.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Monthly payment option</span>
                <span className="font-bold text-primary">${monthly}/mo</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-muted-foreground">Estimated insurance pays</span>
                <span className="font-bold text-green-600">${insurancePays.toLocaleString()}+</span>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
              <p className="text-sm font-semibold text-primary">Insurance pays the rest — direct billing</p>
              <p className="text-xs text-muted-foreground mt-1">We never charge more than your insurance approves</p>
            </div>
          </div>

          {/* What's included */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-xl mb-6">What You Get — Zero Extra Charge</h3>
            {[
              { icon: "🚁", title: "Free Drone Inspection", desc: "Full aerial property documentation, same week" },
              { icon: "📋", title: "Insurance Claim Filed For You", desc: "We handle all paperwork, negotiation, and appeals" },
              { icon: "🔨", title: "Premium Materials", desc: "GAF, Hardie, Andersen — no budget substitutions" },
              { icon: "✅", title: "Final Walkthrough", desc: "We don't leave until you sign off on perfect work" },
              { icon: "🛡️", title: "GAF Warranty", desc: "50-year roofing warranty. Transferable to new owners." },
              { icon: "📞", title: "Dedicated Project Manager", desc: "One point of contact from start to finish" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
