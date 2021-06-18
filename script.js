'use strict';
document.querySelector('.message'); //da je bio id onda bismo stavili #message
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
