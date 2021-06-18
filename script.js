'use strict';
// document.querySelector('.message'); //da je bio id onda bismo stavili #message
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    console.log('No number!');
  } else if (guess === secretNumber) {
    console.log('You guessed it!');
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      console.log('Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      console.log('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
