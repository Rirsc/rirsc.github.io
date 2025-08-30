// Theme toggle script for dark/light mode
(function() {
  // Configuration: choose persistence mode.
  // 'session' -> preference lasts only for the browser tab/session (cleared on tab close)
  // 'local'   -> preference is saved to localStorage (persists across sessions)
  // 'none'    -> don't persist
  var persistence = 'session'; // change to 'local' if you want long-term persistence

  // If true and persistence === 'local', will force localStorage back to 'dark' when the user leaves the site.
  // Use this only if you explicitly want to overwrite the stored preference on unload.
  var rollbackLocalOnUnload = false;

  function storageSet(theme) {
    try {
      if (persistence === 'local') localStorage.setItem('theme', theme);
      else if (persistence === 'session') sessionStorage.setItem('theme', theme);
    } catch (e) {
      // ignore storage errors (e.g., disabled storage)
    }
  }

  function storageGet() {
    try {
      if (persistence === 'local') return localStorage.getItem('theme');
      if (persistence === 'session') return sessionStorage.getItem('theme');
    } catch (e) {
      return null;
    }
    return null;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    storageSet(theme);
    // Update the icon to the star SVG used in the header
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.innerHTML = '\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100" style="vertical-align: -0.1em;">\n  <path fill="currentColor" d="M50,0 L54.8,29.1 L79.4,20.6 L68.3,40.2 L97.6,42.4 L71.2,53.9 L97.6,67.6 L68.3,69.8 L79.4,89.4 L54.8,80.9 L50,100 L45.2,80.9 L20.6,89.4 L31.7,69.8 L2.4,67.6 L28.8,53.9 L2.4,42.4 L31.7,40.2 L20.6,20.6 L45.2,29.1 Z"/>\n</svg>\n';
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  window.toggleTheme = toggleTheme;

  // Initialize on DOMContentLoaded using the chosen storage.
  document.addEventListener('DOMContentLoaded', function() {
    var saved = storageGet();
    setTheme(saved || 'dark');
  });

  // Optional: roll localStorage back to dark when the user leaves the page.
  if (rollbackLocalOnUnload) {
    window.addEventListener('beforeunload', function() {
      try { localStorage.setItem('theme', 'dark'); } catch (e) {}
    });
  }

})();
