const LANG_KEY = 'preferred-lang';

function applyLang(lang) {
  document.body.style.transition = 'opacity 150ms ease';
  document.body.style.opacity = '0.7';
  setTimeout(() => {
    document.documentElement.setAttribute('data-lang', lang);
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
    document.body.style.opacity = '1';
  }, 80);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  const label = document.getElementById('lang-label');
  if (label) label.textContent = saved.toUpperCase();

  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = localStorage.getItem(LANG_KEY) || 'en';
    const next = current === 'en' ? 'ko' : 'en';
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
  });
});
