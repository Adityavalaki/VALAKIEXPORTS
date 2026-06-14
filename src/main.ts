import "./style.css";
import { PRODUCTS, CATEGORIES, type Product } from "./products.ts";

/* ==========================================================================
   SHARED CHROME — top marquee + nav + footer, injected on every page
   ========================================================================== */

// Tabler-style nav icons (outline, round joins)
const navIcons: Record<string, string> = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/></svg>`,
  products: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9z"/><path d="M12 12l8 -4.5"/><path d="M12 12v9"/><path d="M12 12l-8 -4.5"/></svg>`,
  about: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>`,
  contact: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/><path d="M3 7l9 6l9 -6"/></svg>`,
};

// Outline social / marketplace icon buttons (shared by Contact + Footer)
const socialRowHTML = `
<div class="icon-row">
  <a class="icon-btn icon-btn--linkedin" href="https://www.linkedin.com/company/valaki-exports" target="_blank" rel="noopener" aria-label="Valaki Exports on LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
  <a class="icon-btn icon-btn--instagram" href="https://www.instagram.com/valakiexports" target="_blank" rel="noopener" aria-label="Valaki Exports on Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg></a>
  <a class="icon-btn icon-btn--whatsapp" href="https://wa.me/919876543210" target="_blank" rel="noopener" aria-label="Chat with Valaki Exports on WhatsApp" title="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.421 1.451 5.441.002 9.869-4.417 9.872-9.861.002-2.638-1.023-5.118-2.883-6.98-1.859-1.861-4.336-2.885-6.977-2.885-5.45 0-9.879 4.417-9.882 9.864-.001 1.93.502 3.818 1.457 5.418l-.994 3.634 3.737-.981zm11.376-7.838c-.3-.15-1.772-.875-2.046-.975-.276-.102-.476-.151-.676.15-.2.3-.775.975-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.782-1.672-2.08-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.244-.589-.493-.51-.676-.519-.173-.009-.371-.01-.57-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.308 1.272.493 1.707.632.716.228 1.368.196 1.883.118.574-.087 1.772-.725 2.021-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/></svg></a>
  <a class="icon-btn icon-btn--indiamart" href="https://www.indiamart.com/valaki-exports/" target="_blank" rel="noopener" aria-label="Valaki Exports on IndiaMART" title="IndiaMART"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.6-5h14.8L21 9"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M3 9h18"/><path d="M9.5 20v-6h5v6"/></svg></a>
</div>`;

const navHTML = `
<header class="site-header">
  <div class="navpill">
    <a class="navpill__logo" href="index.html" aria-label="Valaki Exports Co. home">
      <img src="/images/logo/logo-full.png" alt="Valaki Exports Co." />
    </a>
    <nav class="navpill__menu" aria-label="Primary">
      <a class="navlink" data-nav="home" href="index.html">${navIcons.home}<span>Home</span></a>
      <a class="navlink" data-nav="products" href="products.html">${navIcons.products}<span>Products</span></a>
      <a class="navlink" data-nav="about" href="about.html">${navIcons.about}<span>About</span></a>
      <a class="navlink" data-nav="contact" href="contact.html">${navIcons.contact}<span>Contact</span></a>
    </nav>
    <div class="navpill__right">
      <a class="ve-btn ve-btn--primary ve-btn--md navpill__cta" href="contact.html">Request a Quote</a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span class="bar"></span><span class="bar"></span><span class="bar"></span>
      </button>
    </div>
  </div>
</header>
<div class="drawer-backdrop" id="drawer-backdrop"></div>
<aside class="mobile-drawer" aria-label="Mobile">
  <a class="navlink" data-nav="home" href="index.html">${navIcons.home}<span>Home</span></a>
  <a class="navlink" data-nav="products" href="products.html">${navIcons.products}<span>Products</span></a>
  <a class="navlink" data-nav="about" href="about.html">${navIcons.about}<span>About</span></a>
  <a class="navlink" data-nav="contact" href="contact.html">${navIcons.contact}<span>Contact</span></a>
  <a class="ve-btn ve-btn--primary ve-btn--lg ve-btn--block" href="contact.html">Request a Quote</a>
</aside>`;

const footerHTML = `
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <span class="footer-logo"><img src="/images/logo/logo-full.png" alt="Valaki Exports Co." /></span>
      <p class="f-desc">Export-grade dehydrated onion, garlic, vegetables and spices. A Valaki Brothers company, manufacturing with Euro Foods Industries since 1987.</p>
      <div class="footer-social">${socialRowHTML}</div>
    </div>
    <div>
      <h4>Navigate</h4>
      <a class="flink" href="index.html">Home</a>
      <a class="flink" href="products.html">Products</a>
      <a class="flink" href="about.html">About</a>
      <a class="flink" href="contact.html">Contact</a>
    </div>
    <div>
      <h4>Range</h4>
      <span class="f-item">Dehydrated Onion</span>
      <span class="f-item">Dehydrated Garlic</span>
      <span class="f-item">Spices &amp; Chilli</span>
      <span class="f-item">Seeds &amp; Pastes</span>
    </div>
    <div>
      <h4>Contact</h4>
      <p class="f-contact">Valaki Exports Co.,<br/>Ahmedabad, Gujarat, India<br/>export@valakiexports.com<br/>+91 98765 43210</p>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Valaki Exports Co.&trade; · All rights reserved · Made in India</span>
    <span class="footer-credit">Designed &amp; built by <a href="https://adityavalaki.vercel.app/" target="_blank" rel="noopener">Aditya Valaki</a></span>
  </div>
</footer>`;

