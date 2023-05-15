'use strict'; 

const convertToRuble = (money) => {
  let resultMoney = money;

  resultMoney *= 1.2;
  resultMoney *= 73;

  return resultMoney;
};

const resultConvert = convertToRuble(+prompt('Введите сумму в евро:'));
alert(`У вас ${resultConvert} рублей!`);