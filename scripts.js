window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-image');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);
  document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);
});

function animateSkills() {
  const skillsSection = document.querySelector('.skills');
  const skills = document.querySelectorAll('.progress');
  const skillsSectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (skillsSectionTop < windowHeight && skillsSectionTop > 0) {
    skills.forEach(skill => {
      const width = skill.getAttribute('data-width');
      skill.style.transition = 'width 1.5s ease-in-out'; // Adjust the animation speed
      skill.style.width = width;
    });
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
