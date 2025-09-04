// HAMBURGER functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle hamburger icon text
    if (navMenu.classList.contains('active')) {
        hamburger.innerHTML = "&times;";
    } else {
        hamburger.innerHTML = "&#9776;"
    }
});


        // HERO SECTION //
//Image Slider for the Hero Section
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// // Change slide every 4 seconds
setInterval(showNextSlide, 4000);

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs button");
  const searchInput = document.getElementById("carSearch");
  const cars = document.querySelectorAll(".car-card");

  // Filter by category
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      cars.forEach((car) => {
        if (filter === "all" || car.dataset.category === filter) {
          car.style.display = "block";
        } else {
          car.style.display = "none";
        }
      });
    });
  });

  // Search by name
  searchInput.addEventListener("keyup", () => {
    const term = searchInput.value.toLowerCase();
    cars.forEach((car) => {
      const text = car.textContent.toLowerCase();
      if (text.includes(term)) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    });
  });
});


//         // TAB SECTION //
// // Tab switching functionality
// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//         // Remove active class from all tabs and contents
//         tabs.forEach(t => t.classList.remove('active'));
//         tabContents.forEach(content => content.classList.remove('active'));

//         // Add active class to clicked tab
//         tab.classList.add('active');

//         // Show corresponding content
//         const tabId = tab.getAttribute('data-tab');
//         document.getElementById(tabId).classList.add('active');
//     });
// });

// Loading functionality for car cards //
const carCards = document.querySelectorAll('.car-card');
carCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 200);
});

// Bookmark functionality
const bookmarks = document.querySelectorAll('.bookmark');
bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', (e) => {
        e.preventDefault();
        // Toggle bookmark state (you can add more functionality here)
        if (bookmark.textContent === '🔖') {
            bookmark.textContent = '❤';
            bookmark.style.color = '#e74c3c';
        } else {
            bookmark.textContent = '🔖';
            bookmark.style.color = '';
        }
    });
});

// Car modal functionality
const modal = document.getElementById("carModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalEngine = document.getElementById("modalEngine");
const modalMileage = document.getElementById("modalMileage");
const modalFuel = document.getElementById("modalFuel");
const modalTransmission = document.getElementById("modalTransmission");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-details").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    modalImage.src = btn.dataset.image;
    modalTitle.textContent = btn.dataset.title;
    modalEngine.textContent = btn.dataset.engine;
    modalMileage.textContent = btn.dataset.mileage;
    modalFuel.textContent = btn.dataset.fuel;
    modalTransmission.textContent = btn.dataset.transmission;
    modalPrice.textContent = btn.dataset.price;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; }

        // STATS SECTION //
// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 20);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-item h3');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

        // TESTIMNONIAL SECTION //
// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.nav-dot');

function showTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
            
    currentTestimonial = index;
            
    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

// Auto-advance testimonials
setInterval(() => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
}, 4000);

        // FAQs SECTION //
// FAQs functionality
const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn => {
  btn.addEventListener("click", () => {
    // Close all other answers
    questions.forEach(item => {
      if (item !== btn) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle current one
    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    if (btn.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

        // ANCHOR LINKS SECTION //
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 150) {
        header.style.background = '#fff';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});






