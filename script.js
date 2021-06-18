'use strict';
// document.querySelector('.message'); //da je bio id onda bismo stavili #message
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const setWinnerStyle = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};
const resetStyle = () => {
  document.querySelector('body').style.backgroundColor = 'rgb(68, 116, 146)';
  document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //nije upisan broj
  if (!guess) {
    console.log('No number!');
    //pogodjen broj
  } else if (guess === secretNumber) {
    document.querySelector('.check').disabled = true;
    displayMessage('You guessed it!');
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;
    setWinnerStyle();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //preveliki broj
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('You lost!');
      document.querySelector('.score').textContent = 0;
    }
    //premali broj
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.check').disabled = false;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  resetStyle();
});
