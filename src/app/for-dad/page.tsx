"use client";
import { useEffect, useState } from "react";

const WORDS = [
  "22 years.", "15,000 roofs.", "Thousands of families.",
  "Every storm.", "Every claim.", "Every fight.",
  "You never quit.",
];

export default function ForDad() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (step < WORDS.length) {
      const t = setTimeout(() => setStep(s => s + 1), 1400);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setDone(true), 400);
      return () => clearTimeout(t);
    }
  }, [step, done]);

  return (
    <div style={{
      minHeight: "100dvh",
      background: "#080c14",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>

      {/* Intro — word by word */}
      {!done && (
        <div style={{ textAlign: "center", minHeight: 80 }}>
          <p style={{
            fontSize: "clamp(1.4rem,4vw,2rem)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.85)",
            opacity: step > 0 ? 1 : 0,
            transition: "opacity 0.6s ease",
            letterSpacing: "-0.01em",
          }}>
            {WORDS[step - 1] ?? ""}
          </p>
        </div>
      )}

      {/* Main message — fades in after words */}
      <div style={{
        maxWidth: 560,
        textAlign: "center",
        opacity: done ? 1 : 0,
        transform: done ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}>
        {/* Icon */}
        <div style={{ fontSize: 56, marginBottom: 24 }}>🏠</div>

        <h1 style={{
          fontSize: "clamp(1.8rem,5vw,2.75rem)",
          fontWeight: 900,
          color: "#ffffff",
          lineHeight: 1.15,
          marginBottom: 24,
        }}>
          Hey, Dad.
        </h1>

        <div style={{
          fontSize: "1.05rem",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.85,
          marginBottom: 32,
        }}>
          <p style={{ marginBottom: 16 }}>
            You started Smart Construction in 2004 with nothing but a truck and
            a promise to do right by people. 22 years later, 15,000 roofs,
            thousands of families — and you still show up the same way you did
            on day one.
          </p>
          <p style={{ marginBottom: 16 }}>
            This website is for you. For everything you built.
            We wanted people to see it the way it actually is —
            not just another contractor, but the real thing.
          </p>
          <p>
            We're proud of you. We love you.
          </p>
        </div>

        {/* Signature */}
        <div style={{
          display: "inline-block",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 20,
          marginTop: 8,
        }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginBottom: 4 }}>With love,</p>
          <p style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.1rem" }}>Max & the whole Smart Construction family</p>
        </div>

        {/* Subtle link to the real site */}
        <div style={{ marginTop: 48 }}>
          <a
            href="/"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "0.75rem",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            See the site you built →
          </a>
        </div>
      </div>
    </div>
  );
}
