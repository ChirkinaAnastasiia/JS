'use strict';

const playGame = () => {
  alert(`Сыгрем в игру! Введи два числа от 1 до 100. Я загадаю число в этом диапазоне, а ты попробуешь его отгадать!`);

  // получаем первое число от игрока
  const getFirstNumber = () => {
    let first = prompt(`Введи первое число:`);
  
    if (first === null) {
      return;
    } 
  
    while (Number.isNaN(+first) || first === '' || !(first.trim()) || +first < 1 || +first > 100) {
      alert(`Некорректные данные! Нужно ввести число от 1 до 100!`);
      first = prompt(`Попробуй ещё раз! Введи первое число:`);
  
      if (first === null) {
        return;
      }
    }
  
    return +first;
  };
  
  //получаем второе число от игрока
  const getSecondNumber = () => {
    let second = prompt(`Введи второе число:`); 
  
    if (second === null) {
      return alert(`Конец игры!`);
    } 
  
    while (Number.isNaN(+second) || second === '' || !(second.trim()) || +second < 1 || +second > 100 || +second === firstNumber) {
      alert(`Некорректные данные! Нужно ввести число от 1 до 100, не равное первому числу!`);
      second = prompt(`Попробуй ещё раз! Введи второе число:`);
  
      if (second === null) {
        return alert(`Конец игры!`);
      }
    }
  
    return +second;
  };
  
  // считаем рандомное число  между первым и вторым
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // считаем количество попыток в диапазоне
  const getAttemptsNumber = () => {
    let range = firstNumber > secondNumber ? firstNumber - secondNumber + 1 : secondNumber - firstNumber + 1;
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
  
  // начинаем игру
  const startGame = () => {
    const answersArray = [];
  
    alert(`Я загадал число. Псс... это ${randomNumber}! Попробуй его угадать. Количество попыток - ${attemptsNumber}.`);
  
    for (let i = 0; i < attemptsNumber; i++) {
  
      let playerAnswer = prompt(`Введи свой вариант:`);
  
      if (answersArray.includes(+playerAnswer)) {
        alert(`Ты уже вводил это число, попытка не засчитывается!`);
        i--;
  
        continue;
      }
  
      if (playerAnswer === null) {
        return alert(`Конец игры!`);
      }
  
      if (+playerAnswer === randomNumber) {
        return alert(`Правильно! Поздравляю, ты выиграл!`);
      }
  
      if (Number.isNaN(+playerAnswer) || playerAnswer === '' || !(playerAnswer.trim())
        || +playerAnswer < (firstNumber > secondNumber ? secondNumber : firstNumber) || +playerAnswer > (firstNumber > secondNumber ? firstNumber : secondNumber)) {
  
        alert(`Некорректные данные. Введи число из указанного диапазона. Попытка не засчитывается!`);
        i--;

        continue;
      }

      if (i === attemptsNumber - 1) {
        return alert(`Попытки закончились. Ты проиграл!`);
      }
  
      if (playerAnswer > randomNumber) { 
        alert(`Загаданное число меньше! Количество оставшихся попыток - ${attemptsNumber - 1 - i}.`);
        answersArray.push(+playerAnswer);
  
      } else if (playerAnswer < randomNumber) {
        alert(`Загаданное число больше! Количество оставшихся попыток - ${attemptsNumber - 1 - i}.`);
        answersArray.push(+playerAnswer);
      }
    }
  };
  
  const firstNumber = getFirstNumber();
  
  // если нет первого числа, второе не спрашивает
  if (firstNumber === undefined) {
    return  alert(`Конец игры!`);
  }
  
  const secondNumber = getSecondNumber();  
  const randomNumber = getRandomNumber(firstNumber, secondNumber);  
  const attemptsNumber = getAttemptsNumber();
  
  startGame();
};

playGame();
