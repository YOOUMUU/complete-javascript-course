'use strict';

/*
// Coding Challenge #1
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (arr1, arr2) {
  const dogsArr1New = arr1.slice(1, -2);
  const dogsAll = dogsArr1New.concat(arr2);
  dogsAll.forEach(function (value, i) {
    value >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${value} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-------------------------------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
// Coding Challenge #2
// Data1:[5,2,4,1,15,8,3]
// Data2:[16,6,10,5,6,1,4]

const calcAverageHumanAge = function (ages) {
  const dogsHumanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogsAges = dogsHumanAges.filter(age => age >= 18);
  const averageAge =
    adultDogsAges.reduce((acc, age) => acc + age) / adultDogsAges.length;
  return averageAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/* Coding Challenge #3
const calcAverageHumanAge = function (ages) {
  const dogsHumanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return dogsHumanAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
// const dogOfSarah = dogs[dogs.findIndex(dog => dog.owners.includes('Sarah'))];
const dogOfSarah = dogs.find(dog => dog.owners.includes('Sarah'));
if (dogOfSarah.curFood > dogOfSarah.recommendedFood * 1.1) {
  console.log(`Sarah's dog eat too much`);
} else if (dogOfSarah.curFood < dogOfSarah.recommendedFood * 0.9) {
  console.log(`Sarah's dog eat too little`);
} else {
  console.log(`Sarah's dog eat healthy`);
}

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
// console.log(ownersEatTooMuch.join(' and ').concat("'s dogs eat too much!"));
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(ownersEatTooLittle.join(' and ').concat("'s dogs eat too little!"));

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood < dog.recommendedFood * 1.1 &&
  dog.curFood > dog.recommendedFood * 0.9;
console.log(dogs.some(checkEatingOkay));

// 7.
const dogsOkeyFood = dogs.filter(checkEatingOkay);
console.log(dogsOkeyFood);

// 8.
const dogsCopy = dogs
  .slice()
  .sort((dogA, dogB) => dogA.recommendedFood - dogB.recommendedFood);
console.log(dogsCopy);
*/
