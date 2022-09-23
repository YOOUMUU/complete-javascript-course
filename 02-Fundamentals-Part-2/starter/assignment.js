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
/*
const percentageOfWorld3 = (country, population) =>
  `${country} has ${population} million people ,so it's about ${
    (population / 7900) * 100
  }% of the world population`;
console.log(percentageOfWorld3("China", 1441));
*/
/*
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};
console.log(describePopulation("China", 1441));
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolhins win(${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win(${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins!`;
  }
};
console.log(checkWinner(avgDolphins, avgKoalas));

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins, avgKoalas));
*/
