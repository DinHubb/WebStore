"use strict";
const headerContent = document.querySelector(".header__content");
const womanCards = document.querySelectorAll(".__women-card");
const orderCarts = document.querySelectorAll(".__general__card__order");
const addOrders = document.querySelectorAll(".card__order__cart__btn__item");
const orderNumbers = document.querySelector(".header__order-numbers");
const ratings = document.querySelectorAll(".rating");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

//IsMobile
initMobileVersion();
function initMobileVersion() {
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
    headerContent.style.opacity = 100;
  }
  if (IsMobile.any()) {
    for (let i = 0; i < womanCards.length; i++) {
      const womanCard = womanCards[i];
      womanCard.style.margin = "0 0 10px 0";
    }
    for (let i = 0; i < orderCarts.length; i++) {
      const orderCart = orderCarts[i];
      orderCart.style.position = "static";
      orderCart.style.display = "flex";
    }
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
  const overDay = new Date(`Octeber 13 ${currentYear + 0} 00:00:00`);
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

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  spaceBetween: 15,

  autoHeigh: true,

  slidesPerView: 6,
  watchOverFlow: true,

  direction: "horizontal",
  mousewheel: {
    sensitivity: 1,
    invert: false,
    forceToAxis: true,
  },
  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 600,

  lazyLoading: true,

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
});

new Swiper(".popular-categories__swiper", {
  autoHeigh: true,

  direction: "horizontal",
  mousewheel: {
    sensitivity: 1,
    invert: false,
    forceToAxis: true,
  },

  spaceBetween: 30,

  watchOverFlow: true,
  ceneteredSlides: true,

  speed: 600,

  lazyLoading: true,

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
});

new Swiper(".__swiper-card-container-trend", {
  navigation: {
    nextEl: ".trending-arrow__right",
    prevEl: ".trending-arrow__left",
  },

  autoHeigh: true,

  direction: "horizontal",
  mousewheel: {
    sensitivity: 1,
    invert: false,
    forceToAxis: true,
  },

  spaceBetween: 30,

  slidesPerView: 4,
  watchOverFlow: true,

  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 600,

  lazyLoading: true,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2.5,
    },
    624: {
      slidesPerView: 3,
    },
    794: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".__swiper-sale-up", {
  navigation: {
    nextEl: ".__sale-up__arrow-right",
    prevEl: ".__sale-up__arrow-left",
  },

  autoHeigh: true,

  direction: "horizontal",
  mousewheel: {
    sensitivity: 1,
    invert: false,
    forceToAxis: true,
  },

  spaceBetween: 30,

  slidesPerView: 4,
  watchOverFlow: true,

  freemod: true,

  simulateTouch: true,
  touchRatio: 3,
  touchAngle: 45,

  speed: 600,

  lazyLoading: true,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2.5,
    },
    624: {
      slidesPerView: 3,
    },
    794: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

// woman-category
const womanFilterBtn = document.querySelector(".women__product__title__btn");
const womanFilter = document.querySelector(".women__product__filter__content");
const womanFilterIcon = document.querySelector(".women-filter__icon");
const filterBlock = document.querySelector(".women__product__filter__block");

const sortSelectBtn = document.querySelector(".product-sort__option");
const sortSelectMenu = document.querySelector(".dropdown__product-sort__menu");
const sortSelectMenuItem = document.querySelectorAll(
  ".dropdown__product-sort__item"
);
const sortSelectBtnArrow = document.querySelector(
  ".product-sort__option-arrow"
);
const dropdownBlock = document.querySelector(".dropdown__product-sort");
const sortSelectInput = document.querySelector(".product-sort__input");

//filter
if (womanFilterBtn != null) {
  showFilter();
}
function showFilter() {
  womanFilterBtn.addEventListener("click", womanFilterClick);

  function womanFilterClick() {
    if (womanFilter.classList.contains("women__product__filter-active")) {
      womanFilter.classList.remove("women__product__filter-active");
      womanFilterIcon.style.transform = "rotate(0deg)";
    } else {
      womanFilter.classList.add("women__product__filter-active");
      womanFilterIcon.style.transform = "rotate(90deg)";
    }
  }
  filterBlock.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

//sort
if (sortSelectBtn !== null) {
  initSort();
}
function initSort() {
  sortSelectBtn.addEventListener("click", function () {
    if (
      sortSelectMenu.classList.contains("dropdown__product-sort__menu-active")
    ) {
      sortSelectBtnArrow.style.transform = "rotate(0deg)";
    } else {
      sortSelectBtnArrow.style.transform = "rotate(90deg)";
    }
    sortSelectMenu.classList.toggle("dropdown__product-sort__menu-active");
  });

  sortSelectMenuItem.forEach(function (selectItem) {
    selectItem.addEventListener("click", function () {
      sortSelectBtn.textContent = this.textContent;
      sortSelectMenu.classList.remove("dropdown__product-sort__menu-active");
      sortSelectBtn.classList.add("product-sort__option__shadow");
      sortSelectBtnArrow.style.transform = "rotate(0deg)";
      sortSelectInput.value = this.dataset.valueSort;
    });
  });

  dropdownBlock.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  document.addEventListener("click", function () {
    sortSelectMenu.classList.remove("dropdown__product-sort__menu-active");
    sortSelectBtnArrow.style.transform = "rotate(0deg)";
    sortSelectBtn.classList.remove("product-sort__option__shadow");
    womanFilter.classList.remove("women__product__filter-active");
    womanFilterIcon.style.transform = "rotate(0deg)";
  });
}

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
