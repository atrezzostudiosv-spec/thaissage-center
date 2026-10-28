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

  // Treatments · vertical scroll maps to the full-width photo rail, never intercepts wheel.
  // On touch/small screens or reduced motion, use native horizontal swiping instead.
  const treatmentsStory = document.getElementById('treatments');
  const treatmentsWindow = document.getElementById('treatments-window');
  const treatmentsRail = document.getElementById('treatments-rail');
  if (treatmentsStory && treatmentsWindow && treatmentsRail) {
    const cards = [...treatmentsRail.querySelectorAll('.treatment-card')];
    const current = document.getElementById('treatments-current');
    const progress = document.getElementById('treatments-progress-bar');
    const previous = document.getElementById('treatments-prev');
    const next = document.getElementById('treatments-next');
    const motion = window.matchMedia('(min-width: 981px) and (min-height: 660px) and (prefers-reduced-motion: no-preference)');
    let enabled = false;
    let travel = 0;
    let sectionStart = 0;
    let activeIndex = 0;
    let rafId = 0;
    const itemStep = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : (cards[0]?.offsetWidth || 1);
    const sync = index => {
      activeIndex = Math.max(0, Math.min(cards.length - 1, index));
      if (current) current.textContent = String(activeIndex + 1).padStart(2, '0');
      if (progress) progress.style.width = String((activeIndex + 1) / cards.length * 100) + '%';
      if (previous) previous.disabled = activeIndex === 0;
      if (next) next.disabled = activeIndex === cards.length - 1;
    };
    const paint = () => {
      rafId = 0;
      if (!enabled) return;
      const offset = Math.max(0, Math.min(travel, window.scrollY - sectionStart));
      treatmentsRail.style.transform = 'translate3d(' + (-offset) + 'px,0,0)';
      sync(Math.round(offset / Math.max(1, itemStep())));
    };
    const requestPaint = () => { if (!rafId) rafId = requestAnimationFrame(paint); };
    const measure = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      treatmentsStory.classList.remove('is-scroll-ready');
      treatmentsStory.style.height = '';
      treatmentsRail.style.transform = '';
      enabled = motion.matches;
      if (enabled) {
        travel = Math.max(0, treatmentsRail.scrollWidth - treatmentsWindow.clientWidth);
        if (travel > 4) {
          treatmentsStory.style.height = String(window.innerHeight + travel) + 'px';
          treatmentsStory.classList.add('is-scroll-ready');
          sectionStart = window.scrollY + treatmentsStory.getBoundingClientRect().top;
          requestPaint();
        } else enabled = false;
      }
      if (!enabled) sync(Math.round(treatmentsWindow.scrollLeft / Math.max(1, itemStep())));
    };
    const navigate = delta => {
      const target = Math.max(0, Math.min(cards.length - 1, activeIndex + delta));
      const wanted = target * itemStep();
      if (enabled) {
        window.scrollTo({top: sectionStart + Math.min(travel, wanted), behavior:'smooth'});
      } else {
        treatmentsWindow.scrollTo({left: wanted, behavior: reducedMotion.matches ? 'auto' : 'smooth'});
      }
      sync(target);
    };
    // Keep keyboard-focused booking links visible during the sticky sequence.
    cards.forEach((card, index) => {
      card.querySelector('a')?.addEventListener('focus', () => {
        if (!enabled) return;
        window.scrollTo({top: sectionStart + Math.min(travel, index * itemStep()), behavior:'auto'});
      });
    });
    previous?.addEventListener('click', () => navigate(-1));
    next?.addEventListener('click', () => navigate(1));
    treatmentsWindow.addEventListener('scroll', () => {
      if (!enabled) sync(Math.round(treatmentsWindow.scrollLeft / Math.max(1, itemStep())));
    }, {passive:true});
    treatmentsWindow.addEventListener('keydown', event => {
      if (event.target !== treatmentsWindow || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
      event.preventDefault();
      navigate(event.key === 'ArrowRight' ? 1 : -1);
    });
    window.addEventListener('scroll', requestPaint, {passive:true});
    window.addEventListener('resize', measure, {passive:true});
    motion.addEventListener?.('change', measure);
    measure();
    document.fonts?.ready.then(measure);
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
