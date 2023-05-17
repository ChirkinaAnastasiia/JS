'use strict';

const minNumber = (a, b) => {
  const firstNumber = a;
  const secondNumber = b;
  const min = a < b && firstNumber || b < a && secondNumber;
  return min;
}

const minResult = minNumber(
  +prompt('Введите первое число:'),
  +prompt('Введите второе число:')
);
alert(`Наименьшее число ${minResult}`);
