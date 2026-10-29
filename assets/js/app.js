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

  // Home booking-first layout: all six treatment prices and CTAs are available
  // in normal page flow, without a sticky scroll sequence or hidden slides.
  // Preserve native vertical scroll and keyboard access to all services.

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
  // Smart header: hidden when moving down, revealed when scrolling up.
  // At page top, with navigation open, or when its controls are focused, keep it visible.
  let lastHeaderY = Math.max(0, window.scrollY);
  let headerDirection = 0;
  let directionTravel = 0;
  const onScrollHeader = () => {
    if (!header) return;
    const y = Math.max(0, window.scrollY);
    header.classList.toggle('is-scrolled',y > 30);
    const delta = y - lastHeaderY;
    lastHeaderY = y;
    const navOpen = toggle?.getAttribute('aria-expanded') === 'true';
    const keyboardFocus = !!header.querySelector(':focus-visible');
    if (y < 115 || navOpen || dialog?.open || keyboardFocus) {
      header.classList.remove('is-hidden');
      directionTravel = 0;
      return;
    }
    if (Math.abs(delta) < 1) return;
    const newDirection = Math.sign(delta);
    directionTravel = newDirection === headerDirection
      ? directionTravel + Math.abs(delta) : Math.abs(delta);
    headerDirection = newDirection;
    if (directionTravel >= 14) {
      header.classList.toggle('is-hidden',newDirection > 0);
      directionTravel = 0;
    }
  };
  window.addEventListener('scroll',onScrollHeader,{passive:true});
  header?.addEventListener('focusin',()=>header.classList.remove('is-hidden'));
  toggle?.addEventListener('click',()=>header?.classList.remove('is-hidden'));
  onScrollHeader();
})();
