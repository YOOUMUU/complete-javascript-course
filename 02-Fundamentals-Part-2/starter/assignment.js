"use strict";
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descChina = describeCountry("China", 1400, "Beijing");
const descEngland = describeCountry("England", 55, "London");
const descAmerican = describeCountry("American", 45, "NewYork");

console.log(descChina);
console.log(descAmerican);
console.log(descEngland);
*/
/*
function percentageOfWorld1(country, population) {
  return `${country} has ${population} million people ,so it's about ${
    (population / 7900) * 100
  }% of the world population`;
}
const chinaPercentageOfWorld = percentageOfWorld1("China", 1441);
console.log(chinaPercentageOfWorld);

const percentageOfWorld2 = function (country, population) {
  return `${country} has ${population} million people ,so it's about ${
    (population / 7900) * 100
  }% of the world population`;
};
console.log(percentageOfWorld2("China", 1441));
*/

const percentageOfWorld3 = (country, population) =>
  `${country} has ${population} million people ,so it's about ${
    (population / 7900) * 100
  }% of the world population`;
console.log(percentageOfWorld3("China", 1441));
