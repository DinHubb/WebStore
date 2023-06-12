function render() {
  header.render();
  if (root_clothCategory !== null) {
    clothCategory.render();
  }
  if (root_cartProducts !== null) {
    cartList.render();
  }
  if (root_favoriteProducts !== null) {
    favoriteList.render();
  }
  productsPage.render();
  ratingProducts.render();
}
render();
