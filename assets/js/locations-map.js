/* Thaissage Center — Three Locations / Atrezzo Studios · 2026-10-29
   One official no-key Google Maps iframe. Desktop: persistent map next to
   the three locations. Mobile: the SAME iframe moves immediately below the
   selected location; no hidden map at the end, no fake multi-pin promises.
   Respects native scroll, deep links and keyboard control. */
(() => {
  'use strict';
  const frame=document.getElementById('thaissage-map');
  const map=document.querySelector('.directions-map');
  const row=document.querySelector('.directions-layout');
  const label=document.getElementById('map-current-label');
  const external=document.getElementById('map-current-link');
  const buttons=Array.from(document.querySelectorAll('[data-map-select]'));
  const centers=Array.from(document.querySelectorAll('.directions-center[data-location]'));
  if (!frame||!map||!row||!label||!external||buttons.length!==3||centers.length!==3)return;

  const places={
    frisco:{title:'Frisco',number:'01/03',search:'Thaissage Center 9300 John Hickman Pkwy Suite 605 Frisco TX 75035'},
    'flower-mound':{title:'Flower Mound',number:'02/03',search:'Thaissage Center 1021 Long Prairie Rd Suite 404 Flower Mound TX 75022'},
    southlake:{title:'Southlake',number:'03/03',search:'Thaissage Center 101 River Oaks Dr Southlake TX'}
  };
  const urlFor=(place,kind)=>kind==='embed'
    ? 'https://maps.google.com/maps?q='+encodeURIComponent(place.search)+'&z=14&output=embed'
    : 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place.search);

  const mobile=window.matchMedia('(max-width:720px)');
  const reduced=window.matchMedia('(prefers-reduced-motion:reduce)');
  const holder=document.createComment('Permanent desktop map position');
  row.insertBefore(holder,map);
  let active='frisco';
  let expanded=true;

  function moveMap(){
    if(mobile.matches){
      const target=centers.find(node=>node.dataset.location===active);
      if(target&&map.parentNode!==target) target.append(map);
      map.hidden=!expanded;
    }else{
      if(map.previousSibling!==holder) holder.after(map);
      map.hidden=false;
    }
    centers.forEach(center=>{
      const open=center.dataset.location===active&&(!mobile.matches||expanded);
      center.classList.toggle('is-selected',open);
    });
    buttons.forEach(button=>{
      const selected=button.dataset.mapSelect===active;
      button.setAttribute('aria-pressed',String(selected));
      button.setAttribute('aria-expanded',String(mobile.matches&&selected&&expanded));
    });
  }

  function select(slug,{scroll=false,force=false}={}){
    const place=places[slug];
    if(!place)return;
    // Tapping the active mobile entry works like an accordion.
    if(mobile.matches&&slug===active&&!force){
      expanded=!expanded;
    }else{
      active=slug;expanded=true;
    }
    label.textContent=place.title.toUpperCase()+' · '+place.number;
    external.textContent='Open '+place.title+' in Google Maps ↗';
    external.href=urlFor(place,'external');
    frame.title='Google Maps — Thaissage Center '+place.title;
    const src=urlFor(place,'embed');
    if(frame.src!==src)frame.src=src;
    moveMap();
    if(mobile.matches&&scroll){
      const center=centers.find(x=>x.dataset.location===slug);
      center?.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
    }
  }

  buttons.forEach(button=>{
    button.addEventListener('click',()=>select(button.dataset.mapSelect,{scroll:mobile.matches}));
  });
  const onHash=()=>{
    const hash=decodeURIComponent(location.hash||'');
    if(!hash.startsWith('#map-'))return;
    const slug=hash.substring(5);
    if(!places[slug])return;
    select(slug,{force:true,scroll:mobile.matches});
  };

  const reconcile=()=>moveMap();
  if(mobile.addEventListener)mobile.addEventListener('change',reconcile);
  else mobile.addListener(reconcile);
  window.addEventListener('hashchange',onHash);
  moveMap();
  onHash();
})();