function mountChrome(): void {
  const navSlot = document.getElementById("site-nav");
  const footSlot = document.getElementById("site-footer");
  if (navSlot) navSlot.innerHTML = navHTML;
  if (footSlot) footSlot.innerHTML = footerHTML;

  // active link
  const page = document.body.dataset.page;
  if (page) {
    document
      .querySelectorAll<HTMLAnchorElement>(`.navlink[data-nav="${page}"]`)
      .forEach((a) => a.classList.add("is-active"));
  }

  // mobile drawer
  const toggle = document.getElementById("nav-toggle");
  const backdrop = document.getElementById("drawer-backdrop");
  const close = () => {
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  };
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  backdrop?.addEventListener("click", close);
  document.querySelectorAll(".mobile-drawer a").forEach((a) => a.addEventListener("click", close));

  // refined sticky header: subtle shadow once scrolled
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}

/* ==========================================================================
   SCROLL-TO-TOP + SCROLL REVEAL
   ========================================================================== */

function mountScrollTop(): void {
  const btn = document.createElement("button");
  btn.className = "scroll-top";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`;
  document.body.appendChild(btn);
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function mountReveal(): void {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ==========================================================================
   PRODUCTS PAGE — filter chips, search, grid, modal
   ========================================================================== */

const fillStyle = (p: Product) =>
  `position:absolute;inset:0;background:linear-gradient(152deg, ${p.g1}, ${p.g2})`;
const figureOf = (p: Product) => String(PRODUCTS.indexOf(p) + 1).padStart(2, "0");
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function mountProducts(): void {
  const root = document.getElementById("products-app");
  if (!root) return;

  const grid = root.querySelector<HTMLElement>("#product-grid")!;
  const chipsWrap = root.querySelector<HTMLElement>("#product-chips")!;
  const search = root.querySelector<HTMLInputElement>("#product-search")!;
  const clearBtn = root.querySelector<HTMLButtonElement>("#search-clear")!;
  const countEl = root.querySelector<HTMLElement>("#result-count")!;
  const emptyEl = root.querySelector<HTMLElement>("#empty-state")!;
  const resetBtn = root.querySelector<HTMLButtonElement>("#reset-filters")!;

  const modal = document.getElementById("product-modal")!;

  let cat = "all";
  let q = "";

  const filtered = (): Product[] => {
    const query = q.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => cat === "all" || p.cat === cat);
    if (query) {
      list = list.filter((p) =>
        (p.name + " " + p.catLabel + " " + p.forms.join(" ") + " " + p.hs + " " + p.desc)
          .toLowerCase()
          .includes(query)
      );
    }
    return list;
  };

  const renderChips = () => {
    chipsWrap.innerHTML = CATEGORIES.map((c) => {
      const active = cat === c.id;
      const count = c.id === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.id).length;
      const base =
        "display:inline-flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:10px 17px;border-radius:999px;cursor:pointer;transition:all .15s var(--ease-out);";
      const skin = active
        ? "background:var(--ocean-600);color:#fff;border:1px solid var(--ocean-600)"
        : "background:#fff;color:var(--text-body);border:1px solid var(--border-default)";
      return `<button data-cat="${c.id}" style="${base}${skin}">${esc(c.label)} <span style="opacity:.6">${count}</span></button>`;
    }).join("");
  };

  const renderGrid = () => {
    const list = filtered();
    countEl.textContent = `${list.length} products`;
    clearBtn.style.display = q ? "block" : "none";
    if (!list.length) {
      grid.innerHTML = "";
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";
    grid.innerHTML = list
      .map((p) => {
        const formsLine = p.forms.join("  ·  ");
        return `
        <button class="pcard" data-id="${p.id}" style="display:flex;flex-direction:column;text-align:left;padding:0;border:1px solid var(--border-default);border-radius:18px;overflow:hidden;background:#fff;cursor:pointer">
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden">
            <div style="${fillStyle(p)}"></div>
            <div style="position:absolute;inset:0;background-image:radial-gradient(circle, rgba(255,255,255,.12) 1.1px, transparent 1.3px);background-size:13px 13px"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(to bottom, rgba(5,20,31,.34), transparent 46%)"></div>
            <span style="position:absolute;right:12px;top:-12px;font-family:var(--font-display);font-weight:700;font-size:74px;line-height:1;color:rgba(255,255,255,.2);letter-spacing:-.04em">${figureOf(p)}</span>
            <span style="position:absolute;left:16px;top:14px;font-family:var(--font-mono);font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.92)">${esc(p.catLabel)}</span>
          </div>
          <div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:9px;flex:1">
            <span style="font-family:var(--font-display);font-weight:700;font-size:18px;line-height:1.18;color:var(--text-strong)">${esc(p.name)}</span>
            <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted)">${esc(formsLine)}</span>
            <span style="margin-top:auto;padding-top:12px;border-top:1px solid var(--border-subtle);font-family:var(--font-mono);font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--ocean-700)">HS ${esc(p.hs)} · ${esc(p.moisture)}</span>
          </div>
        </button>`;
      })
      .join("");
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  const openModal = (id: string) => {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const formsBadges = p.forms
      .map((f) => `<span class="ve-badge ve-badge--sm ve-badge--info">${esc(f)}</span>`)
      .join("");
    const specIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l9 9l-9 9l-9-9z"/></svg>`;
    const specRows = Object.entries(p.specs)
      .map(
        ([k, v]) => `<tr><th><span class="k">${specIcon}${esc(k)}</span></th><td>${esc(v)}</td></tr>`
      )
      .join("");
    modal.querySelector(".pmodal__card")!.innerHTML = `
      <button class="pmodal__close" aria-label="Close">&times;</button>
      <div class="pmodal__grid">
        <div class="pmodal__art">
          <div style="${fillStyle(p)}"></div>
          <div style="position:absolute;inset:0;background-image:radial-gradient(circle, rgba(255,255,255,.12) 1.2px, transparent 1.4px);background-size:15px 15px"></div>
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(5,20,31,.45), transparent 55%)"></div>
          <span style="position:absolute;left:20px;top:16px;font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.9)">Fig. ${figureOf(p)} — ${esc(p.catLabel)}</span>
          <span style="position:absolute;left:18px;bottom:-14px;font-family:var(--font-display);font-weight:700;font-size:120px;line-height:1;color:rgba(255,255,255,.2)">${figureOf(p)}</span>
        </div>
        <div style="padding:32px 34px 34px">
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ocean-600)">${esc(p.catLabel)}</span>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:28px;line-height:1.1;letter-spacing:-.01em;color:var(--text-strong);margin:8px 0 12px">${esc(p.name)}</h3>
          <p style="font-family:var(--font-body);font-size:15px;line-height:1.6;color:var(--text-body);margin:0 0 22px">${esc(p.desc)}</p>
          <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:9px">Available forms</div>
          <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:24px">${formsBadges}</div>
          <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:10px">Technical specification</div>
          <div class="spec-table"><table><tbody>${specRows}</tbody></table></div>
          <a class="ve-btn ve-btn--accent ve-btn--md ve-btn--block" href="contact.html">Request a quote for this product</a>
        </div>
      </div>`;
    modal
      .querySelector<HTMLButtonElement>(".pmodal__close")!
      .addEventListener("click", closeModal);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  // events
  chipsWrap.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("[data-cat]");
    if (!btn) return;
    cat = btn.dataset.cat!;
    renderChips();
    renderGrid();
  });
  grid.addEventListener("click", (e) => {
    const card = (e.target as HTMLElement).closest<HTMLButtonElement>(".pcard");
    if (card?.dataset.id) openModal(card.dataset.id);
  });
  search.addEventListener("input", () => {
    q = search.value;
    renderGrid();
  });
  clearBtn.addEventListener("click", () => {
    q = "";
    search.value = "";
    renderGrid();
  });
  resetBtn.addEventListener("click", () => {
    cat = "all";
    q = "";
    search.value = "";
    renderChips();
    renderGrid();
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  renderChips();
  renderGrid();
}

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */

function mountContactForm(): void {
  const form = document.getElementById("rfq-form") as HTMLFormElement | null;
  if (!form) return;
  const success = document.getElementById("rfq-success")!;
  const again = document.getElementById("rfq-again");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.style.display = "none";
    success.style.display = "flex";
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  again?.addEventListener("click", () => {
    form.reset();
    success.style.display = "none";
    form.style.display = "flex";
  });
}

/* ==========================================================================
   CERT IMAGE FALLBACK (replaces inline onerror so a strict CSP is possible)
   ========================================================================== */

function mountCertFallbacks(): void {
  const imgs = document.querySelectorAll<HTMLImageElement>(".cert-frame__img img");
  imgs.forEach((img) => {
    const fail = () => {
      img.style.display = "none";
      const ph = img.nextElementSibling as HTMLElement | null;
      if (ph) ph.style.display = "flex";
    };
    img.addEventListener("error", fail);
    // handle images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) fail();
  });
}

/* ==========================================================================
   BOOT
   ========================================================================== */

const boot = () => {
  mountChrome();
  mountScrollTop();
  mountReveal();
  mountProducts();
  mountContactForm();
  mountCertFallbacks();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
