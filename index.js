var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//to get random number
  function getRandomInt() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
//to create object
  var cost = getRandomInt()
  var itemStore = { [item]: cost };
  cart.push(itemStore);
//to print and return
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  //if cart has no items
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  //if cart has items
  else {
    var cartContains = [];
    var cartCost = [];
    for (var i = 0; i <= cart.length; i++) {
      cartContains.push(Object.key(cart[i]));
  }
    for (var i = 0; i <= cartContains.length; i++) {
      cartCost.push(cartKeys[i]);
  }
    console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}.`)
  }
}

function total() {
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
