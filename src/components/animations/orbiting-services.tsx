"use client";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  { icon: "🏠", label: "Roof Replacement",    desc: "GAF certified roofing — storm, age, or damage",     r: 105, speed: 28, start: 0   },
  { icon: "🪟", label: "Windows & Doors",     desc: "Andersen, Pella, Marvin — fully insured installs",  r: 105, speed: 28, start: 90  },
  { icon: "🏗️", label: "Siding",              desc: "James Hardie, LP SmartSide, vinyl & cedar",         r: 105, speed: 28, start: 180 },
  { icon: "⛈️", label: "Storm Damage",        desc: "Emergency response, full documentation, 24/7",      r: 105, speed: 28, start: 270 },
  { icon: "🛡️", label: "Insurance Coverage", desc: "We work with your carrier to maximize your payout",  r: 155, speed: 45, start: 45  },
  { icon: "🔨", label: "Remodeling",          desc: "Kitchen, bath, basement — full interior work",       r: 155, speed: 45, start: 225 },
  { icon: "💰", label: "0% Financing",        desc: "Pay only your deductible — insurance covers rest",   r: 155, speed: 45, start: 135 },
  { icon: "📋", label: "Free Inspection",     desc: "Drone inspection, same week, zero cost to you",      r: 155, speed: 45, start: 315 },
];

export function OrbitingServices() {
  const ref  = useRef<HTMLDivElement>(null);
  const raf  = useRef<number>(0);
  const t0   = useRef(0);
  const [tooltip, setTooltip] = useState<{ idx: number; x: number; y: number } | null>(null);

  useEffect(() => {
    t0.current = performance.now();
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-orbit-idx]");

    const tick = (now: number) => {
      const elapsed = (now - t0.current) / 1000;
      items.forEach((item) => {
        const i = Number(item.dataset.orbitIdx);
        const s = SERVICES[i];
        if (!s) return;
        const deg = ((elapsed / s.speed) * 360 + s.start) % 360;
        const rad = (deg * Math.PI) / 180;
        const x = s.r * Math.cos(rad);
        const y = s.r * Math.sin(rad);
        item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        // Store position for tooltip
        item.dataset.px = String(x);
        item.dataset.py = String(y);
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-80 h-80 mx-auto select-none"
      aria-label="Our services"
      role="img"
    >
      {/* Rings */}
      <div className="absolute inset-[45px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute inset-[-5px] rounded-full border border-white/4 pointer-events-none" />

      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-primary flex flex-col items-center justify-center shadow-2xl shadow-primary/30 z-10 pointer-events-none">
        <span className="text-white font-black text-lg leading-none">SC</span>
        <span className="text-white/60 text-[8px] tracking-wider uppercase mt-0.5">Est. 2004</span>
      </div>

      {/* Active tooltip */}
      {tooltip !== null && (
        <div
          className="pointer-events-none"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + ${SERVICES[tooltip.idx] ? (tooltip.x > 0 ? tooltip.x - 80 : tooltip.x + 50) : 0}px), calc(-50% + ${tooltip.y - 60}px))`,
            zIndex: 50,
            background: "oklch(12% 0.015 258 / 96%)",
            border: "1px solid oklch(100% 0 0 / 12%)",
            borderRadius: 12,
            padding: "10px 13px",
            minWidth: 180,
            maxWidth: 200,
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ fontWeight: 900, fontSize: 12, color: "#fff", marginBottom: 4, lineHeight: 1.2 }}>
            {SERVICES[tooltip.idx]?.label}
          </p>
          <p style={{ fontSize: 11, color: "oklch(60% 0 0)", lineHeight: 1.4 }}>
            {SERVICES[tooltip.idx]?.desc}
          </p>
        </div>
      )}

      {/* Icons */}
      {SERVICES.map((s, i) => (
        <div
          key={s.label}
          data-orbit-idx={i}
          data-px="0"
          data-py="0"
          className="absolute top-1/2 left-1/2 w-11 h-11 rounded-xl border border-white/12 bg-[oklch(13%_0.012_258)] flex items-center justify-center text-[18px] shadow-lg cursor-pointer transition-all duration-150 hover:scale-110 hover:border-primary/50 hover:bg-primary/20"
          style={{ zIndex: tooltip?.idx === i ? 40 : 20 }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            setTooltip({ idx: i, x: Number(el.dataset.px), y: Number(el.dataset.py) });
          }}
          onMouseLeave={() => setTooltip(null)}
          onTouchStart={(e) => {
            const el = e.currentTarget;
            setTooltip({ idx: i, x: Number(el.dataset.px), y: Number(el.dataset.py) });
            setTimeout(() => setTooltip(null), 2500);
          }}
        >
          {s.icon}
        </div>
      ))}
    </div>
  );
}
