# Valaki Exports — Design System

A complete brand + UI system for **Valaki Exports Co.** (Mahuva, Bhavnagar, Gujarat, India) — B2B manufacturer and exporter of dehydrated onions, garlic, vegetables and their processed forms.

## Company context

- **Who:** Valaki Exports Co., a group company of **Valaki Brothers** — large-scale farmers by inheritance, diversified into agro seeds/pesticides/fertilisers (1982), agricultural commodities (1991), spice sourcing & export (2004), and vegetable dehydration & processing (2013). Sister brand: **Euro Foods Industries** (est. 2016, eurofoods.in).
- **What:** Dehydrated onion (white / red / pink — flakes, kibbled, chopped, minced, granules, powder), dehydrated & fried garlic, fried onion, dehydrated vegetables & fruits, chilli products, spices & herbal products, oil seeds, seasonings & blended spices, corn starch / yellow maize.
- **Where it sells:** Global B2B — importers, distributors, food manufacturers, HORECA, private label. Plant in the onion/garlic growing belt (Mahuva, Bhavnagar) with ~18 MT/day capacity.
- **Trust signals:** USFDA, ISO 22000, HALAL, KOSHER, FSSAI approvals; APEDA, Spice Board, MSME, GST registrations; in-house + NABL/SGS/Eurofins testing.
- **Audience:** procurement managers and food-industry buyers worldwide. The design must read as *modern, certified, industrial-scale, export-grade* — not artisanal.

### Sources
- `uploads/logo.png` — primary logo (two-tone blue emblem + wordmark).
- `uploads/BROCHURE.pdf` — 8-page product brochure (image-heavy; pages feature Dehydrated Fried Onion, Corn Starch / Yellow Maize). *Note: pages could not be rasterized programmatically — text extracted only.*
- Public web: eurofoods.in product pages, IndiaMART catalog (indiamart.com/valaki-exports-co), LinkedIn posts by Kamlesh/Ramesh Valaki.

### Design direction (per brief)
Futuristic, animated, color-rich exporter website. The system pairs the logo's cerulean/sky blues with deep "ocean" dark surfaces, an aurora cyan→mint gradient signature, and harvest-gold accents drawn from the produce (fried-onion gold, chilli ember).

---

## CONTENT FUNDAMENTALS

How Valaki/Euro Foods writes (from eurofoods.in, IndiaMART, LinkedIn):

- **Voice:** first-person plural — "We are confident of the quality of our products", "We offer products in various forms…". The company speaks as "we", addresses buyers as "you / our clients".
- **Tone:** earnest, courteous, proof-driven B2B. Heavy on certifications, capacity figures, and process claims. Slightly formal Indian business English ("We take immense pleasure to introduce ourselves…", "Awaiting to work with your esteemed company").
- **In this design system, keep the earnestness but tighten it:** lead with verifiable facts (certifications, MT/day, since 1987), short declarative sentences, no fluff. E.g. "Export-grade dehydrated onion. 18 MT/day. USFDA approved."
- **Casing:** Title Case for product names ("Dehydrated Onion Chopped", "Red Onion Powder"); sentence case for body copy; UPPERCASE reserved for micro-labels/eyebrows (mono font, wide tracking): `HS CODE 07122000`, `SINCE 1987`.
- **Vocabulary:** "dehydrated", "export-grade", "food-safe", "private labelling", "contract manufacturing", form names (flakes / kibbled / chopped / minced / granules / powder), mesh sizes, moisture %, packing specs (20 kg poly bag in carton).
- **Numbers are content:** specs, capacities, certifications and HS codes are rendered in mono type as first-class UI elements — this is the brand's proof language.
- **Emoji:** never.

---

## VISUAL FOUNDATIONS

