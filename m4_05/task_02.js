'use strict';

const isPrime = (num) => {
  let number = num;

  if (number <= 0) return false;

  if (Number.isInteger(number) === false) return false;

  for (let i = 2; i < number; i++) {
    let result = number / i;

    if (Number.isInteger(result) === true) return false;
  }

  return true;
};

console.log(isPrime(-8));
console.log(isPrime(0));
console.log(isPrime(2.6));
console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime(151));