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
