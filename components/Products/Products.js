"use strict";

class Products {
  constructor() {
    this.labelAdd = "Добавить в Карзину";
    this.labelRemove = "Удалить из карзини";
    this.classNameActive = "card__order__cart__btn-active";
    this.favoriteClassNameActive = "__active__card__like__item";
  }

  handleSetLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (element.classList.contains(this.classNameActive)) {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    } else {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    }
    header.render();
  }

  favoriteSetLocationStorage(element, favoriteId) {
    const { pushFavoriteProduct, favoriteProducts } =
      localStorageUtil.putFavoriteProducts(favoriteId);
    if (pushFavoriteProduct.indexOf(favoriteId) === -1) {
      element.classList.remove("__active__card__like__item");
    } else {
      element.classList.add("__active__card__like__item");
    }
    header.render();
  }

  render() {
    const productsStorage = localStorageUtil.getProducts();
    const favoriteStorage = localStorageUtil.getFavorite();

    //new Arrivals Product
    let htmlNewArrivalsCatalog = "";
    let htmlSalesProducts = "";
    CATALOG.map(
      ({
        id,
        gender,
        category,
        link,
        name,
        slide1,
        alt,
        price,
        rating,
        favoriteId,
        salesNumber,
        salesPrice,
        isNew,
        isSale,
      }) => {
        let activeText = "";
        let activeClass = "";
        let favoriteClass = "";
        if (productsStorage.indexOf(id) === -1) {
          activeText = this.labelAdd;
        } else {
          activeText = this.labelRemove;
          activeClass = this.classNameActive;
        }
        if (favoriteStorage.indexOf(favoriteId) === -1) {
        } else {
          favoriteClass = this.favoriteClassNameActive;
        }
        if (isNew == "true" && !isSale) {
          htmlNewArrivalsCatalog += `
            <div class="swiper-slide __swiper-slide-card">
                <div class="new-arrivals__card __general-card">
                    <div class="new-arrivals__card-img __general-card__img">
                        <a href="${link}">
                            <div class="general__card-img__items">
                                <img src="${slide1}" class="general__card-img__item" alt="${alt}">
                            </div>
                        </a>    
                        <div class="new-arrivals__card-mark __general__card-mark">
                            <div class="rating rating_set">
                                <div class="rating__body">
                                    <div class="rating__active"></div>
                                    <div class="rating__items">
                                        <input type="radio" class="rating__item" value="1" name="card__rating">
                                        <input type="radio" class="rating__item" value="2" name="card__rating">
                                        <input type="radio" class="rating__item" value="3" name="card__rating">
                                        <input type="radio" class="rating__item" value="4" name="card__rating">
                                        <input type="radio" class="rating__item" value="5" name="card__rating">
                                    </div>
                                    <div class="rating__value">${rating}</div>
                                </div>
                            </div>
                            <button class="card__navigation__arrow-left">❬</button>
                            <button class="card__navigation__arrow-right">❭</button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="productsPage.favoriteSetLocationStorage(this, '${favoriteId}')"></button>
                        </div>
                    </div>
                    <a href="${link}">
                        <div class="new-arrivals-card__bottom-img __general-card__content-text">
                            <span class="new-arrivals__card-text __general__card-text">${name}</span>
                        </div>
                        <div class="new-arrivals-card__price-block __general__card__price-block">
                            <span class="new-arrivals__card-price __general__card-price">${price}tjs</span>
                        </div>
                    </a>    
                    <div class="sale-up__card__order __general__card__order">      
                      <div class="sale-up__card__order__title __general__card__order__title">
                            <div class="sale-up__card__order__size __general__card__order__size">
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="1">
                                    <label for="order-size"
                                        class="card__order__size__name">XS</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="2">
                                    <label for="order-size"
                                        class="card__order__size__name">S</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="3">
                                    <label for="order-size"
                                        class="card__order__size__name">M</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="4">
                                    <label for="order-size"
                                        class="card__order__size__name">L</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="5">
                                    <label for="order-size"
                                        class="card__order__size__name">XL</label>
                                </div>
                            </div>
                      </div>
                      <div class="sale-up__card__order__cart __general__card__order__cart">
                          <button class="card__order__cart__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                      </div>
                    </div>
                </div>      
            </div> 
        `;
        }
        if (isNew == "true" && isSale == "true") {
          htmlSalesProducts += `<div class="swiper-slide">
                <div class="sale-up__card __general-card">
                    <div class="sale-up__card-img __general-card__img">
                        <a href="${link}">
                            <div class="general__card-img__items">
                                <img src="${slide1}" class="general__card-img__item" alt="${alt}">
                            </div>
                        </a>
                        <div class="sale-up__card-mark __general__card-mark">
                            <div class="sale-up__card__sale">
                                <span class="sale-up__card__sale__item">${salesNumber}%</span>
                            </div>
                            <div class="rating rating_set">
                                <div class="rating__body">
                                    <div class="rating__active"></div>
                                    <div class="rating__items">
                                        <input type="radio" class="rating__item" value="1"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="2"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="3"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="4"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="5"
                                            name="card__rating">
                                    </div>
                                    <div class="rating__value">${rating}</div>
                                </div>
                            </div>
                            <button class="card__navigation__arrow-left"></button>
                            <button class="card__navigation__arrow-right"></button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="productsPage.favoriteSetLocationStorage(this, '${favoriteId}')"></button>
                        </div>
                    </div>
                    <a href="${link}">
                        <div class="sale-up-card__bottom-img __general-card__content-text">
                            <span class="sale-up__card-text __general__card-text">${name}</span>
                        </div>
                        <div class="sale-up-card__price-block __general__card__price-block">
                            <s class="__general__card-price__none">${price}tjs</s>
                            <span class="sale-up__card-price __general__card-price">${salesPrice}tjs</span>
                        </div>
                    </a>
                    <div class="sale-up__card__order __general__card__order">
                        <div class="sale-up__card__order__title __general__card__order__title">
                            <div class="sale-up__card__order__size __general__card__order__size">
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="1">
                                    <label for="order-size"
                                        class="card__order__size__name">XS</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="2">
                                    <label for="order-size"
                                        class="card__order__size__name">S</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="3">
                                    <label for="order-size"
                                        class="card__order__size__name">M</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="4">
                                    <label for="order-size"
                                        class="card__order__size__name">L</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="5">
                                    <label for="order-size"
                                        class="card__order__size__name">XL</label>
                                </div>
                            </div>
                        </div>
                        <div class="sale-up__card__order__cart __general__card__order__cart">
                            <button class="card__order__cart__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                        </div>
                    </div>
                </div>
            </div>`;
        }
      }
    );
    const htmlNewArrivals = `${htmlNewArrivalsCatalog.concat(
      htmlSalesProducts
    )}`;
    if (root_newArrivalsPRODUCTS != undefined) {
      root_newArrivalsPRODUCTS.innerHTML = htmlNewArrivals;
    }

    //trending Product
    let htmlTrendingNowCatalog = "";
    CATALOG.map(
      ({
        id,
        gender,
        category,
        link,
        name,
        slide1,
        alt,
        price,
        rating,
        size,
        favoriteId,
        isNew,
        isTrending,
      }) => {
        let activeText = "";
        let activeClass = "";
        let favoriteClass = "";
        if (productsStorage.indexOf(id) === -1) {
          activeText = this.labelAdd;
        } else {
          activeText = this.labelRemove;
          activeClass = this.classNameActive;
        }
        if (favoriteStorage.indexOf(favoriteId) === -1) {
        } else {
          favoriteClass = this.favoriteClassNameActive;
        }
        if (isTrending == "true") {
          htmlTrendingNowCatalog += `
            <div class="swiper-slide">
                <div class="trending__card __general-card">
                    <div class="trending__card-img __general-card__img">
                        <a href="${link}">
                            <div class="general__card-img__items">
                                <img src="${slide1}" class="general__card-img__item" alt="${alt}">
                            </div>
                        </a>
                        <div class="trending__card-mark __general__card-mark">
                            <div class="rating rating_set rating__checked">
                                <div class="rating__body">
                                    <div class="rating__active"></div>
                                    <div class="rating__items">
                                        <input type="radio" class="rating__item" value="1"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="2"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="3"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="4"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="5"
                                            name="card__rating">
                                    </div>
                                    <div class="rating__value">${rating}</div>
                                </div>
                            </div>
                            <button class="card__navigation__arrow-left"></button>
                            <button class="card__navigation__arrow-right"></button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="productsPage.favoriteSetLocationStorage(this, '${favoriteId}')"></button>
                        </div>
                    </div>
                    <a href="${link}">
                        <div class="trending-card__bottom-img __general-card__content-text">
                            <span class="trending__card-text __general__card-text">${name}</span>
                        </div>
                        <div class="trending-card__price-block __general__card__price-block">
                            <span class="trending__card-price __general__card-price">${price}tjs</span>
                        </div>
                    </a>    
                    <div class="trending__card__order __general__card__order">
                        <div class="trending__card__order__cart __general__card__order__cart">
                            <button class="card__order__cart__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
      }
    );
    const htmlTrendingNow = `${htmlTrendingNowCatalog}`;
    if (root_trendingNowPRODUCTS != undefined) {
      root_trendingNowPRODUCTS.innerHTML = htmlTrendingNow;
    }

    //sales Product
    let htmlSalesCatalog = "";
    CATALOG.map(
      ({
        id,
        gender,
        category,
        link,
        name,
        slide1,
        slide2,
        alt,
        salesNumber,
        price,
        salesPrice,
        rating,
        favoriteId,
        isNew,
        isTrending,
        isSale,
      }) => {
        let activeText = "";
        let activeClass = "";
        let favoriteClass = "";
        if (productsStorage.indexOf(id) === -1) {
          activeText = this.labelAdd;
        } else {
          activeText = this.labelRemove;
          activeClass = this.classNameActive;
        }
        if (favoriteStorage.indexOf(favoriteId) === -1) {
        } else {
          favoriteClass = this.favoriteClassNameActive;
        }
        if (isSale == "true") {
          htmlSalesCatalog += `
            <div class="swiper-slide">
                <div class="sale-up__card __general-card">
                    <div class="sale-up__card-img __general-card__img">
                        <a href="${link}">
                            <div class="general__card-img__items">
                                <img src="${slide1}" class="general__card-img__item" alt="${alt}">
                            </div>
                        </a>
                        <div class="sale-up__card-mark __general__card-mark">
                            <div class="sale-up__card__sale">
                                <span class="sale-up__card__sale__item">${salesNumber}%</span>
                            </div>
                            <div class="rating rating_set">
                                <div class="rating__body">
                                    <div class="rating__active"></div>
                                    <div class="rating__items">
                                        <input type="radio" class="rating__item" value="1"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="2"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="3"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="4"
                                            name="card__rating">
                                        <input type="radio" class="rating__item" value="5"
                                            name="card__rating">
                                    </div>
                                    <div class="rating__value">${rating}</div>
                                </div>
                            </div>
                            <button class="card__navigation__arrow-left"></button>
                            <button class="card__navigation__arrow-right"></button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="productsPage.favoriteSetLocationStorage(this, '${favoriteId}')"></button>
                        </div>
                    </div>
                    <a href="${link}">
                        <div class="sale-up-card__bottom-img __general-card__content-text">
                            <span class="sale-up__card-text __general__card-text">${name}</span>
                        </div>
                        <div class="sale-up-card__price-block __general__card__price-block">
                            <s class="__general__card-price__none">${price}tjs</s>
                            <span class="sale-up__card-price __general__card-price">${salesPrice}tjs</span>
                        </div>
                    </a>
                    <div class="sale-up__card__order __general__card__order">
                        <div class="sale-up__card__order__title __general__card__order__title">
                            <div class="sale-up__card__order__size __general__card__order__size">
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="1">
                                    <label for="order-size"
                                        class="card__order__size__name">XS</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="2">
                                    <label for="order-size"
                                        class="card__order__size__name">S</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="3">
                                    <label for="order-size"
                                        class="card__order__size__name">M</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="4">
                                    <label for="order-size"
                                        class="card__order__size__name">L</label>
                                </div>
                                <div class="general__order__size">
                                    <input type="radio" name="order-size" id="order-size" value="5">
                                    <label for="order-size"
                                        class="card__order__size__name">XL</label>
                                </div>
                            </div>
                        </div>
                        <div class="sale-up__card__order__cart __general__card__order__cart">
                            <button class="card__order__cart__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
      }
    );
    const htmlSales = `${htmlSalesCatalog}`;
    if (root_salesPRODUCTS != undefined) {
      root_salesPRODUCTS.innerHTML = htmlSales;
    }
    //Cart && rating
    const ratings = document.querySelectorAll(".rating");

    ratingProducts.render();
    initRating();

    function initRating() {
      for (let i = 0; i < ratings.length; i++) {
        const ratingValueItem = ratings[i];
        const ratingsValue = ratingValueItem.querySelector(".rating__value");
        if (ratingsValue.textContent == 0) {
          ratingsValue.parentNode.style.display = "none";
        }
      }
    }
  }
}
const productsPage = new Products();
