# Valaki Exports — Brand Fonts (Old Design)

This documents the **original site's typography**, which has been carried over into
the new ocean-editorial UI. The new design's own fonts (Bricolage Grotesque /
Manrope / IBM Plex Mono) were intentionally **not** used — these brand fonts were
copied over instead.

> All three live fonts are wired to CSS variables in one swappable block at the
> top of [`src/style.css`](src/style.css). Change those three values to re-skin the
> entire site's typography.

---

## Font families & roles

| Role | CSS variable | Font stack | Used for |
|------|--------------|-----------|----------|
| **Display / brand headline** | `--font-display` | `'Belwe Bd BT', 'Playfair Display', Georgia, serif` | All `h1`–`h6`, hero/section titles, big stat numbers, card titles, product figure numerals, buttons |
| **Body / UI** | `--font-body` | `'Inter', 'Segoe UI', system-ui, sans-serif` | Paragraphs, nav links, form fields, footer copy, general UI text |
| **Mono / data** | `--font-mono` | `'Space Grotesk', 'SF Mono', Consolas, monospace` | Eyebrows, HS codes, spec tables, certification labels, marquee tags, uppercase micro-labels |

**Belwe Bd BT** is the brand face — it matches the lettering in the Valaki logo,
which is why it carries the headlines.

---

## Where the fonts are loaded

The same `<link>` tags appear in the `<head>` of every page
([`index.html`](index.html), [`products.html`](products.html),
[`about.html`](about.html), [`contact.html`](contact.html)):

```html
<!-- Google Fonts: Inter (body), Playfair Display (display fallback), Space Grotesk (mono) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

<!-- Belwe brand fonts (match the logo lettering) -->
<link href="https://fonts.cdnfonts.com/css/belwe-bd-bt" rel="stylesheet" />
<link href="https://db.onlinewebfonts.com/c/38d15e6783e73ca3b0c7c06f79ac7bc4?family=Belwe+W01+Condensed" rel="stylesheet" />
```

| Family | Source | Weights |
|--------|--------|---------|
| Inter | Google Fonts | 300, 400, 500, 600, 700 |
| Playfair Display | Google Fonts | 400, 600, 700 + italic 400 |
| Space Grotesk | Google Fonts | 400, 500, 600, 700 |
| Belwe Bd BT | fonts.cdnfonts.com | single bold-drawn weight |
| Belwe W01 Condensed | db.onlinewebfonts.com | single condensed weight |

---

## Original old-design token set (full reference)

The previous "Trade House Ledger" site defined the complete font system as:

```css
:root {
  --font-sans:    'Inter', sans-serif;                          /* general body */
  --font-serif:   'Playfair Display', serif;                    /* editorial serif */
  --font-mono:    'Space Grotesk', sans-serif;                  /* labels / data */
  --font-display: 'Belwe Bd BT', 'Playfair Display', serif;     /* brand headline (logo lettering) */
  --font-body:    'Belwe W01 Condensed', 'Inter', sans-serif;   /* long-form prose */
}
```

### Styling rules from the old design

- **Headings (`h1`–`h6`)** used `--font-display` at **`font-weight: 400`**.
  Belwe Bd BT ships a single bold-drawn weight, so synthetic bolding distorts it —
  keep headings at weight 400 when using real Belwe.
  - `line-height: 1.2`, `letter-spacing: 0.015em`, `text-wrap: balance`.
- **Prose (`p`, `blockquote`, `li`)** used `--font-body` (Belwe W01 Condensed)
  with `letter-spacing: 0.02em`.
- **Body default** used `--font-sans` (Inter), `line-height: 1.6`.

---

## Mapping: old design → new UI

The new UI consolidates to three live roles (display / body / mono):

| Old token | New token | Value now |
|-----------|-----------|-----------|
| `--font-display` | `--font-display` | `'Belwe Bd BT', 'Playfair Display', Georgia, serif` |
| `--font-sans` (body) | `--font-body` | `'Inter', 'Segoe UI', system-ui, sans-serif` |
| `--font-mono` | `--font-mono` | `'Space Grotesk', 'SF Mono', Consolas, monospace` |
| `--font-serif` | — | folded into the `--font-display` fallback (Playfair Display) |
| `--font-body` (Belwe Condensed) | — | no longer applied site-wide; Belwe W01 Condensed is still loaded if you want to reintroduce it for long-form prose |

> **Note on weights:** the new layout uses `font-weight: 700` on headlines. With the
> real Belwe Bd BT webfont that will be synthetically bolded; if it looks heavy,
> drop heading weights to `400` (as the old site did) or fall back to Playfair
> Display 700.
