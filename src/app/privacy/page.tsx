import { siteConfig } from "@/lib/config";

export const metadata = { title: "Privacy Policy | Smart Construction & Remodeling" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <a href="/" className="text-primary text-sm hover:underline mb-8 block">← Back to Home</a>
        <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[15px] text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
            <p>We collect information you provide when requesting an inspection or contacting us: name, phone number, email address, property address, and damage description. We do not sell your personal information.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Information</h2>
            <p>Your information is used solely to schedule inspections, communicate about your insurance claim, and provide restoration services. We may contact you via phone, email, or text regarding your project.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
            <p>Questions about this policy? Contact us at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary hover:underline">{siteConfig.phone}</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
