export function initSparkles(container) {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'sparkle-canvas';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];
  const colors = ['#f5c542', '#9b6dff', '#66ffcc'];
  const SPAWN_INTERVAL = 400;
  const MAX_PARTICLES = 30;

  function resize() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function spawnParticle() {
    if (particles.length >= MAX_PARTICLES) return;
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 3 + Math.random() * 3,
      life: 0,
      maxLife: 800 + Math.random() * 800,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: -0.15 - Math.random() * 0.3,
    });
  }

  let lastSpawn = 0;
  let animId;

  function draw(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timestamp - lastSpawn > SPAWN_INTERVAL) {
      spawnParticle();
      lastSpawn = timestamp;
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life += 16;
      p.y += p.vy;

      const progress = p.life / p.maxLife;
      // Scale: 0 → 1 → 0
      const scale = progress < 0.5
        ? progress * 2
        : 2 - progress * 2;
      const opacity = scale;
      const s = p.size * scale;

      if (p.life >= p.maxLife) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = opacity * 0.6;
      ctx.fillStyle = p.color;
      // Draw as pixel square (Stardew Valley style)
      ctx.fillRect(
        Math.round(p.x - s / 2),
        Math.round(p.y - s / 2),
        Math.round(s),
        Math.round(s)
      );
    }

    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  // Cleanup function
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    canvas.remove();
  };
}
