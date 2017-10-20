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
  for (var i = 0; i < cart.length; i++) {
    cartContains.push(Object.keys(cart[i]))
  }
  for (var i = 0; i < cartContains.length; i++) {
    cartCost.push(cart[i][cartContains[i]])
  }
  if (cartContains.length === 1) {
    console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}.`)
  } else if (cartContains.length === 2) {
    console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]} and ${cartContains[1]} at $${cartCost[1]}.`)
  } else if (cartContains.length === 3) {
    console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}, ${cartContains[1]} at $${cartCost[1]}, and ${cartContains[2]} at $${cartCost[2]}.`)
  } else {
    console.log(`In your cart, you have ${cartContains[0]} at $${cartCost[0]}, ${cartContains[1]} at $${cartCost[1]}, ${cartContains[2]} at $${cartCost[2]}, and ${cartContains[3]} at $${cartCost[3]}.`)
  }
  }
}

function total() {
  var cartContains = [];
  var cartCost = [];
  var cartTotal;
for (var i = 0; i < cart.length; i++) {
  cartContains.push(Object.keys(cart[i]))
}
for (var i = 0; i < cartContains.length; i++) {
  cartCost.push(cart[i][cartContains[i]])
}
for (var i = 0; i < cartCost.length; i++) {
  cartTotal += cartCost[i]
}
return cartTotal
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
