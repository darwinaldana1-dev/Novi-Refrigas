/* ============================================================
   Novi Refrigas — script.js
   Dark mode toggle | Lucide icons | Scroll behaviors | Animations
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. LUCIDE ICONS ──────────────────────────────────────── */
  function initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  /* ── 2. MODO SIEMPRE CLARO ────────────────────────────────── */
  function loadTheme() {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('novi-theme');
  }

  /* ── 3. NAVBAR SHADOW ON SCROLL ───────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── 4. MOBILE MENU ───────────────────────────────────────── */
  const menuToggle  = document.getElementById('menu-toggle');
  const mobileMenu  = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      const menuIcon = menuToggle.querySelector('[data-lucide]');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
        lucide.createIcons();
      }
    });
  }

  window.closeMobileMenu = function () {
    if (mobileMenu) mobileMenu.classList.add('hidden');
    const menuIcon = menuToggle ? menuToggle.querySelector('[data-lucide]') : null;
    if (menuIcon) {
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }
  };

  /* ── 5. SCROLL-TRIGGERED FADE-UP ANIMATIONS ──────────────── */
  function initFadeUp() {
    const targets = [
      '.trust-card',
      '.product-card',
      '.service-card',
    ];

    const allEls = document.querySelectorAll(targets.join(', '));

    allEls.forEach(function (el) {
      el.classList.add('fade-up');
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    allEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── 6. SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = navbar ? navbar.offsetHeight : 64;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ── 7. ACTIVE NAV LINK ON SCROLL ─────────────────────────── */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.remove('text-primary-700', 'dark:text-primary-400', 'font-bold');
              if (link.getAttribute('href') === id) {
                link.classList.add('text-primary-700', 'font-bold');
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── 8. WHATSAPP FLOAT HIDE ON FOOTER ────────────────────── */
  function initWaFloatVisibility() {
    const waBtn  = document.querySelector('.whatsapp-float');
    const footer = document.querySelector('footer');
    if (!waBtn || !footer) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          waBtn.style.opacity    = entry.isIntersecting ? '0' : '1';
          waBtn.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
  }

  /* ── INIT ─────────────────────────────────────────────────── */
  function init() {
    loadTheme();
    initIcons();
    initFadeUp();
    initSmoothScroll();
    initActiveNav();
    initWaFloatVisibility();

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ── Modal Precios Aires Acondicionados ───────────────────── */
function openPreciosAC() {
  var modal = document.getElementById('modal-precios-ac');
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closePreciosAC() {
  var modal = document.getElementById('modal-precios-ac');
  modal.classList.add('hidden');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function switchAcBrand(tabEl, panelId) {
  document.querySelectorAll('.ac-tab').forEach(function(t) {
    t.classList.remove('ac-tab-active');
  });
  document.querySelectorAll('.ac-panel').forEach(function(p) {
    p.classList.add('hidden');
  });
  tabEl.classList.add('ac-tab-active');
  document.getElementById(panelId).classList.remove('hidden');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePreciosAC();
});
