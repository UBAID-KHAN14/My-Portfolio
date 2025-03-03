// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add Active Class on Scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });


// Typing Effect for Headline
const headline = document.getElementById('headline');
const texts = ["I Build Modern, Responsive & High-Performance Websites.", "I Craft Scalable & Stunning Web Experiences.", "I Design User-Friendly Interfaces That Drive Results."];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[index].length) {
    headline.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    headline.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();

// Coding Animation
const code = document.getElementById('code');
const codeSnippet = `function welcome() {
  console.log("Hello, World!");
}`;

let codeIndex = 0;
function writeCode() {
  if (codeIndex < codeSnippet.length) {
    code.textContent += codeSnippet.charAt(codeIndex);
    codeIndex++;
    setTimeout(writeCode, 50);
  }
}

writeCode();

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  darkModeToggle.querySelector('i').classList.toggle('fa-sun');
  darkModeToggle.querySelector('i').classList.toggle('fa-moon');
});


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');

          // Filter portfolio items
          portfolioItems.forEach(item => {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});

// arrow to top
// Back to Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