- **Color:** brand axis is the logo's two blues — cerulean `#1D85B8` (`--ocean-600`) and sky `#A9D3E8` (`--ocean-300`) — extended to a 10-step ocean scale plus a deep navy dark scale (`--deep-700…950`). A **warm bone/ink editorial set** (`--bone-50…300`, `--ink-900/700/500`) anchors the raw marketing canvas. Accents come from the produce: fried-onion gold `--gold-500`, chilli ember `--ember-500`, leaf green `--leaf-500` — used as confident solid color fields (produce plates, accent bands), not blurry glows. The aurora gradient remains for the logo/foundation specimens but is **retired from the marketing site** in favour of flat, rich color blocks.
- **Three surface worlds:** (1) *Paper* — warm bone `--surface-paper` (#F6F0E4) with near-black `--ink-900` editorial type, `--border-paper` hairlines, square-ish corners and hard offset shadows (`12px 12px 0 ink`); this is the **primary marketing canvas** — raw, editorial, designer-grade. (2) *Deep* — near-black navy `--surface-deep` used as full-bleed accent bands (kinetic marquee, quality stats, footer) with cyan/gold and a faint dot texture. (3) *Light* — cool `--neutral-50` with white cards, for docs/specs/app surfaces. Pages alternate **paper ↔ deep** for rich rhythm; max 2 background worlds per page.
- **Raw editorial system (marketing):** exposed baseline grid feel — full-width ink hairlines, mono micro-labels and HS codes as first-class UI, parenthetical section numerals `(01)…(05)`, giant ghost numerals, asymmetric grids, generous negative space = premium. Buttons stay pill; everything else is 4–6px corners.
- **Kinetic motion is the signature** (per brief: "moving heading / moving photos"): a running mono **ticker** strip pinned above the nav; a full-bleed **kinetic marquee** of giant Space-Grotesk product words (alternating sky-fill / cerulean-outline, gold ✳ separators) on deep; an **auto-scrolling product rail** of duotone produce plates that pauses on hover; a **word-by-word rising headline** (`ve-word-rise`). All marquees `animation: ve-marquee … linear infinite` (track = content ×2, `translateX(-50%)`), paused on `:hover`, killed under `prefers-reduced-motion`.
- **Produce plates:** product imagery is stood in by **duotone color fields** (`VE_TONES` — ivory/crimson/rose/ember/amber/spice/leaf/forest/chilli/maize) with a halftone dot texture, corner sheen, ghost index numeral and mono spec — premium, food-grade, never flat brand color. These are placeholders for the brand's real product photography (drop real photos in their place).
- **Type:** Space Grotesk for display (tight leading 1.08, −0.02em tracking), Manrope for body (1.6 leading), IBM Plex Mono for data/eyebrows (UPPERCASE, +0.16em tracking). Hero display up to 64px; body 16px.
- **Spacing:** 4px grid; sections breathe at 96px (`--section-gap`); cards pad 24–32px; controls are 36/44/52px tall.
- **Radii:** generous — cards 14–20px, hero panels 28px, all buttons/chips/badges full pill.
- **Shadows:** cool blue-cast, soft and wide on light surfaces (`--shadow-md`); on deep surfaces use **glows** instead (`--glow-cyan`, `--glow-gold`).
- **Borders:** hairline 1px everywhere; on deep surfaces borders are translucent sky (`rgba(95,180,218,.22)`).
- **Animation:** animated but composed. Entrances rise + fade 280–600ms on `--ease-out` (expo); hovers lift −3px with shadow/glow growth at 150ms; presses scale 0.98. Ambient motion is slow (8s) — aurora gradient drift, floating product imagery, pulsing glows. Use `@keyframes ve-rise-in / ve-aurora-drift / ve-float / ve-pulse-glow`. Respect `prefers-reduced-motion`.
- **Hover states:** light surfaces — lift + stronger shadow + border darkens to `--border-strong`; deep surfaces — glow intensifies + border brightens. Links/buttons shift one scale step lighter (`--action-primary-hover`).
- **Press states:** one step darker + `scale(0.98)`.
- **Imagery:** real product photography (flakes, powders, bulbs) on clean or deep backgrounds; warm golden-hour produce tones contrast deliberately with the cool blue UI. No illustration style established — don't invent one; use photo placeholders until assets are supplied.
- **Transparency & blur:** glass treatment **only on deep surfaces** (nav bars over heroes, stat cards); never on light surfaces.
- **Focus:** 3px ring `--focus-ring` outside the element.

---

## ICONOGRAPHY

- No proprietary icon set exists in the provided materials. **Substitution (flagged):** [Lucide](https://lucide.dev) via CDN — 1.5px stroke, geometric, matches Space Grotesk's technical character. Load: `<script src="https://unpkg.com/lucide@latest"></script>` + `lucide.createIcons()`, or copy individual SVGs.
- Usage: 16–20px inline with text, 24px in cards, 40px in feature tiles inside a tinted pill/circle (`--surface-brand-tint` on light, `--surface-deep-card` on deep).
- Stroke color follows text color; accent icons may use `--ocean-600` or `--gold-500`. Never multi-color icons.
- Relevant set: `ship`, `container`, `factory`, `leaf`, `flame`, `shield-check`, `badge-check`, `globe`, `package`, `truck`, `flask-conical`, `thermometer`.
- **Logos** (in `assets/`): `logo-original.png` (1024² on white), `logo-full.png` (trimmed, transparent bg), `logo-mark.png` (emblem only, transparent — use on deep surfaces at ≥32px). Emoji and unicode-as-icon: never.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry — imports all tokens + fonts |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css` |
| `fonts/fonts.css` | Google Fonts loads (substitutes — see caveat) |
| `assets/` | `logo-original.png`, `logo-full.png`, `logo-mark.png` |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `components/buttons/` | `Button` — pill action button (primary / accent / outline / ghost / glass) |
| `components/badges/` | `Badge` (mono status pill), `CertChip` (certification trust chip) |
| `components/forms/` | `Input` (text/textarea), `Select` — RFQ form fields |
| `components/cards/` | `ProductCard`, `StatCard`, `SectionHeading` |
| `ui_kits/website/` | Editorial export site — long-form: hero, story, heritage timeline, range (hover-preview index), six forms, spec table, markets band, process, quality, private label, packing & logistics, buyer FAQ, RFQ, footer. Newsreader/Archivo, minimal. |
| `SKILL.md` | Agent-skill entry point |

All components are exported on the compiled bundle namespace (see `check_design_system` / `_ds_manifest.json`); load `_ds_bundle.js` and `styles.css`, then `const { Button } = window.<Namespace>`.

## Caveats
- **Fonts are Google-Fonts substitutes** (no brand font binaries were provided). Space Grotesk / Manrope / IBM Plex Mono.
- **Icons are Lucide substitutes** (no brand icon set exists).
- Brochure pages could not be rasterized; product photography must be supplied by the brand.
