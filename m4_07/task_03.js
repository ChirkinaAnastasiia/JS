'use strict';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getArray = (length, n, m, str) => {
  const emptyArray = [...new Array(length)];

  const newArray = emptyArray.map((item) => getRandomNumber(n, m));

  const evenOrOddArray = newArray.map((item) => {
    let result = item;

    switch (true) {
      case (str === 'even' && !(item % 2 === 0)):
        result = item + 1;
        break;

      case (str === 'odd' && item % 2 === 0):
        result = item - 1;
        break;
    }

    return result;
  });

  return evenOrOddArray;
};

console.log(getArray(10, 100, 10, 'even'));
console.log(getArray(10, -100, 100, 'odd'));
