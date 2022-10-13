'use strict';

/*
// Coding Challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answerNum = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(White option number))`
      )
    );
    if (
      typeof answerNum === 'number' &&
      answerNum >= 0 &&
      answerNum < this.answers.length
    )
      this.answers[answerNum]++;

    // Teacher: typeof answerNum === 'number' && answerNum < this.answers.length && this.answers[answerNum]++;

    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type.toLowerCase() === 'array') console.log(this.answers);
    else if (type.toLowerCase() === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

const newAnswer = poll.registerNewAnswer;

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', newAnswer.bind(poll));

// data1:[5, 2, 3];
// data2 :[1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
*/

/*
///////////////////////////////
// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
