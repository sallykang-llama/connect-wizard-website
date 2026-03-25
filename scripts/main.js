import { Terminal } from './terminal.js';
import { initSparkles } from './sparkle.js';

// ── Scroll reveal ──────────────────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ── Keyboard navigation ────────────────────────────────────
function initKeyboardNav() {
  const keyMap = {
    f: '#features',
    d: '#demo',
    i: '#install',
    c: '#changelog',
  };

  document.addEventListener('keydown', (e) => {
    // Don't fire when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    const key = e.key.toLowerCase();

    if (key === 'g') {
      window.open('https://github.com/anthropics/claude-code', '_blank');
      return;
    }

    const target = keyMap[key];
    if (target) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ── Copy buttons ───────────────────────────────────────────
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copy-btn--copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copy-btn--copied');
        }, 2000);
      } catch {
        // Clipboard API not available
      }
    });
  });
}

// ── Terminal demo ──────────────────────────────────────────
function initTerminal() {
  const outputEl = document.getElementById('terminal-output');
  const statusEl = document.getElementById('terminal-status');
  const replayBtn = document.getElementById('terminal-replay');
  const tabs = document.querySelectorAll('.terminal__tab');

  if (!outputEl || !statusEl) return;

  const terminal = new Terminal(outputEl, statusEl);

  // Tab switching
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      terminal.stopAutoCycle();
      tabs.forEach((t) => t.classList.remove('terminal__tab--active'));
      tab.classList.add('terminal__tab--active');
      terminal.play(tab.dataset.scenario);
    });
  });

  // Replay
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      terminal.stopAutoCycle();
      terminal.replay();
    });
  }

  // Auto-cycle when terminal is in viewport
  const terminalSection = document.getElementById('demo');
  if (terminalSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          terminal.startAutoCycle(tabs);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(terminalSection);
  }
}

// ── Sparkles ───────────────────────────────────────────────
function initHeroSparkles() {
  const hero = document.querySelector('.section--hero');
  if (hero) {
    initSparkles(hero);
  }
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initKeyboardNav();
  initCopyButtons();
  initTerminal();
  initHeroSparkles();
});
