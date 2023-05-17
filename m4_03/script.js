'use strict';

// первая задача
const productName = prompt('Введите наименование товара:');
let productQuantity = +prompt('Введите количество товара:');

if (Number.isNaN(productQuantity) === false) {
  const productCategory = prompt('Введите категорию товара:');
  let productPrice = +prompt('Введите стоимость товара:');
    if (Number.isNaN(productPrice) === false) {
      let totalPrice = productQuantity * productPrice;
      console.log(`На складе ${productQuantity} единиц товара "${productName}" на сумму ${totalPrice} рублей.`);
    } else {
      alert('Вы ввели некорректные данные!');
    }
} else {
  alert('Вы ввели некорректные данные!');
}

