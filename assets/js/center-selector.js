/* ATREZZO · THAISSAGE CENTER | Editorial center chooser v4
   Desktop: Frisco is open initially to make the visible panel useful.
   Phone <=720px: ALL three accordions start closed, exactly as requested.
   Touching a center opens its details immediately below the name.
   Native details[name] provides usable behavior without JavaScript. */
(() => {
  'use strict';
  const group=[...document.querySelectorAll('.locations-cinematic .location-choice')];
  if(group.length!==3)return;
  const phone=window.matchMedia('(max-width:720px)');
  const initial=()=> {
    group.forEach((item,i)=>{
      const shouldOpen=!phone.matches && i===0;
      item.open=shouldOpen;
      item.classList.toggle('is-open',shouldOpen);
    });
  };
  group.forEach(item=>item.addEventListener('toggle',()=>{
    item.classList.toggle('is-open',item.open);
    if(item.open)group.forEach(other=>{
      if(other!==item){
        other.open=false;
        other.classList.remove('is-open');
      }
    });
  }));
  if(phone.addEventListener)phone.addEventListener('change',initial);
  else phone.addListener(initial);
  initial();
})();
