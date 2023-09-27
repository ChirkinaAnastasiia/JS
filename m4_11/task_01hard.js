'use strict';

const playGame = () => {
  alert('Сыгрем в игру! Введи два числа от 1 до 100. ' +
  'Я загадаю число в этом диапазоне, а ты попробуешь его отгадать!');

  const getFirstNumber = (first) => {
    if (first === null) {
      return;
    }

    if (Number.isNaN(+first) || first === '' || !(first.trim()) ||
      +first < 1 || +first > 100) {
      alert(`Некорректные данные! Нужно ввести число от 1 до 100!`);

      first = prompt(`Попробуй ещё раз! Введи первое число:`);

      return getFirstNumber(first);
    }

    return +first;
  };

  const firstNumber = getFirstNumber(prompt(`Введи первое число:`));
  if (firstNumber === undefined) {
    return alert(`Конец игры!`);
  }


  const getSecondNumber = (second) => {
    if (second === null) {
      return;
    }

    if (Number.isNaN(+second) || second === '' || !(second.trim()) ||
      +second < 1 || +second > 100 || +second === firstNumber) {
      alert('Некорректные данные! ' +
      'Нужно ввести число от 1 до 100, не равное первому числу!');

      second = prompt(`Попробуй ещё раз! Введи второе число:`);

      return getSecondNumber(second);
    }

    return +second;
  };

  const secondNumber = getSecondNumber(prompt(`Введи второе число:`));
  if (secondNumber === undefined) {
    return alert(`Конец игры!`);
  }


  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomNumber(firstNumber, secondNumber);


  const getAttemptsNumber = () => {
    const range = firstNumber > secondNumber ?
      firstNumber - secondNumber + 1 : secondNumber - firstNumber + 1;

    const attempts = range >= 50 && range <= 100 ? 15 : Math.round(range * 0.3);

    return attempts;
  };

  const attemptsNumber = getAttemptsNumber();


  const answersArray = [];

  const startGame = (attemptsNumber) => {
    const playerAnswer = prompt(`Введи свой вариант:`);

    if (answersArray.includes(+playerAnswer)) {
      alert(`Ты уже вводил это число, попытка не засчитывается!`);

      return startGame(attemptsNumber);
    }

    if (+playerAnswer === randomNumber) {
      return alert(`Правильно! Поздравляю, ты выиграл!`);
    }

    if (playerAnswer === null) {
      return alert(`Конец игры!`);
    }

    if (Number.isNaN(+playerAnswer) || playerAnswer === '' ||
      !(playerAnswer.trim()) ||
      +playerAnswer <
      (firstNumber > secondNumber ? secondNumber : firstNumber) ||
      +playerAnswer >
      (firstNumber > secondNumber ? firstNumber : secondNumber)) {
      alert('Некорректные данные. ' +
      'Введи число из указанного диапазона. Попытка не засчитывается!');

      return startGame(attemptsNumber);
    }

    if (attemptsNumber === 1) {
      return alert(`Попытки закончились. Ты проиграл!`);
    } else if (playerAnswer > randomNumber) {
      alert('Загаданное число меньше! ' +
      'Количество оставшихся попыток - ' + (attemptsNumber - 1));

      answersArray.push(+playerAnswer);

      return startGame(attemptsNumber - 1);
    } else if (playerAnswer < randomNumber) {
      alert('Загаданное число больше! ' +
      'Количество оставшихся попыток - ' + (attemptsNumber - 1));

      answersArray.push(+playerAnswer);

      return startGame(attemptsNumber - 1);
    }
  };

  alert('Я загадал число. Псс... это ' + randomNumber + '! ' +
  'Попробуй его угадать. Количество попыток - ' + attemptsNumber + '.');

  startGame(attemptsNumber);
};

playGame();
