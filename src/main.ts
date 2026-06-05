import './style.css';
import Lenis from 'lenis';
import { products, categories } from './data/products';
import type { Product } from './data/products';

// Global State
let activeCategory = 'all';
let searchQuery = '';

// Smooth scrolling (Lenis) — assigned in setupSmoothScroll()
let lenis: Lenis | null = null;
const HEADER_OFFSET = 90; // keep anchored sections clear of the fixed header

/** Smoothly scroll to an element or a Y position (Lenis if available, else native). */
function smoothScrollTo(target: HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target as any, { offset: typeof target === 'number' ? 0 : -HEADER_OFFSET });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// DOM Elements (assigned on init)
let navbar: HTMLElement;
let mobileToggle: HTMLButtonElement;
let mobileDrawer: HTMLDivElement;
let scrollProgress: HTMLDivElement;
let scrollToTopBtn: HTMLButtonElement;
let productsGrid: HTMLDivElement;
let categoriesContainer: HTMLDivElement;
let searchInput: HTMLInputElement;
let searchClearBtn: HTMLButtonElement;
let emptyState: HTMLDivElement;
let resetFiltersBtn: HTMLButtonElement;

// Modal Elements (assigned on init)
let productModal: HTMLDivElement;
let modalCloseBtn: HTMLButtonElement;
let modalImg: HTMLImageElement;
let modalCat: HTMLSpanElement;
let modalName: HTMLHeadingElement;
let modalDesc: HTMLParagraphElement;
let modalForms: HTMLDivElement;
let modalSpecs: HTMLTableSectionElement;
let modalInquireBtn: HTMLAnchorElement;

// Form Elements (assigned on init)
let leadForm: HTMLFormElement;
let formSuccessOverlay: HTMLDivElement;
let successCloseBtn: HTMLButtonElement;

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init() {
  navbar = document.getElementById('navbar') as HTMLElement;
  mobileToggle = document.getElementById('mobile-toggle') as HTMLButtonElement;
  mobileDrawer = document.getElementById('mobile-drawer') as HTMLDivElement;
  scrollProgress = document.getElementById('scroll-progress') as HTMLDivElement;
  scrollToTopBtn = document.getElementById('scroll-to-top') as HTMLButtonElement;
  productsGrid = document.getElementById('products-grid') as HTMLDivElement;
  categoriesContainer = document.getElementById('categories-container') as HTMLDivElement;
  searchInput = document.getElementById('product-search') as HTMLInputElement;
  searchClearBtn = document.getElementById('search-clear') as HTMLButtonElement;
  emptyState = document.getElementById('catalog-empty-state') as HTMLDivElement;
  resetFiltersBtn = document.getElementById('btn-reset-filters') as HTMLButtonElement;

  productModal = document.getElementById('product-modal') as HTMLDivElement;
  modalCloseBtn = document.getElementById('modal-close') as HTMLButtonElement;
  modalImg = document.getElementById('modal-product-img') as HTMLImageElement;
  modalCat = document.getElementById('modal-product-cat') as HTMLSpanElement;
  modalName = document.getElementById('modal-product-name') as HTMLHeadingElement;
  modalDesc = document.getElementById('modal-product-desc') as HTMLParagraphElement;
  modalForms = document.getElementById('modal-product-forms') as HTMLDivElement;
  modalSpecs = document.getElementById('modal-product-specs') as HTMLTableSectionElement;
  modalInquireBtn = document.getElementById('modal-inquire-btn') as HTMLAnchorElement;

  leadForm = document.getElementById('lead-form') as HTMLFormElement;
  formSuccessOverlay = document.getElementById('form-success-overlay') as HTMLDivElement;
  successCloseBtn = document.getElementById('btn-success-close') as HTMLButtonElement;

  setupSmoothScroll();
  renderCategories();
  renderProducts();
  setupEventListeners();
  setupScrollProgress();
  setupScrollReveal();
  setupStatsCounter();
}

/* ==========================================================================
   SMOOTH SCROLLING (Lenis)
   ========================================================================== */
