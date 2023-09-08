'use strict';

// alert(`Сыгрем в игру! Введи два числа от 1 до 100. Я загадаю число в этом диапазоне, а ты попробуешь его отгадать!`);

const getFirstNumber = () => {
  let first = prompt(`Введи первое число:`);

  if (first === null) {
    return alert(`Конец игры!`);
  } 

  while (Number.isNaN(+first) || first === '' || !(first.trim()) || +first < 1 || +first > 100) {
    alert(`Некорректные данные! Нужно ввести число от 1 до 100!`);
    first = prompt(`Попробуй ещё раз! Введи первое число:`);

    if (first === null) {
      return alert(`Конец игры!`);
    }
  }

  return +first;
};

const firstNumber = getFirstNumber();
console.log(`firstNumber :`, firstNumber);


const getSecondNumber = () => {
  let second = prompt(`Введи второе число:`); 

  if (second === null) {
    return alert(`Конец игры!`);
  } 

  while (Number.isNaN(+second) || second === '' || !(second.trim()) || +second < 1 || +second > 100 || +second === firstNumber) {
    alert(`Некорректные данные! Нужно ввести число от 1 до 100 не равное первому числу!`);
    second = prompt(`Попробуй ещё раз! Введи первое число:`);

    if (second === null) {
      return alert(`Конец игры!`);
    }
  }

  return +second;
};

const secondNumber = getSecondNumber();
console.log(`secondNumber :`, secondNumber);


const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(firstNumber, secondNumber);
console.log(`randomNumber :`, randomNumber);


const getAttemptsNumber = () => {
  let range = firstNumber > secondNumber ? firstNumber - secondNumber + 1 : secondNumber - firstNumber + 1;
  console.log(`range :`, range);
  // if (firstNumber > secondNumber) {
  //   range = firstNumber - secondNumber + 1;
  // } else {
  //   range = secondNumber - firstNumber + 1;
  // }
  let attempts = range >= 50 && range <= 100 ? 15 : Math.round(range * 0.3);
  // if (range >= 50 && range <= 100) {
  //   attempts = 15;
  // } else {
  //  attempts = Math.round(range * 0.3);
  // }

  return attempts;
};

const attemptsNumber = getAttemptsNumber();
console.log(`attemptsNumber :`, attemptsNumber);



