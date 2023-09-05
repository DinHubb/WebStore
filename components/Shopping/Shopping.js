"use strict";
class Cart {
  constructor() {
    this.labelMenuText =
      '<span class = "favorite__empty__text">Пока ничего не добавлено...</span>';
    this.labelAdd = "Добавить в Карзину";
    this.labelRemove = "Удалить из карзини";
    this.classNameActive = "card__order__cart__btn-active";
    this.favoriteClassNameActive = "__active__card__like__item";
  }

  handleIncProducts(element, id) {
    const quaintityInput = document.querySelectorAll('[data-id="quantity"]');
    const amountCartPrice = document.querySelectorAll('[data-id="total"]');
    const totalPriceProduct = document.querySelector(
      '[data-total="total-price"]'
    );

    quaintityInput.forEach((element) => {
      if (element.name === id && element.dataset.quantity > element.value) {
        element.value++;
        const elementQuantity = element.value;

        amountCartPrice.forEach((element) => {
          if (element.dataset.name === id) {
            let elementPrice = element.dataset.price;
            let totalPriceTextContent = parseFloat(
              totalPriceProduct.textContent
            );

            element.textContent = elementQuantity * elementPrice + "tjs";
            totalPriceProduct.textContent =
              totalPriceTextContent + parseFloat(elementPrice) + "tjs";
          }
        });
      }
    });
  }
  handleDecProducts(element, id) {
    const quaintityInput = document.querySelectorAll('[data-id="quantity"]');
    const amountCartPrice = document.querySelectorAll('[data-id="total"]');
    const totalPriceProduct = document.querySelector(
      '[data-total="total-price"]'
    );

    quaintityInput.forEach((element) => {
      if (element.name === id && element.value > 1) {
        element.value--;

        amountCartPrice.forEach((element) => {
          if (element.dataset.name === id) {
            let elementPrice = element.dataset.price;
            let elementTextContent = parseFloat(element.textContent);
            let totalPriceTextContent = parseFloat(
              totalPriceProduct.textContent
            );

            element.textContent = elementTextContent - elementPrice + "tjs";
            totalPriceProduct.textContent =
              totalPriceTextContent - parseFloat(elementPrice) + "tjs";
          }
        });
      } else if (element.name === id && element.value <= 1) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct.indexOf(id) === -1) {
          this.render();
          productsPage.render();
          header.render();
        }
      }
    });
  }
  changeInput(element, id) {
    const amountCartPrice = document.querySelectorAll('[data-id="total"]');
    const totalPriceProduct = document.querySelector(
      '[data-total="total-price"]'
    );
    let totalPrice = 0;

    if (
      element.name === id &&
      element.value <= element.dataset.quantity &&
      element.value >= 1
    ) {
      amountCartPrice.forEach((elPrice) => {
        if (elPrice.dataset.name === id) {
          let price = elPrice.dataset.price;
          elPrice.textContent = element.value * price + "tjs";
        }

        let priceTextContent = parseFloat(elPrice.textContent);
        totalPrice += priceTextContent;
      });
    }
    totalPriceProduct.textContent = totalPrice + "tjs";
  }

  render() {
    const productsStorage = localStorageUtil.getProducts();
    const favoriteStorage = localStorageUtil.getFavorite();
    let cartMenuText = "";
    let htmlCartBox = "";
    let htmlCartProducts = "";
    let htmlCartSalesProducts = "";
    let amountProducts = 0;
    let saleAmountProducts = 0;
    let totalAmountProducts = 0;

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
        quantity,
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
        if (productsStorage.indexOf(id) !== -1) {
          if (isSale == "true") {
            htmlCartSalesProducts += `
                            <tr class="cart-frame__content">
                                <td class="cart-frame__img">
                                    <div class="cart__vender-code">
                                      <span class="cart__vender-code__id">№ ${id}</span>
                                      <span class="cart__img-sale">${salesNumber}%</span>
                                    </div>
                                    <div class="cart__img"><img src="../${slide1}" alt=""></div>
                                </td>
                                <td data-id="description" class="cart-frame__description"><span
                                        class="cart__description">${name}</span></td>
                                <td class="cart-frame__count"><s class="cart-count">${price}tjs</s><br><strong
                                        class="cart-count__sale">${salesPrice}tjs</strong></td>
                                <td>
                                    <div class="cart-frame__quantity">
                                        <input data-id="quantity" name="${id}" data-quantity = "${quantity}" type="text" class="cart-frame__quantity-input"
                                            value="1" size="3" onchange = "cartList.changeInput(this, '${id}');">
                                        <div class="cart-frame__quantity-actions">
                                            <button type="button" class="cart-frame__quantity__inc"
                                                data-action="inc" onclick = "cartList.handleIncProducts(this, '${id}');">+</button>
                                            <button type="button" class="cart-frame__quantity__dec"
                                                data-action="dec" onclick = "cartList.handleDecProducts(this, '${id}');">-</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="cart-frame__amount">
                                    <span class="cart__amount cart__amount-sale" data-name = "${id}" data-price="${salesPrice}" data-id="total">${salesPrice}tjs</span>
                                </td>
                            </tr>               
            `;
            saleAmountProducts += salesPrice;
          }
          if (!isSale) {
            htmlCartProducts += `
                            <tr class="cart-frame__content">
                                <td class="cart-frame__img">
                                    <div class="cart__vender-code"><span class="cart__vender-code__id">№
                                            ${id}</span></div>
                                    <div class="cart__img"><img src="../${slide1}" alt="${alt}"></div>
                                </td>
                                <td data-id="description" class="cart-frame__description"><span
                                        class="cart__description">${name}</span></td>
                                <td class="cart-frame__count"><span class="cart-count" data-price="price-product">${price}tjs</span></td>
                                <td>
                                    <div class="cart-frame__quantity">
                                        <input data-id="quantity" name="${id}" data-quantity = "${quantity}" type="text" class="cart-frame__quantity-input"
                                            value="1" size="3" autocomplete="off" onchange = "cartList.changeInput(this, '${id}');">
                                        <div class="cart-frame__quantity-actions">
                                            <button type="button" class="cart-frame__quantity__inc"
                                                data-action="inc" onclick = "cartList.handleIncProducts(this, '${id}');">+</button>
                                            <button type="button" class="cart-frame__quantity__dec"
                                                data-action="dec" onclick = "cartList.handleDecProducts(this, '${id}');">-</button>
                                        </div>
                                    </div>
                                </td>
                                <td class="cart-frame__amount">
                                    <span class="cart__amount" data-name = "${id}" data-price="${price}" data-id="total">${price}tjs</span>
                                </td>
                            </tr>   
          `;
            amountProducts += price;
          }
        }
      }
    );

    totalAmountProducts = amountProducts + saleAmountProducts;

    if (productsStorage.length === 0) {
      cartMenuText = this.labelMenuText;
    }
    htmlCartBox += `
        <h1 class="cart-description">Товар</h1>
                    <table class="cart-frame">
                        <thead class="cart-frame__head">
                            <tr class="cart-frame__head-content">
                                <th class="cart-frame__head-id">Артикул</th>
                                <th class="cart-frame__head-description">Описание</th>
                                <th class="cart-frame__head-cost">Цена за ед.</th>
                                <th class="cart-frame__head-quaintity">Кол-во</th>
                                <th class="cart-frame__head-amount">Итого</th>
                            </tr>
                        </thead>
                        <tbody class="cart-frame__body">
                            ${htmlCartProducts.concat(htmlCartSalesProducts)}
                        </tbody>
                    </table>
                    <div class="cart-total">
                        ${cartMenuText}
                        <div class="cart-total">
                            <form class="cart-total__form" name="coupon_cart_form">
                                <input class="cart-total__form-input" type="text"
                                    placeholder="Подарочный сертификат или промо-код" size="40">
                                <button type="button" class="cart-total__form-action">Применить</button>
                            </form>
                        </div>
                        <div class="cart-total__content">
                            <div class="cart-total__price">
                                <h2 class="cart-total__text">Итоговая сумма:</h2>
                                <span data-total="total-price" class="cart-total__amount">${totalAmountProducts}tjs</span>
                            </div>
                            <div class="cart-total__order">
                                <div class="cart-total__order__menu">
                                    <button class="cart-total__action-continue">Продолжить покупку</button>
                                    <button class="cart-total__action-clier __buttons-bg__cart">Очистить
                                        карзину</button>
                                </div>
                                <button class="cart-total__order__products __buttons-bg__cart"><span
                                        class="cart__check__btn">✔</span>Оформить
                                    заказ</button>
                            </div>
                        </div>
                    </div>
    `;
    root_cartProducts.innerHTML = htmlCartBox;
  }
}
const cartList = new Cart();
