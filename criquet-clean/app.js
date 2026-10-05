(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });
  }

  /* Mega menu: hover on desktop, click/tap toggle everywhere, close on outside click / Escape */
  const desktop = window.matchMedia('(min-width: 901px) and (hover: hover)');
  document.querySelectorAll('[data-mega]').forEach(item => {
    const btn = item.querySelector('[data-mega-toggle]');
    const panel = item.querySelector('[data-mega-panel]');
    if (!btn || !panel) return;
    let closeTimer = null;
    let hoverOpenedAt = 0;
    const setOpen = (open) => {
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      // On hover devices the panel is already open from mouseenter; a click right after shouldn't close it
      if (desktop.matches && Date.now() - hoverOpenedAt < 700) { setOpen(true); return; }
      setOpen(!item.classList.contains('is-open'));
    });
    item.addEventListener('mouseenter', () => {
      if (!desktop.matches) return;
      clearTimeout(closeTimer);
      if (!item.classList.contains('is-open')) hoverOpenedAt = Date.now();
      setOpen(true);
    });
    item.addEventListener('mouseleave', () => {
      if (!desktop.matches) return;
      closeTimer = setTimeout(() => setOpen(false), 160);
    });
    item.addEventListener('focusout', (ev) => {
      if (desktop.matches && !item.contains(ev.relatedTarget)) setOpen(false);
    });
    document.addEventListener('click', (ev) => {
      if (!item.contains(ev.target)) setOpen(false);
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && item.classList.contains('is-open')) {
        setOpen(false);
        btn.focus();
      }
    });
  });

  /* Header search panel */
  const searchBtn = document.querySelector('[data-search-toggle]');
  const searchPanel = document.querySelector('[data-search-panel]');
  if (searchBtn && searchPanel) {
    searchBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const open = searchPanel.hasAttribute('hidden');
      if (open) searchPanel.removeAttribute('hidden'); else searchPanel.setAttribute('hidden', '');
      searchBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) searchPanel.querySelector('input')?.focus();
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !searchPanel.hasAttribute('hidden')) {
        searchPanel.setAttribute('hidden', '');
        searchBtn.setAttribute('aria-expanded', 'false');
        searchBtn.focus();
      }
    });
  }

  document.querySelectorAll('[data-qty]').forEach(wrap => {
    const input = wrap.querySelector('input');
    wrap.querySelector('[data-minus]')?.addEventListener('click', () => {
      input.value = Math.max(1, (parseInt(input.value,10)||1) - 1);
    });
    wrap.querySelector('[data-plus]')?.addEventListener('click', () => {
      input.value = (parseInt(input.value,10)||1) + 1;
    });
  });
  document.querySelectorAll('[data-style-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-style-btn]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
  const showMore = document.querySelector('[data-show-more]');
  if (showMore) {
    showMore.addEventListener('click', (ev) => {
      ev.preventDefault();
      const target = document.querySelector(showMore.getAttribute('href') || '#collection-more');
      target?.classList.toggle('is-expanded');
      showMore.textContent = target?.classList.contains('is-expanded') ? 'SHOW LESS' : 'SHOW MORE';
    });
  }
})();
