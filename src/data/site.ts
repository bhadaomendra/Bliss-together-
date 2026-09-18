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
  whatsappDefaultMessage: string;
  getWhatsAppLink: (customMessage?: string) => string;
  getProductWhatsAppLink: (productName: string) => string;
}

const DEFAULT_WA_MESSAGE = "Hi, I’m interested in Bliss Together products. Please share more details about your products and how I can order.";

export const siteConfig: SiteConfig = {
  brandName: "Bliss Together",
  companyName: "Krishiv Wellness LLP",
  websiteDomain: "blisstogether.in",
  tagline: "NOURISH. BALANCE. THRIVE.", // FINAL and LOCKED tagline
  primaryContact: "Krishiv Wellness LLP",
  phone: "80948-12345",
  phoneRaw: "+918094812345",
  email: "Blisstogether.wellness@gmail.com",
  whatsappNumber: "918094812345",
  whatsappDefaultMessage: DEFAULT_WA_MESSAGE,
  getWhatsAppLink: (customMessage?: string) => {
    const msg = customMessage || DEFAULT_WA_MESSAGE;
    return `https://wa.me/918094812345?text=${encodeURIComponent(msg)}`;
  },
  getProductWhatsAppLink: (productName: string) => {
    const formattedName = productName.toLowerCase().includes('gumm')
      ? productName
      : `${productName} Gummies`;
    const msg = `Hi, I’m interested in your ${formattedName}. Please share its details, price and ordering information.`;
    return `https://wa.me/918094812345?text=${encodeURIComponent(msg)}`;
  }
};

export interface PageSeo {
  title: string;
  description: string;
}

export const pageSeoData: Record<string, PageSeo> = {
  home: {
    title: "Bliss Together | Wellness Gummies in Jaipur, India",
    description: "Bliss Together wellness gummies in Jaipur, India, thoughtfully crafted for kids, families and everyday wellness. Explore our gummy range and connect with us for product inquiries."
  },
  about: {
    title: "About Krishiv | Healthcare Experience to Everyday Wellness",
    description: "Learn about Shailendra Pal Singh's 18-year pharmaceutical journey and the vision behind Krishiv Wellness LLP and Bliss Together gummies."
  },
  products: {
    title: "Wellness Gummies in India | Bliss Together",
    description: "Explore Bliss Together wellness gummies in India, including kids gummies, multivitamin gummies, immunity gummies, eye health gummies, hair-skin-nails gummies and sleep support gummies."
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
