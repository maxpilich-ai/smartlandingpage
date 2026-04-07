"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    "Roof Damage", "Siding Damage", "Window/Door Damage", "Hail Damage",
    "Wind Damage", "Storm Damage", "Mold Remediation", "Water Damage",
    "Fire & Smoke Damage", "Gutter Damage", "Foundation/Basement", "General Remodeling", "Other",
  ];

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim()) errs.phone = "Phone number is required";
    if (phone && !/[\d\s\-\+\(\)]{7,}/.test(phone)) errs.phone = "Enter a valid phone number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // For now: mailto fallback until backend is connected (Alex)
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Free Inspection Request — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Book Your Free Inspection
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              We'll send a HAAG-certified inspector to your property within 24 hours. No cost, no obligation, no pressure.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "📞", label: "Phone (24/7 Emergency)", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
                { icon: "📧", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: "📍", label: "Office", value: siteConfig.address, href: siteConfig.googleMaps },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors group min-h-[56px]"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: "💬", label: "WhatsApp", href: siteConfig.whatsapp, color: "bg-green-600" },
                { icon: "📘", label: "Messenger", href: siteConfig.messenger, color: "bg-blue-600" },
                { icon: "📸", label: "Instagram", href: siteConfig.instagram, color: "bg-pink-600" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.color} text-white text-xs font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity min-h-[44px] flex items-center gap-1.5`}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-foreground text-xl mb-2">Request Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll contact you within 2 hours to schedule your inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method="POST" noValidate>
                <h3 className="font-bold text-foreground text-lg mb-6">Free Inspection Request</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px] ${errors.name ? "border-destructive" : "border-border"}`}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(612) 555-0100"
                        className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px] ${errors.phone ? "border-destructive" : "border-border"}`}
                      />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email (optional)</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@email.com"
                        className={`w-full bg-background border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px] ${errors.email ? "border-destructive" : "border-border"}`}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Type of Damage</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px]"
                    >
                      <option value="">Select damage type...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Describe the Damage</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="When did the storm happen? What areas are damaged? Any visible damage?"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[52px] text-sm sm:text-base"
                  >
                    🚁 Schedule Free Drone Inspection
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond within 2 hours · Zero cost · Zero obligation
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
