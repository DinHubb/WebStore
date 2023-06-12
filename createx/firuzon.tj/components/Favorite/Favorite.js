"use strict";
class Favorite {
  constructor() {
    this.labelMenuText =
      '<span class = "favorite__empty__text">Пока ничего не добавлено...</span>';
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

  favoriteRemoveLocationStorage(element, favoriteId) {
    const { pushFavoriteProduct, favoriteProducts } =
      localStorageUtil.putFavoriteProducts(favoriteId);
    if (pushFavoriteProduct.indexOf(favoriteId) === -1) {
      this.render();
      ratingProducts.render();
    }
    header.render();
  }
  render() {
    const productsStorage = localStorageUtil.getProducts();
    const favoriteStorage = localStorageUtil.getFavorite();
    let favoriteMenuText = "";
    let htmlFavoriteBox = "";
    let htmlFavoriteProducts = "";
    let htmlFavoriteSalesProducts = "";

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
        if (favoriteStorage.indexOf(favoriteId) !== -1) {
          if (isSale == "true") {
            htmlFavoriteSalesProducts += `
            <div class="favorite__product__card __general-card">
                    <div class="new-arrivals__card-img __general-card__img">
                        <a href="${link}">
                            <div class="general__card-img__items">
                                <img src="${slide1}" class="general__card-img__item" alt="${alt}">
                            </div>
                        </a>    
                        <div class="new-arrivals__card-mark __general__card-mark">
                            <div class="sale-up__card__sale">
                                <span class="sale-up__card__sale__item">${salesNumber}%</span>
                            </div>
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
                            <button class="card__navigation__arrow-left"></button>
                            <button class="card__navigation__arrow-right"></button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="favoriteList.favoriteRemoveLocationStorage(this, '${favoriteId}')"></button>
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
            `;
          }
          if (!isSale) {
            htmlFavoriteProducts += `
                <div class="favorite__product__card __general-card">
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
                            <button class="card__navigation__arrow-left"></button>
                            <button class="card__navigation__arrow-right"></button>
                            <button class="new-arrivals__card-like card__like ${favoriteClass}" onclick="favoriteList.favoriteRemoveLocationStorage(this, '${favoriteId}')"></button>
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
          `;
          }
        }
      }
    );

    if (favoriteStorage.length === 0) {
      favoriteMenuText = this.labelMenuText;
    }
    htmlFavoriteBox += `
      ${favoriteMenuText}
      ${htmlFavoriteProducts.concat(htmlFavoriteSalesProducts)}
    `;
    root_favoriteProducts.innerHTML = htmlFavoriteBox;
  }
}
const favoriteList = new Favorite();
