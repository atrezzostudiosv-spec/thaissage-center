/* Thaissage Center — Atrezzo Studios / Heritage cinematic scroll v6
   Extends the existing full-screen THAILAND TO TEXAS photograph with a measured
   native-scroll zoom. No wheel/touch blocking, forced navigation or hidden copy.
   Short viewports and reduced-motion settings retain the full-height scene. */
(() => {
  'use strict';
  const journey=document.querySelector('.heritage-scroll-journey');
  const scene=journey?.querySelector('.heritage');
  const image=scene?.querySelector('.heritage-photo');
  if(!journey||!scene||!image)return;
  const media=window.matchMedia('(min-height:640px) and (prefers-reduced-motion:no-preference)');
  const clamp=value=>Math.max(0,Math.min(1,value));
  const ease=value=>{const n=clamp(value);return n*n*(3-2*n)};
  let active=false,frame=0;
  function paint(){
    frame=0;
    if(!active||document.hidden)return;
    const rect=journey.getBoundingClientRect();
    if(rect.bottom< -window.innerHeight||rect.top>window.innerHeight*2)return;
    const length=Math.max(1,journey.offsetHeight-scene.offsetHeight);
    const progress=clamp(-rect.top/length);
    image.style.setProperty('--heritage-scroll-scale',(1.018+ease(progress)*.09).toFixed(4));
  }
  function schedule(){if(active&&!frame)frame=requestAnimationFrame(paint)}
  function start(){
    if(active)return;
    active=true;
    journey.classList.add('is-heritage-scroll-active');
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    window.addEventListener('pageshow',schedule);
    document.addEventListener('visibilitychange',schedule);
    schedule();
  }
  function stop(){
    if(!active)return;
    active=false;
    journey.classList.remove('is-heritage-scroll-active');
    window.removeEventListener('scroll',schedule);
    window.removeEventListener('resize',schedule);
    window.removeEventListener('pageshow',schedule);
    document.removeEventListener('visibilitychange',schedule);
    if(frame)cancelAnimationFrame(frame);
    frame=0;
    image.style.removeProperty('--heritage-scroll-scale');
  }
  const reconcile=()=>media.matches?start():stop();
  if(media.addEventListener)media.addEventListener('change',reconcile);
  else media.addListener(reconcile);
  reconcile();
})();