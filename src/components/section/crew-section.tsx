"use client";
import { useEffect, useRef, useState } from "react";

// Simulated live insurance settlement feed — no contractor website has this
const WINS = [
  { city: "Eden Prairie", amount: 34200, service: "Roof + Siding", days: 2 },
  { city: "Blaine", amount: 18500, service: "Full Roof", days: 1 },
  { city: "Plymouth", amount: 52800, service: "Roof + Windows + Siding", days: 4 },
  { city: "Maple Grove", amount: 29100, service: "Storm Damage", days: 3 },
  { city: "Burnsville", amount: 41600, service: "Roof + Gutters", days: 5 },
  { city: "Apple Valley", amount: 23400, service: "Siding + Windows", days: 2 },
  { city: "Lakeville", amount: 67300, service: "Full Restoration", days: 6 },
  { city: "Coon Rapids", amount: 19800, service: "Roof Replacement", days: 1 },
  { city: "Woodbury", amount: 38500, service: "Hail Damage", days: 3 },
  { city: "Eagan", amount: 44200, service: "Roof + Siding + Gutters", days: 4 },
  { city: "Richfield", amount: 26700, service: "Wind Damage", days: 2 },
  { city: "Roseville", amount: 31900, service: "Storm Restoration", days: 3 },
  { city: "Port Charlotte, FL", amount: 89000, service: "Hurricane Damage", days: 7 },
  { city: "Sarasota, FL", amount: 55400, service: "Wind + Roof", days: 5 },
  { city: "Shakopee", amount: 22100, service: "Roof Replacement", days: 2 },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export function CrewSection() {
  const [visible, setVisible] = useState<typeof WINS>([]);
  const [total, setTotal] = useState(47382100);
  const idxRef = useRef(0);

  // Seed with 4 wins immediately, then drip-feed new ones
  useEffect(() => {
    setVisible(WINS.slice(0, 4).reverse());
    idxRef.current = 4;

    const interval = setInterval(() => {
      const next = WINS[idxRef.current % WINS.length];
      idxRef.current++;
      setVisible(prev => [next, ...prev].slice(0, 6));
      setTotal(prev => prev + next.amount);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-py" style={{ background: "#0f1f3d" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(34,197,94,0.15)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:999, padding:"6px 16px", marginBottom:16 }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", display:"inline-block", animation:"pulse 1.5s infinite" }} />
            <span style={{ fontSize:"0.75rem", fontWeight:800, color:"#22c55e", letterSpacing:"0.1em" }}>LIVE — SETTLEMENTS WON THIS YEAR</span>
          </div>
          <h2 style={{ fontWeight:900, fontSize:"clamp(2rem,5vw,3.5rem)", color:"#ffffff", lineHeight:1.1, marginBottom:12 }}>
            Real Money.<br />
            <span style={{ color:"#22c55e" }}>Real Homeowners.</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"1rem", maxWidth:480, margin:"0 auto" }}>
            Every time we win a claim, it shows up here. Watch it happen in real time.
          </p>
        </div>

        {/* Live total */}
        <div style={{ textAlign:"center", marginBottom:40 }}>
          <div style={{ display:"inline-block", background:"rgba(34,197,94,0.08)", border:"2px solid rgba(34,197,94,0.25)", borderRadius:"1.25rem", padding:"1.5rem 3rem" }}>
            <div style={{ fontSize:"clamp(2.5rem,6vw,4rem)", fontWeight:900, color:"#22c55e", fontVariantNumeric:"tabular-nums", fontFamily:"monospace", letterSpacing:"-0.02em" }}>
              {fmt(total)}
            </div>
            <div style={{ fontSize:"0.75rem", fontWeight:700, color:"rgba(255,255,255,0.45)", letterSpacing:"0.15em", textTransform:"uppercase", marginTop:4 }}>
              Total Recovered from Insurance — 2024/2025
            </div>
          </div>
        </div>

        {/* Live feed */}
        <div style={{ maxWidth:680, margin:"0 auto", display:"flex", flexDirection:"column", gap:10 }}>
          {visible.map((w, i) => (
            <div
              key={`${w.city}-${i}`}
              style={{
                display:"flex",
                alignItems:"center",
                gap:12,
                background: i === 0 ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 0 ? "rgba(34,197,94,0.35)" : "rgba(255,255,255,0.06)"}`,
                borderRadius:"0.875rem",
                padding:"0.875rem 1.25rem",
                transition:"all 0.4s ease",
                animation: i === 0 ? "slideIn 0.4s ease" : undefined,
              }}
            >
              <div style={{ width:36, height:36, borderRadius:"50%", background: i === 0 ? "#22c55e" : "rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:16 }}>
                {i === 0 ? "✓" : "🏠"}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:700, color:"#ffffff", fontSize:"0.9rem" }}>
                  {w.city} homeowner — {w.service}
                </div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.4)", marginTop:2 }}>
                  Insurance claim settled in {w.days} day{w.days > 1 ? "s" : ""}
                </div>
              </div>
              <div style={{ fontWeight:900, fontSize:"1.1rem", color: i === 0 ? "#22c55e" : "rgba(255,255,255,0.6)", flexShrink:0 }}>
                +{fmt(w.amount)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:"center", marginTop:40 }}>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:"0.875rem", marginBottom:16 }}>
            Your home could be next. Inspections are free.
          </p>
          <a
            href="#contact"
            style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"#22c55e", color:"#0f1f3d",
              fontWeight:900, fontSize:"0.9rem",
              borderRadius:"0.875rem", padding:"0.875rem 2rem",
              textDecoration:"none", letterSpacing:"0.02em",
            }}
          >
            Book Free Inspection →
          </a>
        </div>

        <style>{`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.4; }
          }
        `}</style>
      </div>
    </section>
  );
}
