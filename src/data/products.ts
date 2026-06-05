export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  forms?: string[];
  specs?: { [key: string]: string };
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'dehydrated-onion',
    name: 'Dehydrated Onion',
    icon: '🧅',
    description: 'Premium processed red, white, and pink onion products in various cuts.'
  },
  {
    id: 'dehydrated-garlic',
    name: 'Dehydrated Garlic',
    icon: '🧄',
    description: 'High-pungency garlic processed into flakes, granules, and fine powder.'
  },
  {
    id: 'spices-herbs',
    name: 'Spices & Herbs',
    icon: '🌿',
    description: 'Pure, aromatic whole and ground spices sourced from fertile Indian farms.'
  },
  {
    id: 'chilli-products',
    name: 'Chilli Products',
    icon: '🌶️',
    description: 'Vibrant, high-heat red chilli variants including flakes, powder, and whole pods.'
  },
  {
    id: 'dehydrated-veg-fruits',
    name: 'Dehydrated Vegetables & Fruits',
    icon: '🥕',
    description: 'Nutrient-rich dried potatoes, beetroot, spinach, moringa, and fruit powders.'
  },
  {
    id: 'oil-seeds-cereals',
    name: 'Oil Seeds & Cereals',
    icon: '🌾',
    description: 'Premium export-quality sesame, peanuts, millet, sorghum, and wheat.'
  },
  {
    id: 'seasonings-blends',
    name: 'Seasonings & Blends',
    icon: '🫙',
    description: 'Custom-formulated seasoning mixes and blended spices for international cuisines.'
  },
  {
    id: 'preserved-products',
    name: 'Preserved Products',
    icon: '🫒',
    description: 'Vegetables and roots preserved in vinegar, brine, or acetic acid.'
  },
  {
    id: 'pastes',
    name: 'Pastes & Purees',
    icon: '🫕',
    description: 'Fresh, aromatic culinary pastes of ginger, garlic, and onions.'
  }
];

