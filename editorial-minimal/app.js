(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[data-nav]").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
  const filters = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card[data-cat]");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      cards.forEach((card) => {
        card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });
  const hash = location.hash.replace("#", "");
  if (hash) {
    const map = { ged: "GED", hs: "High School", college: "College", certs: "Certificates", covers: "Covers" };
    if (map[hash]) {
      const btn = document.querySelector(`.filter-btn[data-filter="${map[hash]}"]`);
      if (btn) btn.click();
    }
  }
  const cost = document.getElementById("updated-cost");
  const continueBtn = document.getElementById("pdp-continue");
  if (continueBtn && cost) {
    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cost.textContent = "Updated Cost $189.00";
    });
  }
})();
