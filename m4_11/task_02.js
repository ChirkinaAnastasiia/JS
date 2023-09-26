'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNumbersArray = (arr) => {
  arr.push(getRandomNumber(0, 10));

  const arrSum = arr.reduce((acc, item) => acc + item);

  if (arrSum >= 50) {
    return arr;
  }

  return getRandomNumbersArray(arr);
};

console.log(getRandomNumbersArray([]));
