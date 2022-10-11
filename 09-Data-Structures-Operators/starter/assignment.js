'use strict';

/*
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// My answers:

// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. 感觉理解错题目之后，还是我的答案好
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     let score = 0;
//     for (let x = 0; x < game.scored.length; x++) {
//       if (players[i] === game.scored[x]) score++;
//     }
//     console.log(players[i], score);
//   }
// };
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored by ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. 我的答案也还好，套娃
// const team1Win = game.odds.team2 > game.odds.team1;
// const team2Win = game.odds.team1 > game.odds.team2;
// console.log((team1Win && 'Team 1 is more likely to win') || (team2Win && 'Team 2 is more likely to win'));
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/* 
// Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const average = sum / Object.keys(game.odds).length;
console.log(average);

// 3.
const oddsObject = Object.entries(game.odds);
// 第一种解法：但是draw的时候会多一个空格, 烦
for (const [teamName, odd] of oddsObject) {
  console.log(
    `Odd of ${(game[teamName] || '') && 'victory'} ${
      game[teamName] || 'draw'
    }: ${odd}`
  );
}

// 第二种解法：不能用一行代码解决，还要加个if代码块
for (const [teamName, odd] of oddsObject) {
  game[teamName]
    ? console.log(`Odd of victory ${game[teamName]}: ${odd}`)
    : console.log(`Odd of draw: ${odd}`);
}

// 老师的解法，类似方法2结合方法1，他是提前把字符串弄好
for (const [team, odd] of oddsObject) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4. BONUS
const scored = game.scored;
const scorers = {};
// for (const player of scored) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }
// console.log(scorers);

// 我想的更优雅的解决方案, 和老师一样 :)
for (const player of scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
// Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// const time = [...gameEvents.keys()][gameEvents.size - 1];
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `Aneventhappened,on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  //   console.log(
  //     `${key < 45 ? '[First HALF]' : '[SECOND HALF]'} ${min}: ${event}`
  //   );
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

/*
// Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/////////////////////////////////////////////////////////////////
// My answer:
// document.querySelector('button').addEventListener('click', function () {
//   const input = document.querySelector('textarea').value;
//   const inputArr = String(input).split('\n');
//   for (const [index, item] of inputArr.entries()) {
//     const lowerCaseItem = item.trim().toLowerCase();
//     const indexOfDash = lowerCaseItem.indexOf('_');
//     const newItem =
//       lowerCaseItem.slice(0, indexOfDash) +
//       lowerCaseItem[indexOfDash + 1].toUpperCase() +
//       lowerCaseItem.slice(indexOfDash + 2);
//     console.log(newItem.padEnd(20)  + '✅'.repeat(index + 1));
//   }
// });

// Teacher:
document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  const inputArr = input.split('\n');

  for (const [index, item] of inputArr.entries()) {
    // const lowerCaseItem = item.trim().toLowerCase();
    // const indexOfDash = lowerCaseItem.indexOf('_');
    // const newItem =
    //   lowerCaseItem.slice(0, indexOfDash) +
    //   lowerCaseItem[indexOfDash + 1].toUpperCase() +
    //   lowerCaseItem.slice(indexOfDash + 2);
    const [first, second] = item.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(output.padEnd(20) + '✅'.repeat(index + 1));
  }
});
*/

/*
// String Methods Practive
/////////////////
// My answer:
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const newFlights = flights.split('+');
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of newFlights) {
  // Teacher's solution: const [type, from, to, time] = flight.split(';');
  const flightArr = flight.split(';');
  const statement = flightArr[0].slice(1).replace('_', ' ');
  // const from = flightArr[1].slice(0, 3).toUpperCase();
  // const to = flightArr[2].slice(0, 3).toUpperCase();
  const from = getCode(flightArr[1]);
  const to = getCode(flightArr[2]);
  const time = flightArr[flightArr.length - 1].replace(':', 'h');
  const output = `${
    statement.startsWith('Delayed') ? '🔴' : ''
  } ${statement} from ${from} to ${to} (${time})`.padStart(45);
  console.log(output);
}
*/
