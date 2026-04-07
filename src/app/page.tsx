import { Navbar } from "@/components/section/navbar";
import { HeroSection } from "@/components/section/hero-section";
import { CompanyShowcase } from "@/components/section/company-showcase";
import { DemoSection } from "@/components/section/demo-section";
import { WorkflowSection } from "@/components/section/workflow-section";
import { FeatureSection } from "@/components/section/feature-section";
import { ConnectSection } from "@/components/section/connection-section";
import { TestimonialSection } from "@/components/section/testimonial-section";
import { PricingSection } from "@/components/section/pricing-section";
import { FAQSection } from "@/components/section/faq-section";
import { CTASection } from "@/components/section/cta-section";
import { ContactSection } from "@/components/section/contact-section";
import { Footer } from "@/components/section/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pb-[70px] md:pb-0">
        <HeroSection />
        <CompanyShowcase />
        <DemoSection />
        <WorkflowSection />
        <FeatureSection />
        <ConnectSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
