import { TypingClaim } from "@/components/animations/typing-claim";
import { InspectionChecklist } from "@/components/animations/inspection-checklist";
import { MnFlToggle } from "@/components/animations/mn-fl-toggle";
import { OrbitingServices } from "@/components/animations/orbiting-services";

export function WorkflowConnectSection() {
  return (
    <section id="areas" className="section-py divider bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 space-y-24">

        {/* Block 1: Terminal + Services orbit */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-label mb-4">Live Process</p>
            <h2 className="heading-display text-[clamp(36px,6vw,62px)] text-foreground mb-5">
              From Storm to<br />Settled. Fast.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Every step handled by our team — inspection, paperwork, negotiation, build. You watch the progress, we do the work.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "🚁", t: "Same-week drone inspection" },
                { icon: "📋", t: "Xactimate report within 48 hours" },
                { icon: "💰", t: "We negotiate until you're fully paid" },
              ].map((item) => (
                <div key={item.t} className="flex items-center gap-3 text-[13px] text-foreground/70">
                  <span className="text-[16px]" aria-hidden>{item.icon}</span>
                  {item.t}
                </div>
              ))}
            </div>
          </div>
          <TypingClaim />
        </div>

        {/* Block 2: Orbiting icons + inspection checklist */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <InspectionChecklist />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-label mb-4">Our Coverage</p>
            <h2 className="heading-display text-[clamp(36px,6vw,62px)] text-foreground mb-5">
              Eight Services.<br />One Call.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Roof, siding, windows, storm damage, mold, water, fire, remodeling. Everything under one contractor, one warranty, one point of contact.
            </p>
            <OrbitingServices />
          </div>
        </div>

        {/* Block 3: MN/FL toggle + stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-label mb-4">Service Areas</p>
            <h2 className="heading-display text-[clamp(36px,6vw,62px)] text-foreground mb-5">
              Two States.<br />One Standard.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
              Minnesota hail. Florida hurricanes. Two completely different storm profiles — but the same process, the same team, the same results.
            </p>
            <div className="space-y-3">
              {[
                { icon: "🌨️", t: "MN — Twin Cities metro, 70+ cities, hail specialists" },
                { icon: "🌴", t: "FL — Sarasota & Charlotte County, hurricane experts" },
                { icon: "✈️", t: "We fly crews between states for emergency response" },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-3 text-[13px] text-foreground/70">
                  <span className="text-[16px] mt-0.5 flex-shrink-0" aria-hidden>{item.icon}</span>
                  {item.t}
                </div>
              ))}
            </div>
          </div>
          <MnFlToggle />
        </div>

      </div>
    </section>
  );
}
