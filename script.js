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
  { threshold: 0.14 }
);

revealElements.forEach((element) => revealObserver.observe(element));

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