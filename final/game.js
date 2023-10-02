'use strict';

(() => {

})();

let playerScore = 0;
let computerScore = 0;

let playerBalls = 5;
let computerBalls = 5;

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isCorrect = (move) => {
  if (move === null) {
    return null;
  }

  if (Number.isNaN(+move) || move === '' || !(move.trim()) || +move < 1 || +move > playerBalls) {
  alert(`Некорректные данные! Нужно ввести число от 1 до ${playerBalls}.`);
    return;
  }

  return +move;
};


// alert('Правила раунда. Ты загадываешь количество шариков. Компьютер пытается отгадать чётное или нечётное число ты загадал. Если он угадает, то забирает эти шарики себе, если нет - его шарики достаются тебе. Проиглал тот, у кого не осталось шариков.');
const startRoundOne = () => {
  let computerGuess = getRandomNumber(1, 2);

  if (playerBalls === 1) {
    computerGuess = 1;
  }

  console.log('computerGuess', computerGuess);

  if (playerBalls < 1) {
    playerScore += 1;
    playerBalls = 5;
    computerBalls = 5;
    return alert('Раунд закончен. Компьютер выиграл!');
  }

  if (computerBalls < 1) {
    computerScore += 1;
    playerBalls = 5;
    computerBalls = 5;
    return alert('Раунд закончен. Ты выиграл!');
  }

  let playerMove = isCorrect(prompt(`Ты: ${playerBalls}\nКомпьютер: ${computerBalls}\nЗагадай число от 1 до ${playerBalls}:`));

  if (playerMove === null) {
    if (confirm('Закончить игру?')){
    return alert('Конец игры!');
    }
  }

  if (!playerMove) {
    return startRoundOne();
  }
  
  console.log('playerMove', playerMove);

  if (playerMove % 2 === 0 && computerGuess === 2 ||
      playerMove % 2 !== 0 && computerGuess === 1) {
    playerBalls -= playerMove;
    computerBalls += playerMove;
    alert(`Компьютер угадал! Твои шарики переходят к нему. У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
    return startRoundOne();
  }

  if (playerMove % 2 === 0 && computerGuess === 1 ||
      playerMove % 2 !== 0 && computerGuess === 2) {
    playerBalls += playerMove;
    computerBalls -= playerMove;
    alert(`Компьютер не угадал! Его шарики переходят к тебе. У тебя осталось: ${playerBalls > 10 ? 10 : playerBalls}.`);
    return startRoundOne();
  }
};

startRoundOne();

console.log('playerScore', playerScore);
console.log('computerScore', computerScore);

console.log('playerBalls', playerBalls);
console.log('computerBalls', computerBalls);


const startRoundTwo = () => {

};

startRoundTwo();