"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/
/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcesser(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applejuice = fruitProcesser(5, 0);
console.log(applejuice);
console.log(fruitProcesser(5, 0));
*/

/*
// Function declaration 函数声明
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression 函数表达式
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
// Function expression 函数表达式
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function 箭头表达式 没有this关键字
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcesser(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcesser(2, 3));
*/
/*
const calcAge = function ()birthYear {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const retirement = 65 - calcAge(birthYear);
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  //   if (retirement > 0) {
  //     return `${firstName} retires in ${retirement} years`;
  //   } else {
  //     return `${firstName} already retired.`;
  //   }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years2 = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages);
*/
/*
const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove element
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ,
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  firends: ["Michael", "Peter", "Steven"],
};
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@xxxl";
console.log(jonas);
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  //   getSummary: function () {
  //     if (this.hasDriversLicense) {
  //       return `${
  //         this.firstName
  //       } is a ${this.calcAge()}-year old teacher, and he has a driver's license`;
  //     } else {
  //       return `${
  //         this.firstName
  //       } is a ${this.calcAge()}-year old teacher, and he has no driver's license`;
  //     }
  //   },


  getSummary: function () {
    return `${
      this.firstName
    } is a ${this.calcAge()}-year-old teacher, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/

/*
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/
