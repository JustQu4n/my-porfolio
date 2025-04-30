function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Repeating typing effect
document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-text');
  const nameText = "Anh Quan";
  let i = 0;
  let isDeleting = false;
  const typingSpeed = 150; // milliseconds per character
  const deleteSpeed = 100; // deletion is a bit faster
  const pauseAfterTyping = 2000; // pause when text is fully typed
  const pauseAfterDelete = 500; // pause when text is fully deleted
  
  function typeEffect() {
    // Current text content
    const currentText = textElement.innerHTML;
    
    if (!isDeleting && i < nameText.length) {
      // Typing phase
      textElement.innerHTML += nameText.charAt(i);
      i++;
      setTimeout(typeEffect, typingSpeed);
    } else if (!isDeleting && i >= nameText.length) {
      // Typing complete, pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, pauseAfterTyping);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting phase
      textElement.innerHTML = currentText.substring(0, currentText.length - 1);
      setTimeout(typeEffect, deleteSpeed);
    } else if (isDeleting && currentText.length === 0) {
      // Deletion complete, pause before typing again
      isDeleting = false;
      i = 0;
      setTimeout(typeEffect, pauseAfterDelete);
    }
  }
  
  // Start the typing effect
  setTimeout(typeEffect, 500); // start after a small delay
});

// Add this to your existing script.js file

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all links that have hash (#) in them
  const links = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();
      
      // Get the target element
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just "#"
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return; // Skip if target doesn't exist
      
      // Calculate how far to scroll
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      // Smooth scroll to target
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
});