'use strict'; 

const convertToRuble = (money) => money * 1.2 * 73;

const resultConvert = convertToRuble(+prompt('Введите сумму в евро:'));
alert(`У вас ${resultConvert} рублей!`);