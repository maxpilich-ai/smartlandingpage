"use client";
import { useEffect, useRef } from "react";

const SERVICES = [
  { icon: "🏠", label: "Roof",    r: 105, speed: 28, start: 0   },
  { icon: "🪟", label: "Windows", r: 105, speed: 28, start: 90  },
  { icon: "🏗️", label: "Siding",  r: 105, speed: 28, start: 180 },
  { icon: "⛈️", label: "Storm",   r: 105, speed: 28, start: 270 },
  { icon: "🛡️", label: "Shield",  r: 155, speed: 45, start: 45  },
  { icon: "🔨", label: "Build",   r: 155, speed: 45, start: 225 },
  { icon: "💰", label: "Claim",   r: 155, speed: 45, start: 135 },
  { icon: "📋", label: "Inspect", r: 155, speed: 45, start: 315 },
];

export function OrbitingServices() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const t0  = useRef(0);

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
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div ref={ref} className="relative w-80 h-80 mx-auto select-none" aria-label="Our services orbit" role="img">
      {/* Rings */}
      <div className="absolute inset-[45px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute inset-[-5px] rounded-full border border-white/4 pointer-events-none" />

      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-primary flex flex-col items-center justify-center shadow-2xl shadow-primary/30 z-10">
        <span className="text-white font-black text-lg leading-none">SC</span>
        <span className="text-white/60 text-[8px] tracking-wider uppercase mt-0.5">Est. 2004</span>
      </div>

      {/* Icons — single element per service */}
      {SERVICES.map((s, i) => (
        <div
          key={s.label}
          data-orbit-idx={i}
          title={s.label}
          className="absolute top-1/2 left-1/2 w-11 h-11 rounded-xl border border-white/12 bg-[oklch(13%_0.012_258)] flex items-center justify-center text-[18px] shadow-lg"
        >
          {s.icon}
        </div>
      ))}
    </div>
  );
}
