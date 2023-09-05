class ClothCategory {
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
  }

  favoriteSetLocationStorage(element, favoriteId) {
    const { pushFavoriteProduct, favoriteProducts } =
      localStorageUtil.putFavoriteProducts(favoriteId);
    if (pushFavoriteProduct.indexOf(favoriteId) === -1) {
      element.classList.remove("__active__card__like__item");
      numberLikes.textContent = `${pushFavoriteProduct.length}`;
    } else {
      element.classList.add("__active__card__like__item");
      numberLikes.textContent = `${pushFavoriteProduct.length}`;
    }
  }
  render() {
    const productsStorage = localStorageUtil.getProducts();
    const favoriteStorage = localStorageUtil.getFavorite();

    let htmlWomanCatalog = "";
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
          numberLikes.textContent = `${favoriteStorage.length}`;
        }
        if (gender == "woman") {
          htmlWomanCatalog += `
                <div class="new-arrivals__card __general-card __women-card">
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
                        <div class="sale-up__card__order__cart __general__card__order__cart">
                            <button class="card__order__cart__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                        </div>
                    </div>
                </div>
        `;
        }
      }
    );

    let htmlclothCategory = "";
    htmlclothCategory += `
    <section class="home">
                <div class="home__container">
                    <div class="home__content">
                        <div class="home__logo"><a href="./index.html"><img
                                    src="./images/fashion/icons-fash/Rectangle (Stroke).svg" alt=""></a>
                        </div>
                        <div class="home__arrow"><img src="./images/general/icons/mini-arrow-right.svg" alt=""></div>
                        <a href="./women.html">
                            <div class="home__text">Женская</div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="women__product">
                <div class="women__product__container">
                    <div class="women__product__title">
                        <div class="women__product__title__option">
                            <div class="women__product__filter__block">
                                <button class="women__product__title__btn __buttons-bg"><span
                                        class="women-filter__icon"></span>Фильтр</button>
                                <div class="women__product__filter__content">
                                    <ul class="women__product__filter__menu">
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__tshirt" data-filter-tshirt="t-shirts"
                                                id="product-filter__tshirt">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__tshirt">Футболки</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__shirt" id="product-filter__shirt">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__shirt">Рубашки</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__jeans" id="product-filter__jeans">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__jeans">Джинсы</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__skiirt" id="product-filter__skiirt">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__skiirt">Юбка</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__sweater" id="product-filter__sweater">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__sweater">Толстовки</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__hoodies" id="product-filter__hoodies">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__hoodies">Худи</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__dress" id="product-filter__dress">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__dress">Платья</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__top" id="product-filter__top">
                                            <label class="pruduct__filter__label" for="product-filter__top">Топ</label>
                                        </li>
                                        <li class="women__product__filter__item">
                                            <input class="pruduct__filter__checkbox" type="checkbox"
                                                name="product-filter__sneakers" id="product-filter__sneakers">
                                            <label class="pruduct__filter__label"
                                                for="product-filter__sneakers">Кроссовки</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="women__product__title-sort">
                                <span class="product-sort__name">Сортировка по</span>
                                <div class="dropdown__product-sort">
                                    <div class="product-sort__option-block">
                                        <button class="product-sort__option" data-valueSort="standart">без
                                            сортировки</button>
                                        <span class="product-sort__option-arrow">▶</span>
                                    </div>
                                    <ul class="dropdown__product-sort__menu">
                                        <li class="dropdown__product-sort__item" data-value-sort="standart">без
                                            сортировки
                                        </li>
                                        <li class="dropdown__product-sort__item" data-value-sort="popularity">популярные
                                        </li>
                                        <li class="dropdown__product-sort__item" data-value-sort="increase-price">
                                            возрастанию-цены</li>
                                        <li class="dropdown__product-sort__item" data-value-sort="lower-price">
                                            убыванию-цены
                                        </li>
                                    </ul>
                                    <input type="text" name="select-sort" value="" class="product-sort__input">
                                </div>
                            </div>
                        </div>
                    </div>
                    <article id="fashionWomanProducts" class="women__product__content">${htmlWomanCatalog}</article>
                </div>
            </section>`;

    const htmlCloth = `${htmlclothCategory}`;
    root_clothCategory.innerHTML = htmlCloth;
  }
}
const clothCategory = new ClothCategory();
