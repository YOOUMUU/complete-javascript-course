'use strict';

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.brake();
mercedes.accelerate();
console.log(bmw, mercedes);
*/

/*
//////////////////////////////////////
// Coding challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class(callit'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h(divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h(but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create an ewcar and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// Data car 1: 'Ford' going at 120 km/h GOOD LUCK 😀
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

const ford = new CarCl('Ford', 120);
ford.speedUS = 120;
console.log(ford.speedUS);
*/

/*
//////////////////////////////////////////////////
// Coding Challange #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`
  );
};

// EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// console.dir(EV.prototype.constructor);
tesla.accelerate();
tesla.break();
tesla.chargeBattery(80);
console.log(tesla);
*/

/*
//////////////////////////////////////////////////
// Coding Challange #4
// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }

  accelerate() {
    this.speed += 10;
  }

  break() {
    this.speed -= 5;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 30);
rivian.accelerate().break().break().chargeBattery(90).accelerate().break();
console.log(rivian);

console.log(rivian.speedUS);
*/
