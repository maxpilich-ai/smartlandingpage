import { siteConfig } from "@/lib/config";

export const metadata = { title: "Terms of Service | Smart Construction & Remodeling" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <a href="/" className="text-primary text-sm hover:underline mb-8 block">← Back to Home</a>
        <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[15px] text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Services</h2>
            <p>Smart Construction & Remodeling, Inc. provides residential and commercial restoration and remodeling services in Minnesota and Florida. By requesting an inspection or engaging our services, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Free Inspection</h2>
            <p>Free inspections carry no obligation. Submitting a contact form does not constitute a contract for services. We will contact you to discuss findings before any work begins.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Insurance Claims</h2>
            <p>We assist in documenting damage and filing claims. We cannot guarantee insurance approval, though our 98% approval rate reflects our experience and expertise. Final approval decisions rest with insurance carriers.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Licensing</h2>
            <p>Smart Construction & Remodeling, Inc. holds Minnesota contractor licenses BC 63, 65, and 73. We are BBB A+ accredited and IICRC certified.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
            <p>Questions? Reach us at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a> or <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary hover:underline">{siteConfig.phone}</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