export const products: Product[] = [
  // Dehydrated Onion
  {
    id: 'onion-white-flakes',
    name: 'Dehydrated White Onion Flakes / Kibbled',
    category: 'dehydrated-onion',
    image: '/images/products/cat-dehydrated-onion.svg',
    forms: ['Flakes (Kibbled)', 'Chopped', 'Minced', 'Granules', 'Powder'],
    specs: {
      'Moisture Content': 'Max 5.0%',
      'Hot Water Insoluble': 'Max 20%',
      'Total Ash': 'Max 4.0%',
      'Acid Insoluble Ash': 'Max 0.5%',
      'Size': '8 to 15 mm (Flakes)'
    },
    description: 'Made from fresh, selected white onions, dehydrated to preserve natural aroma, sweetness, and pungency. Ideal for soups, sauces, canned foods, and fast-food preparations.'
  },
  {
    id: 'onion-red-flakes',
    name: 'Dehydrated Red Onion Flakes / Kibbled',
    category: 'dehydrated-onion',
    image: '/images/products/cat-dehydrated-onion.svg',
    forms: ['Flakes (Kibbled)', 'Chopped', 'Minced', 'Granules', 'Powder'],
    specs: {
      'Moisture Content': 'Max 5.0%',
      'Total Ash': 'Max 4.5%',
      'Acid Insoluble Ash': 'Max 0.5%',
      'Color': 'Reddish Purple'
    },
    description: 'Premium quality red onions processed carefully to maintain their signature color and sharp taste. Popular in salads, dry mixes, and international culinary formulations.'
  },
  {
    id: 'onion-pink-flakes',
    name: 'Dehydrated Pink Onion Flakes',
    category: 'dehydrated-onion',
    image: '/images/products/cat-dehydrated-onion.svg',
    forms: ['Flakes', 'Granules', 'Powder'],
    specs: {
      'Moisture Content': 'Max 5.0%',
      'Total Ash': 'Max 4.0%',
      'Color': 'Light Pink / Tan'
    },
    description: 'A cost-effective and flavorful alternative, pink onion flakes offer a balanced profile suitable for bulk manufacturing of seasoning blends.'
  },
  {
    id: 'onion-fried',
    name: 'Crispy Fried Onions',
    category: 'dehydrated-onion',
    image: '/images/products/cat-dehydrated-onion.svg',
    forms: ['Crispy Flakes'],
    specs: {
      'Moisture Content': 'Max 3.0%',
      'Oil Content': '20% - 25%',
      'Shelf Life': '12 Months'
    },
    description: 'Gently fried in high-quality oil to achieve a golden, crispy texture. Adds rich caramel onion notes and crunchy mouthfeel to global cuisines.'
  },

  // Dehydrated Garlic
  {
    id: 'garlic-flakes',
    name: 'Dehydrated Garlic Flakes / Cloves',
    category: 'dehydrated-garlic',
    image: '/images/products/cat-dehydrated-garlic.svg',
    forms: ['Flakes', 'Minced', 'Granules', 'Powder'],
    specs: {
      'Moisture Content': 'Max 5.5%',
      'Total Ash': 'Max 4.0%',
      'Acid Insoluble Ash': 'Max 0.5%',
      'Color': 'Creamy White'
    },
    description: 'Processed from high-quality local garlic bulbs. Offers the intense, signature pungency of fresh garlic without the peeling and cutting effort. Highly demanded by global food industries.'
  },
  {
    id: 'garlic-minced',
    name: 'Dehydrated Garlic Minced',
    category: 'dehydrated-garlic',
    image: '/images/products/cat-dehydrated-garlic.svg',
    forms: ['Minced (1-3mm)'],
    specs: {
      'Moisture Content': 'Max 5.0%',
      'Color': 'Creamy White',
      'Size': '10/20 mesh'
    },
    description: 'Minced garlic particles designed for optimal dispersion in sausages, dry spice rubs, herb butter, and marinades.'
  },
  {
    id: 'garlic-powder',
    name: 'Dehydrated Garlic Powder',
    category: 'dehydrated-garlic',
    image: '/images/products/cat-dehydrated-garlic.svg',
    forms: ['Fine Powder (100 mesh)'],
    specs: {
      'Moisture Content': 'Max 5.0%',
      'Ash Content': 'Max 4.5%',
      'Particle Size': '95% passing through 100 mesh'
    },
    description: 'Super-fine garlic powder with high dissolvability. Perfect for blending in seasonings, dry soup bases, and industrial snack coatings.'
  },

  // Spices & Herbs
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder (High Curcumin)',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Fingers', 'Powder'],
    specs: {
      'Curcumin Content': '3.0% - 5.5% (High grade)',
      'Moisture': 'Max 9.0%',
      'Total Ash': 'Max 7.0%'
    },
    description: 'Vibrant golden turmeric powder sourced from select farms. Rich in natural curcumin, providing brilliant color and powerful antioxidant benefits to food and nutraceutical applications.'
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin Seeds & Ground Cumin',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Seeds', 'Powder'],
    specs: {
      'Purity': '99% - 99.5% (Singapore/Europe Grade)',
      'Moisture': 'Max 8.0%',
      'Volatile Oil': 'Min 1.5%'
    },
    description: 'Aromatic, earthy, and warm cumin seeds sorted with state-of-the-art color sorting machines. Offers premium flavor intensity for Mexican, Indian, and Middle Eastern foods.'
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds & Ground Coriander',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Badami/Eagle', 'Powder'],
    specs: {
      'Moisture': 'Max 9.0%',
      'Total Ash': 'Max 6.0%',
      'Purity': '98.5% - 99%'
    },
    description: 'Sweet, citrusy, and mild coriander seeds. We export Eagle and Badami grades, meticulously cleaned and packaged to avoid moisture absorption.'
  },
  {
    id: 'ajwain-seeds',
    name: 'Ajwain (Carom) Seeds',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Seeds'],
    specs: {
      'Purity': '99%',
      'Moisture': 'Max 9.0%',
      'Thymol Content': 'Rich'
    },
    description: 'Pungent seeds with a thyme-like flavor, containing high concentrations of thymol. Meticulously cleaned for international markets.'
  },
  {
    id: 'fenugreek-seeds',
    name: 'Fenugreek Seeds',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Seeds', 'Powder'],
    specs: {
      'Purity': '99%',
      'Moisture': 'Max 8.5%'
    },
    description: 'Slightly bitter and nutty seeds used as a key ingredient in curry powders and pickle seasoning blends globally.'
  },
  {
    id: 'herb-thyme',
    name: 'Dry Thyme Leaves',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Whole Leaves', 'Powder'],
    specs: {
      'Moisture': 'Max 8.0%',
      'Purity': '99%'
    },
    description: 'Earthy, aromatic thyme leaves processed and dried in controlled hygienic conditions. Excellent for European seasoning mixes.'
  },
  {
    id: 'herb-parsley',
    name: 'Dry Parsley Leaves',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Rubbed Leaves'],
    specs: {
      'Moisture': 'Max 7.5%',
      'Color': 'Vibrant Green'
    },
    description: 'Bright green dried parsley leaves. Meticulously sorted to remove stems and preserve color, adding visual appeal and mild flavor to culinary products.'
  },
  {
    id: 'herb-basil',
    name: 'Dry Basil Leaves',
    category: 'spices-herbs',
    image: '/images/products/cat-spices-herbs.svg',
    forms: ['Rubbed Leaves'],
    specs: {
      'Moisture': 'Max 8.0%',
      'Color': 'Deep Green'
    },
    description: 'Fragrant and sweet basil leaves dried under shade to preserve essential oils. Perfect for Italian style pre-mixes and pasta sauces.'
  },

  // Chilli Products
  {
    id: 'chilli-flakes',
    name: 'Red Chilli Flakes (Pizza Cut)',
    category: 'chilli-products',
    image: '/images/products/cat-chilli-products.svg',
    forms: ['Coarse Flakes (with/without seeds)'],
    specs: {
      'Pungency': '15,000 to 40,000 SHU',
      'Moisture': 'Max 8.5%',
      'Seed Content': 'Customizable'
    },
    description: 'Coarsely crushed red chillies. Perfectly suited for tabletop dispensers, pizza toppings, and spice blends requiring visible chilli flakes.'
  },
  {
    id: 'chilli-powder',
    name: 'Red Chilli Powder (Cayenne style)',
    category: 'chilli-products',
    image: '/images/products/cat-chilli-products.svg',
    forms: ['Fine Powder'],
    specs: {
      'Pungency': '20,000 to 80,000 SHU (Custom)',
      'Color (ASTA)': '60 to 120 ASTA',
      'Moisture': 'Max 9.0%'
    },
    description: 'Finely ground red chillies with rich color and controllable pungency. Formulated to meet strict European Union microbiological guidelines.'
  },
  {
    id: 'chilli-whole',
    name: 'Whole Dry Red Chilli (Stem/Stemless)',
    category: 'chilli-products',
    image: '/images/products/cat-chilli-products.svg',
    forms: ['S17 Teja', 'Sanam (S4)', 'Byadgi (High Color)'],
    specs: {
      'Moisture': 'Max 10%',
      'Quality': 'A Grade, free from mold'
    },
    description: 'Direct-from-farm dried red chillies. We offer Teja for high heat, Sanam for medium heat, and Byadgi for deep red color with mild heat.'
  },

  // Dehydrated Vegetables & Fruits
  {
    id: 'veg-potato-flakes',
    name: 'Dehydrated Potato Flakes',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Flakes'],
    specs: {
      'Moisture': 'Max 6.5%',
      'Reducing Sugars': 'Low',
      'Rehydration': 'Excellent'
    },
    description: 'Made from high-starch potatoes. Ideal for instant mashed potato mixes, snack manufacturing, and thickening agent in soups.'
  },
  {
    id: 'veg-beetroot-flakes',
    name: 'Dried Beetroot Flakes & Powder',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Flakes', 'Powder'],
    specs: {
      'Moisture': 'Max 6.0%',
      'Color': 'Deep Crimson Red',
      'Purity': '100% natural'
    },
    description: 'Sweet and nutritious dried beetroot. The powder acts as a premium, clean-label natural red colorant for global food industries.'
  },
  {
    id: 'veg-spinach-leaves',
    name: 'Dehydrated Spinach Leaves & Powder',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Flakes/Leaves', 'Powder'],
    specs: {
      'Moisture': 'Max 7.0%',
      'Purity': '99% leaf content'
    },
    description: 'Cleaned, sanitized, and dehydrated spinach. Retains natural chlorophyll and mineral content, perfect for green noodles, pasta, and baby foods.'
  },
  {
    id: 'veg-moringa-leaves',
    name: 'Moringa (Superfood) Leaves & Powder',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Whole Leaves', 'Fine Powder'],
    specs: {
      'Moisture': 'Max 8.0%',
      'Color': 'Bright Green',
      'Microbiological': 'E.Coli/Salmonella Negative'
    },
    description: 'A nutrient-dense superfood product. Carefully shade-dried and pulverized into fine powder for export to health supplement and functional food markets.'
  },
  {
    id: 'fruit-mango-powder',
    name: 'Spray Dried Mango Powder',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Free Flowing Powder'],
    specs: {
      'Solubility': 'Instant',
      'Moisture': 'Max 4.0%',
      'Carrier': 'Maltodextrin / Gum Arabic'
    },
    description: 'Processed from ripe mango pulp using advanced spray drying technology. Retains the authentic sweet and tangy taste of Indian Alphonso/Totapuri mangoes.'
  },
  {
    id: 'fruit-lemon-powder',
    name: 'Spray Dried Lemon Juice Powder',
    category: 'dehydrated-veg-fruits',
    image: '/images/products/cat-dehydrated-veg-fruits.svg',
    forms: ['Free Flowing Powder'],
    specs: {
      'Acidity': 'High natural citric acid',
      'Solubility': '100%'
    },
    description: 'Provides instant, sharp lemon flavor and sourness. Widely used in beverage mixes, dessert powders, and seasoning blends.'
  },

  // Oil Seeds & Cereals
  {
    id: 'seed-sesame',
    name: 'Sesame Seeds (Natural & Hulled)',
    category: 'oil-seeds-cereals',
    image: '/images/products/cat-oil-seeds-cereals.svg',
    forms: ['Natural White', 'Hulled Auto-dried', 'Black Sesame'],
    specs: {
      'Purity': '99.9% - 99.99% (Sortex Cleaned)',
      'Admixture': 'Max 0.01%',
      'FFA': 'Max 1.5%'
    },
    description: 'Premium Indian sesame seeds processed in state-of-the-art hulling plants. Cleaned to 99.99% purity, meeting strict international standards for bakery and confectionery.'
  },
  {
    id: 'seed-peanut',
    name: 'Groundnut / Peanuts (Bold & Java)',
    category: 'oil-seeds-cereals',
    image: '/images/products/cat-oil-seeds-cereals.svg',
    forms: ['Bold (counts 40/50, 50/60)', 'Java (counts 60/70, 70/80)'],
    specs: {
      'Aflatoxin': 'Max 4 ppb / Negative (EU standards)',
      'Moisture': 'Max 7.0%'
    },
    description: 'Crunchy and sweet peanuts graded by size count. Tested extensively for aflatoxin compliance prior to shipment.'
  },
  {
    id: 'cereal-millet',
    name: 'Green Millet (Bajra)',
    category: 'oil-seeds-cereals',
    image: '/images/products/cat-oil-seeds-cereals.svg',
    forms: ['Whole Grain'],
    specs: {
      'Purity': '99%',
      'Moisture': 'Max 12%',
      'Foreign Matter': 'Max 1.0%'
    },
    description: 'High-energy grain sourced from Gujarat, cleaned and graded. Used for animal feed, bird seed, and human consumption markets.'
  },
  {
    id: 'cereal-sorghum',
    name: 'Sorghum (Jowar) - White/Yellow',
    category: 'oil-seeds-cereals',
    image: '/images/products/cat-oil-seeds-cereals.svg',
    forms: ['Whole Grain'],
    specs: {
      'Moisture': 'Max 12%',
      'Purity': '99%'
    },
    description: 'Premium sorghum grains, gluten-free and nutritious, processed and packed under strict hygiene control.'
  },

  // Seasonings & Blends
  {
    id: 'blend-curry-powder',
    name: 'Madras Curry Powder',
    category: 'seasonings-blends',
    image: '/images/products/cat-seasonings-blends.svg',
    forms: ['Powder'],
    specs: {
      'Moisture': 'Max 8.0%',
      'Formula': 'Customizable'
    },
    description: 'A traditional Indian spice blend made from turmeric, coriander, cumin, fenugreek, and dry chilli. Formulated for global export markets.'
  },
  {
    id: 'blend-garam-masala',
    name: 'Garam Masala Blend',
    category: 'seasonings-blends',
    image: '/images/products/cat-seasonings-blends.svg',
    forms: ['Powder'],
    specs: {
      'Aroma': 'Highly aromatic, warm'
    },
    description: 'A rich blend of warm spices including black pepper, cloves, cinnamon, cardamom, and cumin, ground to perfection.'
  },

  // Preserved Products
  {
    id: 'preserved-silverskin-onion',
    name: 'Silverskin Onion in Vinegar / Brine',
    category: 'preserved-products',
    image: '/images/products/cat-preserved-products.svg',
    forms: ['Whole in liquid'],
    specs: {
      'Acidity (Acetic Acid)': '1.5% - 2.5%',
      'Salt (NaCl)': 'Optional (per spec)',
      'Size': '18 to 28 mm'
    },
    description: 'Crunchy, sweet, and tangy small silver skin onions preserved under controlled pH conditions. Widely exported for pickle and cocktail food brands.'
  },
  {
    id: 'preserved-ginger',
    name: 'Preserved Ginger in Acetic Acid',
    category: 'preserved-products',
    image: '/images/products/cat-preserved-products.svg',
    forms: ['Sliced', 'Whole in liquid'],
    specs: {
      'Acidity': 'Adjustable',
      'Salt': 'Adjustable'
    },
    description: 'Fresh ginger roots sanitized and preserved in food-grade acid, retaining its spicy punch and crispy texture.'
  },

  // Pastes & Purees
  {
    id: 'paste-garlic',
    name: 'Culinary Garlic Paste',
    category: 'pastes',
    image: '/images/products/cat-pastes.svg',
    forms: ['Smooth Paste'],
    specs: {
      'Solids (TSS)': 'Min 25%',
      'pH': '3.8 - 4.2 (Shelf stable)',
      'Preservatives': 'As per destination country regulations'
    },
    description: 'Ready-to-use smooth garlic paste prepared from selected peeled cloves. Retains all volatile oils and fresh garlic notes.'
  },
  {
    id: 'paste-ginger-garlic',
    name: 'Ginger Garlic Blended Paste',
    category: 'pastes',
    image: '/images/products/cat-pastes.svg',
    forms: ['50:50 Blend', '60:40 Blend (Custom)'],
    specs: {
      'pH': '3.9 - 4.3',
      'Shelf Life': '12 Months'
    },
    description: 'A perfect culinary blend of ginger and garlic paste. Offers balanced flavors for cooking applications in hotels, restaurants, and home pre-mixes.'
  }
];
