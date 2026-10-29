/* ATREZZO · THAISSAGE CENTER / GIFT SCROLL ZOOM v5
   Gift Cards is a 100svh, full-bleed scene.
   Natural scroll through its parent extends the visual pause and slowly zooms
   only the photograph. No wheel/touch handlers, auto-scroll, or content hiding.
   Motion-disabled/short-height/no-JS visitors get a static full-screen scene.
*/
(() => {
  'use strict';
  const journey=document.querySelector('.gift-scroll-journey');
  const section=journey?.querySelector('.gift-section');
  const photo=section?.querySelector('.gift-photo');
  if(!journey || !section || !photo)return;

  const media=window.matchMedia('(min-height:640px) and (prefers-reduced-motion:no-preference)');
  const clamp=n=>Math.max(0,Math.min(1,n));
  const ease=n=>{const t=clamp(n);return t*t*(3-2*t);};
  let active=false,raf=0;

  function render(){
    raf=0;
    if(!active||document.hidden)return;
    const rect=journey.getBoundingClientRect();
    if(rect.bottom < -window.innerHeight || rect.top > window.innerHeight*2)return;
    const travel=Math.max(1,journey.offsetHeight-section.offsetHeight);
    const progress=clamp(-rect.top/travel);
    const zoom=1.015 + ease(progress)*.09;
    photo.style.setProperty('--gift-photo-scale',zoom.toFixed(4));
  }
  function schedule(){if(active&&!raf)raf=requestAnimationFrame(render);}
  function start(){
    if(active)return;
    active=true;
    journey.classList.add('is-gift-scroll-active');
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    document.addEventListener('visibilitychange',schedule);
    window.addEventListener('pageshow',schedule);
    schedule();
  }
  function stop(){
    if(!active)return;
    active=false;
    journey.classList.remove('is-gift-scroll-active');
    window.removeEventListener('scroll',schedule);
    window.removeEventListener('resize',schedule);
    document.removeEventListener('visibilitychange',schedule);
    window.removeEventListener('pageshow',schedule);
    if(raf)cancelAnimationFrame(raf);
    raf=0;
    photo.style.removeProperty('--gift-photo-scale');
  }
  function reconcile(){media.matches?start():stop();}
  if(media.addEventListener)media.addEventListener('change',reconcile);
  else media.addListener(reconcile);
  reconcile();
})();
