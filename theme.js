(() => {
  const storageKey = "devlog-theme";
  const namedThemes = ["light", "dark", "classic"];
  const root = document.documentElement;
  let preference = "system";

  function readPreference() {
    try {
      const saved = localStorage.getItem(storageKey);
      return namedThemes.includes(saved) ? saved : "system";
    } catch {
      return preference;
    }
  }

  function applyTheme(value) {
    if (value === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = value;
    }
  }

  preference = readPreference();
  applyTheme(preference);

  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("site-theme");
    select.value = preference;
    select.hidden = false;

    select.addEventListener("change", () => {
      preference = select.value;
      applyTheme(preference);
      try {
        if (preference === "system") {
          localStorage.removeItem(storageKey);
        } else {
          localStorage.setItem(storageKey, preference);
        }
      } catch {
        // Apply the selection for this page even without storage.
      }
    });

    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return;
      preference = readPreference();
      applyTheme(preference);
      select.value = preference;
    });
  });
})();