function setupSmoothScroll() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // keep native/instant scrolling for reduced-motion users

  lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });

  const raf = (time: number) => {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Route in-page anchor links through Lenis (smooth + correct header offset).
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!link || link.id === 'modal-inquire-btn') return; // modal handles its own scroll
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    if (href === '#home') { e.preventDefault(); smoothScrollTo(0); return; }
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target as HTMLElement);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ==========================================================================
   CATEGORY & PRODUCT RENDERING
   ========================================================================== */
function renderCategories() {
  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'category-chip';
    chip.setAttribute('data-category', cat.id);
    chip.id = `btn-cat-${cat.id}`;
    
    chip.innerHTML = `
      <span class="chip-icon">${cat.icon}</span>
      <span class="chip-text">${cat.name}</span>
    `;
    
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-chip').forEach(btn => btn.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = cat.id;
      filterAndRenderProducts();
    });
    
    categoriesContainer.appendChild(chip);
  });
}

function renderProducts(filteredProducts: Product[] = products) {
  productsGrid.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    emptyState.classList.add('visible');
    productsGrid.style.display = 'none';
    return;
  }
  
  emptyState.classList.remove('visible');
  productsGrid.style.display = 'grid';
  
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `product-card-${product.id}`;
    card.setAttribute('data-id', product.id);
    
    const catInfo = categories.find(c => c.id === product.category);
    const catName = catInfo ? catInfo.name : 'Product';
    const catIcon = catInfo ? catInfo.icon : '📦';
    
    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='/images/products/dehydrated-onion.png';" />
        <span class="product-badge">${catIcon} ${catName}</span>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="view-details-link">View Technical Specifications</span>
          <span class="product-inquire-icon">📩</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      openProductModal(product);
    });
    
    productsGrid.appendChild(card);
  });
}

function filterAndRenderProducts() {
  let filtered = products;
  
  // Category Filter
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  
  // Search query
  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);
      const formMatch = p.forms && p.forms.some(f => f.toLowerCase().includes(query));
      const categoryMatch = categories.find(c => c.id === p.category)?.name.toLowerCase().includes(query);
      return nameMatch || descMatch || formMatch || categoryMatch;
    });
  }
  
  renderProducts(filtered);
}

/* ==========================================================================
   MODAL ACTIONS
   ========================================================================== */
