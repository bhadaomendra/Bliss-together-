export interface SiteConfig {
  brandName: string;
  companyName: string;
  websiteDomain: string;
  tagline: string;
  primaryContact: string;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappNumber: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Bliss Together",
  companyName: "Krishiv Wellness LLP",
  websiteDomain: "blisstogether.in",
  tagline: "NOURISH. BALANCE. THRIVE.", // FINAL and LOCKED tagline
  primaryContact: "Krishiv Wellness LLP",
  phone: "80948-12345",
  phoneRaw: "+918094812345",
  email: "Blisstogether.wellness@gmail.com",
  whatsappNumber: "918094812345"
};

export interface PageSeo {
  title: string;
  description: string;
}

export const pageSeoData: Record<string, PageSeo> = {
  home: {
    title: "Bliss Together | Everyday Wellness Gummies",
    description: "Discover thoughtfully crafted wellness gummies by Bliss Together, created to make everyday nutrition simple, enjoyable and accessible for every wellness journey."
  },
  about: {
    title: "About Krishiv | Healthcare Experience to Everyday Wellness",
    description: "Learn about Shailendra Pal Singh's 18-year pharmaceutical journey and the vision behind Krishiv Wellness LLP and Bliss Together gummies."
  },
  products: {
    title: "Our Wellness Range | Bliss Together Gummies",
    description: "Explore Bliss Together's science-backed gummy nutrition for Brain & Focus, Eye Health, Immunity, Hair-Skin-Nails, Daily Multivitamins & Sleep Support."
  },
  journal: {
    title: "Wellness Journal | Health Tips & Research by Bliss Together",
    description: "Explore articles, nutritional guides, and health insights from Bliss Together and Krishiv Wellness LLP."
  },
  contact: {
    title: "Contact Us | Bliss Together — Krishiv Wellness LLP",
    description: "Get in touch with Bliss Together and Krishiv Wellness LLP for inquiries, distribution, or product assistance. Email Blisstogether.wellness@gmail.com or connect via WhatsApp."
  }
};
