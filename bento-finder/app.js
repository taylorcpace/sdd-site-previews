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

/* ---------- bento-finder extras ---------- */
(function(){
  'use strict';
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const LABELS = {
    doc: {diploma:'Diploma', transcript:'Transcript', set:'Diploma + Transcript set'},
    level: {'high-school':'High School', ged:'GED', college:'College & University', certificate:'Certificate'},
    country: {usa:'USA', canada:'Canada', uk:'UK', australia:'Australia', other:'Other'}
  };

  /* Finder: keeps selection state and builds a query string for shop.html (no inventory filtering) */
  const finder = $('[data-finder]');
  if (finder) {
    const sum = $('[data-finder-summary]', finder);
    const state = () => {
      const s = {};
      ['doc','level','country'].forEach(k => { const c = finder.querySelector(`input[name="${k}"]:checked`); s[k] = c ? c.value : ''; });
      return s;
    };
    const render = () => {
      const s = state();
      if (sum) sum.textContent = [LABELS.doc[s.doc], LABELS.level[s.level], LABELS.country[s.country]].filter(Boolean).join(' · ');
    };
    finder.addEventListener('change', render);
    finder.addEventListener('submit', (e) => {
      e.preventDefault();
      const qs = new URLSearchParams(state()).toString();
      window.location.href = 'shop.html?' + qs;
    });
    render();
  }

  /* Generic tablist helper (click + arrow keys) */
  function tablist(tabSel, getPanel) {
    const tabs = $$(tabSel);
    if (!tabs.length) return;
    const select = (t, focus) => {
      tabs.forEach(x => {
        const on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        const p = getPanel(x); if (p) { if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden',''); }
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
          select(n, true);
        }
      });
    });
  }
  tablist('[data-tab]', t => document.getElementById(t.getAttribute('aria-controls')));
  tablist('[data-faq-tab]', t => document.getElementById(t.getAttribute('aria-controls')));

  /* Shop: show finder picks from query string (informational only) */
  const picks = $('[data-picks]');
  if (picks) {
    const q = new URLSearchParams(window.location.search);
    const chips = [];
    ['doc','level','country'].forEach(k => { const v = q.get(k); if (v && LABELS[k][v]) chips.push(LABELS[k][v]); });
    if (chips.length) {
      const box = $('[data-picks-chips]', picks);
      chips.forEach(c => { const s = document.createElement('span'); s.textContent = c; box.appendChild(s); });
      picks.removeAttribute('hidden');
      picks.parentElement.classList.add('has-picks');
    }
  }

  /* Shop: filter chips + sort over the 7 real products shown */
  const grid = $('[data-pgrid]');
  if (grid) {
    const cards = $$('.pcard', grid);
    const count = $('[data-count]');
    let filter = 'all';
    const apply = () => {
      let n = 0;
      cards.forEach(c => { const show = filter === 'all' || c.dataset.kind === filter; c.hidden = !show; if (show) n++; });
      if (count) count.textContent = n + (n === 1 ? ' product' : ' products');
    };
    $$('[data-filter]').forEach(b => b.addEventListener('click', () => {
      filter = b.dataset.filter;
      $$('[data-filter]').forEach(x => { const on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      apply();
    }));
    const sort = $('[data-sort]');
    sort && sort.addEventListener('change', () => {
      const v = sort.value;
      const sorted = cards.slice().sort((a, b) => {
        if (v === 'low') return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
        if (v === 'high') return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
        return a.dataset.order - b.dataset.order;
      });
      sorted.forEach(c => grid.appendChild(c));
      cards.forEach(c => c.classList.toggle('pcard--feat', v === 'featured' && c.dataset.order === '0'));
    });
  }

  /* Product: live total = (base + delivery add-on) x quantity */
  const buy = $('[data-buy]');
  if (buy) {
    const base = parseFloat(buy.dataset.base) || 0;
    const qty = $('[data-qty-input]', buy);
    const fmt = n => '$' + n.toFixed(2);
    const update = () => {
      const add = parseFloat((buy.querySelector('[data-addon]:checked') || {}).value || 0);
      const q = Math.max(1, parseInt(qty && qty.value, 10) || 1);
      const total = fmt((base + add) * q);
      $$('[data-total],[data-total-btn]', buy).forEach(el => el.textContent = total);
    };
    buy.addEventListener('change', update);
    buy.addEventListener('input', update);
    update();
  }
})();