function openProductModal(product: Product) {
  modalImg.src = product.image;
  modalImg.alt = product.name;
  modalImg.onerror = () => { modalImg.src = '/images/products/dehydrated-onion.png'; };
  
  const catInfo = categories.find(c => c.id === product.category);
  modalCat.textContent = catInfo ? `${catInfo.icon} ${catInfo.name}` : 'Product';
  modalName.textContent = product.name;
  modalDesc.textContent = product.description;
  
  // Render Forms chips
  modalForms.innerHTML = '';
  if (product.forms && product.forms.length > 0) {
    product.forms.forEach(form => {
      const chip = document.createElement('span');
      chip.className = 'form-chip';
      chip.textContent = form;
      modalForms.appendChild(chip);
    });
    (modalForms.parentElement as HTMLElement).style.display = 'block';
  } else {
    (modalForms.parentElement as HTMLElement).style.display = 'none';
  }
  
  // Render Specifications table
  modalSpecs.innerHTML = '';
  if (product.specs && Object.keys(product.specs).length > 0) {
    Object.entries(product.specs).forEach(([key, val]) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${key}</td>
        <td>${val}</td>
      `;
      modalSpecs.appendChild(row);
    });
  } else {
    modalSpecs.innerHTML = '<tr><td colspan="2">Standard quality parameters comply with international export grades. Details available on request.</td></tr>';
  }
  
  // Hook inquiry button inside modal
  modalInquireBtn.href = `#contact`;
  modalInquireBtn.onclick = (e) => {
    e.preventDefault();
    closeProductModal();
    
    // Set form category select option
    const formInterest = document.getElementById('form-interest') as HTMLSelectElement;
    if (formInterest) {
      formInterest.value = product.category;
    }
    
    // Fill specific item description in message box
    const formMessage = document.getElementById('form-message') as HTMLTextAreaElement;
    if (formMessage) {
      formMessage.value = `We are interested in importing: ${product.name}.\nExpected volume: \nPackaging specs: \nDestination Port: `;
      formMessage.focus();
    }
    
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      smoothScrollTo(contactSection);
    }
  };
  
  productModal.classList.add('visible');
  document.body.style.overflow = 'hidden';
  lenis?.stop();
}

function closeProductModal() {
  productModal.classList.remove('visible');
  document.body.style.overflow = 'auto';
  lenis?.start();
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function setupEventListeners() {
  // Mobile nav toggler
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileDrawer.classList.toggle('active');
    
    // Animate bars of hamburger
    const bars = mobileToggle.querySelectorAll('.bar') as NodeListOf<HTMLElement>;
    if (mobileToggle.classList.contains('active')) {
      bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  });

  // Close drawer on clicking item
  document.querySelectorAll('.drawer-item').forEach(item => {
    item.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      mobileDrawer.classList.remove('active');
      const bars = mobileToggle.querySelectorAll('.bar') as NodeListOf<HTMLElement>;
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    });
  });

  // Close modal click listeners
  modalCloseBtn.addEventListener('click', closeProductModal);
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('visible')) {
      closeProductModal();
    }
  });

  // Search input listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    if (searchQuery.length > 0) {
      searchClearBtn.classList.add('visible');
    } else {
      searchClearBtn.classList.remove('visible');
    }
    filterAndRenderProducts();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('visible');
    filterAndRenderProducts();
    searchInput.focus();
  });

  // Reset filter empty state button
  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('visible');
    activeCategory = 'all';
    
    document.querySelectorAll('.category-chip').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-cat-all')?.classList.add('active');
    
    filterAndRenderProducts();
  });

  // Reset filters initially when clicking 'All Products'
  document.getElementById('btn-cat-all')?.addEventListener('click', () => {
    document.querySelectorAll('.category-chip').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-cat-all')?.classList.add('active');
    activeCategory = 'all';
    filterAndRenderProducts();
  });

  // Navbar transparent on top, solid on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      scrollToTopBtn.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      scrollToTopBtn.classList.remove('visible');
    }
    
    // Highlight Active Navbar Items
    highlightActiveNavItem();
  });

  // Scroll to Top Smoothly
  scrollToTopBtn.addEventListener('click', () => {
    smoothScrollTo(0);
  });

  // Lead Form submission
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('form-submit-btn') as HTMLButtonElement;
    submitBtn.textContent = 'Processing Export Inquiry...';
    submitBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
      submitBtn.textContent = 'Send B2B Inquiry';
      submitBtn.disabled = false;
      
      // Show Success Modal/Overlay
      formSuccessOverlay.classList.add('visible');
    }, 1500);
  });

  successCloseBtn.addEventListener('click', () => {
    formSuccessOverlay.classList.remove('visible');
    leadForm.reset();
  });
}

/* ==========================================================================
   SCROLL PROGRESS BAR
   ========================================================================== */
function setupScrollProgress() {
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
}

/* ==========================================================================
   SCROLL REVEAL OBSERVER
   ========================================================================== */
function setupScrollReveal() {
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   STATISTICS COUNT UP ANIMATION
   ========================================================================== */
function setupStatsCounter() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;
  
  const options = {
    root: null,
    threshold: 0.5
  };
  
  let animated = false;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        
        document.querySelectorAll('.stat-number').forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target') || '0', 10);
          const duration = 2000; // 2s duration
          const startTime = performance.now();
          
          function updateCounter(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            const value = Math.floor(easeProgress * target);
            
            stat.textContent = value.toString();
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              stat.textContent = target.toString() + (target === 100 ? '' : '+');
            }
          }
          
          requestAnimationFrame(updateCounter);
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  observer.observe(statsSection);
}

/* ==========================================================================
   ACTIVE NAV LINK HIGHLIGHT (SCROLL SPY)
   ========================================================================== */
function highlightActiveNavItem() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100; // offset for nav header
  
  let currentActiveId = 'home';
  
  sections.forEach(section => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionHeight = (section as HTMLElement).offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentActiveId = sectionId || 'home';
    }
  });
  
  // Update Header nav link active styles
  document.querySelectorAll('.nav-menu .nav-item').forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href === `#${currentActiveId}`) {
      item.classList.add('active');
    }
  });

  // Update Drawer nav link active styles
  document.querySelectorAll('.mobile-drawer .drawer-item').forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href === `#${currentActiveId}`) {
      item.classList.add('active');
    }
  });
}
