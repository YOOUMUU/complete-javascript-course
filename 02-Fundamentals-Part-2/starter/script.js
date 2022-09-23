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
