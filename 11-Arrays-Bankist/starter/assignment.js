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
