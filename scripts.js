// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Skill Progress Animation
const animateSkills = () => {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    const width = skill.getAttribute('data-width');
    skill.style.setProperty('--progress-width', width);
    skill.classList.add('animate');
  });
};

// Intersection Observer for Skills
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      skillsObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Progress bar animation
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalWidth = parseInt(target.getAttribute('data-width')) || 0;
        
        // Warte 1.5 Sekunden, dann starte die Animation
        setTimeout(() => {
          target.style.width = finalWidth + '%';
        }, 1500);
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.1 });

  progressBars.forEach(bar => {
    bar.style.width = '0';
    observer.observe(bar);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  animateProgressBars();
});

// General Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal, .fade-in, .slide-in').forEach(element => {
  observer.observe(element);
});

// Dynamic text effect for hero section
const heroText = document.querySelector('.hero p');
if (heroText) {
  const text = heroText.textContent;
  heroText.textContent = '';
  
  let index = 0;
  const typeWriter = () => {
    if (index < text.length) {
      heroText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  };
  
  setTimeout(typeWriter, 1000);
}

// Mobile Navigation
const mobileBreakpoint = 768;
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

if (window.innerWidth <= mobileBreakpoint) {
  const hamburger = document.createElement('button');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  
  nav.insertBefore(hamburger, navLinks);
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
const showBackToTop = () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

window.addEventListener('scroll', showBackToTop);
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
