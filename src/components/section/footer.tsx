import { siteConfig, certifications } from "@/lib/config";

export function Footer() {
  const yr = new Date().getFullYear();

  const services = [
    "Roof Restoration","Siding Restoration","Window Replacement",
    "Storm Damage","Hail Damage","Mold Remediation",
    "Water Damage","General Remodeling",
  ];
  const mnCities = ["Minneapolis","St. Paul","Blaine","Eden Prairie","Plymouth","Maple Grove","Burnsville","Apple Valley"];
  const flCities = ["Port Charlotte, FL","Sarasota, FL","Punta Gorda, FL","Venice, FL","North Port, FL"];

  return (
    <footer className="divider bg-[oklch(7%_0.012_258)]">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5 w-fit" aria-label="Smart Construction">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-black text-[12px]">SC</span>
              </div>
              <div>
                <p className="font-bold text-[14px] text-foreground leading-tight">Smart Construction</p>
                <p className="text-[10px] text-muted-foreground tracking-[0.12em] uppercase">&amp; Remodeling</p>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Minnesota's insurance restoration specialists since 2004. We fight your insurance company so you don't have to.
            </p>
            <p className="text-[11px] text-muted-foreground/50 mb-5">{siteConfig.license}</p>
            <div className="flex gap-2.5" aria-label="Social links">
              {[
                { href: siteConfig.facebook,  label: "Facebook",  emoji: "📘" },
                { href: siteConfig.instagram, label: "Instagram", emoji: "📸" },
                { href: siteConfig.whatsapp,  label: "WhatsApp",  emoji: "💬" },
                { href: siteConfig.messenger, label: "Messenger", emoji: "💬" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-[15px] hover:border-white/20 hover:bg-white/5 transition-all min-h-[44px] min-w-[44px]"
                >
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[13px] text-muted-foreground/70 hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">Service Areas</h4>
            <ul className="space-y-2.5">
              {[...mnCities, ...flCities].map((c) => (
                <li key={c}>
                  <span className="text-[13px] text-muted-foreground/70">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-[13px] text-muted-foreground/70 hover:text-foreground transition-colors flex items-center gap-2 min-h-[44px]">
                  📞 {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-[13px] text-muted-foreground/70 hover:text-foreground transition-colors flex items-start gap-2 break-all leading-relaxed">
                  📧 {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted-foreground/70 hover:text-foreground transition-colors flex items-start gap-2 leading-relaxed">
                  📍 {siteConfig.address}
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn-primary inline-flex mt-6 px-5 py-2.5 text-xs">
              Book Free Inspection
            </a>
          </div>
        </div>

        {/* Certifications strip */}
        <div className="border-t border-white/5 pt-10 mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 card-base-static px-4 py-2.5 rounded-xl hover:border-primary/25 transition-colors text-[12px] font-semibold text-foreground/70 hover:text-foreground min-h-[44px]"
              >
                <span>{c.icon}</span> {c.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground/40">
            © {yr} Smart Construction &amp; Remodeling, Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms",   label: "Terms of Service" },
              { href: "/sitemap.xml", label: "Sitemap" },
            ].map(({ href, label }) => (
              <a key={label} href={href} className="text-[12px] text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
