'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getArray = (length, n, m) => {
  const emptyArray = [...new Array(length)];

  const newArray = emptyArray.map((item) => getRandomNumber(n, m));

  return newArray;
};

console.log(getArray(10, 100, 10));
console.log(getArray(10, -100, 100));