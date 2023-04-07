"use strict";

const menuBurger = document.querySelector(".menu-burger");
const closeBurger = document.querySelector(".close__menu-burger");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header__content");
const headerFashion = document.querySelector(".fashion__header");
const orderCarts = document.querySelectorAll(".__general__card__order");

const ratings = document.querySelectorAll(".rating");

const likes = document.querySelectorAll(".card__like");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

//IsMobile
const IsMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      IsMobile.Android() ||
      IsMobile.BlackBerry() ||
      IsMobile.iOS() ||
      IsMobile.Opera() ||
      IsMobile.Windows()
    );
  },
};

if (IsMobile.any()) {
  header.style.opacity = 100;
}

if (IsMobile.any()) {
  for (let i = 0; i < orderCarts.length; i++) {
    const orderCart = orderCarts[i];
    orderCart.style.display = "flex";
  }
}

//menuBurger
menuBurger.addEventListener("click", clickOnBurger);
closeBurger.addEventListener("click", clickOnCloseBurger);

function clickOnBurger() {
  if (
    headerMenu.classList.contains("__active__menu-burger") &&
    header.classList.contains("__header__content-bg")
  ) {
  } else {
    menuBurger.style.display = "none";
    closeBurger.style.display = "block";
    headerMenu.classList.add("__active__menu-burger");
    header.classList.add("__header__content-bg");
    headerFashion.classList.remove("fashion__header");
  }
}
function clickOnCloseBurger() {
  if (
    headerMenu.classList.contains("__active__menu-burger") &&
    header.classList.contains("__header__content-bg")
  ) {
    menuBurger.style.display = "block";
    closeBurger.style.display = "none";
    headerMenu.classList.remove("__active__menu-burger");
    header.classList.remove("__header__content-bg");
    headerFashion.classList.add("fashion__header");
  }
}

//time
if (document.querySelector("#days") != null) {
  // start after
  setInterval(updateCounter, 1000);

  setTimeout(function () {}, 0);
}

function updateCounter() {
  const currentYear = new Date().getFullYear();
  const overDay = new Date(`Aprel 13 ${currentYear + 0} 00:00:00`);
  const currentTime = new Date();
  const diff = overDay - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

//likes
if (likes.length > 0) {
  initLikes();
}
function initLikes() {
  for (let index = 0; index < likes.length; index++) {
    const like = likes[index];

    like.addEventListener("click", likesEnter);
    function likesEnter(event) {
      event.preventDefault();
      like.classList.toggle("__active__card__like__item");
    }
  }
}

//rating
if (ratings.length > 0) {
  initRatings();
}

//general func rating
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
    rating.addEventListener("click", checkedRating);
    function checkedRating() {
      rating.classList.toggle("rating__checked");
    }
  }
  //initzial rating
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }
  //initzial values
  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }
  //change width active star
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  //opportunity set rating
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", function (e) {
        //reset values
        initRatingVars(rating);
        //reset active star
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        //reset livevalue
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        initRatingVars(rating);

        // checked rating
        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
      });
    }
  }
}

//initzial slide
new Swiper(".swiper", {
  //arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  // hashNavigation: {
  //   watchState: false,
  // },
  //infinity
  loop: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  speed: 800,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});

new Swiper(".__swiper-card-container-new-arrivals", {
  //arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",

    draggable: true,
  },

  mousewheel: {
    sensitivity: 2,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    394: {
      slidesPerView: 2.5,
    },
    494: {
      slidesPerView: 3,
    },
    694: {
      slidesPerView: 3.6,
    },
    824: {
      slidesPerView: 4.3,
    },
    994: {
      slidesPerView: 5,
    },
    1294: {
      slidesPerView: 6,
    },
    1684: {
      slidesPerView: 7,
    },
  },

  spaceBetween: 15,

  autoHeigh: true,

  slidesPerView: 6,
  watchOverFlow: true,

  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 800,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

new Swiper(".popular-categories__swiper", {
  autoHeigh: true,

  mousewheel: {
    sensitivity: 2,
  },

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 5,
    },
    884: {
      slidesPerView: 6,
    },
  },

  watchOverFlow: true,
  ceneteredSlides: true,

  speed: 800,
});

new Swiper(".__swiper-card-container-trend", {
  navigation: {
    nextEl: ".trending-arrow__right",
    prevEl: ".trending-arrow__left",
  },

  autoHeigh: true,

  mousewheel: {
    sensitivity: 2,
  },

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    794: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
  },

  slidesPerView: 3,
  watchOverFlow: true,

  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 800,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

new Swiper(".__swiper-sale-up", {
  navigation: {
    nextEl: ".__sale-up__arrow-right",
    prevEl: ".__sale-up__arrow-left",
  },

  autoHeigh: true,

  mousewheel: {
    sensitivity: 1,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    794: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  spaceBetween: 30,

  slidesPerView: 3,
  watchOverFlow: true,

  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 800,

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});

//fashionBlog
const addAsideBtn = document.querySelector(".fashion__aside__show");
const addAsideText = document.querySelector(".fashion__aside__show-btn");
const fashionAside = document.querySelector(".fashion__aside__content");
const fashionBlogContent = document.querySelector(".fashion__content__blog");
if (addAsideBtn != null) {
  addAsideBtn.addEventListener("click", showAside);
}

function showAside() {
  if (fashionAside.classList.contains("fashion__aside__content__active")) {
    addAsideText.textContent = "+ Add";
  } else {
    addAsideText.textContent = "- Hide";
  }

  fashionAside.classList.toggle("fashion__aside__content__active");
}
