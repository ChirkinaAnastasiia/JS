'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

const playGame = () => {
  let playerAnswer = prompt(`Я загадал число от 1 до 100. Псс... это ${randomNumber}! Попробуй его угадать. Введи свой вариант:`);

  while (playerAnswer !== randomNumber) {
    if (playerAnswer === null) {
      return alert(`Конец игры!`);
    }

    if (Number.isNaN(+playerAnswer) || playerAnswer === '' || !(playerAnswer.trim())) {
      alert(`Введи число!`);
      playerAnswer = prompt(`Попробуй ещё раз!`);
      continue;
    }

    if (+playerAnswer < 1 || +playerAnswer > 100) {
      alert(`Введи число от 1 до 100!`);
      playerAnswer = prompt(`Попробуй ещё раз!`);
      continue;
    }

    if (playerAnswer > randomNumber) { 
      alert(`Меньше!`);
      playerAnswer = prompt(`Попробуй ещё раз!`);
      continue;
    }
  
    if (playerAnswer < randomNumber) {
      alert(`Больше!`);
      playerAnswer = prompt(`Попробуй ещё раз!`);
      continue;
    }
  
    if (+playerAnswer === randomNumber) {
      return alert(`Правильно!`);
    }
  }
};

playGame();


