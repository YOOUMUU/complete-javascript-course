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
/*
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const populations = [140, 56, 125, 77];
console.log(populations);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);
*/
/*
const neighbours = ["Japan", "Russia", "India", "Karia"];
console.log(neighbours);

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
} 

neighbours[neighbours.indexOf("Russia")] = "Sweden";
console.log(neighbours);
*/
/*
const bills = [125, 555, 44];

const calcTip = function (bill) {
  //   if (bill >= 50 && bill <= 300) {
  //     return bill * 0.15;
  //   } else {
  //     return bill * 0.2;
  //   }
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);
*/

/*
const myCountry = {
  country: "China",
  capital: "Beijing",
  language: "chinese",
  population: 1440,
  neighbours: [Japan, Rusia, India],
};
*/

/*
const myCountry = {
  country: "China",
  capital: "Beijing",
  language: "chinese",
  population: 1440,
  neighbours: ["Japan", "Rusia", "India"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `
);

myCountry.population += 2;

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `
);

myCountry["population"] -= 2;

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `
);
*/
