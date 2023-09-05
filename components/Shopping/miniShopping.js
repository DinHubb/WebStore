class MiniCart {
  constructor() {
    this.labelMenuText = "Пока ничего не добавлено...";
  }
  shoppingRemoveLocationStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (pushProduct.indexOf(id) === -1) {
      this.render();
      productsPage.render();
      header.render();
    }
  }
  handleCloseShoppingMenu() {
    root_miniCart.innerHTML = "";
  } 
  handleClierShoppingMenu() {
    localStorage.removeItem("products");
    this.render();
    productsPage.render();
    header.render();
  }
  render() {
    const shoppingStorage = localStorageUtil.getProducts();
    let shoppingMenuText = "";
    let htmlShoppingCatalog = "";

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
        if (shoppingStorage.indexOf(id) !== -1) {
          if (!isSale) {
            htmlShoppingCatalog += `
                  <li class="cart__menu__item">
                      <a href="${link}">
                          <div class="cart__item__product">
                              <div class="cart__product__content__img">
                                  <div class="cart__product__img"><img
                                      src="${slide1}" alt="${alt}"></div>
                              </div>
                              <div class="cart__product__info">
                                <div class="rating rating_set cart__rating">
                                      <div class="rating__body cart__rating__body">
                                          <div class="rating__active cart__rating__active"></div>
                                          <div class="rating__items cart__rating__items">
                                              <input type="radio"
                                                  class="rating__item cart__rating__item"
                                                  value="1" name="card__rating">
                                              <input type="radio"
                                                  class="rating__item cart__rating__item"
                                                  value="2" name="card__rating">
                                              <input type="radio"
                                                  class="rating__item cart__rating__item"
                                                  value="3" name="card__rating">
                                              <input type="radio"
                                                  class="rating__item cart__rating__item"
                                                  value="4" name="card__rating">
                                              <input type="radio"
                                                  class="rating__item cart__rating__item"
                                                  value="5" name="card__rating">
                                          </div>
                                          <div class="rating__value">${rating}</div>
                                      </div>
                                </div>
                                <p class="cart__product__name">${name}</p>
                                <p class="cart__product__price">${price}tjs</p>
                              </div>
                          </div>
                      </a>
                      <button class="cart__product__delete" onclick="miniCart.shoppingRemoveLocationStorage(this, '${id}')">⨉</button>
                  </li>`;
          }
          if (isSale === "true") {
            htmlShoppingCatalog += `
                <li class="cart__menu__item">
                    <a href="${link}">
                        <div class="cart__item__product">
                            <div class="cart__product__content__img">
                                <div class="cart__product__img"><img
                                    src="${slide1}" alt="${alt}"></div>
                            </div>
                            <div class="cart__product__info">
                              <div class="rating rating_set cart__rating">
                                    <div class="rating__body cart__rating__body">
                                        <div class="rating__active cart__rating__active"></div>
                                        <div class="rating__items cart__rating__items">
                                            <input type="radio"
                                                class="rating__item cart__rating__item"
                                                value="1" name="card__rating">
                                            <input type="radio"
                                                class="rating__item cart__rating__item"
                                                value="2" name="card__rating">
                                            <input type="radio"
                                                class="rating__item cart__rating__item"
                                                value="3" name="card__rating">
                                            <input type="radio"
                                                class="rating__item cart__rating__item"
                                                value="4" name="card__rating">
                                            <input type="radio"
                                                class="rating__item cart__rating__item"
                                                value="5" name="card__rating">
                                        </div>
                                        <div class="rating__value">${rating}</div>
                                    </div>
                              </div>
                              <p class="cart__product__name">${name}</p>
                              <p class="cart__product__sale-price"><s>${price}tjs</s> ${salesPrice}tjs </p>
                            </div>
                        </div>
                    </a>
                    <button class="cart__product__delete" onclick="miniCart.shoppingRemoveLocationStorage(this, '${id}')">⨉</button>
                </li>`;
          }
        }
      }
    );

    if (shoppingStorage.length === 0) {
      shoppingMenuText = this.labelMenuText;
    }

    const htmlMiniCartMenu = `
        <div class="header__cart-menu">
            <div class="cart-list__navigation">    
                <button class="cart__menu__close" onclick="miniCart.handleCloseShoppingMenu();"></button>
                <button class="autocomplete__history cart__delete__history" onclick = "miniCart.handleClierShoppingMenu();">Очистить</button>
                <a href="./pages/cart.html" class="cart-link__menu">Открыть карзину</a>
            </div>
            <ul class="header__cart__menu">
                ${htmlShoppingCatalog}
            </ul>
            <div class="cart__content__text">${shoppingMenuText}</div>    
        </div>  
    `;
    root_miniCart.innerHTML = htmlMiniCartMenu;

    const miniCartMenu = document.querySelector(".header__cart-menu");
    miniCartMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    const btnMiniCart = document.addEventListener("click", (closeMiniCart) => {
      root_miniCart.innerHTML = "";
    });
  }
}
const miniCart = new MiniCart();
