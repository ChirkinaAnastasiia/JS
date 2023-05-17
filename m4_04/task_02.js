'use strict';

const modifyString = (text) => {
  let resultText = text;

  resultText = resultText.toLowerCase();
  resultText = resultText[0].toUpperCase() + resultText.slice(1);

  return resultText;
}

const resultString = modifyString(prompt('Введите текст:'));
alert(resultString);

