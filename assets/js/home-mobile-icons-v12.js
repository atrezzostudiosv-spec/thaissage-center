/* ATREZZO · THAISSAGE CENTER / MOBILE ICON CONSISTENCY v12
   Convert legacy decorative north-east text arrows into genuine SVG icons
   ONLY in the Home mobile UI. This also prevents iOS emoji presentation in
   location/map controls and Signature CTA. Desktop markup is preserved.
*/
(() => {
 'use strict';
 const media=window.matchMedia('(max-width:720px)');
 const selector='span[aria-hidden="true"], .signature-scroll-track .scroll-ritual-arrow';
 const svgArrow=()=>{
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
   svg.setAttribute('viewBox','0 0 24 24');
   svg.setAttribute('width','17');
   svg.setAttribute('height','17');
   svg.setAttribute('fill','none');
   svg.setAttribute('stroke','currentColor');
   svg.setAttribute('stroke-width','1.65');
   svg.setAttribute('stroke-linecap','round');
   svg.setAttribute('stroke-linejoin','round');
   svg.setAttribute('aria-hidden','true');
   svg.setAttribute('focusable','false');
   svg.classList.add('home-mobile-arrow-svg');
   const path=document.createElementNS('http://www.w3.org/2000/svg','path');
   path.setAttribute('d','M5 19 19 5M8 5h11v11');
   svg.append(path);
   return svg;
 };
 let pending=0;
 const run=()=>{
   pending=0;
   document.querySelectorAll(selector).forEach(span=>{
     if(media.matches){
       if(span.childElementCount===0 && span.textContent.trim()==='↗'){
         span.setAttribute('data-mobile-svg-arrow','');
         span.replaceChildren(svgArrow());
       }
     } else if(span.hasAttribute('data-mobile-svg-arrow')){
       span.replaceChildren(document.createTextNode('↗'));
       span.removeAttribute('data-mobile-svg-arrow');
     }
   });
 };
 const schedule=()=>{if(!pending)pending=requestAnimationFrame(run)};
 if(media.addEventListener)media.addEventListener('change',schedule);
 else media.addListener(schedule);
 // Scroll chapters are built dynamically; observe only added/removed markup.
 const observer=new MutationObserver(schedule);
 observer.observe(document.body,{subtree:true,childList:true});
 schedule();
})();
