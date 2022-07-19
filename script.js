// Header components

// Nav components
const visibilityAccess = document.querySelector(".visual__access");
const langAccess = document.querySelector(".lang__access");

// Accueil components
const accueilContainer = document.querySelector(".accueil__container");
const accueilPrimary = document.querySelector(".accueil__primary");
const accueilSecondary = document.querySelector(".accueil__secondary");
const accueilTertiary = document.querySelector(".accueil__tertiary");
const accueilSkewed = document.querySelectorAll(".accueil__skewed");
const accueilLoadLeft = document.querySelectorAll(".accueil__load-left");
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

const portfolioLists = document.querySelectorAll(".portfolio__list");
const portfolioFirstList = document.querySelector(".porfolio__first-list");

const porfolioSecondList = document.querySelector(".porfolio__second-list");

const portfolioThirdList = document.querySelector(".porfolio__third-list");

const hiddenPortfolio = document.querySelectorAll(".porfolio__hide");
const portfolioContainers = document.querySelectorAll(".porfolio__containers");

// Accueil slide in

const revealAccueil = function () {
  accueilLoadLeft.forEach((load) => {
    setInterval(() => {
      load.classList.remove("accueil__load-left");
    }, 500);
  });
  accueilLoadRight.classList.remove("accueil__load-right");
};

document.addEventListener("DOMContentLoaded", revealAccueil);

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
  }, 2000);

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

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  });

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
    }, 2000);
  });
};
slider();
//  Portfolio fade in

const revealPortfolioLists = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hide__portfolio");
  observer.unobserve(entry.target);
};

const portfolioObserver = new IntersectionObserver(revealPortfolioLists, {
  root: null,
  threshold: 0.3,
});
portfolioLists.forEach(function (list) {
  portfolioObserver.observe(list);
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

// const [dataFirstBatch] = [firstBatch];
// const [dataSecondBatch] = [secondBatch];
// const [dataThirdBatch] = [thirdBatch];
// const [...unitedData] = [dataFirstBatch, dataSecondBatch, dataThirdBatch];
// // console.log(dataFirstBatch);
// // console.log(dataSecondBatch);
// // console.log(dataThirdBatch);
// console.log(unitedData);
