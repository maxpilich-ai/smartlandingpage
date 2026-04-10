"use client";
import { trustLogos } from "@/lib/config";

const BASE = [...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos];

function LogoRow() {
  return (
    <>
      {BASE.map((logo, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 card-base-static px-5 py-3 shrink-0 mx-1.5"
        >
          <span className="text-[11px] font-black tracking-tight" style={{ color: logo.color }}>
            {logo.abbr}
          </span>
          <span className="hidden sm:block text-[11px] text-muted-foreground/60 font-medium whitespace-nowrap">
            {logo.name}
          </span>
        </div>
      ))}
    </>
  );
}

export function CompanyShowcase() {
  return (
    <section className="divider py-10 bg-[var(--surface-1)]">
      <p className="text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/50 mb-7">
        Certified &amp; Partnered With Industry Leaders
      </p>

      {/* Outer: clips overflow + fades edges with mask */}
      <div
        className="relative overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 100%)" }}
      >


        {/* Scrolling track */}
        <div
          className="flex w-max"
          style={{ animation: "scroll-x 44s linear infinite" }}
          aria-hidden
        >
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
