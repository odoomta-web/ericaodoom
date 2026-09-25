// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile sidebar toggle
const sidebar = document.getElementById('sidebar');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the mobile menu after choosing a link
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the current section in the sidebar as the page scrolls
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
