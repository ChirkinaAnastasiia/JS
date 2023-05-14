'use strict';

const income = +prompt('Введите сумму вашего дохода:');
let tax;

switch (true) {
  case income <= 15000 && income >= 1:
    tax = income * 0.13;
    break;
  case income > 15000 && income <= 50000:
    tax = (income - 15000) * 0.2 + 15000 * 0.13;
    break;
  case income > 50000:
    tax = (income - 50000) * 0.3 + 35000 * 0.2 + 15000 * 0.13;
    break;
  default:
    tax = 0;
    break;
}

console.log('tax: ', tax);
