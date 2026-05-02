// ============================================================
//  Walk Business — Main JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Preloader ──────────────────────────────────────────────
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hidden'), 500);
    });
  }

  // ── Navbar scroll effect ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
    const btt = document.getElementById('backToTop');
    btt?.classList.toggle('visible', window.scrollY > 400);
  });

  // ── Mobile hamburger ───────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  // ── Active nav link on scroll ──────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  // ── Back to Top ────────────────────────────────────────────
  document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Fade-in on scroll ──────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => fadeObserver.observe(el));

  // ── Animated counters ──────────────────────────────────────
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = Math.ceil(target / 80);
      const timer  = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current.toLocaleString() + suffix;
      }, 20);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

  // ── Course card register buttons (update amount) ───────────
  const courseSelect = document.getElementById('courseSelect');
  const amountVal    = document.getElementById('amountVal');
  const prices       = {
    'c1': '299', 'c2': '499', 'c3': '599', 'c4': '349', '': '0'
  };
  courseSelect?.addEventListener('change', () => {
    const key = courseSelect.value;
    if (amountVal) amountVal.textContent = '$' + (prices[key] || '0');
  });

  // ── Contact form ───────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '...';
    try {
      const data = new FormData(contactForm);
      const res  = await fetch('php/contact.php', { method: 'POST', body: data });
      const json = await res.json();
      showToast(json.success ? 'Message sent successfully!' : 'Error: ' + json.message, json.success ? 'success' : 'error');
      if (json.success) contactForm.reset();
    } catch { showToast('Something went wrong. Please try again.', 'error'); }
    btn.disabled = false;
    btn.setAttribute('data-i18n', 'contact.send');
  });

  // ── Registration form ──────────────────────────────────────
  const registerForm = document.getElementById('registerForm');
  registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = registerForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    try {
      const data = new FormData(registerForm);
      const res  = await fetch('php/register.php', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        showToast('Registration successful! Redirecting...', 'success');
        setTimeout(() => { window.location.href = json.redirect || '#'; }, 2000);
      } else {
        showToast('Error: ' + json.message, 'error');
        btn.disabled = false;
      }
    } catch { showToast('Something went wrong.', 'error'); btn.disabled = false; }
  });

  // ── Toast notification ─────────────────────────────────────
  function showToast(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    Object.assign(toast.style, {
      position: 'fixed', bottom: '30px', left: '50%',
      transform: 'translateX(-50%)',
      background: type === 'success' ? '#27ae60' : '#e74c3c',
      color: '#fff', padding: '14px 28px', borderRadius: '50px',
      fontWeight: '600', fontSize: '0.95rem', zIndex: '9999',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      animation: 'fadeInUp 0.4s ease'
    });
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  // ── Smooth scroll for anchor links ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
