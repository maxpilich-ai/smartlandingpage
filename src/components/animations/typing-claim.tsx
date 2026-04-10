"use client";
import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "$ inspect property --address '1842 Elm St, Blaine MN'", delay: 0,    color: "text-muted-foreground" },
  { text: "✓ Drone inspection scheduled: Tomorrow 9AM",             delay: 800,  color: "text-green-400" },
  { text: "$ document-damage --carrier 'State Farm' --damage 'hail'", delay: 1800, color: "text-muted-foreground" },
  { text: "✓ Xactimate report prepared: 47 line items",               delay: 2600, color: "text-green-400" },
  { text: "$ negotiate --target '$34,200' --adjuster 'reluctant'", delay: 3600, color: "text-muted-foreground" },
  { text: "⚡ Negotiating… presenting Xactimate report…",           delay: 4400, color: "text-yellow-400" },
  { text: "✓ Settlement approved: $34,200",                         delay: 5800, color: "text-green-400" },
  { text: "✓ Your cost: $1,500 deductible",                        delay: 6600, color: "text-primary" },
  { text: "✓ Work begins Monday",                                    delay: 7400, color: "text-primary" },
];

export function TypingClaim() {
  const [shown, setShown] = useState<number[]>([]);
  const [typing, setTyping] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setTyping(i);
        setTimeout(() => setShown(prev => [...prev, i]), 60 * line.text.length + 100);
      }, line.delay);
    });
  }, [started]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/8 bg-[oklch(9%_0.012_258)] overflow-hidden font-mono text-[12px] sm:text-[13px]"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-[oklch(11%_0.012_258)]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="text-[11px] text-muted-foreground/40 ml-2">smart-construction — insurance-claim</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-2 min-h-[280px]">
        {started && LINES.map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            {shown.includes(i) ? (
              <span className={line.color}>{line.text}</span>
            ) : typing === i ? (
              <span className="text-muted-foreground">
                {line.text.split("").map((c, ci) => (
                  <span
                    key={ci}
                    className="inline-block"
                    style={{ animation: `fade-up 0.01s ${ci * 40}ms both` }}
                  >
                    {c}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        ))}
        {started && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" aria-hidden />
        )}
      </div>
    </div>
  );
}
