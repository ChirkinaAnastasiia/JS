'use strict';

// первая задача
const productName = prompt('Введите наименование товара:');
let productQuantity = Number(prompt('Введите количество товара:'));

if (Number.isFinite(productQuantity) === true) {
  const productCategory = prompt('Введите категорию товара:');
  let productPrice = Number(prompt('Введите стоимость товара:'));
    if (Number.isFinite(productPrice) === true) {
      let totalPrice = productQuantity * productPrice;
      console.log(`На складе ${productQuantity} единиц товара "${productName}" на сумму ${totalPrice} рублей.`);
    } else {
      alert('Вы ввели некорректные данные!');
    }
} else {
  alert('Вы ввели некорректные данные!');
}






