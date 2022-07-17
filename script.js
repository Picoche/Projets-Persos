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

// Carrousel components
const skillBundlesContainer = document.querySelector(
  ".skill__bundles-container"
);

const skillBundles = document.querySelectorAll(".skill__bundles");
const skillIcons = document.querySelectorAll(".skill__icon");

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

//   carrouselImg.forEach((img) => {
//     const interval = setInterval(() => {
//       img.style.transform = "translateX(-175px)";
//       console.log("image décalée");
//     }, 1500);
//     interval();
//   });

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
