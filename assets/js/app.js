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

  // Treatments: desktop sticky horizontal storytelling using native VERTICAL scroll,
  // never preventDefault on the wheel. Mobile/tablet retain their approved swipe behavior.
  const treatmentsStory = document.getElementById('treatments');
  const treatmentsWindow = document.getElementById('treatments-window');
  const treatmentsRail = document.getElementById('treatments-rail');
  if (treatmentsStory && treatmentsWindow && treatmentsRail) {
    const cards = [...treatmentsRail.querySelectorAll('.treatment-card')];
    const dots = [...document.querySelectorAll('[data-treatment-index]')];
    const current = document.getElementById('treatments-current');
    const previous = document.getElementById('treatments-prev');
    const next = document.getElementById('treatments-next');
    const desktopScroll = window.matchMedia('(min-width: 981px) and (min-height: 690px) and (hover: hover) and (prefers-reduced-motion: no-preference)');
    let activeIndex = 0;
    let frame = 0;
    let hasInteracted = false;
    let pinned = false;
    let pinTop = 0;
    let travel = 0;
    let pinFrame = 0;

    const setActive = index => {
      activeIndex = Math.max(0, Math.min(cards.length - 1, index));
      cards.forEach((card, i) => card.classList.toggle('is-active', i === activeIndex));
      dots.forEach((dot, i) => {
        if (i === activeIndex) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (current) current.textContent = String(activeIndex + 1).padStart(2, '0');
      if (previous) previous.disabled = activeIndex === 0;
      if (next) next.disabled = activeIndex === cards.length - 1;
    };
    const centerLeft = index => {
      const card = cards[index];
      if (!card) return 0;
      return Math.max(0, card.offsetLeft - (treatmentsWindow.clientWidth - card.offsetWidth) / 2);
    };
    const clampTravel = value => Math.max(0, Math.min(travel, value));
    const goTo = (index, animate = true) => {
      if (!cards.length) return;
      const target = Math.max(0, Math.min(cards.length - 1, index));
      setActive(target);
      const behavior = animate && !reducedMotion.matches ? 'smooth' : 'instant';
      if (pinned) {
        window.scrollTo({top: pinTop + clampTravel(centerLeft(target)), behavior});
      } else {
        treatmentsWindow.scrollTo({left: centerLeft(target), behavior});
      }
    };
    const updateOnScroll = () => {
      frame = 0;
      const midpoint = treatmentsWindow.getBoundingClientRect().left + treatmentsWindow.clientWidth / 2;
      let nearest = 0, distance = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const delta = Math.abs(rect.left + rect.width / 2 - midpoint);
        if (delta < distance) {nearest = i; distance = delta;}
      });
      setActive(nearest);
    };
    const paintPin = () => {
      pinFrame = 0;
      if (!pinned) return;
      const offset = clampTravel(window.scrollY - pinTop);
      // scrollLeft is controlled by the page's native vertical scroll only on desktop.
      treatmentsWindow.scrollLeft = offset;
      updateOnScroll();
    };
    const requestPin = () => {
      if (pinned && !pinFrame) pinFrame = requestAnimationFrame(paintPin);
    };
    const measurePin = () => {
      if (pinFrame) cancelAnimationFrame(pinFrame);
      pinFrame = 0;
      const hadPin = pinned;
      pinned = false;
      treatmentsStory.classList.remove('is-scroll-ready');
      treatmentsStory.style.height = '';
      if (desktopScroll.matches && cards.length > 1) {
        treatmentsStory.classList.add('is-scroll-ready');
        travel = Math.max(0, treatmentsWindow.scrollWidth - treatmentsWindow.clientWidth);
        if (travel > 10) {
          pinned = true;
          // Hold the final card for another deliberate scroll beat before moving on.
          // Include the CSS exit gap in the measured section length, never lock the wheel.
          const finalPause = Math.max(500, Math.round(window.innerHeight * .82));
          const exitGap = Math.max(125, Math.min(190, Math.round(window.innerHeight * .18)));
          treatmentsStory.style.setProperty('--treatments-exit-gap', exitGap + 'px');
          treatmentsStory.style.height = Math.ceil(window.innerHeight + travel + finalPause + exitGap) + 'px';
          pinTop = window.scrollY + treatmentsStory.getBoundingClientRect().top;
          requestPin();
        } else {
          treatmentsStory.classList.remove('is-scroll-ready');
        }
      }
      if (!pinned) {
        travel = 0;
        if (hadPin) treatmentsWindow.scrollLeft = 0;
        goTo(activeIndex, false);
      }
    };

    previous?.addEventListener('click', () => {hasInteracted = true; goTo(activeIndex - 1);});
    next?.addEventListener('click', () => {hasInteracted = true; goTo(activeIndex + 1);});
    dots.forEach((dot, index) => dot.addEventListener('click', () => {
      hasInteracted = true;
      goTo(index);
    }));
    treatmentsWindow.addEventListener('scroll', () => {
      if (!frame) frame = requestAnimationFrame(updateOnScroll);
    }, {passive:true});
    treatmentsWindow.addEventListener('pointerdown', () => {hasInteracted = true;}, {passive:true});
    treatmentsWindow.addEventListener('keydown', event => {
      if (event.target !== treatmentsWindow) return;
      if (['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) {
        event.preventDefault();
        hasInteracted = true;
        goTo(event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    cards.forEach((card, index) => card.querySelector('a')?.addEventListener('focus', () => {
      hasInteracted = true;
      goTo(index, false);
    }));
    // Desktop begins on first card so all six appear in the scroll narrative.
    // Mobile retains its existing first-card starting position and native swipe.
    const initial = window.innerWidth >= 721 && !desktopScroll.matches ? 1 : 0;
    requestAnimationFrame(() => {
      setActive(initial);
      measurePin();
      if (!pinned) goTo(initial, false);
    });
    window.addEventListener('scroll', requestPin, {passive:true});
    window.addEventListener('resize', measurePin, {passive:true});
    desktopScroll.addEventListener?.('change', measurePin);
    document.fonts?.ready.then(measurePin);
    window.addEventListener('pageshow', event => {
      if (event.persisted) {
        measurePin();
        if (!hasInteracted && !pinned) goTo(initial, false);
      }
    });
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
    if (y < 115 || navOpen || dialog?.open || header.contains(document.activeElement)) {
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
