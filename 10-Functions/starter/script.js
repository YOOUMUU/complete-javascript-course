'use strict';

// Defaut Parameters
/*

const bookings = [];

const createBooking = function (
  flightNum,
  numPassages = 1,
  price = 200 * numPassages
) {
  // ES5
  // numPassages = numPassages || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassages,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH1234', 2);

createBooking('LH1234', undefined, 1000);
*/

/*
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 244454523443,
};

const checkIn = function (flightNum, passager) {
  flightNum = 'LH999';
  passager.name = 'Mr. ' + passager.name;

  if (passager.passport === 244454523443) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passager = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
*/

/*
// Higher-Order Functions: Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses cllbacks all the time
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);

['Jonas', 'MArtha', 'Adam'].forEach(high5);
*/

/*
/////////////////////////////////////
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hey')('Jonas');

const greetArrow = greeting => name2 => console.log(`${greeting} ${name2}`);

greetArrow('Hi')('Jonas');
*/

/*
/////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Copper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Copper');
console.log(swiss);

// Apply method (array for data)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // Only need name now
bookEW23('Jonas Schmedtmann');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTex = (rate, value) => value + value * rate;
console.log(addTex(0.1, 200));

const addVAT = addTex.bind(null, 0.23);

console.log(addVAT(100));
*/

/////////////////////////////////////
// Immediately Invoked Function Expressions

// const runOnce =function(){
//   console.log('This will never run again');
// }
// runOnce();

/*
// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 123;
  var notPrivate = 46;
}
*/

/*
/////////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/
