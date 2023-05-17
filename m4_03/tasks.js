'use strict';

// вторая задача
const rain = Math.round(Math.random());

console.log(rain);

if (rain) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// if (rain === 1) {
//   console.log('Пошёл дождь. Возьмите зонт!');
// }
// if (rain === 0) {
//   console.log('Дождя нет!');
// }

// третья задача
const pointsMath = +prompt('Введите кол-во баллов по математике:');
const pointsRussian = +prompt('Введите кол-во баллов по русскому языку:');
const pointsInformatic = +prompt('Введите кол-во баллов по информатике:');
const freeEducation = pointsMath + pointsRussian + pointsInformatic;
// так
if (freeEducation >= 265) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('К сожалению вам не хватило баллов!');
}
// или так
// alert(freeEducation >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'К сожалению вам не хватило баллов!');

// червертая задача
const howMuchMoney = +(prompt('Сколько денег хотете снять?'));
// так
if (howMuchMoney % 100 === 0) {
  console.log('Возьмите Ваши деньги!');
} else {
  console.log('К сожалению, мы не можем выдать такую сумму!');
}
// или так
// console.log(howMuchMoney % 100 === 0 ? 'Возьмите Ваши деньги!' : 'К сожалению, мы не можем выдать такую сумму!');