document.addEventListener('DOMContentLoaded', () => {

  // ── Dynamic year ─────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Stagger reveal delays for grid children ───────────────
  const staggerGroups = [
    '.projects-grid .project-card',
    '.edu-stack .edu-card',
    '.timeline .timeline-item',
  ];
  staggerGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 90}ms`;
    });
  });

  // ── Scroll reveal ─────────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Active nav link ───────────────────────────────────────
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id], footer[id]');

  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'nav-active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(s => navObserver.observe(s));

  // ── Smooth scroll ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Header border on scroll ───────────────────────────────
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.style.borderBottomColor = window.scrollY > 20
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(255,255,255,0.06)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

});
