/* Thaissage Center / Atrezzo Studios
   Three-location Google Maps selector.
   Google Maps no-key embed shows ONE selected location at a time; the complete
   list of three centers, addresses and booking links stays visible.
   No Google Maps API key or checkout integration is implied. */
(() => {
  'use strict';
  const frame=document.getElementById('thaissage-map');
  const label=document.getElementById('map-current-label');
  const external=document.getElementById('map-current-link');
  const buttons=[...document.querySelectorAll('[data-map-select]')];
  const centers=[...document.querySelectorAll('.directions-center')];
  if(!frame||!label||!external||buttons.length!==3)return;

  const places={
    frisco:{
      title:'Frisco',number:'01/03',
      search:'Thaissage Center 9300 John Hickman Pkwy Suite 605 Frisco TX 75035',
    },
    'flower-mound':{
      title:'Flower Mound',number:'02/03',
      search:'Thaissage Center 1021 Long Prairie Rd Suite 404 Flower Mound TX 75022',
    },
    southlake:{
      title:'Southlake',number:'03/03',
      search:'Thaissage Center 101 River Oaks Dr Southlake TX',
    }
  };
  const googleEmbed=place=>'https://maps.google.com/maps?q='+encodeURIComponent(place.search)+'&z=14&output=embed';
  const googleLink=place=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place.search);
  let active='frisco';
  const update=(slug,force=false)=>{
    const place=places[slug];
    if(!place||(!force&&slug===active))return;
    active=slug;
    centers.forEach(center=>center.classList.toggle('is-selected',center.dataset.location===slug));
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mapSelect===slug)));
    label.textContent=place.title.toUpperCase()+' · '+place.number;
    external.textContent='Open '+place.title+' in Google Maps ↗';
    external.href=googleLink(place);
    frame.title='Google Maps — Thaissage Center '+place.title;
    frame.src=googleEmbed(place);
  };
  buttons.forEach(button=>button.addEventListener('click',()=>update(button.dataset.mapSelect)));
  const fromHash=()=>{
    const slug=decodeURIComponent(location.hash.replace(/^#map-/,''));
    if(places[slug])update(slug);
  };
  window.addEventListener('hashchange',fromHash);
  fromHash();
})();
