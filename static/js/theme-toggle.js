// Theme toggle script for dark/light mode
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Update the icon to the star SVG used in the header
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.innerHTML = '\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100" style="vertical-align: -0.1em;">\n  <path fill="currentColor" d="M50,0 L54.8,29.1 L79.4,20.6 L68.3,40.2 L97.6,42.4 L71.2,53.9 L97.6,67.6 L68.3,69.8 L79.4,89.4 L54.8,80.9 L50,100 L45.2,80.9 L20.6,89.4 L31.7,69.8 L2.4,67.6 L28.8,53.9 L2.4,42.4 L31.7,40.2 L20.6,20.6 L45.2,29.1 Z"/>\n</svg>\n';
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
