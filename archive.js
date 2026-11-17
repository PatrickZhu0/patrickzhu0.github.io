(() => {
  const controls = document.querySelector("[data-archive-controls]");
  const search = document.getElementById("archive-search");
  const category = document.getElementById("archive-category");
  const status = document.querySelector("[data-archive-status]");
  const entries = Array.from(document.querySelectorAll("[data-archive-entry]"), (element) => {
    const categories = JSON.parse(element.dataset.categories);
    return {
      element,
      categories,
      text: [element.dataset.title, element.dataset.summary, ...categories].join(" ").toLowerCase()
    };
  });

  if (entries.length === 0) return;

  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category");
  if (Array.from(category.options).some((option) => option.value === initialCategory)) {
    category.value = initialCategory;
  }
  search.value = params.get("q") ?? "";

  function filterEntries() {
    const query = search.value.trim().toLowerCase();
    const words = query ? query.split(/\s+/) : [];
    let matchCount = 0;

    for (const entry of entries) {
      const matchesCategory = !category.value || entry.categories.includes(category.value);
      const matchesSearch = words.every((word) => entry.text.includes(word));
      entry.element.hidden = !(matchesCategory && matchesSearch);
      if (!entry.element.hidden) matchCount += 1;
    }

    status.textContent = matchCount ? `${matchCount} 篇文章` : "没有符合条件的文章。";
  }

  search.addEventListener("input", filterEntries);
  category.addEventListener("change", filterEntries);
  window.addEventListener("pageshow", filterEntries);
  controls.hidden = false;
  filterEntries();
})();
