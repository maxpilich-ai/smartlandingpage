"use client";
import { useEffect, useRef, useState } from "react";

const CARRIERS = [
  { name: "State Farm",     wins: 847, logo: "🟥" },
  { name: "Allstate",       wins: 634, logo: "🔵" },
  { name: "USAA",           wins: 412, logo: "🟦" },
  { name: "Progressive",    wins: 389, logo: "🟩" },
  { name: "Travelers",      wins: 298, logo: "🟨" },
  { name: "Liberty Mutual", wins: 267, logo: "🟧" },
];

const TOTAL_WINS = CARRIERS.reduce((s, c) => s + c.wins, 0);

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const p = Math.min(1, (Date.now() - start) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(ease * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val.toLocaleString()}</span>;
}

export function CrewSection() {
  return (
    <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>

        {/* Top label */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.35)",
            borderRadius: 999,
            padding: "5px 14px",
            fontSize: "0.7rem",
            fontWeight: 800,
            color: "#ef4444",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            THE OFFICIAL RECORD
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          color: "#ffffff",
          lineHeight: 1.1,
          marginBottom: 8,
        }}>
          Smart Construction
          <span style={{ color: "#ef4444" }}> vs. </span>
          Insurance Companies
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 48 }}>
          Since 2004. 20 years of fights. Same result every time.
        </p>

        {/* Scoreboard */}
        <div style={{
          background: "#111",
          border: "2px solid #222",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 0 80px rgba(239,68,68,0.1), 0 0 0 1px #1a1a1a",
        }}>

          {/* Scoreboard header */}
          <div style={{
            background: "#1a1a1a",
            borderBottom: "1px solid #222",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", fontWeight: 700, marginLeft: 8, letterSpacing: "0.1em" }}>
              CLAIMS WON — MINNESOTA & FLORIDA
            </span>
          </div>

          {/* Main score */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: "40px 32px",
            gap: 20,
            borderBottom: "1px solid #1a1a1a",
          }}>
            {/* Us */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 900, color: "#22c55e", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
                <AnimatedNumber target={TOTAL_WINS} duration={2200} />
              </div>
              <div style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: 8 }}>
                Smart Construction
              </div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: 4, fontWeight: 700, letterSpacing: "0.1em" }}>
                BLAINE, MN — EST. 2004
              </div>
            </div>

            {/* VS */}
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#1a1a1a",
                border: "2px solid #333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.9rem",
              }}>VS</div>
            </div>

            {/* Them */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 900, color: "#ef4444", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
                <AnimatedNumber target={0} duration={0} />
              </div>
              <div style={{ fontWeight: 900, fontSize: "1.1rem", color: "#ffffff", marginTop: 8 }}>
                Insurance Carriers
              </div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: 4, fontWeight: 700, letterSpacing: "0.1em" }}>
                THEY TRIED. WE WON.
              </div>
            </div>
          </div>

          {/* Per-carrier breakdown */}
          <div style={{ padding: "24px 32px" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Breakdown by Carrier
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CARRIERS.map((c) => {
                const pct = Math.round((c.wins / TOTAL_WINS) * 100);
                return (
                  <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 100, flexShrink: 0, fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
                      {c.name}
                    </div>
                    <div style={{ flex: 1, height: 8, background: "#1a1a1a", borderRadius: 4, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: "linear-gradient(90deg, #22c55e, #16a34a)",
                          borderRadius: 4,
                          transition: "width 1.5s ease",
                        }}
                      />
                    </div>
                    <div style={{ width: 36, textAlign: "right", fontSize: "0.8rem", fontWeight: 900, color: "#22c55e", flexShrink: 0 }}>
                      {c.wins}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            background: "#0f0f0f",
            borderTop: "1px solid #1a1a1a",
            padding: "16px 32px",
            textAlign: "center",
            color: "rgba(255,255,255,0.2)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}>
            RECORD UPDATED CONTINUOUSLY · 98% CLAIM APPROVAL RATE · YOUR DEDUCTIBLE ONLY
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#22c55e", color: "#0a0a0a",
              fontWeight: 900, fontSize: "0.95rem",
              borderRadius: "0.875rem", padding: "1rem 2.5rem",
              textDecoration: "none",
            }}
          >
            Get Your Free Inspection →
          </a>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", marginTop: 12 }}>
            Join the 2,847 homeowners who won.
          </p>
        </div>

      </div>
    </section>
  );
}
