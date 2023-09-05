class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
    this.keyNameFavorite = "favorite";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  getFavorite() {
    const favoriteLocalStorage = localStorage.getItem(this.keyNameFavorite);
    if (favoriteLocalStorage !== null) {
      return JSON.parse(favoriteLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {
      pushProduct: products,
    };
  }

  putFavoriteProducts(favoriteId) {
    let favoriteProducts = this.getFavorite();
    let pushFavoriteProduct = false;
    const favoriteIndex = favoriteProducts.indexOf(favoriteId);

    if (favoriteIndex === -1) {
      favoriteProducts.push(favoriteId);
      pushFavoriteProduct = true;
    } else {
      favoriteProducts.splice(favoriteIndex, 1);
    }

    localStorage.setItem(
      this.keyNameFavorite,
      JSON.stringify(favoriteProducts)
    );

    return {
      pushFavoriteProduct: favoriteProducts,
    };
  }
}

const localStorageUtil = new LocalStorageUtil();
