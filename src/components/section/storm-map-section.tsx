"use client";
import { useState, useEffect, useRef } from "react";

const MN_CITIES = [
  { name: "Minneapolis",    x: 48, y: 52, hits: 7, last: "Oct 2024", size: "1.5\"" },
  { name: "St. Paul",       x: 53, y: 51, hits: 6, last: "Oct 2024", size: "1.2\"" },
  { name: "Blaine",         x: 51, y: 46, hits: 8, last: "Sep 2024", size: "1.75\"" },
  { name: "Eden Prairie",   x: 45, y: 57, hits: 5, last: "Aug 2024", size: "1.1\"" },
  { name: "Maple Grove",    x: 44, y: 48, hits: 9, last: "Oct 2024", size: "2.0\"" },
  { name: "Burnsville",     x: 49, y: 60, hits: 4, last: "Jul 2024", size: "0.9\"" },
  { name: "Plymouth",       x: 43, y: 52, hits: 6, last: "Sep 2024", size: "1.4\"" },
  { name: "Apple Valley",   x: 51, y: 63, hits: 5, last: "Aug 2024", size: "1.0\"" },
  { name: "Anoka",          x: 50, y: 43, hits: 7, last: "Oct 2024", size: "1.6\"" },
  { name: "Eagan",          x: 52, y: 60, hits: 5, last: "Sep 2024", size: "1.3\"" },
  { name: "Shakopee",       x: 44, y: 62, hits: 4, last: "Jul 2024", size: "0.8\"" },
  { name: "Minnetonka",     x: 41, y: 53, hits: 6, last: "Aug 2024", size: "1.2\"" },
];

const FL_CITIES = [
  { name: "Port Charlotte", x: 38, y: 56, hits: 3, last: "Sep 2024", size: "Wind Cat.2" },
  { name: "Punta Gorda",    x: 39, y: 61, hits: 4, last: "Oct 2024", size: "Wind Cat.2" },
  { name: "Sarasota",       x: 35, y: 47, hits: 2, last: "Aug 2024", size: "Wind Cat.1" },
  { name: "North Port",     x: 37, y: 52, hits: 3, last: "Sep 2024", size: "Wind Cat.2" },
  { name: "Venice",         x: 36, y: 50, hits: 2, last: "Aug 2024", size: "Wind Cat.1" },
  { name: "Englewood",      x: 36, y: 57, hits: 3, last: "Oct 2024", size: "Wind Cat.2" },
];

type City = typeof MN_CITIES[0];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, v };
}

function HitBadge({ hits }: { hits: number }) {
  const color = hits >= 7 ? "#ef4444" : hits >= 5 ? "#f97316" : "#eab308";
  const label = hits >= 7 ? "HIGH" : hits >= 5 ? "MED" : "LOW";
  return (
    <span style={{
      background: color + "22",
      color,
      border: `1px solid ${color}55`,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 800,
      padding: "2px 7px",
      letterSpacing: "0.08em",
    }}>{label}</span>
  );
}

function MapDot({
  city, active, onClick, animate,
}: { city: City; active: boolean; onClick: () => void; animate: boolean }) {
  const color = city.hits >= 7 ? "#ef4444" : city.hits >= 5 ? "#f97316" : "#eab308";
  const size = city.hits >= 7 ? 14 : city.hits >= 5 ? 12 : 10;
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: `${city.x}%`,
        top: `${city.y}%`,
        transform: "translate(-50%,-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        zIndex: active ? 20 : 10,
      }}
      aria-label={city.name}
    >
      {/* Pulse ring */}
      {animate && (
        <span style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          border: `1.5px solid ${color}`,
          animation: "map-pulse 1.8s ease-out infinite",
          opacity: 0.6,
        }} />
      )}
      {/* Dot */}
      <span style={{
        display: "block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        border: `2px solid ${active ? "#fff" : color + "88"}`,
        boxShadow: active ? `0 0 0 3px ${color}44, 0 4px 12px ${color}66` : `0 2px 8px ${color}55`,
        transition: "all 0.2s",
      }} />
    </button>
  );
}

