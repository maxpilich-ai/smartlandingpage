"use client";
import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { year: 2004, title: "Founded",            desc: "Pavel starts Smart Construction out of a pickup truck in Blaine, MN. First job: a neighbor's hail-damaged roof.",         icon: "🏠", accent: "#3b82f6" },
  { year: 2007, title: "First Big Storm",     desc: "A major hail outbreak across the Twin Cities. The phone doesn't stop ringing. First real taste of what this company could become.", icon: "⛈️", accent: "#8b5cf6" },
  { year: 2010, title: "BBB A+ Accredited",  desc: "Earned the Better Business Bureau's highest rating. Zero complaints. Kept that record ever since.",                   icon: "⭐", accent: "#f59e0b" },
  { year: 2012, title: "100th Employee Home", desc: "Completed the 100th project for a company employee's family. The team celebrates together.",                              icon: "🎉", accent: "#22c55e" },
  { year: 2015, title: "1,000 Roofs",        desc: "Milestone: one thousand roofs installed across Minnesota. Each one a family who trusted us to get it right.",            icon: "🏆", accent: "#f97316" },
  { year: 2018, title: "GAF Certified",      desc: "Earned GAF certification — authorized to install premium roofing systems with manufacturer-backed warranties.",           icon: "🏅", accent: "#06b6d4" },
  { year: 2019, title: "IICRC Certified",    desc: "Certified restoration firm — expanding beyond roofing into full storm damage restoration.",                              icon: "✅", accent: "#10b981" },
  { year: 2021, title: "Florida Expansion",  desc: "Hurricane season brings Smart Construction to Port Charlotte and Sarasota, FL. The expertise travels south.",             icon: "🌴", accent: "#84cc16" },
  { year: 2023, title: "10,000 Roofs",       desc: "Ten thousand roofs. A decade and a half of storms, claims, crews, and Minnesota winters. Still going.",                  icon: "🔟", accent: "#a855f7" },
  { year: 2024, title: "$47M Recovered",     desc: "Total insurance settlements secured for Minnesota and Florida homeowners crosses $47 million. Real money for real families.", icon: "💚", accent: "#22c55e" },
  { year: 2025, title: "15,000 Roofs",       desc: "Fifteen thousand roofs. 20+ years. The same commitment on job 15,000 as job number one.",                               icon: "🏠", accent: "#3b82f6" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Milestone({ m, i, total }: { m: typeof MILESTONES[0]; i: number; total: number }) {
  const { ref, inView } = useInView(0.15);
  const isLeft = i % 2 === 0;
  const isLast = i === total - 1;

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "flex-start", position: "relative", marginBottom: isLast ? 0 : 0 }}>

      {/* Vertical line */}
      {!isLast && (
        <div style={{
          position: "absolute",
          left: "50%",
          top: 52,
          bottom: -40,
          width: 2,
          background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
          transform: "translateX(-50%)",
        }} />
      )}

      {/* Left content */}
      <div style={{
        flex: 1,
        textAlign: "right",
        paddingRight: 32,
        paddingBottom: 48,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
      }}>
        {isLeft ? (
          <>
            <div style={{ fontWeight: 900, fontSize: "clamp(1rem,2.5vw,1.25rem)", color: "#ffffff", marginBottom: 4 }}>{m.title}</div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 260, marginLeft: "auto" }}>{m.desc}</div>
          </>
        ) : (
          <div style={{ fontWeight: 900, fontSize: "clamp(1.6rem,4vw,2.5rem)", color: m.accent, fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>{m.year}</div>
        )}
      </div>

      {/* Center dot */}
      <div style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${m.accent}30 0%, transparent 70%)`,
        border: `2px solid ${m.accent}60`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 20,
        position: "relative",
        zIndex: 1,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.5)",
        transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`,
      }}>
        {m.icon}
      </div>

      {/* Right content */}
      <div style={{
        flex: 1,
        paddingLeft: 32,
        paddingBottom: 48,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(20px)",
        transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
      }}>
        {!isLeft ? (
          <>
            <div style={{ fontWeight: 900, fontSize: "clamp(1rem,2.5vw,1.25rem)", color: "#ffffff", marginBottom: 4 }}>{m.title}</div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 260 }}>{m.desc}</div>
          </>
        ) : (
          <div style={{ fontWeight: 900, fontSize: "clamp(1.6rem,4vw,2.5rem)", color: m.accent, fontVariantNumeric: "tabular-nums", fontFamily: "monospace" }}>{m.year}</div>
        )}
      </div>
    </div>
  );
}

export function CrewSection() {
  return (
    <section style={{ background: "#080c14", padding: "96px 0 80px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.18em", color: "#3b82f6", textTransform: "uppercase", marginBottom: 12 }}>
            THE STORY
          </p>
          <h2 style={{
            fontWeight: 900,
            fontSize: "clamp(2rem,5vw,3.25rem)",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            22 Years Built<br />
            <span style={{ color: "#3b82f6" }}>One Storm at a Time</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.95rem", maxWidth: 420, margin: "0 auto", lineHeight: 1.7 }}>
            From a pickup truck in Blaine to 15,000 roofs across two states.
            This is how it happened.
          </p>
        </div>

        {/* Timeline */}
        {MILESTONES.map((m, i) => (
          <Milestone key={m.year} m={m} i={i} total={MILESTONES.length} />
        ))}

        {/* Closing */}
        <div style={{ textAlign: "center", marginTop: 24, padding: "32px 0 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", lineHeight: 1.8 }}>
            Still going. Still the same people.<br />Still the same promise.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 24,
              background: "#3b82f6",
              color: "#ffffff",
              fontWeight: 900,
              fontSize: "0.9rem",
              borderRadius: "0.875rem",
              padding: "0.875rem 2rem",
              textDecoration: "none",
            }}
          >
            Start Your Story →
          </a>
        </div>
      </div>
    </section>
  );
}
