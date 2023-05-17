'use strict'; 

const convertToRuble = (money) => {
  let resultMoney = money;
  return resultMoney * 1.2 * 73;
}

const resultConvert = convertToRuble(+prompt('Введите сумму в евро:'));
alert(`У вас ${resultConvert} рублей!`);