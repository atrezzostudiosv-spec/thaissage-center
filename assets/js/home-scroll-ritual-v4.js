/* ATREZZO STUDIOS · THAISSAGE CENTER / NATIVE SCROLL RITUAL v4
   Desktop Treatments stays under its previously approved independent script.
   This module enhances mobile Treatments and desktop/mobile Signature:
   one full-viewport stage, gentle scroll-driven zoom and directional scene
   arrivals. No wheel hijack, no scroll locking, no JS-only commercial data.
   Low-height / reduced-motion / no-JS users retain original static content.
*/
(() => {
  'use strict';

  const treatment = document.getElementById('treatments');
  const signature = document.getElementById('signature');
  const mobile = window.matchMedia('(max-width:720px) and (min-height:560px) and (prefers-reduced-motion:no-preference)');
  const signatureMedia = window.matchMedia('(min-height:560px) and (prefers-reduced-motion:no-preference)');
  const clamp = n => Math.max(0, Math.min(1, n));
  const smooth = n => { const v=clamp(n); return v*v*(3-2*v); };
  const make = (tag, cls, value) => {
    const el = document.createElement(tag);
    if(cls) el.className=cls;
    if(value !== undefined && value !== null) el.textContent=value;
    return el;
  };
  const jobs = [];

  function createStory(config) {
    const section=config.section;
    if(!section) return null;
    const items=config.collect();
    if(items.length !== config.count || items.some(x=>!x.image || !x.title || !x.sourceLink)) return null;
    let track=null, stage=null, panels=[], active=-1, observer=null, raf=0, hasFocus=false;

    function build() {
      if(track) return;
      track=make('div',config.trackClass);
      stage=make('div','scroll-ritual-stage');
      stage.setAttribute('aria-label',config.aria);
      const stack=make('div','scroll-ritual-stack');
      items.forEach((item,i)=>{
        const panel=make('article','scroll-ritual-panel');
        panel.setAttribute('aria-label',item.title);
        panel.setAttribute('aria-hidden','true');
        panel.inert=true;
        const image=make('img','scroll-ritual-photo');
        image.src=item.image;
        image.alt=item.alt||'';
        image.width=item.width||1100;
        image.height=item.height||760;
        image.decoding='async';
        image.loading=i<2?'eager':'lazy';
        const photo=make('div','scroll-ritual-image');
        photo.append(image);
        const shade=make('div','scroll-ritual-scrim');
        const content=make('div','scroll-ritual-copy');
        content.append(make('p','scroll-ritual-eyebrow',config.eyebrow+' / '+String(i+1).padStart(2,'0')));
        content.append(make('h3','scroll-ritual-title',item.title));
        content.append(make('p','scroll-ritual-description',item.description));
        const meta=make('div','scroll-ritual-meta');
        if(item.duration)meta.append(make('span','scroll-ritual-duration',item.duration));
        if(item.price)meta.append(make('span','scroll-ritual-price',item.price));
        if(item.meta)meta.append(make('span','scroll-ritual-combined',item.meta));
        content.append(meta);
        const link=make('a','scroll-ritual-cta',config.cta);
        link.href='#locations';
        link.setAttribute('aria-label',config.cta+' — '+item.title);
        link.append(make('span','scroll-ritual-arrow','↗'));
        link.addEventListener('click',event=>{
          event.preventDefault();
          // The existing source CTA is bound to the established Fresha selector.
          item.sourceLink.click();
        });
        content.append(link);
        panel.append(photo,shade,content);
        stack.append(panel);
        panels.push(panel);
      });
      const chrome=make('div','scroll-ritual-top');
      chrome.append(make('span','scroll-ritual-label',config.topLabel));
      const count=make('span','scroll-ritual-count','01 / '+String(items.length).padStart(2,'0'));
      chrome.append(count);
      const bottom=make('div','scroll-ritual-bottom');
      bottom.append(make('span','scroll-ritual-instruction','SCROLL TO EXPLORE'));
      const bar=make('span','scroll-ritual-progress');
      bar.setAttribute('aria-hidden','true');
      bottom.append(bar);
      stage.append(stack,chrome,bottom);
      track.append(stage);

      if(config.before) section.insertBefore(track,config.before);
      else section.append(track);
      section.classList.add(config.className);
      active=-1;
      render(0,0,0);

      observer=new IntersectionObserver(entries=>{
        if(entries.some(x=>x.isIntersecting)) request();
      },{rootMargin:'220px 0px'});
      observer.observe(track);
      window.addEventListener('scroll',request,{passive:true});
      window.addEventListener('resize',request,{passive:true});
      window.addEventListener('pageshow',request);
      document.addEventListener('visibilitychange',request);
      request();
    }

    function render(index,local,blend) {
      if(!stage)return;
      const selected=blend>=.54?Math.min(items.length-1,index+1):index;
      if(selected!==active){
        active=selected;
        panels.forEach((p,i)=>{
          const allow=i===active;
          p.inert=!allow;
          p.style.pointerEvents=allow?'auto':'none';
          p.setAttribute('aria-hidden',String(!allow));
        });
        const counter=stage.querySelector('.scroll-ritual-count');
        if(counter)counter.textContent=String(active+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
      }
      panels.forEach((panel,i)=>{
        const current=i===index;
        const arriving=i===index+1 && index<items.length-1;
        const opacity=current?1-blend:arriving?blend:0;
        panel.style.opacity=String(opacity);
        panel.style.zIndex=arriving?'2':current?'1':'0';
        const photo=panel.querySelector('.scroll-ritual-photo');
        if(photo && opacity>.002){
          const within=current?local:0;
          const zoom=1.015+0.066*smooth(within/.77);
          photo.style.transform='scale('+zoom.toFixed(4)+')';
        }
        const motion=current?0:arriving?(1-blend):1;
        // Distinct narrative language: Treatments arrive from right on phones;
        // Signature rises vertically on phones and dissolves on larger screens.
        const mobileShift=section===treatment?'translate3d('+(motion*100).toFixed(2)+'%,0,0)':'translate3d(0,'+(motion*100).toFixed(2)+'%,0)';
        if(window.matchMedia('(max-width:720px)').matches)
          panel.style.transform=mobileShift;
        else
          panel.style.transform='translate3d(0,'+(motion*8).toFixed(1)+'px,0)';
        const copy=panel.querySelector('.scroll-ritual-copy');
        if(copy){
          const visible=current?1-smooth((local-.82)/.18):arriving?smooth((blend-.1)/.8):0;
          copy.style.opacity=String(index===items.length-1&&current?1:clamp(visible));
          copy.style.transform='translate3d(0,'+((1-clamp(visible))*18).toFixed(1)+'px,0)';
        }
      });
      stage.style.setProperty('--ritual-progress',String(clamp((index+local)/items.length)));
    }

    function update() {
      raf=0;
      if(!track||!stage||document.hidden)return;
      const rect=track.getBoundingClientRect();
      if(rect.bottom < -window.innerHeight || rect.top>window.innerHeight*2)return;
      const length=Math.max(1,track.offsetHeight-stage.offsetHeight);
      const position=clamp(-rect.top/length)*items.length;
      const index=Math.min(items.length-1,Math.floor(Math.min(position,items.length-.000001)));
      const local=clamp(position-index);
      const blend=index<items.length-1?smooth((local-.78)/.22):0;
      render(index,local,blend);
    }
    function request() {if(track&&!raf)raf=window.requestAnimationFrame(update)}
    function destroy() {
      if(!track)return;
      observer?.disconnect();observer=null;
      window.removeEventListener('scroll',request);
      window.removeEventListener('resize',request);
      window.removeEventListener('pageshow',request);
      document.removeEventListener('visibilitychange',request);
      if(raf)window.cancelAnimationFrame(raf);
      raf=0;
      if(hasFocus){
        const selector=section.querySelector(config.fallbackFocus);
        selector?.focus({preventScroll:true});
      }
      track.remove();track=null;stage=null;panels=[];active=-1;
      section.classList.remove(config.className);
    }
    function reconcile(){if(config.media.matches)build();else destroy()}
    jobs.push({media:config.media,reconcile});
    return {reconcile};
  }

  const cards=treatment?[...treatment.querySelectorAll('.treatment-card')]:[];
  const mobileTreatments=createStory({
    section:treatment,media:mobile,count:6,className:'is-mobile-scroll-ritual',
    trackClass:'treatment-scroll-track',aria:'Six full-screen massage treatment chapters',
    eyebrow:'MASSAGE TREATMENTS',topLabel:'THAILAND TO TEXAS · TREATMENTS',cta:'Book Now',
    fallbackFocus:'.treatment-card-book',
    collect:()=>cards.map(card=>{
      const img=card.querySelector('.treatment-card-photo');
      return {
        image:img?.getAttribute('src'), alt:img?.alt||'', title:card.querySelector('h3')?.textContent.trim(),
        description:card.querySelector('.treatment-card-description')?.textContent.trim(),
        duration:card.querySelector('.treatment-card-time')?.textContent.trim(),
        price:card.querySelector('.treatment-card-price')?.textContent.trim(),
        sourceLink:card.querySelector('.treatment-card-book')
      };
    })
  });
  const stories=signature?[...signature.querySelectorAll('.signature-story')]:[];
  const signatureCinema=createStory({
    section:signature,media:signatureMedia,count:3,className:'is-signature-scroll-ritual',
    trackClass:'signature-scroll-track',aria:'Three full-screen signature experiences',
    before:signature?.querySelector('.package-disclaimer'),eyebrow:'SIGNATURE EXPERIENCE',
    topLabel:'TAKE A LITTLE LONGER · SIGNATURE EXPERIENCES',cta:'Check Availability',
    fallbackFocus:'.signature-story-footer a',
    collect:()=>stories.map(story=>{
      const img=story.querySelector('.signature-story-image img');
      return {
        image:img?.getAttribute('src'),alt:img?.alt||'',
        width:840,height:1050,
        title:story.querySelector('h3')?.textContent.trim(),
        description:story.querySelector('.signature-story-description')?.textContent.trim(),
        meta:story.querySelector('.signature-story-duration')?.textContent.trim(),
        sourceLink:story.querySelector('.signature-story-footer a')
      };
    })
  });
  jobs.forEach(job=>{
    if(job.media.addEventListener)job.media.addEventListener('change',job.reconcile);
    else job.media.addListener(job.reconcile);
    job.reconcile();
  });
})();
