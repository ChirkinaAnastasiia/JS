'use strict';

const nod = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  let thirdNumber;
  
  if (b > a) {
    firstNumber = b;
    secondNumber = a;
  }

  while (thirdNumber !== 0) {
    thirdNumber = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;

    if (thirdNumber === 0) {
      return firstNumber;
    }
  }
};

const nodResult = nod(
  +prompt('Введите первое число:'),
  +prompt('Введите второе число:')
);
alert(`Наибольший общий делитель ${nodResult}`);
