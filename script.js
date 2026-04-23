/* ============================
   CUSTOM CURSOR
   ============================ */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  follower.style.left = e.clientX + 'px';
  follower.style.top = e.clientY + 'px';
});


/* ============================
   NAVBAR SCROLL EFFECT
   ============================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ============================
   HAMBURGER MENU
   ============================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks = document.querySelectorAll('.mob-link');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});


/* ============================
   TYPED ANIMATION
   ============================ */
const phrases = [
  'Software Engineer',
  'Frontend Developer',
  'UI Enthusiast',
  'JavaScript Lover',
  'Problem Solver',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(type, speed);
}

type();


/* ============================
   SCROLL REVEAL
   ============================ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* ============================
   SKILL BAR ANIMATION
   ============================ */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target.getAttribute('data-width');
      entry.target.style.width = target + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));


/* ============================
   STAT COUNTER ANIMATION
   ============================ */
const statNums = document.querySelectorAll('.stat-num');

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      let count = 0;
      const increment = target / 60;
      const update = () => {
        count += increment;
        if (count < target) {
          entry.target.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          entry.target.textContent = target;
          if (target === 100) entry.target.textContent = '100';
        }
      };
      update();
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(num => statObserver.observe(num));


/* ============================
   CONTACT FORM
   ============================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const btnText = document.getElementById('btnText');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  btnText.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

  setTimeout(() => {
    btnText.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 4000);
  }, 1500);
});


/* ============================
   ACTIVE NAV LINK ON SCROLL
   ============================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});
