const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);


const hiddenElements = document.querySelectorAll('.project-card, .cert-card, .tech-icon, .about-left, .about-right');

hiddenElements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});