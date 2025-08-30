// Theme toggle script for dark/light mode
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Use a simple SVG square for both modes
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" style="vertical-align:middle;" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="14" height="14" rx="3" fill="currentColor"/></svg>';
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  window.toggleTheme = toggleTheme;

  document.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('theme');
    setTheme(saved || 'dark');
  });
})();
