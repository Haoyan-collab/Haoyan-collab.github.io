(() => {
  const root = document.documentElement;

  root.dataset.theme = "dark";
  root.dataset.themeSetting = "dark";

  try {
    localStorage.setItem("theme", "dark");
  } catch (_) {
    // The visual theme remains dark when storage is unavailable.
  }
})();
