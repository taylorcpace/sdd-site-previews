(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[data-nav]").forEach((a) => {
    if (a.getAttribute("href") === path || (path === "" && a.dataset.nav === "home")) {
      a.classList.add("active");
    }
  });
  const filters = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card[data-cat]");
  function applyFilter(cat) {
    filters.forEach((b) => b.classList.toggle("active", b.dataset.filter === cat));
    cards.forEach((card) => {
      card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
    });
  }
  filters.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });
  const hash = location.hash.replace("#", "");
  const map = { ged: "GED", hs: "High School", college: "College", certs: "Certificates", covers: "Covers" };
  if (map[hash]) applyFilter(map[hash]);
  const cost = document.getElementById("updated-cost");
  const continueBtn = document.getElementById("pdp-continue");
  if (continueBtn && cost) {
    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cost.textContent = "Updated Cost $189.00";
      cost.style.color = "#1a2744";
    });
  }
})();
