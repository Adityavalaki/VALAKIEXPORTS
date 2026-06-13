// Valaki Exports — export portfolio (ported from the new UI design).
// Products render as gradient "plates" (g1 -> g2) with a mono spec language.

export interface Product {
  id: string;
  name: string;
  cat: string;
  catLabel: string;
  g1: string;
  g2: string;
  hs: string;
  moisture: string;
  forms: string[];
  desc: string;
  specs: Record<string, string>;
}

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Products" },
  { id: "onion", label: "Onion" },
  { id: "garlic", label: "Garlic" },
  { id: "spice", label: "Spices & Herbs" },
  { id: "chilli", label: "Chilli" },
  { id: "veg", label: "Veg & Fruits" },
  { id: "seed", label: "Seeds & Cereals" },
  { id: "season", label: "Seasonings" },
  { id: "preserved", label: "Preserved" },
  { id: "paste", label: "Pastes" },
];

export const PRODUCTS: Product[] = [
  { id: "onion-white", name: "White Onion Flakes", cat: "onion", catLabel: "Dehydrated Onion", g1: "#EFE7D2", g2: "#CDBB8E", hs: "0712.20.00", moisture: "Moisture ≤ 5%", forms: ["Flakes", "Minced", "Granules", "Powder"], desc: "Fresh white onions dehydrated to lock in natural sweetness and pungency. Built for soups, sauces, canned and convenience foods.", specs: { "Moisture": "Max 5.0%", "Hot Water Insoluble": "Max 20%", "Total Ash": "Max 4.0%", "Acid Insoluble Ash": "Max 0.5%", "Size": "8–15 mm flakes" } },
  { id: "onion-red", name: "Red Onion Flakes", cat: "onion", catLabel: "Dehydrated Onion", g1: "#B23A2C", g2: "#7A1C12", hs: "0712.20.00", moisture: "Moisture ≤ 5%", forms: ["Flakes", "Chopped", "Granules", "Powder"], desc: "Premium red onions processed to hold signature colour and sharp taste. Popular in salads, dry mixes and seasoning blends.", specs: { "Moisture": "Max 5.0%", "Total Ash": "Max 4.5%", "Acid Insoluble Ash": "Max 0.5%", "Colour": "Reddish purple" } },
  { id: "onion-pink", name: "Pink Onion Flakes", cat: "onion", catLabel: "Dehydrated Onion", g1: "#CE7E72", g2: "#9E4A40", hs: "0712.20.00", moisture: "Moisture ≤ 5%", forms: ["Flakes", "Granules", "Powder"], desc: "A balanced, cost-effective profile — the Mahuva speciality — ideal for bulk seasoning manufacture.", specs: { "Moisture": "Max 5.0%", "Total Ash": "Max 4.0%", "Colour": "Light pink / tan" } },
  { id: "onion-fried", name: "Crispy Fried Onion", cat: "onion", catLabel: "Dehydrated Onion", g1: "#E0A33C", g2: "#A1540F", hs: "2003.90.10", moisture: "Moisture ≤ 3%", forms: ["Crispy", "Golden"], desc: "Sunflower-fried to a golden, crisp texture. Rich caramel onion notes and crunch, ready to top.", specs: { "Moisture": "Max 3.0%", "Oil Content": "20–25%", "Shelf Life": "12 months" } },
  { id: "garlic-flakes", name: "Garlic Flakes / Cloves", cat: "garlic", catLabel: "Dehydrated Garlic", g1: "#E9E1CE", g2: "#C8B98F", hs: "0712.90.40", moisture: "Moisture ≤ 5.5%", forms: ["Flakes", "Minced", "Granules", "Powder"], desc: "High-pungency local garlic, the signature kick of fresh garlic without the peeling. A food-industry staple.", specs: { "Moisture": "Max 5.5%", "Total Ash": "Max 4.0%", "Acid Insoluble Ash": "Max 0.5%", "Colour": "Creamy white" } },
  { id: "garlic-powder", name: "Garlic Powder", cat: "garlic", catLabel: "Dehydrated Garlic", g1: "#ECE6D6", g2: "#CDBF99", hs: "0712.90.40", moisture: "Moisture ≤ 5%", forms: ["Fine powder (100 mesh)"], desc: "Super-fine, high-dissolvability garlic powder for seasonings, soup bases and snack coatings.", specs: { "Moisture": "Max 5.0%", "Ash Content": "Max 4.5%", "Particle Size": "95% through 100 mesh" } },
  { id: "garlic-minced", name: "Garlic Minced", cat: "garlic", catLabel: "Dehydrated Garlic", g1: "#E6DCC4", g2: "#C2B083", hs: "0712.90.40", moisture: "Moisture ≤ 5%", forms: ["Minced 1–3 mm"], desc: "Minced particles for even dispersion in sausages, dry rubs, herb butter and marinades.", specs: { "Moisture": "Max 5.0%", "Colour": "Creamy white", "Size": "10/20 mesh" } },
  { id: "turmeric", name: "Turmeric Powder", cat: "spice", catLabel: "Spices & Herbs", g1: "#E5A52A", g2: "#B6760D", hs: "0910.30.20", moisture: "Moisture ≤ 9%", forms: ["Whole fingers", "Powder"], desc: "Vibrant high-curcumin turmeric for brilliant colour and antioxidant value in food and nutraceuticals.", specs: { "Curcumin": "3.0–5.5%", "Moisture": "Max 9.0%", "Total Ash": "Max 7.0%" } },
  { id: "cumin", name: "Cumin Seeds & Powder", cat: "spice", catLabel: "Spices & Herbs", g1: "#B07A36", g2: "#7C521F", hs: "0909.31.00", moisture: "Moisture ≤ 8%", forms: ["Whole seeds", "Powder"], desc: "Aromatic, earthy cumin, machine colour-sorted to Singapore / Europe grade.", specs: { "Purity": "99–99.5%", "Moisture": "Max 8.0%", "Volatile Oil": "Min 1.5%" } },
  { id: "coriander", name: "Coriander Seeds & Powder", cat: "spice", catLabel: "Spices & Herbs", g1: "#A89A4A", g2: "#76692B", hs: "0909.21.00", moisture: "Moisture ≤ 9%", forms: ["Eagle / Badami", "Powder"], desc: "Sweet, citrusy coriander in Eagle and Badami grades, cleaned and moisture-protected.", specs: { "Moisture": "Max 9.0%", "Total Ash": "Max 6.0%", "Purity": "98.5–99%" } },
  { id: "basil", name: "Dry Basil Leaves", cat: "spice", catLabel: "Spices & Herbs", g1: "#4E9E66", g2: "#27623C", hs: "1211.90.99", moisture: "Moisture ≤ 8%", forms: ["Rubbed leaves"], desc: "Fragrant, shade-dried basil that holds its essential oils — for Italian pre-mixes and pasta sauces.", specs: { "Moisture": "Max 8.0%", "Colour": "Deep green" } },
  { id: "chilli-flakes", name: "Red Chilli Flakes", cat: "chilli", catLabel: "Chilli Products", g1: "#C2402A", g2: "#841F12", hs: "0904.22.11", moisture: "Moisture ≤ 8.5%", forms: ["Coarse flakes"], desc: "Coarsely crushed red chilli for table dispensers, pizza toppings and visible-flake blends.", specs: { "Pungency": "15,000–40,000 SHU", "Moisture": "Max 8.5%", "Seed Content": "Customisable" } },
  { id: "chilli-powder", name: "Red Chilli Powder", cat: "chilli", catLabel: "Chilli Products", g1: "#C23A28", g2: "#7E1C12", hs: "0904.22.12", moisture: "Moisture ≤ 9%", forms: ["Fine powder"], desc: "Finely ground chilli with rich colour and controllable heat, formulated to EU microbiological limits.", specs: { "Pungency": "20,000–80,000 SHU", "Colour (ASTA)": "60–120", "Moisture": "Max 9.0%" } },
  { id: "chilli-whole", name: "Whole Dry Red Chilli", cat: "chilli", catLabel: "Chilli Products", g1: "#A82E1C", g2: "#6C160C", hs: "0904.21.10", moisture: "Moisture ≤ 10%", forms: ["Teja S17", "Sanam S4", "Byadgi"], desc: "Direct-from-farm dried chilli — Teja for heat, Sanam for medium, Byadgi for deep colour.", specs: { "Moisture": "Max 10%", "Quality": "A grade, mould-free" } },
  { id: "potato", name: "Potato Flakes", cat: "veg", catLabel: "Veg & Fruits", g1: "#E3D7B4", g2: "#BFAA78", hs: "0712.90.05", moisture: "Moisture ≤ 6.5%", forms: ["Flakes"], desc: "High-starch potato flakes for instant mash, snacks and as a soup thickener.", specs: { "Moisture": "Max 6.5%", "Reducing Sugars": "Low", "Rehydration": "Excellent" } },
  { id: "beetroot", name: "Beetroot Flakes & Powder", cat: "veg", catLabel: "Veg & Fruits", g1: "#8E3357", g2: "#561B33", hs: "0712.90.90", moisture: "Moisture ≤ 6%", forms: ["Flakes", "Powder"], desc: "Sweet dried beetroot; the powder is a clean-label natural red colourant.", specs: { "Moisture": "Max 6.0%", "Colour": "Deep crimson", "Purity": "100% natural" } },
  { id: "spinach", name: "Spinach Leaves & Powder", cat: "veg", catLabel: "Veg & Fruits", g1: "#3C8A55", g2: "#1F4E32", hs: "0712.90.90", moisture: "Moisture ≤ 7%", forms: ["Flakes", "Powder"], desc: "Sanitised, colour-retentive spinach for green noodles, pasta and baby foods.", specs: { "Moisture": "Max 7.0%", "Purity": "99% leaf content" } },
  { id: "moringa", name: "Moringa Leaf Powder", cat: "veg", catLabel: "Veg & Fruits", g1: "#5AA85F", g2: "#2E6B38", hs: "1211.90.99", moisture: "Moisture ≤ 8%", forms: ["Whole leaves", "Fine powder"], desc: "Nutrient-dense superfood, shade-dried and milled for supplement and functional-food markets.", specs: { "Moisture": "Max 8.0%", "Colour": "Bright green", "Micro": "E.coli / Salmonella negative" } },
  { id: "mango", name: "Spray-Dried Mango Powder", cat: "veg", catLabel: "Veg & Fruits", g1: "#E6A93A", g2: "#BC7A16", hs: "0804.50.40", moisture: "Moisture ≤ 4%", forms: ["Free-flowing powder"], desc: "Ripe Alphonso / Totapuri pulp spray-dried to keep its sweet-tangy taste.", specs: { "Solubility": "Instant", "Moisture": "Max 4.0%", "Carrier": "Maltodextrin" } },
  { id: "sesame", name: "Sesame Seeds", cat: "seed", catLabel: "Seeds & Cereals", g1: "#E9E1CD", g2: "#C9BB92", hs: "1207.40.90", moisture: "Moisture ≤ 6%", forms: ["Natural", "Hulled", "Black"], desc: "Sortex-cleaned to 99.99% purity for bakery and confectionery markets.", specs: { "Purity": "99.9–99.99%", "Admixture": "Max 0.01%", "FFA": "Max 1.5%" } },
  { id: "peanut", name: "Groundnut / Peanuts", cat: "seed", catLabel: "Seeds & Cereals", g1: "#C8A772", g2: "#9C7A44", hs: "1202.42.20", moisture: "Moisture ≤ 7%", forms: ["Bold 40/50", "Java 60/70"], desc: "Crunchy, sweet peanuts graded by count and tested for aflatoxin to EU standards.", specs: { "Aflatoxin": "Max 4 ppb (EU)", "Moisture": "Max 7.0%" } },
  { id: "millet", name: "Green Millet (Bajra)", cat: "seed", catLabel: "Seeds & Cereals", g1: "#DEC265", g2: "#B49636", hs: "1008.21.10", moisture: "Moisture ≤ 12%", forms: ["Whole grain"], desc: "High-energy Gujarat millet, cleaned and graded for feed and human consumption.", specs: { "Purity": "99%", "Moisture": "Max 12%", "Foreign Matter": "Max 1.0%" } },
  { id: "curry", name: "Madras Curry Powder", cat: "season", catLabel: "Seasonings", g1: "#C68829", g2: "#8F5E18", hs: "0910.91.00", moisture: "Moisture ≤ 8%", forms: ["Powder"], desc: "Traditional blend of turmeric, coriander, cumin, fenugreek and chilli — formula to your recipe.", specs: { "Moisture": "Max 8.0%", "Formula": "Customisable" } },
  { id: "garam", name: "Garam Masala Blend", cat: "season", catLabel: "Seasonings", g1: "#8C5A30", g2: "#5A3819", hs: "0910.91.00", moisture: "Moisture ≤ 8%", forms: ["Powder"], desc: "A warm blend of pepper, clove, cinnamon, cardamom and cumin, ground to spec.", specs: { "Aroma": "Warm, highly aromatic", "Formula": "Customisable" } },
  { id: "silverskin", name: "Silverskin Onion in Brine", cat: "preserved", catLabel: "Preserved", g1: "#A9D3E8", g2: "#5FB4DA", hs: "2001.10.00", moisture: "pH controlled", forms: ["Whole in liquid"], desc: "Crunchy, sweet-tangy silverskin onions preserved under controlled pH for pickle and cocktail brands.", specs: { "Acidity": "1.5–2.5%", "Salt": "Per spec", "Size": "18–28 mm" } },
  { id: "ginger-preserved", name: "Preserved Ginger", cat: "preserved", catLabel: "Preserved", g1: "#D6C078", g2: "#B09744", hs: "2008.99.00", moisture: "pH controlled", forms: ["Sliced", "Whole"], desc: "Fresh ginger sanitised and preserved in food-grade acid, keeping its spicy crunch.", specs: { "Acidity": "Adjustable", "Salt": "Adjustable" } },
  { id: "garlic-paste", name: "Culinary Garlic Paste", cat: "paste", catLabel: "Pastes", g1: "#E2D8C0", g2: "#BEAE85", hs: "2103.90.40", moisture: "Shelf stable", forms: ["Smooth paste"], desc: "Ready-to-use garlic paste from selected peeled cloves, retaining volatile oils.", specs: { "Solids (TSS)": "Min 25%", "pH": "3.8–4.2", "Preservatives": "Per destination" } },
  { id: "gg-paste", name: "Ginger Garlic Paste", cat: "paste", catLabel: "Pastes", g1: "#CCB587", g2: "#A28C58", hs: "2103.90.40", moisture: "Shelf stable", forms: ["50:50 blend", "60:40 blend"], desc: "Balanced ginger-garlic paste for kitchens, HORECA and home pre-mixes.", specs: { "pH": "3.9–4.3", "Shelf Life": "12 months" } },
];
