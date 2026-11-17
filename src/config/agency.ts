export const agency = {
  name: "Outline.",
  shortName: "Outline",
  tagline: "Thoughtful websites for ambitious businesses.",
  description:
    "We design and develop modern websites that help businesses establish their online presence, communicate their value and generate meaningful enquiries.",
  email: "hello@youragency.co.uk",
  websiteUrl: "https://rohit-0409.github.io/agencyV1/",
  linkedInUrl: "https://www.linkedin.com/company/your-agency",
  instagramUrl: "",
  responseTime: "Within two working days",
  primaryCta: "Start a project",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  formIntegrationNote:
    "Connect a form endpoint with NEXT_PUBLIC_CONTACT_ENDPOINT before accepting enquiries.",
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const principles = [
  { number: "01", title: "Clarity", detail: "Clear messaging and intuitive experiences." },
  { number: "02", title: "Performance", detail: "Fast, responsive and reliable websites." },
  { number: "03", title: "Purpose", detail: "Every element has a reason to exist." },
];

export const projects = [
  {
    number: "01",
    name: "Cropland Agritech India",
    domain: "croplandagritech.com",
    url: "https://www.croplandagritech.com/contact",
    category: "Agriculture & agritech",
    description:
      "A digital presence for an Indian agritech business serving farmers with crop protection, plant nutrition and biosolutions.",
    visual: "cropland" as const,
    previewLabel: "Agriculture · India",
    note: "Crop protection · Plant nutrition · Biosolutions",
  },
  {
    number: "02",
    name: "Defence Garden",
    domain: "defencegarden.com",
    url: "https://defencegarden.com/",
    category: "Residential real estate",
    description:
      "A residential portfolio presenting Defence Garden’s communities, company story and home enquiries.",
    visual: "defence" as const,
    previewLabel: "Residential · Communities",
    note: "Residential projects · Company story · Enquiries",
  },
  {
    number: "03",
    name: "Chai Adda",
    domain: "chaiadda.co.in",
    url: "https://www.chaiadda.co.in/",
    category: "Tea & e-commerce",
    description:
      "An online destination for Chai Adda’s premium organic teas and chai.",
    visual: "chai" as const,
    previewLabel: "Tea · Organic",
    note: "Organic tea · Chai · Online store",
  },
  {
    number: "04",
    name: "Innovation Remedies",
    domain: "innovationremedies.com",
    url: "https://www.innovationremedies.com/",
    category: "Veterinary health",
    description:
      "Company and product information for veterinary pharmaceuticals and nutritional solutions.",
    visual: "innovation" as const,
    previewLabel: "Animal health · Life sciences",
    note: "Veterinary pharmaceuticals · Nutrition",
  },
];

export const services = [
  {
    number: "01",
    title: "Website design",
    description:
      "Thoughtful digital design that communicates your brand, engages visitors and creates a clear user journey.",
    items: ["UI/UX design", "Wireframing", "Responsive layouts", "Visual identity alignment"],
    icon: "design" as const,
  },
  {
    number: "02",
    title: "Website development",
    description:
      "Fast, responsive and scalable websites built around your business requirements.",
    items: ["Frontend development", "Backend integration", "Responsive implementation", "CMS integration"],
    icon: "development" as const,
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Purpose-built landing pages designed to communicate your offer and encourage visitors to take action.",
    items: ["Campaign landing pages", "Lead capture forms", "Conversion-focused layouts", "Analytics integration"],
    icon: "landing" as const,
  },
  {
    number: "04",
    title: "Website optimization",
    description:
      "Improve the performance, usability and technical foundations of your existing website.",
    items: ["Performance improvements", "Technical SEO foundations", "Mobile optimization", "Accessibility improvements"],
    icon: "optimization" as const,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, goals, audience and requirements before defining the project scope.",
  },
  {
    number: "02",
    title: "Strategy & design",
    description:
      "We plan the experience, structure the content and create the visual direction.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We turn the approved designs into a responsive, functional website, coordinating specialist development resources where appropriate.",
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We test, deploy and hand over the completed website, with post-launch support agreed for your project.",
  },
];

export const projectTypes = [
  "New Website",
  "Website Redesign",
  "Landing Page",
  "E-commerce Website",
  "Website Optimization",
  "Other",
];

export const budgetRanges = [
  "Under £500",
  "£500–£1,000",
  "£1,000–£3,000",
  "£3,000–£5,000",
  "£5,000+",
];
