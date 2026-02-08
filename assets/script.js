(function () {
  const toggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;

  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
  } else if (!systemPrefersDark) {
    html.setAttribute("data-theme", "light");
  }

  // Toggle theme on click
  toggle.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", newTheme);
  });
})();
