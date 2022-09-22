/*
let country = 'China';
let continent = 'Asia';
let population = 1300000000;

console.log(country + " in " + continent + "'s population is " + population)
*/

/*
let country = 'China';
let continent = 'Asia';
let population = 1300000000;
let isIsland = false;
let language;
*/

/*
const language = 'mandari';
const country = 'China';
let population = 140000;
const continent = 'Asia';
const isIsland = false;


console.log(language);
console.log(country);
console.log(population);
console.log(continent);
console.log(isIsland);
*/

/*
const language = 'mandari';
const country = 'China';
let population = 1400;
const continent = 'Asia';
const isIsland = false;

console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

console.log(country + " is in " + continent + ", and its " + population + " million people speak " + language)
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const language = "mandari";
const country = "China";
let population = 1400;
const continent = "Asia";
const isIsland = false;

console.log(
  `${country} is in ${continent} and its ${population} million people speak ${language}.`
);
*/

/*
const language = "mandari";
const country = "China";
let population = 1400;
const continent = "Asia";
const isIsland = false;

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 - population} below average.`);
}
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higgher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}))!`);
}
*/

/*
const numNeighbours = Number(
  prompt("How many neightbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
/*
const language = "Mandari";
const country = "China";
const population = 1400;
const continent = "Asia";
const isIsland = false;

if (language === "English" && population <= 50 && !isIsland) {
  console.log("You should live in " + country);
} else {
  console.log(`${country} does not meet your criteria`);
}
*/
/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("The winner is Dolphins!");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("The winner is Koalas!");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100 &&
  averageScoreKoalas >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy.");
}
*/
/*
const language = "hindi";
switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken llanguage");
  default:
    console.log("Great language too :D");
}
*/
/*
const country = "China";
const population = 1400;

console.log(
  `${country}'s population is ${population >= 33 ? "above" : "below"} average`
);
*/
/*
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
