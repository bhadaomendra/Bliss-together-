export interface Product {
  id: string;
  slug: string;
  name: string;
  brandLine: string;
  category: string;
  categorySlug: 'brain' | 'eye' | 'immunity' | 'beauty' | 'daily' | 'sleep';
  subtitle: string;
  image: string;
  ingredientsImage?: string;
  images?: string[];
  accentColor: string;
  badge: string;
  description: string;
  benefits: string[];
  keyIngredients: string[];
  ingredients: string[];
  usage: string;
  servings: string;
  flavour: string;
  amazonUrl: string;
}

export const productsData: Product[] = [
  {
    id: "prod-4",
    slug: "hair-skin-nails",
    name: "Hair-Skin-Nails Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Hair • Skin • Nails",
    categorySlug: "beauty",
    subtitle: "Natural Biotin 10,000 mcg Glow & Strength Complex",
    image: "/assets/products/hair-skin-nails.png",
    ingredientsImage: "/assets/products/hair-skin-nails-ingredients.jpg",
    images: [
      "/assets/products/hair-skin-nails.png",
      "/assets/products/hair-skin-nails-ingredients.jpg"
    ],
    accentColor: "#BE123C",
    badge: "Hair • Skin • Nails",
    flavour: "Strawberry Flavour",
    description: "Nourish your inner beauty from within. Delicious Strawberry flavoured gummies featuring high-dose Natural Biotin (10,000 mcg), Amla extract, Hyaluronic Acid, and key anti-aging vitamins to promote lush hair growth, radiant glowing skin, and strong resilient nails.",
    benefits: [
      "Promotes stronger, thicker hair growth and reduces hair breakage",
      "Deeply hydrates skin with Hyaluronic Acid for a natural radiant glow",
      "Strengthens brittle nails and prevents splitting",
      "Potent antioxidant defense against oxidative aging"
    ],
    keyIngredients: ["Natural Biotin", "Amla Extract", "Hyaluronic Acid", "Zinc"],
    ingredients: ["Natural Biotin (10,000 mcg)", "Amla Extract", "Hyaluronic Acid", "Vitamins C & E", "Zinc"],
    usage: "Adults: Take 1 gummy daily after mealtime.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISSHAIRSKIN?tag=blisstogether-21"
  },
  {
    id: "prod-5",
    slug: "pre-probiotic-multivitamin",
    name: "Pre + Probiotic Multivitamin Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Daily Wellness & Gut Health",
    categorySlug: "daily",
    subtitle: "Gut Balance & Comprehensive Daily Micronutrients",
    image: "/assets/products/pre-probiotic-multivitamin.png",
    ingredientsImage: "/assets/products/pre-probiotic-ingredients.png",
    images: [
      "/assets/products/pre-probiotic-multivitamin.png",
      "/assets/products/pre-probiotic-ingredients.png"
    ],
    accentColor: "#15803D",
    badge: "Daily Wellness & Gut Health",
    flavour: "Orange Flavour",
    description: "The complete daily foundation for optimal digestive balance and overall wellness. Refreshing Orange flavoured gummies combining active spore-forming probiotics, prebiotic fiber, and essential multivitamin spectrum for maximum gut absorption.",
    benefits: [
      "Balances gut microbiome and promotes smooth digestion",
      "Fills daily nutritional gaps caused by fast-paced routines",
      "Enhances nutrient absorption & boosts natural vitality",
      "Supports gut-brain axis for overall mood and well-being"
    ],
    keyIngredients: ["Prebiotics", "Probiotics", "Multivitamins", "Minerals"],
    ingredients: ["Spore Probiotics (Bacillus Coagulans 2B CFU)", "Prebiotic FOS", "Multivitamins (A, C, D3, E, B-Complex)", "Zinc"],
    usage: "Adults & Teens (ages 12+): Take 1 to 2 gummies daily with water/food.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISSPREPROBIOTIC?tag=blisstogether-21"
  },
  {
    id: "prod-6",
    slug: "melatonin-gummies",
    name: "Melatonin Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Sleep Support",
    categorySlug: "sleep",
    subtitle: "Restful Night Quality & Calm Mind Complex",
    image: "/assets/products/melatonin.png",
    accentColor: "#4338CA",
    badge: "Sleep Support",
    flavour: "Blueberry Flavour",
    description: "Fall asleep naturally and relax your mind. Delicious Blueberry flavoured gummies crafted with a synergistic botanical blend of Tagar (Valerian) root extract, L-Theanine, Chamomile, Passion Flower, Magnesium, and gentle Melatonin.",
    benefits: [
      "Promotes faster, natural onset of peaceful sleep",
      "Calms evening anxiety and relaxes tense muscles",
      "Improves deep sleep quality and restores circadian rhythm",
      "Non-habit forming, drug-free formulation"
    ],
    keyIngredients: ["Melatonin", "Tagar Extract", "L-Theanine", "Chamomile"],
    ingredients: ["Melatonin", "Tagar Extract", "L-Theanine", "Chamomile Extract", "Passion Flower", "Magnesium"],
    usage: "Adults: Take 1 gummy 30-45 minutes before bedtime.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISSMELATONIN?tag=blisstogether-21"
  },
  {
    id: "prod-2",
    slug: "eye-care-gummies",
    name: "Eye Care Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Eye Health",
    categorySlug: "eye",
    subtitle: "Digital Screen Strain Relief & Vision Defense",
    image: "/assets/products/eye-care.png",
    accentColor: "#9C4D78",
    badge: "Eye Health",
    flavour: "Mixed Fruit Flavour",
    description: "Designed for modern digital lifestyles. Delicious Mixed Fruit flavoured gummies formulated with premium Lutein, Zeaxanthin, Astaxanthin and DHA to protect eyes against blue light, reduce digital eye strain, and support long-term eye health.",
    benefits: [
      "Relieves eye fatigue and dryness from extended screen time",
      "Filters harmful blue light emitted by phones, laptops & TVs",
      "Supports macular health and sharp visual acuity",
      "Rich in antioxidant carotenoids & Vitamin C & E"
    ],
    keyIngredients: ["Lutein", "Zeaxanthin", "Astaxanthin", "DHA", "Vitamin C"],
    ingredients: ["Lutein", "Zeaxanthin", "Astaxanthin", "DHA", "Vitamin C & E"],
    usage: "Take 1 gummy daily with meals or as recommended by a healthcare professional.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISSEYECARE?tag=blisstogether-21"
  },
  {
    id: "prod-1",
    slug: "kids-brain-booster",
    name: "Kids Brain Booster Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Brain & Focus",
    categorySlug: "brain",
    subtitle: "Supports Brain Development, Focus & Memory",
    image: "/assets/products/kids-brain-booster.png",
    accentColor: "#2E5B88",
    badge: "Focus & Learning",
    flavour: "Mango Flavour",
    description: "Thoughtfully formulated to support growing minds. Delicious Mango flavoured gummies packed with DHA, Lutein, Zinc and essential B-vitamins to aid concentration, cognitive performance, and memory retention.",
    benefits: [
      "Supports cognitive performance & brain development",
      "Enhances memory retention & concentration during learning",
      "Protects young eyes during digital study hours",
      "Gentle on young stomachs with 100% natural fruit flavours"
    ],
    keyIngredients: ["DHA", "Lutein", "Zinc", "Magnesium", "B-Vitamins"],
    ingredients: ["DHA", "Lutein", "Zeaxanthin", "Zinc", "Magnesium", "Vitamins A, B1, B6, B12"],
    usage: "Children (ages 4+): Take 1 to 2 gummies daily under adult supervision.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISSKIDSBRAIN?tag=blisstogether-21"
  },
  {
    id: "prod-3",
    slug: "kids-immunity-booster",
    name: "Kids Immunity Booster Gummies",
    brandLine: "BLISS TOGETHER",
    category: "Immunity",
    categorySlug: "immunity",
    subtitle: "Daily Immune Defense & Vital Energy",
    image: "/assets/products/kids-immunity.png",
    accentColor: "#D97706",
    badge: "Immunity",
    flavour: "Mixed Berry Flavour",
    description: "Empower your child's natural immune shield. Delicious Mixed Berry flavoured gummies blending high-potency Vitamin C, Vitamin D3, Zinc, and Elderberry extract to strengthen immunity against daily environmental challenges.",
    benefits: [
      "Strengthens natural immune defense for year-round protection",
      "Supports healthy bone growth & vital daily energy levels",
      "Helps reduce seasonal fatigue and minor health setbacks",
      "Pectin-based, gelatin-free, safe & enjoyable daily treat"
    ],
    keyIngredients: ["Vitamin C", "Vitamin D3", "Zinc", "Elderberry Extract"],
    ingredients: ["Vitamin C", "Vitamin D3", "Zinc Citrate", "Elderberry Extract"],
    usage: "Children (ages 3+): 1 gummy daily. Chew thoroughly before swallowing.",
    servings: "30 Gummies",
    amazonUrl: "https://www.amazon.in/dp/B0BLISIMMUNITYKIDS?tag=blisstogether-21"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(p => p.slug === slug);
}
