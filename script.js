// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
// Close menu after clicking a link (mobile)
menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Theme toggle (persists choice; respects OS default otherwise)
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
function syncIcon() {
  const isDark =
    root.getAttribute('data-theme') === 'dark' ||
    (!root.getAttribute('data-theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  themeBtn.textContent = isDark ? '☀️' : '🌙';
}
syncIcon();
themeBtn.addEventListener('click', () => {
  const current =
    root.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncIcon();
});
