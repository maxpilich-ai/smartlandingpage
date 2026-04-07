"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const DMG_TYPES = [
  "Roof Damage","Siding Damage","Window / Door Damage","Hail Damage",
  "Wind Damage","Storm Damage","Mold Remediation","Water Damage",
  "Fire & Smoke Damage","Gutter Damage","Foundation / Basement",
  "General Remodeling","Other",
];

export function ContactSection() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    const name  = (form.elements.namedItem("name")  as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!name)  errs.name  = "Name is required";
    if (!phone) errs.phone = "Phone number is required";
    else if (!/[\d\s\-+()]{7,}/.test(phone)) errs.phone = "Enter a valid phone number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address";
    return errs;
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    const get = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
    // In production this would POST to an API. For now, opens mailto as fallback
    // but still shows success state immediately so user gets feedback.
    const body = encodeURIComponent(
      `Name: ${get("name")}\nPhone: ${get("phone")}\nEmail: ${get("email") || "N/A"}\nService: ${get("service") || "Not specified"}\n\n${get("message") || "No details provided"}`
    );
    const mailLink = document.createElement("a");
    mailLink.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Inspection Request — ${get("name")}`)}&body=${body}`;
    mailLink.click();
    setDone(true);
  };

  const inputCls = (field: string) =>
    `form-input${errors[field] ? " error" : ""}`;

  return (
    <section id="contact" className="section-py divider bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p className="text-label mb-4">Contact</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-lg">
              Book Your<br />Inspection.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[340px] leading-relaxed">
              HAAG-certified inspector at your property within 24 hours. No cost. No obligation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">

          {/* Info column */}
          <div className="space-y-5">
            {[
              { icon: "📞", label: "24/7 Emergency Line", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
              { icon: "📧", label: "Email",                value: siteConfig.email,  href: `mailto:${siteConfig.email}` },
              { icon: "📍", label: "Office",               value: siteConfig.address, href: siteConfig.googleMaps },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card-base rounded-2xl p-5 flex items-start gap-4 group"
              >
                <div className="icon-box w-11 h-11 text-xl flex-shrink-0">{c.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-semibold text-[13px] text-foreground group-hover:text-primary transition-colors break-words">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: "💬", href: siteConfig.whatsapp,  cls: "bg-green-600/15 text-green-500 border border-green-500/25" },
                  { icon: "📘", href: siteConfig.facebook,  cls: "bg-blue-600/15 text-blue-500 border border-blue-500/25" },
                  { icon: "📸", href: siteConfig.instagram, cls: "bg-pink-600/15 text-pink-500 border border-pink-500/25" },
                  { icon: "💬", href: siteConfig.messenger, cls: "bg-blue-400/15 text-blue-400 border border-blue-400/25" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-[18px] ${s.cls} hover:opacity-80 transition-opacity min-h-[44px]`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-base rounded-3xl p-7 sm:p-10">
            {done ? (
              <div className="flex flex-col items-center text-center py-14 gap-4">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/20 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-black text-foreground text-xl tracking-tight">Request Sent</h3>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  We'll reach out within 2 hours to schedule your free inspection.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 underline underline-offset-4"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} method="POST" noValidate>
                <h3 className="font-black text-foreground text-[17px] mb-7 tracking-tight">Request Free Inspection</h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="c-name" className="text-label block mb-2" style={{ letterSpacing: "0.12em" }}>Full Name *</label>
                    <input id="c-name" name="name" type="text" required placeholder="John Smith" className={inputCls("name")} />
                    {errors.name  && <p className="text-[11px] text-red-400 mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Phone + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-phone" className="text-label block mb-2" style={{ letterSpacing: "0.12em" }}>Phone *</label>
                      <input id="c-phone" name="phone" type="tel" required placeholder="(612) 216-1186" className={inputCls("phone")} />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1.5">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="text-label block mb-2" style={{ letterSpacing: "0.12em" }}>Email (optional)</label>
                      <input id="c-email" name="email" type="email" placeholder="john@email.com" className={inputCls("email")} />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service type */}
                  <div>
                    <label htmlFor="c-service" className="text-label block mb-2" style={{ letterSpacing: "0.12em" }}>Type of Damage</label>
                    <select id="c-service" name="service" className="form-input">
                      <option value="">Select damage type…</option>
                      {DMG_TYPES.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-msg" className="text-label block mb-2" style={{ letterSpacing: "0.12em" }}>Describe the Damage</label>
                    <textarea
                      id="c-msg" name="message" rows={4}
                      placeholder="When did the storm occur? What areas are damaged? Any visible damage from the street?"
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-sm gap-2.5">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                    Schedule Free Drone Inspection
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground/50">
                    Response within 2 hours · Zero cost · Zero obligation
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
