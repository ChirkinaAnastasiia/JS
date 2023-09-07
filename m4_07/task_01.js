'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getArray = (length) => {
  const emptyArray = [...new Array(length)];

  const newArray = emptyArray.map((item) => getRandomNumber(1, 100));

  return newArray;
};

console.log(getArray(10));

