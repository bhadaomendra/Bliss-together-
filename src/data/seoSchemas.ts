// SEO & GEO Structured Data (JSON-LD Schemas) for blisstogether.in

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bliss Together",
  "legalName": "Krishiv Wellness LLP",
  "url": "https://blisstogether.in/",
  "logo": "https://blisstogether.in/assets/logo.png",
  "image": "https://blisstogether.in/assets/hero_wallpaper.jpg",
  "description": "Thoughtfully crafted wellness gummies by Bliss Together, created to make everyday nutrition simple, enjoyable and accessible for every wellness journey.",
  "knowsAbout": [
    "Prebiotic Fiber",
    "Probiotics",
    "Multivitamin Gummies",
    "Biotin Hair Gummies",
    "Melatonin Sleep Support",
    "Kids Brain & Immunity Gummies",
    "FSSAI Compliant Wellness Products"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@blisstogether.in",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi"]
  },
  "sameAs": [
    "https://blisstogether.in/"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bliss Together",
  "url": "https://blisstogether.in/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://blisstogether.in/products?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Bliss Together gummies made of?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bliss Together gummies are thoughtfully crafted using premium natural ingredients, essential vitamins, prebiotic fiber, probiotics, and plant extracts. They are 100% clean, delicious, and FSSAI compliant."
      }
    },
    {
      "@type": "Question",
      "name": "Are Bliss Together gummies safe for daily consumption?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Bliss Together gummies are formulated under strict quality control standards, non-GMO, backed by science, and designed for safe everyday nutrition."
      }
    },
    {
      "@type": "Question",
      "name": "What products does Bliss Together offer in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bliss Together offers Pre + Probiotic Multivitamin Gummies, Hair Skin & Nails Biotin Gummies, Melatonin Sleep Support Gummies, Eye Care Gummies, and Kids Brain & Immunity Booster Gummies."
      }
    }
  ]
};

export const productListSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pre + Probiotic Multivitamin Gummies",
    "image": "https://blisstogether.in/assets/featured_user_tub_clean.png",
    "description": "Pre + Probiotic Multivitamin Gummies with essential vitamins, probiotics and prebiotic fiber to support gut health, boost immunity and enhance overall wellness naturally.",
    "brand": {
      "@type": "Brand",
      "name": "Bliss Together"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://blisstogether.in/products",
      "priceCurrency": "INR",
      "price": "699.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hair, Skin & Nails Gummies",
    "image": "https://blisstogether.in/assets/products/hair-skin-nails.png",
    "description": "Biotin, Zinc and Vitamin C infused strawberry flavoured gummies for glowing skin, strong nails and healthier hair growth.",
    "brand": {
      "@type": "Brand",
      "name": "Bliss Together"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://blisstogether.in/products",
      "priceCurrency": "INR",
      "price": "649.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock"
    }
  }
];
