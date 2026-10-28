(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const dialog = document.getElementById('booking-dialog');
  const dialogClose = dialog?.querySelector('.dialog-close');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  const closeMobile = () => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    mobileNav.hidden = true;
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !open;
  });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));
  window.addEventListener('keydown', e => {if (e.key === 'Escape') closeMobile();});
  window.addEventListener('resize', () => {if (window.innerWidth > 1100) closeMobile();},{passive:true});

  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-book-dialog]').forEach(trigger => trigger.addEventListener('click', event => {
      event.preventDefault();
      closeMobile();
      if (!dialog.open) dialog.showModal();
    }));
    dialogClose?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {if (event.target === dialog) dialog.close();});
  }

  // Reveal only when supported. Content remains visible if JavaScript fails or reduced motion is preferred.
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const reveals = [...document.querySelectorAll('[data-reveal]')];
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.09,rootMargin:'0px 0px -35px 0px'});
    requestAnimationFrame(() => reveals.forEach(el => io.observe(el)));
    // Safety: do not leave hidden content indefinitely after back-forward cache or abrupt navigation.
    window.addEventListener('pageshow',e=>{if(e.persisted) reveals.forEach(el=>el.classList.add('is-visible'));});
  }

  // Only the background photograph moves in the single cinematic scene.
  const scene = document.querySelector('.heritage');
  const photo = scene?.querySelector('.heritage-photo');
  if (scene && photo && !reducedMotion.matches && window.matchMedia('(min-width: 721px)').matches) {
    let scheduled = false;
    const update = () => {
      scheduled = false;
      const rect = scene.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress = Math.max(0,Math.min(1,(window.innerHeight-rect.top)/(window.innerHeight+rect.height)));
      photo.style.setProperty('--heritage-scale',(1.025 + .025*progress).toFixed(4));
    };
    const onScroll = () => {if(!scheduled){scheduled=true;requestAnimationFrame(update)}};
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll,{passive:true});
    onScroll();
  }
  // Contact testing is explicitly separated from all Fresha booking links.
  // FormSubmit may require email activation before messages reach the Atrezzo inbox.
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('contact-form-status');
  const formButton = document.getElementById('contact-submit');
  if (contactForm && formStatus && formButton && window.fetch) {
    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      if (contactForm.elements.namedItem('_honey')?.value) return;
      formButton.disabled = true;
      formButton.setAttribute('aria-busy', 'true');
      formStatus.removeAttribute('data-state');
      formStatus.textContent = 'Submitting your test message…';
      try {
        const fields = new FormData(contactForm);
        const payload = Object.fromEntries(fields.entries());
        payload._captcha = 'false'; // AJAX demo uses honeypot rather than an interactive captcha.
        const response = await fetch('https://formsubmit.co/ajax/atrezzostudiosv@gmail.com', {
          method: 'POST',
          headers: {'Content-Type':'application/json','Accept':'application/json'},
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (!response.ok || (result.success !== 'true' && result.success !== true)) {
          throw new Error('FormSubmit rejected the submission.');
        }
        formStatus.dataset.state = 'success';
        formStatus.textContent = 'The test form accepted your submission. Atrezzo must still verify receipt in its email inbox.';
        contactForm.reset();
      } catch (error) {
        formStatus.dataset.state = 'error';
        formStatus.textContent = 'The test message could not be confirmed as submitted. Please try again later; bookings remain available through Fresha.';
      } finally {
        formButton.disabled = false;
        formButton.removeAttribute('aria-busy');
      }
    });
  }

  const onScrollHeader = () => header?.classList.toggle('is-scrolled',window.scrollY > 30);
  window.addEventListener('scroll',onScrollHeader,{passive:true});
  onScrollHeader();
})();
