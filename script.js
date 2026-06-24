/* ── Typewriter ─────────────────────────────────── */
const phrases = [
  "building AI applications",
  "training deep learning models",
  "detecting anomalies with LSTM",
  "engineering software solutions",
  "powering voice agents with LLMs",
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.getElementById("typewriter");

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    el.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

/* ── Scroll Reveal ──────────────────────────────── */
const revealEls = document.querySelectorAll(
  "section > .container > *, .project-card, .cert-card, .info-card, .timeline-item"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => observer.observe(el));

/* ── Navbar scroll shadow ───────────────────────── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(10,15,30,0.97)";
  } else {
    navbar.style.background = "rgba(10,15,30,0.82)";
  }
});

/* ── Mobile menu ────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

/* ── Active nav link on scroll ──────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute("href") === `#${current}` ? "#E2E8F0" : "";
  });
});
