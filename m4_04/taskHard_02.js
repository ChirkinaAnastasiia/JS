'use strict';

const minNumber = (a, b) => a < b && a || b < a && b;

const minResult = minNumber(
  +prompt('Введите первое число:'),
  +prompt('Введите второе число:')
);
alert(`Наименьшее число ${minResult}`);
