'use strict';

let pow;

for (let x = 1; x <= 10; x++) {
  let powCell = '';

  for (let y = 1; y <= 10; y++) {
    pow = x ** y;
    powCell += `    ${pow}     |`;
  }

  console.log(powCell);
}