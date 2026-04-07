"use client";
import { features, team } from "@/lib/config";

export function FeatureSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Why Smart Construction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Contractor Who Fights For You
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Most contractors fix the damage and hand you a bill. We fight your insurance company first, so you pay as little as possible.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Team section */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Meet the Team
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Real people. Real accountability. We put our names behind every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-bold text-foreground text-sm mb-0.5">{member.name}</h4>
                <p className="text-xs text-primary font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance fight visual */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-muted/50 to-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 text-center">
          <div className="text-4xl sm:text-5xl mb-4">⚔️</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Insurance Companies We've Beaten
          </h3>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {["State Farm", "Allstate", "USAA", "Liberty Mutual", "Progressive", "Travelers", "Farmers", "Nationwide"].map((ins) => (
              <span key={ins} className="bg-background border border-border px-4 py-2 rounded-lg text-sm font-medium text-foreground">
                {ins}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            20+ years. Every major carrier. We know exactly how they operate — and how to win.
          </p>
        </div>
      </div>
    </section>
  );
}
