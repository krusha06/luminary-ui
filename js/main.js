/**
 * main.js
 * Luminary UI — vanilla JS interactions.
 *
 * Contents:
 *  1. Scroll reveal (IntersectionObserver)
 *  2. Tab switcher
 *  3. Toast dismiss
 */

/* ── 1. SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── 2. TAB SWITCHER ── */
const tabContents = [
  "Get a high-level view of your project's performance, recent activity, and upcoming milestones all in one place.",
  "Deep-dive into your usage patterns, conversion funnels, retention curves, and cohort analysis with real-time data.",
  "Configure integrations, manage team permissions, set up webhooks, and customize your notification preferences.",
];

function activateTab(btn, idx) {
  document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-content').textContent = tabContents[idx];
}

/* ── 3. TOAST DISMISS ── */
document.querySelectorAll('.toast-close').forEach((btn) => {
  btn.addEventListener('click', () => {
    const toast = btn.closest('.toast');
    toast.style.transition = 'opacity 0.2s, transform 0.2s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(10px)';
    setTimeout(() => toast.remove(), 220);
  });
});
