// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1998));

const yuanToDolls = function (a) {
  return 6.9 * a;
};
*/

// PROBLEM

// 1) Understanding th proplem

// 2) Breaking up into sub-problems

/*
const calcTemAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[1];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }

  return max - min;
};
console.log(calcTemAmplitude([3, 7, 4, 1, 8]));
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degress celsius:")),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
