// Get elements
const aboutBtn = document.getElementById("aboutBtn");
const projectBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");
const aboutModal = document.getElementById("aboutModal");
const projectModal = document.getElementById("projectsModal");
const contactModal = document.getElementById("contactModal");
const aboutClose = document.getElementById("aboutClose");
const projectClose = document.getElementById("projectsClose");
const contactClose = document.getElementById("contactClose");

// Menu slide up
window.onload = () => {
  const pressStart = document.querySelector('.press-start');
  const menu = document.querySelector('.menu');

  // Wait for a click anywhere
  document.body.addEventListener('click', () => {
    // Fade out the "Press Start"
    pressStart.classList.add('fade-out');

    // Slide up the menu
    menu.classList.add('revealed');
  }, { once: true }); // ensures it only runs on the first click
};

// Open the modals
aboutBtn.onclick = () => { aboutModal.style.display = "block"; };
contactBtn.onclick = () => { contactModal.style.display = "block"; };
projectBtn.onclick = () => { projectModal.style.display = "block"; };

// Close the modals
aboutClose.onclick = () => { aboutModal.style.display = "none"; };
contactClose.onclick = () => { contactModal.style.display = "none"; };
projectClose.onclick = () => { projectModal.style.display = "none"; };

// Close if clicking outside
window.onclick = (event) => {
  if (event.target === aboutModal) aboutModal.style.display = "none";
  if (event.target === contactModal) contactModal.style.display = "none";
  if (event.target === projectModal) projectModal.style.display = "none";
};

// Screenshot slider functionality

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.screenshot-slider');

  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let current = 0;

    const showSlide = index => {
      slides.forEach((slide, i) =>
        slide.classList.toggle('active', i === index)
      );
    };

    slider.querySelector('.arrow.left').addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    slider.querySelector('.arrow.right').addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current); // Show initial slide
  });
});