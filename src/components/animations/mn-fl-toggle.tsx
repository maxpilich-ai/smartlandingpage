"use client";
import { useState } from "react";

const MN_STATS = [
  { label: "Hail Events/Year",  value: "47" },
  { label: "Avg Storm Claim",   value: "$31K" },
  { label: "Cities Served",     value: "70+" },
  { label: "Response Time",     value: "24hr" },
];
const FL_STATS = [
  { label: "Hurricane Season",  value: "Jun–Nov" },
  { label: "Avg Wind Claim",    value: "$42K" },
  { label: "Cities Served",     value: "11+" },
  { label: "Response Time",     value: "24hr" },
];

export function MnFlToggle() {
  const [region, setRegion] = useState<"mn" | "fl">("mn");
  const stats = region === "mn" ? MN_STATS : FL_STATS;

  return (
    <div className="card-base rounded-2xl p-6 space-y-5">
      {/* Toggle */}
      <div className="flex rounded-xl border border-white/8 overflow-hidden p-1 gap-1" role="group" aria-label="Select region">
        {(["mn", "fl"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
              region === r
                ? "bg-primary text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {r === "mn" ? "🌨️ Minnesota" : "🌴 Florida"}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/4 rounded-xl p-3.5">
            <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{s.label}</p>
            <p className="text-lg font-black text-foreground tabular-nums">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Storm status */}
      <div className="flex items-center gap-3 pt-1">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-muted-foreground">
          {region === "mn" ? "Monitoring NOAA hail data — Twin Cities metro" : "Monitoring NHC tropical weather — Charlotte County"}
        </span>
      </div>
    </div>
  );
}
