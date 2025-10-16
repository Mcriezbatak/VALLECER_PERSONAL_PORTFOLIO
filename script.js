// Scroll animations
ScrollReveal().reveal('.hero-content, .hero-img, .about-img, .about-text, .skills h2, .skill, .projects h2, .project-card, .footer', {
  duration: 1000,
  distance: '60px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100
});

// Circular progress animation
document.querySelectorAll('.circle').forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const svg = circle.querySelector('svg');
  const newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newCircle.setAttribute("cx", "60");
  newCircle.setAttribute("cy", "60");
  newCircle.setAttribute("r", "60");
  newCircle.setAttribute("fill", "none");
  newCircle.setAttribute("stroke", "url(#grad)");
  newCircle.setAttribute("stroke-width", "10");
  newCircle.setAttribute("stroke-linecap", "round");

  const circumference = 2 * Math.PI * 60;
  const offset = circumference - (percent / 100) * circumference;
  newCircle.setAttribute("stroke-dasharray", circumference);
  newCircle.setAttribute("stroke-dashoffset", circumference);
  svg.appendChild(newCircle);

  setTimeout(() => {
    newCircle.setAttribute('style', 'transition: stroke-dashoffset 1.5s ease');
    newCircle.setAttribute("stroke-dashoffset", offset);
  }, 500);
});
