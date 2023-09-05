class Header {
  handleMiniCartOpen() {
    ratingProducts.render();
    if (document.querySelector("#favorite-main")) {
      const linkCart = document.querySelector(
        '[data-link-cart="link-to-cart"]'
      );
      linkCart.href = "../pages/cart.html";
      console.log(linkCart);
    } else {
      miniCart.render()
      ratingProducts.render();
      event.preventDefault();
    }
  }
  render() {
    let favoriteStorage = localStorageUtil.getFavorite();
    let favoriteCounter = favoriteStorage.length;
    let productsStorage = localStorageUtil.getProducts();
    let shoppingCounter = productsStorage.length;
    if (favoriteCounter >= 99) {
      favoriteCounter = 99;
    }
    if (shoppingCounter >= 99) {
      shoppingCounter = 99;
    }
    const htmlHeader = `<div class="header__container">
                <div class="header__content secondery__header__content">
                    <div class="header__logo-nav">
                        <div class="logo"><a href="../index.html"><img src="/images/general/logo.png" width="60px"
                                    height="60px" alt=""></a></div>
                        <nav class="header__nav">
                            <button class="close__menu-burger">
                                <svg width="33px" height="33px" viewBox="0 0 1024 1024" fill="#000000" class="icon"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
                                        fill="#e5e8ed" />
                                    <path
                                        d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
                                        fill="#e5e8ed" />
                                </svg>
                            </button>
                            <ul class="header__menu">
                                <li class="header__menu-list"><a class="header__menu-list-link"
                                        href="./pages/women.html">Одежда</a>
                                </li>
                                <li class="header__menu-list"><a class="header__menu-list-link"
                                        href="./women.html">Обувь</a>
                                </li>
                                <li class="header__menu-list"><a class="header__menu-list-link"
                                        href="./women.html">Бижутерия</a>
                                </li>
                                <li class="header__menu-list"><a class="header__menu-list-link"
                                        href="./women.html">Скидки</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="general__header__order">
                        <div id="headerSearch" class="general__header__search">
                            <input class="header__search header__search__active" type="text"
                                placeholder="Search for products..." autocomplete="off">
                            <button class="search-img__btn">
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_29852_6134)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" class="search-img"
                                            d="M7.25065 2.16634C4.4432 2.16634 2.16732 4.44223 2.16732 7.24967C2.16732 10.0571 4.4432 12.333 7.25065 12.333C8.65324 12.333 9.92209 11.7658 10.8425 10.8467C11.7647 9.92589 12.334 8.6549 12.334 7.24967C12.334 4.44223 10.0581 2.16634 7.25065 2.16634ZM0.833984 7.24967C0.833984 3.70585 3.70682 0.833008 7.25065 0.833008C10.7945 0.833008 13.6673 3.70585 13.6673 7.24967C13.6673 8.78248 13.1292 10.1905 12.2326 11.2939L14.9716 14.0278C15.2322 14.2879 15.2326 14.7101 14.9725 14.9706C14.7124 15.2312 14.2903 15.2316 14.0297 14.9715L11.2893 12.2362C10.1868 13.13 8.78088 13.6663 7.25065 13.6663C3.70682 13.6663 0.833984 10.7935 0.833984 7.24967Z"
                                            fill="#424551" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_29852_6134">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <div class="header__search__autocomplete">
                                <div class="autocomplete__content">
                                    <button class="autocomplete__history">Очистить историю</button>
                                    <ul class="autocomplete__list">
                                        <li class="autocomplete__item">
                                            <a class="autocomplete__item-link" href="./women.html">
                                                <span class="autocomplete__item-link__search__icon"></span>
                                                <span class="autocomplete__item-link__text">Джинсы</span>
                                            </a>
                                        </li>
                                        <li class="autocomplete__item">
                                            <p class="autocomplete__item-link">
                                                <span class="autocomplete__item-link__search__icon"></span>
                                                <span class="autocomplete__item-link__text">Футболки</span>
                                            </p>
                                        </li>
                                        <li class="autocomplete__item">
                                            <p class="autocomplete__item-link">
                                                <span class="autocomplete__item-link__search__icon"></span>
                                                <span class="autocomplete__item-link__text">Толстовки</span>
                                            </p>
                                        </li>
                                        <li class="autocomplete__item">
                                            <p class="autocomplete__item-link">
                                                <span class="autocomplete__item-link__search__icon"></span>
                                                <span class="autocomplete__item-link__text">Платье</span>
                                            </p>
                                        </li>
                                        <li class="autocomplete__item">
                                            <p class="autocomplete__item-link">
                                                <span class="autocomplete__item-link__search__icon"></span>
                                                <span class="autocomplete__item-link__text">Кроссовки</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="general__header__favorite">
                            <a href="pages/favorite.html">    
                                <button class="general__header-heart">
                                    <span class="header__heart-numbers">${favoriteCounter}</span>
                                </button>
                            </a>    
                        </div>
                        <div class="general__header__cart">
                          <a href="#" data-link-cart="link-to-cart">
                            <button class="general__header-order" onclick = "header.handleMiniCartOpen();">
                                <span class="header__order-numbers">${shoppingCounter}</span>
                            </button>         
                          </a>     
                        </div>
                       <button class="menu-burger"></button>
                    </div>
                </div>
            </div>`;
    root_header.innerHTML = htmlHeader;

    const logo = document.querySelector(".logo");
    const menuBurger = document.querySelector(".menu-burger");
    const closeBurger = document.querySelector(".close__menu-burger");
    const headerMenu = document.querySelector(".header__nav");
    const headerFashion = document.querySelector(".fashion__header");
    const generalHeaderSearch = document.querySelector(
      ".general__header__search"
    );
    const headerSearch = document.querySelector(".header__search");
    const ImgSearch = document.querySelector(".search-img");
    const searchAutocomplete = document.querySelector(
      ".header__search__autocomplete"
    );
    const autocompleteSearchItems = document.querySelectorAll(
      ".autocomplete__item"
    );

    const btnCart = document.querySelector(".general__header__cart");
    const linkCart = document.querySelector('[data-link-cart="link-to-cart"]');

    btnCart.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    //menuBurger
    menuBurger.addEventListener("click", clickOnBurger);
    closeBurger.addEventListener("click", clickOnCloseBurger);

    function clickOnBurger() {
      if (headerMenu.classList.contains("__active__menu-burger")) {
      } else {
        menuBurger.style.display = "none";
        closeBurger.style.display = "block";
        headerMenu.classList.add("__active__menu-burger");
        logo.style.zIndex = "301";
        if (headerFashion !== null) {
          headerFashion.classList.remove("fashion__header");
        }
      }
    }
    function clickOnCloseBurger() {
      if (headerMenu.classList.contains("__active__menu-burger")) {
        menuBurger.style.display = "block";
        closeBurger.style.display = "none";
        headerMenu.classList.remove("__active__menu-burger");
        logo.style.zIndex = "";
        if (headerFashion !== null) {
          headerFashion.classList.add("fashion__header");
        }
      }
    }
    menuBurger.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    headerMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    const closeMenuBurger = document.addEventListener(
      "click",
      (clickOnDocument) => {
        clickOnCloseBurger();
      }
    );
    //search
    if (headerSearch !== null) {
      showSearch();
    }
    function showSearch() {
      headerSearch.addEventListener("mouseover", headerSearchMouseOver, false);
      function headerSearchMouseOver() {
        headerSearch.style.borderColor = "#8c5c45";
        ImgSearch.style.fill = "#8c5c45";
      }
      headerSearch.addEventListener("mouseout", headerSearchMouseOut, false);
      function headerSearchMouseOut() {
        headerSearch.style.borderColor = "";
        ImgSearch.style.fill = "";
      }
      headerSearch.addEventListener("focus", function () {
        searchAutocomplete.classList.add("header__search__autocomplete-active");
        headerSearch.style.borderRadius = "28px 28px 0 0";
        headerSearch.style.borderColor = "#8c5c45";
        headerSearch.style.borderWidth = "2px";
        headerSearch.style.backgroundColor = "#ffffff";
        ImgSearch.style.fill = "#8c5c45";
        searchAutocomplete.style.borderColor = "#8c5c45";
      });
      autocompleteSearchItems.forEach(function (searchItem) {
        searchItem.addEventListener("click", function () {
          searchAutocomplete.classList.remove(
            "header__search__autocomplete-active"
          );
          headerSearch.style.borderRadius = "";
          headerSearch.style.borderColor = "";
          headerSearch.style.backgroundColor = "";
          ImgSearch.style.fill = "";
          searchAutocomplete.style.borderColor = "";
        });
      });
      generalHeaderSearch.addEventListener("click", function (e) {
        e.stopPropagation();
      });
      const htmlDocument = document.addEventListener("click", function () {
        searchAutocomplete.classList.remove(
          "header__search__autocomplete-active"
        );
        headerSearch.style.borderRadius = "";
        headerSearch.style.borderColor = "";
        headerSearch.style.backgroundColor = "";
        ImgSearch.style.fill = "";
        searchAutocomplete.style.borderColor = "";
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          searchAutocomplete.classList.remove(
            "header__search__autocomplete-active"
          );
          headerSearch.style.borderRadius = "";
          headerSearch.style.borderColor = "";
          headerSearch.style.backgroundColor = "";
          ImgSearch.style.fill = "";
          searchAutocomplete.style.borderColor = "";
        }
      });
    }
  }
}

const header = new Header();
