(function () {
  var cycle = ['light', 'dark', 'system'];
  var icons = { light: '☀️', dark: '🌙', system: '⚙️' };

  function applyTheme(theme) {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = icons[theme];
      btn.title = btn.getAttribute('data-title-' + theme) || btn.title;
    }
  }

  window.cycleTheme = function () {
    var current = localStorage.getItem('theme') || 'light';
    var next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  /* Apply saved preference (or light by default) before first paint */
  applyTheme(localStorage.getItem('theme') || 'light');
})();
