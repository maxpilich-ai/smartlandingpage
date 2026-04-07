"use client";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-5 md:bottom-8 md:right-8 z-50 w-11 h-11 rounded-xl border border-white/12 bg-[oklch(12%_0.012_258/90%)] backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/25 hover:bg-[oklch(16%_0.012_258/95%)] transition-all duration-300 shadow-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  );
}
