'use strict';

const allCashboxHard = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = arr => {
  let amount = 0;
  let price = 0;

  for (let i = 0; i < arr.length; i++) {
    amount += arr[i][0];
    price += arr[i][1];
  }

  return Math.floor(price / amount);
};

const averageHard = getAveragePriceGoods(allCashboxHard);
console.log(averageHard);