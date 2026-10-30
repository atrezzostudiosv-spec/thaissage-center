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
  const mobile = window.matchMedia('(max-width:720px) and (min-height:660px) and (prefers-reduced-motion:no-preference)');
  const signatureMedia = window.matchMedia('(min-height:560px) and (prefers-reduced-motion:no-preference)');
  const clamp = n => Math.max(0, Math.min(1, n));
  const smooth = n => { const v=clamp(n); return v*v*(3-2*v); };
  const make = (tag, cls, value) => {
    const el = document.createElement(tag);
    if(cls) el.className=cls;
    if(value !== undefined && value !== null) el.textContent=value;
    return el;
  };
  // Always use actual vector icons on the mobile image chapters.
  // The Unicode arrow used previously could turn into an iOS emoji.
  const arrowIcon = () => {
    const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');
    icon.setAttribute('viewBox','0 0 24 24');
    icon.setAttribute('width','19');
    icon.setAttribute('height','19');
    icon.setAttribute('fill','none');
    icon.setAttribute('stroke','currentColor');
    icon.setAttribute('stroke-width','1.65');
    icon.setAttribute('stroke-linecap','round');
    icon.setAttribute('stroke-linejoin','round');
    icon.setAttribute('aria-hidden','true');
    icon.setAttribute('focusable','false');
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d','M5 19 19 5M8 5h11v11');
    icon.append(path);
    return icon;
  };
  const jobs = [];

  function createStory(config) {
    const section=config.section;
    if(!section) return null;
    const items=config.collect();
    if(items.length !== config.count || items.some(x=>!x.image || !x.title || !x.sourceLink)) return null;
    let track=null, stage=null, panels=[], active=-1, observer=null, raf=0, hasFocus=false;
    let treatmentNavButtons=[];

    // Direct chapter selection is intentional interaction, not scroll hijacking.
    // Natural scroll is unchanged whenever the user does not select a chapter.
    function selectTreatment(index) {
      if (!track || !stage || !config.detailsRoutes) return;
      const clamped=Math.max(0,Math.min(items.length-1,index));
      const top=track.getBoundingClientRect().top+window.scrollY;
      const available=Math.max(1,track.offsetHeight-stage.offsetHeight);
      const destination=top+((clamped+.18)/items.length)*available;
      window.scrollTo({top:destination,behavior:'instant'});
      request();
    }

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
        image.src=(config.detailsRoutes && item.mobileImage) ? item.mobileImage : item.image;
        image.alt=(config.detailsRoutes && item.mobileAlt) ? item.mobileAlt : (item.alt||'');
        image.width=(config.detailsRoutes && item.mobileImage)?768:(item.width||1100);
        image.height=(config.detailsRoutes && item.mobileImage)?(item.mobileHeight||1024):(item.height||760);
        image.decoding='async';
        image.loading=i<2?'eager':'lazy';
        const photo=make('div','scroll-ritual-image');
        photo.append(image);
        const shade=make('div','scroll-ritual-scrim');
        const content=make('div','scroll-ritual-copy');
        // The editorial text moves upward independently; the Book Now CTA
        // remains anchored in precisely its approved mobile location.
        const info=config.detailsRoutes ? make('div','scroll-ritual-information') : content;
        info.append(make('p','scroll-ritual-eyebrow',config.eyebrow+' / '+String(i+1).padStart(2,'0')));
        info.append(make('h3','scroll-ritual-title',item.title));
        info.append(make('p','scroll-ritual-description',item.description));
        const meta=make('div','scroll-ritual-meta');
        if(item.duration)meta.append(make('span','scroll-ritual-duration',item.duration));
        if(item.price)meta.append(make('span','scroll-ritual-price',item.price));
        if(item.meta)meta.append(make('span','scroll-ritual-combined',item.meta));
        info.append(meta);
        const link=make('a','scroll-ritual-cta',config.cta);
        link.href='#locations';
        link.setAttribute('aria-label',config.cta+' — '+item.title);
        const arrow=make('span','scroll-ritual-arrow');
        if(config.detailsRoutes) arrow.append(arrowIcon());
        else arrow.textContent='↗'; // Existing approved Signature appearance stays intact.
        link.append(arrow);
        link.addEventListener('click',event=>{
          event.preventDefault();
          // The existing source CTA is bound to the established Fresha selector.
          item.sourceLink.click();
        });
        if(config.detailsRoutes){
          const details=make('a','treatment-detail-link');
          details.href=config.detailsRoutes[i];
          details.setAttribute('aria-label','View full details for '+item.title);
          const plus=make('span','treatment-detail-plus','+');
          plus.setAttribute('aria-hidden','true');
          details.append(plus,make('span','', 'Details'));
          meta.append(details);
        }
        content.append(link);
        if(config.detailsRoutes) panel.append(photo,shade,info,content);
        else panel.append(photo,shade,content);
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
      if(config.detailsRoutes){
        const nav=make('nav','treatment-quick-nav');
        nav.setAttribute('aria-label','Choose a massage treatment');
        // Visual two-column editorial order (Swedish left / Deep Tissue right).
        // Original chapter sequence and commercial content stay untouched.
        const displayOrder=[0,1,3,2,4,5];
        displayOrder.forEach(i=>{
          const button=make('button','treatment-quick-button');
          button.type='button';
          button.setAttribute('aria-label','Show '+items[i].title);
          button.setAttribute('aria-current','false');
          button.append(
            make('span','treatment-quick-label',items[i].title),
            make('span','treatment-quick-rule')
          );
          button.addEventListener('click',()=>selectTreatment(i));
          nav.append(button);
          treatmentNavButtons[i]=button;
        });
        stage.append(nav);
      }
      track.append(stage);

      if(config.before) section.insertBefore(track,config.before);
      else section.append(track);
      section.classList.add(config.className);
      active=-1;
      render(0,0,0);

      if('IntersectionObserver' in window) {
        observer=new IntersectionObserver(entries=>{
          if(entries.some(x=>x.isIntersecting)) request();
        },{rootMargin:'220px 0px'});
        observer.observe(track);
      }
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
        treatmentNavButtons.forEach((button,i)=>{
          if(button)button.setAttribute('aria-current',i===active?'step':'false');
        });
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
          const opacity=String(index===items.length-1&&current?1:clamp(visible));
          const transform='translate3d(0,'+((1-clamp(visible))*18).toFixed(1)+'px,0)';
          [copy,panel.querySelector('.scroll-ritual-information')].filter(Boolean).forEach(el=>{
            el.style.opacity=opacity;
            el.style.transform=transform;
          });
        }
      });
      stage.style.setProperty('--ritual-progress',String(clamp((index+local)/items.length)));
      treatmentNavButtons.forEach((button,i)=>{
        if(button)button.style.setProperty('--treatment-nav-fill',String(clamp(i<index?1:i===index?local:0)));
      });
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
      // The first mobile Treatment also enters gently from the right as
      // the story stage becomes visible below the editorial introduction.
      if(section===treatment && window.innerWidth<=720 && index===0 && rect.top>0) {
        const arrival=smooth(1-rect.top/(window.innerHeight*.72));
        const first=panels[0];
        if(first){
          first.style.opacity=String(arrival);
          first.style.transform='translate3d('+((1-arrival)*22).toFixed(1)+'%,0,0)';
          const copy=first.querySelector('.scroll-ritual-copy');
          if(copy)copy.style.opacity=String(arrival);
          const info=first.querySelector('.scroll-ritual-information');
          if(info)info.style.opacity=String(arrival);
        }
      }
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
      track.remove();track=null;stage=null;panels=[];treatmentNavButtons=[];active=-1;
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
    detailsRoutes:[
      'massage-services/thai-massage/',
      'massage-services/thai-combination-massage/',
      'massage-services/deep-tissue-massage/',
      'massage-services/swedish-massage/',
      'massage-services/couples-massage/',
      'massage-services/specialty-massages/'
    ],
    collect:()=>cards.map((card,i)=>{
      const img=card.querySelector('.treatment-card-photo');
      const mobileScenes=[
        {src:'assets/images/thaissage-traditional-thai-mobile-exclusive.webp',alt:'Illustrative traditional Thai assisted stretching on a floor mat'},
        {src:'assets/images/thaissage-thai-combination-mobile-portrait-v15.webp',alt:'Illustrative Thai combination massage using palm pressure on the back'},
        {src:'assets/images/thaissage-deep-tissue-mobile-portrait-v15.webp',alt:'Illustrative therapist applying focused pressure to the shoulders during deep tissue massage'},
        {src:'assets/images/thaissage-swedish-mobile-portrait-v15.webp',alt:'Illustrative flowing hand movements along the shoulder during Swedish massage'},
        {src:'assets/images/thaissage-couples-mobile-portrait-v15.webp',alt:'Illustrative couple relaxing on two adjacent spa treatment beds'},
        {src:'assets/images/thaissage-specialty-mobile-portrait-v15.webp',alt:'Illustrative Thai herbal compresses, plumeria flowers and spa ritual accessories'}
      ];
      return {
        mobileImage:mobileScenes[i].src,mobileAlt:mobileScenes[i].alt,
        mobileHeight:i===0?1024:1664,
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
    before:signature?.querySelector('.signature-stories'),eyebrow:'SIGNATURE EXPERIENCE',
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
