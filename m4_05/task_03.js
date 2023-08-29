'use strict';

const getReverseString = (str) => {
  let string = str;
  let reverseString = '';

  for (let i = string.length-1; i >= 0; i--) {
    reverseString += string[i];
  }

  return alert(`Строка задом наперёд: ${reverseString}`);
};

getReverseString(prompt('Введите текст:'));