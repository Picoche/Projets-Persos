// Header components
const header = document.querySelector("header");

// Nav components
const visibilityAccess = document.querySelector(".visual__access");
const langAccess = document.querySelector(".lang__access");

// Accueil components
const accueilContainer = document.querySelector(".accueil__container");
const accueilPrimary = document.querySelector(".accueil__primary");
const accueilSecondary = document.querySelector(".accueil__secondary");
const accueilTertiary = document.querySelector(".accueil__tertiary");
const accueilSkewed = document.querySelectorAll(".accueil__skewed");
const accueilLoadLeft = document.querySelector(".accueil__load-left");
const accueilLoadRight = document.querySelector(".accueil__load-right");

// Main components

// Presentation components
const presentationContainer = document.querySelector(
  ".presentation__container"
);

const presentationTitle = document.querySelector(".presentation__title");

const presentation = document.querySelector(".presentation");

// Carousel components
const carousel = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel-container");

const carouselItems = document.querySelectorAll(".carousel-item");

// Portfolio components
const portfolioMainContainer = document.querySelector(
  ".portfolio__main-container"
);

const portfolioFirstRow = document.querySelector(".portfolio__first-row");
const portfolioSecondRow = document.querySelector(".portfolio__second-row");
const portfolioThirdRow = document.querySelector(".portfolio__third-row");
const portfolioRow = document.querySelectorAll(".row");
const portfolioImages = document.querySelectorAll(".row img");

// Animation chargement

// Présentation

const presTitleAnimation = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.add("animate__animated", "animate__lightSpeedInLeft");
  entry.target.style.opacity = 1;
  entry.target.style.transitionDuration = "1s";
  observer.unobserve(entry.target);
};
const titleObserver = new IntersectionObserver(presTitleAnimation, {
  root: null,
  threshold: 1,
});
titleObserver.observe(presentationTitle);

// const revealPresTitle = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;

//   presentationTitle.classList.remove("fade-in");
//   observer.unobserve(entry.target);
// };

// const observer = new IntersectionObserver(revealPresTitle, {
//   root: null,
//   threshold: 0.3,
// });
// observer.observe(presentationContainer);

// Carousel slide compétences

const slider = function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class ="dots__dot" data-slides="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slides="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide

  let myInterval = setInterval(() => {
    nextSlide();
    goToSlide();
  }, 3500);

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slides;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  slider.addEventListener("mouseover", () => {
    clearInterval(myInterval);
    console.log(myInterval);
  });

  slider.addEventListener("mouseleave", () => {
    myInterval = setInterval(() => {
      nextSlide();
      goToSlide();
    }, 3500);
  });
};
slider();
//  Portfolio

// portfolioRow.forEach((row) => {
//   row.addEventListener("mouseenter", (e) => {
//     e.target.querySelector("img").classList.add("active");
//     e.target.querySelector("img").classList.remove("inactive");
//   });
// });

// portfolioRow.forEach((row) => {
//   row.addEventListener("mouseleave", (e) => {
//     e.target.querySelector("img").classList.add("inactive");
//     e.target.querySelector("img").classList.remove("active");
//   });
// });

let clicked = false;

portfolioRow.forEach((row) => {
  row.addEventListener("click", (e) => {
    if (!clicked) {
      e.target.closest(".row").classList.add("focused-row");
      e.target.closest(".row").querySelector("img").style.width = "30%";
      e.target
        .closest(".row")
        .querySelectorAll(".arrow")
        .forEach((arrow) => {
          arrow.classList.add("hidden-arrow");
        });
    } else {
      e.target.closest(".row").classList.remove("focused-row");
      e.target.closest(".row").querySelector("img").style.width = "70%";
      e.target
        .closest(".row")
        .querySelectorAll(".arrow")
        .forEach((arrow) => {
          arrow.classList.remove("hidden-arrow");
        });
    }
    clicked = !clicked;
  });

  row.addEventListener("mouseenter", (e) => {
    e.target
      .closest(".row")
      .querySelectorAll(".arrow")
      .forEach((arrow) => {
        arrow.classList.add(
          "animate__animated",
          "animate__pulse",
          "animate__infinite"
        );
      });
  });

  row.addEventListener("mouseleave", (e) => {
    e.target
      .closest(".row")
      .querySelectorAll(".arrow")
      .forEach((arrow) => {
        arrow.classList.remove(
          "animate__animated",
          "animate__pulse",
          "animate__infinite"
        );
      });
  });
});

// Test pour Alexandre

// const revealPresTitle = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;

//   presentationTitle.classList.remove("fade-in");
//   observer.unobserve(entry.target);
// };

// const observer = new IntersectionObserver(revealPresTitle, {
//   root: null,
//   threshold: 0.3,
// });
// observer.observe(presentationContainer);
