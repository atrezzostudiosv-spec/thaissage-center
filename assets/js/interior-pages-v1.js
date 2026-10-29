/* Thaissage Center / Atrezzo Studios — common interior behavior
   Functional mobile nav, accessible focus, progressive native-scroll reveal.
   No hijacked scrolling, no hidden content without IntersectionObserver. */
(() => {
 'use strict';
 const header=document.querySelector('.site-header');
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.mobile-nav');
 const close=()=>{
   if(!nav||!toggle)return;
   nav.hidden=true;
   toggle.setAttribute('aria-expanded','false');
   header?.classList.remove('is-open');
 };
 if(toggle&&nav){
   toggle.addEventListener('click',()=>{
     const shouldOpen=nav.hidden;
     nav.hidden=!shouldOpen;
     toggle.setAttribute('aria-expanded',String(shouldOpen));
     header?.classList.toggle('is-open',shouldOpen);
   });
   document.addEventListener('keydown',e=>{
     if(e.key==='Escape'&&!nav.hidden){close();toggle.focus()}
   });
   document.addEventListener('click',e=>{
     if(!nav.hidden&&!header?.contains(e.target))close();
   });
   nav.addEventListener('click',e=>{
     if(e.target.closest('a'))close();
   });
   window.matchMedia('(min-width:1061px)').addEventListener('change',close);
 }
 const updateHeader=()=>header?.classList.toggle('is-scrolled',window.scrollY>24);
 window.addEventListener('scroll',updateHeader,{passive:true});
 updateHeader();
 const motion=window.matchMedia('(prefers-reduced-motion:no-preference)');
 const reveals=[...document.querySelectorAll('.reveal')];
 if(motion.matches && 'IntersectionObserver' in window){
   document.documentElement.classList.add('js-enhanced');
   const observer=new IntersectionObserver(entries=>{
     for(const entry of entries){
       if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
     }
   },{threshold:.08,rootMargin:'0px 0px 30px 0px'});
   reveals.forEach(el=>observer.observe(el));
   window.addEventListener('load',()=>reveals.forEach(el=>{
     if(el.getBoundingClientRect().top<innerHeight*.9)el.classList.add('is-visible')
   }),{once:true});
 }
 const hero=document.querySelector('.hero-photo');
 if(hero&&motion.matches){
  let frame=0;
  const update=()=>{
    frame=0;
    const progress=Math.max(0,Math.min(1,scrollY/Math.max(1,innerHeight)));
    hero.style.setProperty('--hero-scale',(1.013+progress*.035).toFixed(4));
  };
  window.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update)},{passive:true});
 }
})();