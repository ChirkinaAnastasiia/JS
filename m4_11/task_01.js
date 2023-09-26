'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

const playGame = (playerAnswer) => {
  if (playerAnswer === null) {
    return alert(`Конец игры!`);
  }

  if (Number.isNaN(+playerAnswer) ||
    playerAnswer === '' || !(playerAnswer.trim())) {
    alert(`Нужно ввести число!`);
    playerAnswer = prompt(`Попробуй ещё раз!`);

    return playGame(playerAnswer);
  }

  if ((+playerAnswer < 1 || +playerAnswer > 100)) {
    alert(`Нужно ввести число от 1 до 100!`);
    playerAnswer = prompt(`Попробуй ещё раз!`);

    return playGame(playerAnswer);
  }

  if (playerAnswer > randomNumber) {
    alert(`Загаданное число меньше!`);
    playerAnswer = prompt(`Попробуй ещё раз!`);

    return playGame(playerAnswer);
  }

  if (playerAnswer < randomNumber) {
    alert(`Загаданное число больше!`);
    playerAnswer = prompt(`Попробуй ещё раз!`);

    return playGame(playerAnswer);
  }

  if (+playerAnswer === randomNumber) {
    return alert(`Правильно!`);
  }

  return playerAnswer;
};

playGame(prompt('Я загадал число от 1 до 100. Псс.. это ' + randomNumber + '!' +
  ' Попробуй его угадать. Введи свой вариант:'));


