const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// Hero slideshow
const heroSlideImage = document.getElementById("heroSlideImage");

if (heroSlideImage) {
  const heroSlides = [
    "https://i.pinimg.com/736x/ea/80/e9/ea80e91f7a035674204eea4738184180.jpg",
    "https://i.pinimg.com/736x/5e/3a/c2/5e3ac247d015be235355a4fc275786f0.jpg",
    "https://i.pinimg.com/736x/2c/6e/ef/2c6eefca03e5dccb143a3b45d8696019.jpg",
    "https://i.pinimg.com/736x/77/82/f9/7782f910ca2d859b89ae74c581fe03cb.jpg",
    "https://i.pinimg.com/736x/3e/0e/20/3e0e2007aba82d178f837693e4149a41.jpg"
  ];
  let currentSlide = 0;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlideImage.classList.add("is-fading");

    setTimeout(() => {
      heroSlideImage.src = heroSlides[currentSlide];
      heroSlideImage.classList.remove("is-fading");
    }, 220);
  }, 3200);
}

// Parallax hero
const heroMedia = document.querySelector(".hero-media");
if (heroMedia) {
  window.addEventListener("scroll", () => {
    heroMedia.style.transform = `translateY(${window.scrollY * 0.08}px)`;
  }, { passive: true });
}

// Animated counters
const counters = document.querySelectorAll(".counter");

if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 1600 / steps);

      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => counterObserver.observe(c));
}

// Formulario orcamento -> WhatsApp
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("quoteName").value.trim();
    const type = document.getElementById("quoteType").value || "nao informado";
    const desc = document.getElementById("quoteDesc").value.trim() || "nao informado";
    const msg = `Ola! Meu nome e ${name}.\nGostaria de um orcamento:\n- Peca: ${type}\n- Descricao: ${desc}`;
    window.open(`https://wa.me/5511964532979?text=${encodeURIComponent(msg)}`, "_blank");
  });
}

// Lightbox galeria
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImg && lightboxClose) {
  document.querySelectorAll(".mosaic-strip img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
    });
  });

  const closeLightbox = () => lightbox.classList.remove("is-open");

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
