'use strict';

const income = +prompt('Введите сумму вашего дохода:');
let tax;

switch (true) {
  case income < 15000 && income >= 1:
    tax = income * 0.13;
    break;
  case income >= 15000 && income < 50000:
    tax = income * 0.2;
    break;
  case income >= 50000:
    tax = income * 0.3;
    break;
  default:
    tax = 0;
    break;
}

console.log('tax: ', tax);
