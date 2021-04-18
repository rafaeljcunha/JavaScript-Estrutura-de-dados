class Cart {
  constructor(data) {
    this.data = data;
    this.cart = [];
  }

  getItems() {
    return this.data;
  }

  getItemById(id) {
    return this.data.filter((item) => item.id === id);
  }

  getCartItems() {
    return this.cart;
  }

  _getFindCartItem(id) {
    return this.cart.find((item) => item.id === id);
  }

  setToCart(id) {
    const cartItem = this.data.filter(
      (item) => item.id === id && item.available
    );
    if (!!cartItem) {
      this.cart = [...this.cart, ...cartItem];
    } else {
      return "Produto indisponível";
    }
  }

  setRemoveToCart(id) {
    if (!!this._getFindCartItem(id)) {
      this.cart = this.cart.filter((item) => item.id !== id);
    }
    return "Produto não encontrado no carrinho.";
  }

  setClearCart() {
    this.cart = [];
  }
}

module.exports = Cart;
