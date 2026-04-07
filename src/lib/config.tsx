// Smart Construction & Remodeling — Site Config
// Single source of truth for all text content

export const siteConfig = {
  name: "Smart Construction & Remodeling",
  shortName: "Smart Construction",
  tagline: "We Fight Insurance So You Don't Have To",
  phone: "(612) 216-1186",
  phoneRaw: "6122161186",
  email: "Office@SmartConstructionMN.com",
  address: "1507 92nd Ln NE, Blaine, MN 55449",
  license: "MN License BC 63, 65, 73",
  foundedYear: 2004,
  googleMaps: "https://www.google.com/maps/place/Smart+Construction+%26+Remodeling,+Inc.",
  facebook: "https://www.facebook.com/SmartConstructMN/",
  instagram: "https://www.instagram.com/smartconstructionmn/",
  whatsapp: "https://wa.me/16122161186",
  messenger: "https://m.me/SmartConstructMN",
  bbb: "https://www.bbb.org/us/mn/minneapolis/profile/general-contractor/smart-construction-remodeling-inc-0704-96160987",
  iicrc: "https://www.iicrc.org",
  dli: "https://www.dli.mn.gov",
  gaf: "https://www.gaf.com",
};

export const heroContent = {
  badge: "Minnesota & Florida's #1 Insurance Restoration Contractor",
  headline: "We Fight Insurance\nSo You Don't Have To",
  subheadline: "Storm damage? Don't pay a dime out of pocket. We handle the insurance claim from inspection to completion — GAF certified, BBB A+ rated, 20+ years fighting for Minnesota homeowners.",
  primaryCta: "Book Free Inspection",
  secondaryCta: "See How It Works",
  stats: [
    { value: 47382100, prefix: "$", suffix: "+", label: "Recovered from Insurance", format: "currency" },
    { value: 15000, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Claim Approval Rate" },
    { value: 20, suffix: "+", label: "Years in Minnesota" },
  ],
};

export const trustLogos = [
  { name: "GAF Master Elite", abbr: "GAF", color: "#E31837" },
  { name: "James Hardie", abbr: "HARDIE", color: "#003DA5" },
  { name: "Andersen Windows", abbr: "ANDERSEN", color: "#006B3F" },
  { name: "Pella Windows", abbr: "PELLA", color: "#C8102E" },
  { name: "BBB A+", abbr: "BBB A+", color: "#0066CC" },
  { name: "IICRC Certified", abbr: "IICRC", color: "#1B4F8A" },
  { name: "HAAG Certified", abbr: "HAAG", color: "#4A4A4A" },
  { name: "Owens Corning", abbr: "OC PLATINUM", color: "#FF6600" },
];

export const services = [
  {
    id: "roofing",
    icon: "🏠",
    title: "Roofing",
    headline: "Full Roof Replacement",
    description: "GAF Timberline HDZ primary. Hail, wind, storm damage — we document everything and fight your insurer for full replacement value.",
    bullets: ["GAF Master Elite Certified", "50-year warranty available", "Owens Corning & CertainTeed options", "Ice dam & ventilation specialists"],
    image: "/public/instant-integration.png",
  },
  {
    id: "siding",
    icon: "🏗️",
    title: "Siding",
    headline: "Siding Restoration",
    description: "James Hardie, LP SmartSide, vinyl, cedar — we match your home perfectly and maximize your insurance payout.",
    bullets: ["James Hardie preferred installer", "Color-matched replacement", "Hail & impact rated options", "Full perimeter inspection"],
    image: "/public/intelligent-reviews.png",
  },
  {
    id: "windows",
    icon: "🪟",
    title: "Windows & Doors",
    headline: "Window Replacement",
    description: "Andersen, Pella, Marvin — energy-efficient replacements billed directly to your insurance carrier.",
    bullets: ["Andersen, Pella, Marvin, JELD-WEN", "Energy Star certified options", "Storm impact resistant glass", "Same-day boarding if needed"],
    image: "/public/multi-line-edits.png",
  },
  {
    id: "storm",
    icon: "⛈️",
    title: "Storm Damage",
    headline: "Full Storm Restoration",
    description: "Hail, wind, tornado, flood — we assess all damage, file the claim for you, and manage the entire restoration from start to finish.",
    bullets: ["Free drone inspection", "Xactimate estimates", "Direct insurance billing", "Emergency board-up & tarping"],
    image: "/public/instant-integration.png",
  },
];

export const claimProcess = [
  { step: "01", title: "Free Inspection", description: "We dispatch a HAAG-certified inspector to your property within 24 hours. Drone aerial + ground inspection. No cost, no obligation.", icon: "🔍" },
  { step: "02", title: "Claim Filed For You", description: "We document every inch of damage with professional photos, Xactimate software, and a detailed estimate. You sign — we handle the rest.", icon: "📋" },
  { step: "03", title: "Insurance Approves", description: "Our team negotiates directly with your adjuster. 98% of our claims get approved. We fight until you get what you're owed.", icon: "✅" },
  { step: "04", title: "Work Completed", description: "Our licensed crews complete the work using premium materials. Final walkthrough with you. We don't leave until it's perfect.", icon: "🔨" },
];

export const features = [
  {
    icon: "🛡️",
    title: "Zero Out-of-Pocket",
    description: "You pay only your deductible — sometimes less. We bill your insurance directly and maximize every line item.",
  },
  {
    icon: "📊",
    title: "Xactimate Estimates",
    description: "Industry-standard insurance software. Your adjuster can't argue with our documentation.",
  },
  {
    icon: "🚁",
    title: "Drone Inspections",
    description: "Full aerial documentation of your property before and after the storm. Evidence your insurer can't deny.",
  },
  {
    icon: "⚡",
    title: "24-Hour Response",
    description: "Storm hits tonight? We're there tomorrow morning. Emergency board-up and tarping available same-day.",
  },
  {
    icon: "🏅",
    title: "GAF Master Elite",
    description: "Only 3% of roofing contractors earn this status. It means longer warranties and better materials at no extra cost to you.",
  },
  {
    icon: "🤝",
    title: "Insurance Specialists",
    description: "20+ years fighting State Farm, Allstate, USAA, Progressive, Travelers. We know every tactic they use to underpay.",
  },
];

export const testimonials = [
  { name: "Lin B.", location: "Minneapolis, MN", rating: 5, source: "BBB", text: "Vadim and Vladimir were incredible. Insurance initially offered $8,000. Smart Construction fought and got us $42,000. Our roof, siding, and gutters are brand new." },
  { name: "Donny K.", location: "Eden Prairie, MN", rating: 5, source: "Facebook", text: "I've known Pavel for 20+ years. His team is the real deal. Professional, honest, and they actually fight for you. Not just a contractor — a partner." },
  { name: "Ella S.", location: "Blaine, MN", rating: 5, source: "BBB", text: "State Farm denied our claim twice. Smart Construction documented everything with drone photos, filed an appeal, and got a full $67,000 settlement. Unreal." },
  { name: "Alex B.", location: "Apple Valley, MN", rating: 5, source: "BBB", text: "Gary walked us through every step. Zero confusion, zero stress. They handled the entire claim while we just picked our shingle color. 10/10." },
  { name: "Elijah S.", location: "Burnsville, MN", rating: 5, source: "Google", text: "Hail storm in June. Called Smart Construction Monday morning. Inspection Tuesday, claim filed Wednesday, check from insurance in 10 days. Legendary." },
  { name: "Pavel Z.", location: "Richfield, MN", rating: 5, source: "BBB", text: "The team replaced our entire roof and half the siding. Quality of work is outstanding. The insurance process was handled professionally from start to finish." },
  { name: "Crystal M.", location: "Plymouth, MN", rating: 5, source: "Google", text: "Crystal and Gary are wonderful people who do exceptional work. My neighbors have all used them now. The neighborhood looks like a brand new development." },
  { name: "Sarah T.", location: "Maple Grove, MN", rating: 5, source: "Google", text: "Never thought insurance would pay for all of this. Smart Construction got us a brand new roof, gutters, and siding. Our deductible was $1,000. That's it." },
  { name: "Mike R.", location: "Port Charlotte, FL", rating: 5, source: "Google", text: "After Hurricane Ian, we didn't know where to start. Pavel's team flew in, assessed the damage, and managed our entire claim. $89,000 settlement. Thank you." },
];

export const faqs = [
  {
    q: "How much does this cost me?",
    a: "In most cases, you pay only your deductible — nothing more. We bill your insurance directly for everything else. Our inspection and claim management are completely free.",
  },
  {
    q: "What if my insurance company already denied my claim?",
    a: "We handle denied claims regularly. We'll re-inspect your property, document additional damage, and file a supplemental claim or appeal. Our 98% approval rate includes many initially-denied claims.",
  },
  {
    q: "How long does the whole process take?",
    a: "Typically 2-6 weeks from inspection to project completion. The insurance approval process takes 7-21 days. Once approved, most projects take 1-3 days to complete.",
  },
  {
    q: "Do I need to be home during the inspection?",
    a: "Not necessarily. Our team can inspect the exterior and roof without you present. We'll send you a full report with drone photos within 24 hours of the inspection.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We hold Minnesota General Contractor License BC 63, 65, and 73, are fully bonded and insured, BBB A+ accredited since 2010, and IICRC certified. We'll provide certificates on request.",
  },
  {
    q: "Do you serve my area?",
    a: "We serve a 2-hour radius from Blaine, MN — covering the entire Twin Cities metro and greater Minnesota. We also serve the Sarasota, Florida region for hurricane and wind damage restoration.",
  },
  {
    q: "What insurance companies do you work with?",
    a: "All of them — State Farm, Allstate, USAA, Liberty Mutual, Progressive, Travelers, Farmers, and more. We've worked with every major carrier and know exactly how each one operates.",
  },
  {
    q: "What materials do you use?",
    a: "We use premium materials from GAF (Timberline HDZ primary shingle), Owens Corning, CertainTeed for roofing; James Hardie and LP SmartSide for siding; Andersen, Pella, and Marvin for windows.",
  },
];

export const team = [
  { name: "Pavel Pilich", role: "Owner & Operator", bio: "Fighting insurance companies for Minnesota homeowners since 2004. Former insurance adjuster — knows every tactic they use." },
  { name: "Vadim", role: "Project Manager", bio: "15+ years managing large-scale restoration projects across the Twin Cities metro." },
  { name: "Constantine", role: "Insurance Supplementer", bio: "Specialist in Xactimate documentation and insurance claim appeals." },
  { name: "Erik", role: "Office & Sales Manager", bio: "Your first point of contact. Makes sure every project runs on time and on budget." },
];

export const serviceAreas = {
  mn: ["Minneapolis", "St. Paul", "Blaine", "Eden Prairie", "Plymouth", "Maple Grove", "Burnsville", "Apple Valley", "Eagan", "Coon Rapids", "Brooklyn Park", "Lakeville", "Woodbury", "Richfield", "Roseville", "Minnetonka", "Edina", "St. Louis Park", "Shakopee", "Savage"],
  fl: ["Sarasota", "Bradenton", "Venice", "Nokomis", "North Port", "Englewood", "Port Charlotte", "Punta Gorda", "Longboat Key", "Siesta Key", "Osprey", "Palmetto"],
};

export const certifications = [
  { name: "MN License BC 63/65/73", label: "Contractor License", link: "https://www.dli.mn.gov", icon: "🏛️" },
  { name: "BBB A+", label: "Accredited Since 2010", link: "https://www.bbb.org/us/mn/minneapolis/profile/general-contractor/smart-construction-remodeling-inc-0704-96160987", icon: "⭐" },
  { name: "IICRC Certified", label: "Clean Trust Firm", link: "https://www.iicrc.org", icon: "✅" },
  { name: "GAF Master Elite", label: "Top 3% Nationwide", link: "https://www.gaf.com", icon: "🏅" },
  { name: "HAAG Certified", label: "Storm Inspector", link: "https://www.haag.com", icon: "🔍" },
];
