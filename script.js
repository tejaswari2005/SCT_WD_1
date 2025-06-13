// Sticky navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Toggle mobile menu
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  