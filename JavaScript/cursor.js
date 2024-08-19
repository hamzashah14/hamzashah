//////// Cursor Trail Effect

const cursorTrail = document.querySelector('.cursor-trail');
const trail = document.createElement('div');
trail.className = 'trail';
cursorTrail.appendChild(trail);

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  trail.style.transform = `translate(${x}px, ${y}px)`;
  trail.style.opacity = 1;
});

document.addEventListener('mouseleave', () => {
  trail.style.transform = 'translate(-50%, -50%)';
  trail.style.opacity = 0;
});

setInterval(() => {
  trail.style.opacity -= 0.1;
  if (trail.style.opacity < 0) {
    trail.style.opacity = 0;
  }
}, 100);