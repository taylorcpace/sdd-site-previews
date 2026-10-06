/* Same Day Diplomas preview — shared interactions (mega menu, drawer, search, gallery, qty) */
(function(){
  'use strict';
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const mobileMQ = window.matchMedia('(max-width: 900px)');
  const hoverMQ = window.matchMedia('(min-width: 901px) and (hover: hover)');

  /* Mobile drawer */
  const nav = $('[data-main-nav]');
  const toggle = $('[data-nav-toggle]');
  const closeBtn = $('[data-nav-close]');
  const scrim = $('[data-nav-scrim]');
  const setDrawer = (open) => {
    if (!nav) return;
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (scrim) { if (open) scrim.removeAttribute('hidden'); else scrim.setAttribute('hidden', ''); }
    if (open) { const f = nav.querySelector('a,button'); f && f.focus({preventScroll:true}); }
  };
  toggle && toggle.addEventListener('click', () => setDrawer(!nav.classList.contains('is-open')));
  closeBtn && closeBtn.addEventListener('click', () => { setDrawer(false); toggle && toggle.focus(); });
  scrim && scrim.addEventListener('click', () => setDrawer(false));
  mobileMQ.addEventListener && mobileMQ.addEventListener('change', () => setDrawer(false));

  /* Mega menu: hover (desktop) + click/tap everywhere */
  $$('[data-mega]').forEach(item => {
    const btn = $('[data-mega-toggle]', item);
    if (!btn) return;
    let timer = null, hoverAt = 0;
    const setOpen = (open) => { item.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); };
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (hoverMQ.matches && Date.now() - hoverAt < 700) { setOpen(true); return; }
      setOpen(!item.classList.contains('is-open'));
    });
    item.addEventListener('mouseenter', () => { if (!hoverMQ.matches) return; clearTimeout(timer); if (!item.classList.contains('is-open')) hoverAt = Date.now(); setOpen(true); });
    item.addEventListener('mouseleave', () => { if (!hoverMQ.matches) return; timer = setTimeout(() => setOpen(false), 160); });
    item.addEventListener('focusout', (e) => { if (hoverMQ.matches && !item.contains(e.relatedTarget)) setOpen(false); });
    document.addEventListener('click', (e) => { if (!item.contains(e.target) && !mobileMQ.matches) setOpen(false); });
  });

  /* Search panel */
  const sBtn = $('[data-search-toggle]');
  const sPanel = $('[data-search-panel]');
  if (sBtn && sPanel) {
    sBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const open = sPanel.hasAttribute('hidden');
      if (open) sPanel.removeAttribute('hidden'); else sPanel.setAttribute('hidden', '');
      sBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) { const i = $('input', sPanel); i && i.focus(); }
    });
  }

  /* Escape closes everything */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (nav && nav.classList.contains('is-open')) { setDrawer(false); toggle && toggle.focus(); }
    $$('[data-mega].is-open').forEach(m => { m.classList.remove('is-open'); const b = $('[data-mega-toggle]', m); b && b.setAttribute('aria-expanded','false'); });
    if (sPanel && !sPanel.hasAttribute('hidden')) { sPanel.setAttribute('hidden',''); sBtn && sBtn.setAttribute('aria-expanded','false'); }
  });

  /* Quantity steppers */
  $$('[data-qty]').forEach(w => {
    const input = $('input', w);
    const fire = () => input.dispatchEvent(new Event('change', {bubbles:true}));
    $('[data-minus]', w)?.addEventListener('click', () => { input.value = Math.max(1, (parseInt(input.value,10)||1) - 1); fire(); });
    $('[data-plus]', w)?.addEventListener('click', () => { input.value = (parseInt(input.value,10)||1) + 1; fire(); });
  });

  /* Style picker buttons */
  $$('[data-style-btn]').forEach(b => b.addEventListener('click', () => {
    $$('[data-style-btn]').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-pressed','false'); });
    b.classList.add('is-active'); b.setAttribute('aria-pressed','true');
  }));

  /* Gallery thumbs */
  const main = $('[data-gallery-main]');
  if (main) $$('[data-gallery-thumb]').forEach(t => t.addEventListener('click', () => {
    const src = t.getAttribute('data-src'); if (!src) return;
    main.src = src;
    $$('[data-gallery-thumb]').forEach(x => x.classList.remove('is-active'));
    t.classList.add('is-active');
  }));

  /* Show more (collection copy) */
  const more = $('[data-show-more]');
  if (more) more.addEventListener('click', (e) => {
    e.preventDefault();
    const target = $(more.getAttribute('href') || '#collection-more');
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });

  /* Horizontal rails with prev/next */
  $$('[data-rail-prev],[data-rail-next]').forEach(btn => {
    const scope = btn.closest('section') || document;
    const rail = $('[data-rail]', scope);
    if (!rail) return;
    btn.addEventListener('click', () => {
      const dir = btn.hasAttribute('data-rail-next') ? 1 : -1;
      rail.scrollBy({left: dir * Math.max(260, rail.clientWidth * 0.8), behavior: 'smooth'});
    });
  });

  window.__SDD = { $, $$ };
})();
