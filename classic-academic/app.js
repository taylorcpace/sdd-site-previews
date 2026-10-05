(function(){
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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
