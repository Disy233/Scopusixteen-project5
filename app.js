function toggleMobileMenu() {
  const menu = document.getElementById('mobileNav');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.mobile-nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      const menu = document.getElementById('mobileNav');
      if (menu) {
        menu.classList.remove('active');
      }
    });
  });
});
