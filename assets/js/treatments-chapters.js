/* ATREZZO · THAISSAGE CENTER
   Cinematic Treatments, 2026-10-29.
   Original implementation informed by the user-supplied Ranchman visual-story
   and atlas reference: native vertical scroll, sticky photography, six bottom
   chapter controls. No Ranchman source code or assets reused.
   Non-JS / mobile / reduced-motion: original six service cards stay accessible.
*/
(() => {
  'use strict';
  const section = document.getElementById('treatments');
  if (!section) return;
  const cards = Array.from(section.querySelectorAll('.treatment-card'));
  if (cards.length !== 6) return;

  const media = window.matchMedia('(min-width:1025px) and (min-height:560px) and (prefers-reduced-motion:no-preference)');
  const content = cards.map(card => {
    const photo = card.querySelector('.treatment-card-photo');
    const link = card.querySelector('.treatment-card-book');
    return {
      name:card.querySelector('h3')?.textContent.trim(),
      description:card.querySelector('.treatment-card-description')?.textContent.trim(),
      duration:card.querySelector('.treatment-card-time')?.textContent.trim(),
      price:card.querySelector('.treatment-card-price')?.textContent.trim(),
      image:photo?.getAttribute('src'),
      alt:photo?.getAttribute('alt') || '',
      sourceLink:link
    };
  });
  if (content.some(entry => !entry.name || !entry.image || !entry.sourceLink)) return;

  const clamp = value => Math.max(0,Math.min(1,value));
  const ease = value => {const v=clamp(value);return v*v*(3-2*v);};
  const create = (tag,cls,text) => {
    const node=document.createElement(tag);
    if (cls) node.className=cls;
    if (text != null) node.textContent=text;
    return node;
  };
  let stage=null, panels=[], buttons=[], active=-1;
  let observer=null, visible=false, raf=0;
  let sectionRoot=null;

  function paint(index, local, blend) {
    const selected=blend>=0.5?Math.min(content.length-1,index+1):index;
    if (selected!==active) {
      active=selected;
      buttons.forEach((b,i)=>{
        b.setAttribute('aria-current',i===active?'step':'false');
      });
      panels.forEach((p,i)=>{
        const accessible=i===active;
        p.inert=!accessible;
        p.style.pointerEvents=accessible?'auto':'none';
        p.setAttribute('aria-hidden',String(!accessible));
      });
      const counter=stage.querySelector('.cinema-counter-number');
      if (counter) counter.textContent=String(active+1).padStart(2,'0');
    }
    panels.forEach((p,i)=>{
      let opacity=0,within=0;
      if (i===index) {opacity=1-blend;within=local;}
      if (i===index+1 && i<content.length) {opacity=blend;within=0;}
      if (index===content.length-1 && i===index) {opacity=1;within=local;}
      p.style.opacity=String(opacity);
      // Keep transparent panels rendered so even direct chapter jumps crossfade smoothly.
      const image=p.querySelector('img');
      if (opacity>0.004 && image) {
        const scale=i===content.length-1
          ?1.025+ease(within)*.058
          :1.025+Math.min(1,within)*.045;
        image.style.transform='scale('+scale.toFixed(4)+')';
      }
      const copy=p.querySelector('.cinema-copy');
      if(copy){
        const show=i===index?1-ease((local-.73)/.23):ease((local-.65)/.30);
        const copyOpacity=index===content.length-1?1:show;
        copy.style.opacity=String(clamp(copyOpacity));
        copy.style.transform='translate3d(0,'+((1-clamp(copyOpacity))*16).toFixed(1)+'px,0)';
      }
    });
    buttons.forEach((b,i)=>{
      const fill=i<index?1:i===index?local:0;
      b.style.setProperty('--cinema-fill',String(clamp(fill)));
    });
  }

  function update() {
    raf=0;
    if (!stage || !sectionRoot || document.hidden) return;
    const rect=section.getBoundingClientRect();
    const distance=Math.max(1,section.offsetHeight-stage.offsetHeight);
    const progress=clamp(-rect.top/distance);
    const position=Math.min(content.length-0.000001,progress*content.length);
    const index=Math.min(content.length-1,Math.floor(position));
    const local=clamp(position-index);
    const blend=index>=content.length-1?0:ease((local-.66)/.32);
    paint(index,local,blend);
  }
  function schedule(){if(!raf && stage) raf=requestAnimationFrame(update);}
  function goTo(index){
    if (!stage) return;
    const target=Math.max(0,Math.min(content.length-1,index));
    const from=section.getBoundingClientRect().top+window.scrollY;
    const travel=Math.max(1,section.offsetHeight-stage.offsetHeight);
    const offset=(target+.2)/content.length*travel;
    // Ranchman-style direct chapter selection: no forced sweep past every
    // intervening treatment; image/copy transition softly at the destination.
    window.scrollTo({top:from+offset,behavior:'instant'});
    schedule();
  }

  function build(){
    if (stage) return;
    const immersive=create('div','cinema-stage');
    immersive.setAttribute('aria-label','Explore six massage treatments');

    const background=create('div','cinema-backgrounds');
    const nav=create('nav','cinema-navigation');
    nav.setAttribute('aria-label','Choose a massage treatment');

    content.forEach((item,i)=>{
      const panel=create('article','cinema-panel');
      panel.setAttribute('aria-label',item.name);
      panel.setAttribute('aria-hidden','true');
      panel.inert=true;
      const image=create('img','cinema-photo');
      image.src=item.image;
      image.alt=item.alt;
      image.width=1100;image.height=760;
      image.decoding='async'; image.loading=i<2?'eager':'lazy';
      const imgWrap=create('div','cinema-image-wrap');
      imgWrap.append(image);
      panel.append(imgWrap,create('div','cinema-scrim'));

      const copy=create('div','cinema-copy');
      copy.append(create('p','cinema-copy-kicker','MASSAGE TREATMENTS / '+String(i+1).padStart(2,'0')));
      copy.append(create('h2','cinema-title',item.name));
      copy.append(create('p','cinema-description',item.description));
      const meta=create('div','cinema-meta');
      meta.append(create('span','cinema-duration',item.duration));
      meta.append(create('span','cinema-price',item.price));
      copy.append(meta);
      const book=create('a','cinema-book','Book Now');
      book.href='#locations';
      book.setAttribute('aria-label','Choose a location to book '+item.name);
      book.addEventListener('click',event=>{
        event.preventDefault();
        item.sourceLink.click();
      });
      const arrow=create('span','cinema-book-arrow','↗');
      arrow.setAttribute('aria-hidden','true');
      book.append(arrow);
      copy.append(book);
      panel.append(copy);
      background.append(panel);
      panels.push(panel);

      const button=create('button','cinema-nav-button');
      button.type='button';
      button.setAttribute('aria-label','Go to '+item.name);
      button.setAttribute('aria-current','false');
      button.append(create('span','cinema-nav-rule'));
      button.append(create('span','cinema-nav-label',item.name));
      button.addEventListener('click',()=>goTo(i));
      nav.append(button);
      buttons.push(button);
    });
    immersive.append(background);
    const top=create('div','cinema-top');
    top.append(create('span','cinema-top-label','THAILAND TO TEXAS · OUR TREATMENTS'));
    const counter=create('span','cinema-counter');
    counter.append(create('span','cinema-counter-number','01'));
    counter.append(document.createTextNode(' / 06'));
    top.append(counter);
    immersive.append(top);
    const footer=create('div','cinema-footer');
    const hint=create('div','cinema-hint');
    hint.append(create('span','', 'SCROLL TO EXPLORE'));
    const disclaimer=create('span','cinema-disclaimer','Services, pricing and availability vary by location. Confirm on Fresha.');
    hint.append(disclaimer);
    footer.append(hint,nav);
    immersive.append(footer);
    section.append(immersive);
    stage=immersive;
    sectionRoot=section;
    section.classList.add('is-treatment-immersive');
    paint(0,0,0);

    observer=new IntersectionObserver(entries=>{
      visible=entries.some(entry=>entry.isIntersecting);
      if(visible) schedule();
    },{rootMargin:'240px 0px'});
    observer.observe(section);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    document.addEventListener('visibilitychange',schedule);
    requestAnimationFrame(schedule);
  }
  function destroy(){
    if (!stage) return;
    observer?.disconnect();observer=null;
    window.removeEventListener('scroll',schedule);
    window.removeEventListener('resize',schedule);
    document.removeEventListener('visibilitychange',schedule);
    if(raf) cancelAnimationFrame(raf);
    raf=0;
    stage.remove();stage=null;sectionRoot=null;visible=false;
    panels=[];buttons=[];active=-1;
    section.classList.remove('is-treatment-immersive');
  }
  const reconcile=()=>media.matches?build():destroy();
  if(media.addEventListener) media.addEventListener('change',reconcile);
  else media.addListener(reconcile);
  reconcile();
})();
