/* ATREZZO · THAISSAGE CENTER
   Progressive enhancement for the native <details> editorial location selector.
   Browsers with support for details[name] already enforce one-open-at-a-time.
   This fallback keeps the same behavior on older Safari and browsers without it.
   Content remains usable even with JavaScript disabled. */
(() => {
  'use strict';
  const group = [...document.querySelectorAll('.locations-cinematic .location-choice')];
  if(group.length !== 3) return;
  group.forEach(item => item.addEventListener('toggle', () => {
    if(!item.open) {
      item.classList.remove('is-open');
      return;
    }
    item.classList.add('is-open');
    group.forEach(other => {
      if(other !== item && other.open) other.open = false;
      if(other !== item) other.classList.remove('is-open');
    });
  }));
})();
