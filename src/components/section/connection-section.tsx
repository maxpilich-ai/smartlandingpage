"use client";
import { serviceAreas, certifications } from "@/lib/config";

export function ConnectSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Service Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Minnesota & Florida
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Two markets. One team. Storm damage restoration across the Twin Cities metro and the Sarasota/Charlotte County region of Florida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* MN */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">🌨️</span>
              <div>
                <h3 className="font-bold text-foreground text-lg">Minnesota</h3>
                <p className="text-sm text-muted-foreground">Twin Cities metro + 50+ communities</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.mn.map((city) => (
                <span key={city} className="bg-muted border border-border text-xs text-muted-foreground px-3 py-1.5 rounded-lg">
                  {city}
                </span>
              ))}
              <span className="bg-primary/10 border border-primary/20 text-xs text-primary px-3 py-1.5 rounded-lg font-medium">
                + 50 more
              </span>
            </div>
          </div>

          {/* FL */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">🌴</span>
              <div>
                <h3 className="font-bold text-foreground text-lg">Florida</h3>
                <p className="text-sm text-muted-foreground">Sarasota & Charlotte County region</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.fl.map((city) => (
                <span key={city} className="bg-muted border border-border text-xs text-muted-foreground px-3 py-1.5 rounded-lg">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Specializing in hurricane and wind damage restoration.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-center font-bold text-foreground text-xl mb-8">Documents & Registrations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 hover:shadow-sm transition-all group min-h-[44px] flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">{cert.icon}</span>
                <p className="font-bold text-xs text-foreground group-hover:text-primary transition-colors">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.label}</p>
                <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">Verify ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
