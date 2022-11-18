// Importing module
// import { addtoCart, totalPrice as price, qt } from './shoppingCart.js';

// import shoppingCart from './shoppingCart';

console.log('Importing module');

// addtoCart('bread', 5);

// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart);
// ShoppingCart.addtoCart('bread', 5);

// import add, { addtoCart, totalPrice as price, qt } from './shoppingCart.js';
// add('pizza', 6);
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 6);
add('bread', 2);
add('apple', 4);

console.log(cart);
/*
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLostPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLostPost();
console.log(lastPost);

// Not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLostPost();
console.log(lastPost2);
*/

/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addtoCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addtoCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addtoCart('apple', 4);
shoppingCart2.addtoCart('pizza', 3);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/

/*
// Common JS

// Export
export.addtoCart =function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

// Import
const {addtoCart} = require('./shoppingCart.js')
*/

////////////////////////////////////////////
//
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// import { cloneDeep } from 'lodash-es';
import { cloneDeep } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(state);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

import 'core-js/stable/array/find';
