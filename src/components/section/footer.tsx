import { siteConfig, certifications } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                SC
              </div>
              <span className="font-bold text-foreground">Smart Construction</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Minnesota's insurance restoration specialists since 2004. We fight your insurance so you don't have to.
            </p>
            <p className="text-xs text-muted-foreground">{siteConfig.license}</p>
            <div className="flex gap-3 mt-4">
              {[
                { href: siteConfig.facebook, icon: "📘", label: "Facebook" },
                { href: siteConfig.instagram, icon: "📸", label: "Instagram" },
                { href: siteConfig.whatsapp, icon: "💬", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-base hover:border-primary/30 transition-colors min-h-[44px] min-w-[44px]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Roof Restoration", "Siding Restoration", "Window Replacement", "Storm Damage", "Hail Damage", "Mold Remediation", "Water Damage", "General Remodeling"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Service Areas</h4>
            <ul className="space-y-2.5">
              {["Minneapolis", "St. Paul", "Blaine", "Eden Prairie", "Plymouth", "Maple Grove", "Port Charlotte, FL", "Sarasota, FL", "Punta Gorda, FL"].map((city) => (
                <li key={city}>
                  <span className="text-sm text-muted-foreground">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 min-h-[44px]">
                  📞 {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 min-h-[44px] break-all">
                  📧 {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2">
                  📍 {siteConfig.address}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
              >
                🚁 Free Inspection
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg text-xs hover:border-primary/30 transition-colors min-h-[44px]"
              >
                <span>{cert.icon}</span>
                <span className="font-semibold text-foreground">{cert.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Smart Construction & Remodeling, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
