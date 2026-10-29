/* Thaissage Center · treatment chapter experience · native-scroll enhancement.
   Uses the six documented treatment cards as the single content source.
   The untouched accessible cards are always the fallback for mobile, tablet,
   reduced motion, short desktop windows or JavaScript failures. */
(() => {
  'use strict';
  const section = document.getElementById('treatments');
  const existingWindow = document.getElementById('treatments-window');
  const heading = section?.querySelector('.treatments-heading-slider');
  const sourceCards = [...(section?.querySelectorAll('.treatment-card') || [])];
  if (!section || !existingWindow || !heading || sourceCards.length !== 6) return;

  const query = window.matchMedia('(min-width:1025px) and (min-height:560px) and (prefers-reduced-motion:no-preference)');
  const create = (tag, className, textValue) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (textValue != null) node.textContent = textValue;
    return node;
  };
  const clamp = value => Math.max(0, Math.min(1, value));
  const labels = sourceCards.map(card => ({
    title:card.querySelector('h3')?.textContent.trim(),
    description:card.querySelector('.treatment-card-description')?.textContent.trim(),
    time:card.querySelector('.treatment-card-time')?.textContent.trim(),
    price:card.querySelector('.treatment-card-price')?.textContent.trim(),
    photo:card.querySelector('.treatment-card-photo')?.getAttribute('src'),
    alt:card.querySelector('.treatment-card-photo')?.getAttribute('alt'),
    icon:card.querySelector('.treatment-card-icon svg'),
    timeIcon:card.querySelector('.treatment-card-time svg'),
    booking:card.querySelector('.treatment-card-book')
  }));
  if (labels.some(item => !item.title || !item.photo || !item.booking)) return;

  let experience = null;
  let stage = null;
  let scenes = [];
  let tabs = [];
  let previous = null;
  let next = null;
  let selected = -1;
  let frame = 0;

  function chapterTo(index, smooth = true) {
    if (!experience || !stage) return;
    const target = Math.max(0,Math.min(labels.length-1,index));
    const boxTop = experience.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(1,experience.offsetHeight - stage.offsetHeight);
    // Travel to the center of the target chapter; scroll remains native.
    const y = boxTop + (target + .18) / labels.length * travel;
    window.scrollTo({top:y,behavior:smooth?'smooth':'instant'});
    setActive(target);
  }

  function setActive(index) {
    if (index === selected) return;
    selected = index;
    scenes.forEach((scene,i) => {
      const active = i === index;
      scene.classList.toggle('is-current',active);
      scene.setAttribute('aria-hidden',String(!active));
      scene.inert = !active;
    });
    tabs.forEach((button,i) => button.setAttribute('aria-pressed',String(i === index)));
    if (previous) previous.disabled = index === 0;
    if (next) next.disabled = index === labels.length-1;
  }

  function update() {
    frame = 0;
    if (!experience || !stage) return;
    const top = experience.getBoundingClientRect().top;
    const travel = Math.max(1,experience.offsetHeight - stage.offsetHeight);
    const progress = clamp(-top / travel);
    const current = Math.min(labels.length-1,Math.floor(progress*labels.length));
    setActive(current);
    const within = clamp(progress*labels.length-current);
    // The sixth chapter receives a slow photographic close-up before release.
    const zoom = current === labels.length-1 ? 1.025 + within*.055 : 1.025 + within*.012;
    scenes[current]?.style.setProperty('--t-chapter-photo-scale',zoom.toFixed(4));
  }
  function schedule() {
    if (!frame) frame = window.requestAnimationFrame(update);
  }

  function build() {
    if (experience) return;
    experience = create('div','treatment-experience');
    experience.setAttribute('aria-label','Massage treatments — six chapters');
    stage = create('div','treatment-stage');
    const viewport = create('div','treatment-chapters-viewport');
    const navigation = create('nav','treatment-chapter-nav');
    navigation.setAttribute('aria-label','Choose a massage treatment');

    labels.forEach((item,i) => {
      const article = create('article','treatment-chapter');
      article.setAttribute('aria-label',item.title);
      article.setAttribute('aria-hidden','true');
      article.inert = true;
      const picture = create('div','treatment-chapter-photo');
      const image = create('img');
      image.src = item.photo;
      image.alt = item.alt || '';
      image.width = 1100;
      image.height = 760;
      image.decoding = 'async';
      image.loading = i === 0 ? 'eager' : 'lazy';
      picture.append(image);
      const copy = create('div','treatment-chapter-content');
      const num = String(i+1).padStart(2,'0');
      copy.append(create('p','treatment-chapter-count',num+' / 06'));
      const seal = create('div','treatment-chapter-icon');
      seal.setAttribute('aria-hidden','true');
      if (item.icon) seal.append(item.icon.cloneNode(true));
      copy.append(seal);
      copy.append(create('h3','',item.title));
      copy.append(create('p','treatment-chapter-description',item.description));
      const meta = create('div','treatment-chapter-meta');
      const duration = create('span','duration',item.time);
      if (item.timeIcon) duration.prepend(item.timeIcon.cloneNode(true));
      meta.append(duration,create('span','price',item.price));
      copy.append(meta);
      const booking = create('a','treatment-chapter-book');
      booking.href = '#locations';
      booking.setAttribute('aria-label','Choose a location to book '+item.title);
      booking.append(create('span','', 'Book Now'));
      const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      arrowSvg.setAttribute('viewBox','0 0 24 24');
      arrowSvg.setAttribute('fill','none');
      arrowSvg.setAttribute('stroke','currentColor');
      arrowSvg.setAttribute('stroke-width','1.65');
      arrowSvg.setAttribute('stroke-linecap','round');
      arrowSvg.setAttribute('stroke-linejoin','round');
      arrowSvg.setAttribute('aria-hidden','true');
      const arrowPath = document.createElementNS('http://www.w3.org/2000/svg','path');
      arrowPath.setAttribute('d','M5 19 19 5M8 5h11v11');
      arrowSvg.append(arrowPath);
      booking.append(arrowSvg);
      booking.addEventListener('click',event => {
        event.preventDefault();
        item.booking.click(); // Existing source link already owns the Fresha location selector.
      });
      copy.append(booking);
      if (i===0) {
        previous = create('button','treatment-chapter-arrow');
        previous.type='button';
        previous.setAttribute('aria-label','Previous treatment');
        const left = document.createElementNS('http://www.w3.org/2000/svg','svg');
        left.setAttribute('viewBox','0 0 24 24');
        left.setAttribute('fill','none');
        left.setAttribute('stroke','currentColor');
        left.setAttribute('stroke-width','1.6');
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('d','M15 5 8 12l7 7');
        left.append(p);previous.append(left);
        previous.addEventListener('click',()=>chapterTo(selected-1));
      }
      // Arrow controls belong to the always-present stage, rather than each hidden chapter.
      article.append(picture,copy);
      viewport.append(article);
      scenes.push(article);

      const button = create('button','treatment-chapter-tab');
      button.type='button';
      button.setAttribute('aria-label','Show '+item.title);
      button.setAttribute('aria-pressed','false');
      button.append(create('span','treatment-tab-number',num));
      const thumb = create('img');
      thumb.src = item.photo;
      thumb.alt = '';
      thumb.width = 260;
      thumb.height = 160;
      thumb.decoding='async';
      thumb.loading='lazy';
      button.append(thumb,create('span','treatment-tab-title',item.title));
      button.addEventListener('click',()=>chapterTo(i,false));
      navigation.append(button);
      tabs.push(button);
    });
    // Non-duplicated arrow controls stay visible as chapters change.
    const controls = create('div','treatment-chapter-controls');
    previous = previous || create('button','treatment-chapter-arrow');
    next = create('button','treatment-chapter-arrow');
    next.type='button';
    next.setAttribute('aria-label','Next treatment');
    const right = document.createElementNS('http://www.w3.org/2000/svg','svg');
    right.setAttribute('viewBox','0 0 24 24');
    right.setAttribute('fill','none');
    right.setAttribute('stroke','currentColor');
    right.setAttribute('stroke-width','1.6');
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d','m9 5 7 7-7 7');
    right.append(path);
    next.append(right);
    next.addEventListener('click',()=>chapterTo(selected+1));
    controls.append(previous,next);
    stage.append(viewport,controls,navigation);
    experience.append(stage);
    heading.after(experience);
    section.classList.add('is-treatment-chapters');
    selected=-1;
    setActive(0);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    schedule();
  }
  function destroy() {
    if (!experience) return;
    window.removeEventListener('scroll',schedule);
    window.removeEventListener('resize',schedule);
    if (frame) window.cancelAnimationFrame(frame);
    frame=0;
    experience.remove();
    experience=null;stage=null;scenes=[];tabs=[];
    previous=null;next=null;selected=-1;
    section.classList.remove('is-treatment-chapters');
  }
  function reconcile() {if (query.matches) build();else destroy();}
  if (query.addEventListener) query.addEventListener('change',reconcile);
  else query.addListener(reconcile);
  reconcile();
})();
