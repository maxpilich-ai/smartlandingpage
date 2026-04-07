"use client";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { label: "Roof deck & decking", done: true  },
  { label: "Shingle condition",   done: true  },
  { label: "Flashing & valleys",  done: true  },
  { label: "Gutters & downspouts",done: true  },
  { label: "Siding & fascia",     done: true  },
  { label: "Window seals",        done: false },
  { label: "Drone footage",       done: false },
  { label: "Xactimate report",    done: false },
];

export function InspectionChecklist() {
  const [checked, setChecked] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const tick = () => {
      if (i >= ITEMS.length) return;
      setChecked(c => c + 1);
      i++;
      setTimeout(tick, 350 + Math.random() * 200);
    };
    setTimeout(tick, 400);
  }, [started]);

  const pct = Math.round((Math.min(checked, ITEMS.length) / ITEMS.length) * 100);

  return (
    <div ref={ref} className="card-base rounded-2xl p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-foreground text-sm">Inspection Report</h4>
        <span className="text-[11px] font-bold text-primary">{pct}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Items */}
      <ul className="space-y-2.5" role="list">
        {ITEMS.map((item, i) => {
          const isChecked = i < checked;
          return (
            <li key={item.label} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isChecked
                    ? "bg-primary border-primary"
                    : "border-white/12 bg-transparent"
                }`}
              >
                {isChecked && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={`text-[13px] transition-colors ${isChecked ? "text-foreground/80" : "text-muted-foreground/40"}`}>
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>

      {checked >= ITEMS.length && (
        <div className="flex items-center gap-2 pt-2 border-t border-white/6">
          <span className="text-green-400 text-[11px] font-semibold">✓ Report ready — claim ready to file</span>
        </div>
      )}
    </div>
  );
}