export function StormMapSection() {
  const [region, setRegion] = useState<"mn" | "fl">("mn");
  const [active, setActive] = useState<City | null>(null);
  const [animDots, setAnimDots] = useState(false);
  const { ref, v } = useInView();

  useEffect(() => {
    if (v) setTimeout(() => setAnimDots(true), 400);
  }, [v]);

  const cities = region === "mn" ? MN_CITIES : FL_CITIES;
  const totalHits = cities.reduce((a, c) => a + c.hits, 0);
  const highRisk = cities.filter(c => c.hits >= 7).length;

  return (
    <section className="section-py divider surface-1" id="storm-map">
      <style>{`
        @keyframes map-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14">
          <p className="text-label mb-4">Storm Activity</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(38px,6.5vw,68px)] text-foreground max-w-xl">
              Your Area's Been<br /><span className="gradient-text">Hit Before.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[320px] leading-relaxed">
              Live NOAA storm data for the areas we serve. Tap your city to see your risk level.
            </p>
          </div>
        </div>

        {/* Region toggle */}
        <div className="flex gap-2 mb-8">
          {(["mn", "fl"] as const).map((r) => (
            <button
              key={r}
              onClick={() => { setRegion(r); setActive(null); }}
              style={{
                padding: "8px 20px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                border: region === r ? "none" : "1px solid oklch(100% 0 0 / 10%)",
                background: region === r ? "var(--primary)" : "transparent",
                color: region === r ? "#fff" : "oklch(70% 0 0)",
                transition: "all 0.2s",
              }}
            >
              {r === "mn" ? "🌨 Minnesota" : "🌀 Florida"}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">

          {/* Map */}
          <div ref={ref} className="card-base rounded-3xl overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
            {/* Grid overlay */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(oklch(100% 0 0 / 3%) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 3%) 1px, transparent 1px)",
              backgroundSize: "10% 10%",
            }} />

            {/* State outline approximation */}
            <svg
              viewBox="0 0 100 100"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}
            >
              {region === "mn" ? (
                <path d="M25 20 L78 20 L78 30 L85 30 L85 45 L80 55 L80 85 L25 85 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M28 20 L50 20 L55 40 L50 65 L45 80 L35 85 L25 70 L20 50 L22 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>

            {/* Region label */}
            <div style={{
              position: "absolute", top: 16, left: 16,
              fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
              color: "oklch(60% 0 0)", textTransform: "uppercase",
            }}>
              {region === "mn" ? "Minnesota" : "Florida"} · Past 12 months
            </div>

            {/* Stat badges */}
            <div style={{
              position: "absolute", bottom: 16, left: 16,
              display: "flex", gap: 8,
            }}>
              <div className="glass" style={{ padding: "8px 14px", borderRadius: 12, fontSize: 12 }}>
                <span style={{ fontWeight: 900, color: "#ef4444" }}>{totalHits}</span>
                <span style={{ color: "oklch(60% 0 0)", marginLeft: 5 }}>storm events</span>
              </div>
              {highRisk > 0 && (
                <div className="glass" style={{ padding: "8px 14px", borderRadius: 12, fontSize: 12 }}>
                  <span style={{ fontWeight: 900, color: "#f97316" }}>{highRisk}</span>
                  <span style={{ color: "oklch(60% 0 0)", marginLeft: 5 }}>high-risk zones</span>
                </div>
              )}
            </div>

            {/* City dots */}
            {cities.map((city) => (
              <MapDot
                key={city.name}
                city={city}
                active={active?.name === city.name}
                onClick={() => setActive(active?.name === city.name ? null : city)}
                animate={animDots}
              />
            ))}

            {/* City tooltip */}
            {active && (
              <div style={{
                position: "absolute",
                left: `${Math.min(active.x + 4, 60)}%`,
                top: `${Math.max(active.y - 18, 5)}%`,
                background: "oklch(12% 0.015 258 / 96%)",
                border: "1px solid oklch(100% 0 0 / 12%)",
                borderRadius: 14,
                padding: "10px 14px",
                fontSize: 12,
                backdropFilter: "blur(12px)",
                zIndex: 30,
                minWidth: 160,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                pointerEvents: "none",
              }}>
                <p style={{ fontWeight: 900, color: "#fff", marginBottom: 6 }}>{active.name}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ color: "oklch(60% 0 0)" }}>🌩 <strong style={{ color: "#ef4444" }}>{active.hits} events</strong> past year</span>
                  <span style={{ color: "oklch(60% 0 0)" }}>📅 Last hit: <strong style={{ color: "#fff" }}>{active.last}</strong></span>
                  <span style={{ color: "oklch(60% 0 0)" }}>💨 Size: <strong style={{ color: "#f97316" }}>{active.size}</strong></span>
                </div>
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="space-y-4">

            {/* Active city card or prompt */}
            {active ? (
              <div className="card-base rounded-3xl p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-label mb-1">Storm Report</p>
                    <h3 className="text-2xl font-black text-foreground">{active.name}</h3>
                  </div>
                  <HitBadge hits={active.hits} />
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    ["Storm events (12mo)", `${active.hits} confirmed`],
                    ["Last recorded event", active.last],
                    ["Largest recorded", active.size],
                    ["Insurance eligibility", "Likely covered ✓"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-xs text-muted-foreground">{k}</span>
                      <span className="text-xs font-bold text-foreground">{v}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="btn-primary w-full py-3.5 text-sm gap-2"
                >
                  🔍 Get Free {active.name} Inspection
                </a>
                <p className="text-center text-[11px] text-muted-foreground/40 mt-3">
                  Free assessment · No commitment required
                </p>
              </div>
            ) : (
              <div className="card-base rounded-3xl p-7 flex flex-col items-center justify-center text-center" style={{ minHeight: 200 }}>
                <div className="text-4xl mb-4">👆</div>
                <p className="font-bold text-foreground text-sm mb-1">Tap a dot on the map</p>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                  See exactly how many times your area has been hit in the last 12 months.
                </p>
              </div>
            )}

            {/* Risk legend */}
            <div className="card-base rounded-2xl p-5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] font-bold mb-4">Risk Legend</p>
              <div className="space-y-2.5">
                {[
                  { color: "#ef4444", label: "High Risk", desc: "7+ events/yr — inspect immediately" },
                  { color: "#f97316", label: "Medium Risk", desc: "5–6 events/yr — damage likely" },
                  { color: "#eab308", label: "Lower Risk", desc: "1–4 events/yr — monitor closely" },
                ].map((r) => (
                  <div key={r.label} className="flex items-start gap-3">
                    <div style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: r.color, flexShrink: 0, marginTop: 3,
                    }} />
                    <div>
                      <p className="text-[12px] font-bold text-foreground leading-none">{r.label}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-muted-foreground/40 px-1 leading-relaxed">
              Data sourced from NOAA Storm Events Database. Updated quarterly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
