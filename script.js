// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
  }

  // Close menu when a nav link is clicked
  document.addEventListener("click", function (event) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    if (
      !navLinks.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      navLinks.classList.remove("open");
    }

    // Also close on link click (for smoother mobile experience)
    if (event.target.tagName === "A" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  });


  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
}