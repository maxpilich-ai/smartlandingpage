"use client";
import { useEffect, useRef } from "react";

const SERVICES = [
  { icon: "🏠", label: "Roof",    r: 110, speed: 25, start: 0   },
  { icon: "🪟", label: "Windows", r: 110, speed: 25, start: 90  },
  { icon: "🏗️", label: "Siding",  r: 110, speed: 25, start: 180 },
  { icon: "⛈️", label: "Storm",   r: 110, speed: 25, start: 270 },
  { icon: "🛡️", label: "Shield",  r: 160, speed: 40, start: 45  },
  { icon: "🔨", label: "Build",   r: 160, speed: 40, start: 225 },
  { icon: "💰", label: "Claim",   r: 160, speed: 40, start: 135 },
  { icon: "📋", label: "Inspect", r: 160, speed: 40, start: 315 },
];

export function OrbitingServices() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const t0  = useRef(performance.now());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const icons = el.querySelectorAll<HTMLElement>("[data-orbit]");

    const tick = (now: number) => {
      const elapsed = (now - t0.current) / 1000;
      icons.forEach((icon, i) => {
        const s = SERVICES[i];
        const deg = ((elapsed / s.speed) * 360 + s.start) % 360;
        const rad = (deg * Math.PI) / 180;
        const x = s.r * Math.cos(rad);
        const y = s.r * Math.sin(rad);
        icon.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div ref={ref} className="relative w-80 h-80 mx-auto select-none" aria-hidden>
      {/* Orbit rings */}
      <div className="absolute inset-[40px] rounded-full border border-white/5" />
      <div className="absolute inset-[-10px] rounded-full border border-white/4" />

      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-primary flex flex-col items-center justify-center shadow-2xl shadow-primary/30 z-10">
        <span className="text-white font-black text-lg leading-none">SC</span>
        <span className="text-white/60 text-[8px] tracking-wider uppercase mt-0.5">Est. 2004</span>
      </div>

      {/* Orbiting icons */}
      {SERVICES.map((s, i) => (
        <div
          key={s.label}
          data-orbit
          className="absolute top-1/2 left-1/2 w-11 h-11 rounded-xl border border-white/10 bg-[oklch(12%_0.012_258/90%)] backdrop-blur-sm flex items-center justify-center text-[18px] shadow-lg"
          title={s.label}
        />
      ))}
      {/* Render the emoji content separately so transform doesn't fight layout */}
      {SERVICES.map((s, i) => (
        <div
          key={`e-${s.label}`}
          data-orbit
          className="absolute top-1/2 left-1/2 w-11 h-11 rounded-xl border border-white/10 bg-[oklch(13%_0.012_258)] flex items-center justify-center text-[18px] shadow-lg pointer-events-none"
          aria-hidden
        >
          {s.icon}
        </div>
      ))}
    </div>
  );
}
