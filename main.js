// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay) || 0;
      setTimeout(() => el.classList.add('visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12 });

// Stagger cards inside grid containers
document.querySelectorAll('.services-grid, .ventures-grid, .contact-links').forEach(grid => {
  grid.querySelectorAll('.service-card, .venture-card, .contact-link').forEach((child, i) => {
    child.classList.add('reveal');
    child.dataset.delay = i * 80;
  });
});

// Observe all elements with the reveal class
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── SHRINK NAV ON SCROLL ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.padding = '0.8rem 4rem';
  } else {
    navbar.style.padding = '1.2rem 4rem';
  }
});
