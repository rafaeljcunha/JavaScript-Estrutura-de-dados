const Cart = require("./Cart");
const cartItemsData = require("../mock/cart");

const cart = new Cart(cartItemsData);

cart.setToCart(2);
cart.setToCart(1);

cart.setRemoveToCart(2);

console.log(cart.getCartItems());
