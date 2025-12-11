// Theme initialization & toggle
(function () {
  function initializeTheme() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);

    document.documentElement.classList.toggle('dark', isDark);
  }

  function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  window.toggleDarkMode = toggleDarkMode;

  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleDarkMode);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').substring(1);
        if (!id) return;

        e.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      });
    });
  });
})();
