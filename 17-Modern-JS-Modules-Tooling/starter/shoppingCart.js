// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching user');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addtoCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
