import { serviceAreas, certifications } from "@/lib/config";

export function ConnectSection() {
  return (
    <section className="section-py divider surface-1">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p className="text-label mb-4">Service Areas</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground">
              Minnesota<br />&amp; Florida.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[340px] leading-relaxed">
              Twin Cities metro and the Sarasota / Charlotte County region. Storm damage doesn't respect geography — neither do we.
            </p>
          </div>
        </div>

        {/* State panels */}
        <div className="grid lg:grid-cols-2 gap-5 mb-14">
          {/* Minnesota */}
          <div className="card-base rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box w-11 h-11 text-xl">🌨️</div>
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight">Minnesota</h3>
                <p className="text-[12px] text-muted-foreground mt-0.5">Twin Cities metro + 50+ communities</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.mn.map((city) => (
                <span key={city} className="text-[11px] text-muted-foreground bg-white/4 border border-white/6 px-3 py-1.5 rounded-lg font-medium">
                  {city}
                </span>
              ))}
              <span className="text-[11px] text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-lg font-semibold">
                + 50 more
              </span>
            </div>
          </div>

          {/* Florida */}
          <div className="card-base rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-box w-11 h-11 text-xl">🌴</div>
              <div>
                <h3 className="font-bold text-foreground text-lg leading-tight">Florida</h3>
                <p className="text-[12px] text-muted-foreground mt-0.5">Sarasota &amp; Charlotte County region</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.fl.map((city) => (
                <span key={city} className="text-[11px] text-muted-foreground bg-white/4 border border-white/6 px-3 py-1.5 rounded-lg font-medium">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-5">
              Hurricane &amp; wind damage restoration specialists.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-label mb-6">Documents &amp; Registrations</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base rounded-2xl p-5 flex flex-col items-center text-center gap-2 min-h-[44px] group"
              >
                <span className="text-[26px]" aria-hidden>{cert.icon}</span>
                <p className="font-bold text-[12px] text-foreground group-hover:text-primary transition-colors leading-tight">{cert.name}</p>
                <p className="text-[10px] text-muted-foreground">{cert.label}</p>
                <span className="text-[10px] text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Verify ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
