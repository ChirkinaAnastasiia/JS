'use strict';

const getQuantityDiscount = (sum, quantity) => {
  if (quantity > 10) {
    return sum - sum * 0.03;
  }
  return sum;
}

const getBigSumDiscount = (quantityDiscount) => {
  if (quantityDiscount > 30000) {
    return quantityDiscount - (quantityDiscount - 30000) * 0.15;
  }
  return quantityDiscount;
}

const getPromoDiscount = (bigSumDiscount, promocode) => {
  if (promocode === 'METHED') {
    return bigSumDiscount - bigSumDiscount * 0.1;
  } else if (promocode === 'G3H2Z1' && bigSumDiscount > 2000) {
    return bigSumDiscount - 500;
  }
  return bigSumDiscount;
}

const calculateTotalSum = (sum, quantity, promocode) => {
  const quantityDiscount = getQuantityDiscount(sum, quantity);

  const bigSumDiscount = getBigSumDiscount(quantityDiscount);

  const promoDiscount = getPromoDiscount(bigSumDiscount, promocode)

  return promoDiscount;
}

// примеры вывода
const resultExample1 = calculateTotalSum(1000, 15);
console.log(resultExample1);

const resultExample2 = calculateTotalSum(35000, 5);
console.log(resultExample2);

const resultExample3 = calculateTotalSum(35000, 15, 'METHED');
console.log(resultExample3);

const resultExample4 = calculateTotalSum(35000, 15, 'G3H2Z1');
console.log(resultExample4);

const resultExample5 = calculateTotalSum(1000, 5, 'G3H2Z1');
console.log(resultExample5);