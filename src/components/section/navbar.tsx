"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const links = [
    { href: "#services",     label: "Services" },
    { href: "#process",      label: "Process" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq",          label: "FAQ" },
    { href: "#contact",      label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(98%_0.004_250/96%)] backdrop-blur-2xl border-b border-black/8 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[66px]">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group" aria-label="Smart Construction home">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-primary/25 blur-[6px] group-hover:bg-primary/40 transition-colors" />
            <div className="relative w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-white font-black text-[11px] tracking-tight">SC</span>
            </div>
          </div>
          <div className="hidden sm:block leading-none">
            <p className="text-[14px] font-bold text-foreground tracking-tight">Smart Construction</p>
            <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-[1px]">& Remodeling</p>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="btn-primary hidden sm:flex text-sm px-5 py-2.5 gap-2"
          >
            Free Inspection
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/8 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span className={`block h-[1.5px] bg-foreground rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-foreground rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-foreground rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[400px] border-t border-white/5" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="bg-[oklch(98%_0.004_250/98%)] backdrop-blur-2xl max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/6 transition-colors min-h-[44px] flex items-center"
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-black/8 mt-2 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-4 py-3 text-sm font-semibold text-primary flex items-center gap-2 min-h-[44px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {siteConfig.phone}
            </a>
            <a href="#contact" className="btn-primary py-3.5 text-sm">
              Book Free Inspection
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
