import { features, team } from "@/lib/config";

export function FeatureSection() {
  return (
    <section className="section-py divider bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p className="text-label mb-4">Why Us</p>
          <h2 className="heading-display text-[clamp(40px,7vw,72px)] text-foreground max-w-xl">
            The Contractor<br />Who{" "}
            <span className="gradient-text">Fights For You.</span>
          </h2>
        </div>

        {/* Feature grid — varied layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="card-base rounded-2xl p-7 cursor-default">
              <div className="icon-box w-11 h-11 text-xl mb-5">{f.icon}</div>
              <h3 className="font-bold text-foreground text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Battle callout — full-width dark band */}
        <div className="relative overflow-hidden rounded-3xl border border-white/7 surface-1 px-8 py-12 sm:px-14 sm:py-16 mb-16">
          <div className="glow-orb w-[500px] h-[400px] bg-primary/12 top-1/2 right-[-100px] -translate-y-1/2" />
          <div className="relative max-w-2xl">
            <p className="text-label mb-4">Battle Record</p>
            <h3 className="heading-display text-[clamp(32px,5vw,56px)] text-foreground mb-5 max-w-lg">
              20 Years Fighting the Insurance Industry.
            </h3>
            <p className="text-muted-foreground text-[15px] mb-9 leading-relaxed">
              State Farm. Allstate. USAA. Progressive. We've gone up against every major carrier — and we know exactly how each one tries to underpay homeowners.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["State Farm", "Allstate", "USAA", "Liberty Mutual", "Progressive", "Travelers", "Farmers", "Nationwide"].map((ins) => (
                <span key={ins} className="glass text-[12px] font-semibold text-foreground/70 px-4 py-2 rounded-xl">
                  {ins}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="mb-10">
            <p className="text-label mb-4">The Team</p>
            <h3 className="heading-display text-[clamp(32px,5vw,52px)] text-foreground">Real People. Real Names.</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div key={member.name} className="card-base rounded-2xl p-6 cursor-default">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-lg font-black text-white mb-5 ${i === 0 ? "bg-primary" : "bg-white/10"}`}>
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-bold text-foreground text-sm leading-tight">{member.name}</h4>
                <p className="text-[11px] text-primary font-semibold mt-0.5 mb-3 tracking-wide">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
