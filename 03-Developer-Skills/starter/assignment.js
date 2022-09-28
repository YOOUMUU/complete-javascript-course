"use strict";

// Problem: Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// Question:
// 1. How to get input from array one by one?
// 2. How to input number into output?

// const printForecast = function (arr) {
//   let forecast;
//   let forecastPro;
//   for (let i = 1; i <= arr.length; i++) {
//     forecast = `...${arr[i]}oC in ${i} days`;
//     forecastPro =
//   }
//   return forecast;
// };
// console.log(printForecast([17, 21, 23]));

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}oC in ${i + 1} days`;
  }
  return str + "...";
};

console.log(printForecast(data1));
console.log(printForecast(data2));
*/
