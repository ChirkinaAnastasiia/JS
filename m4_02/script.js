'use strict';

const productName = prompt('Введите наименование товара:');
let productQuantity = Number(prompt('Введите количество товара:'));
const productCategory = prompt('Введите категорию товара:');
let productPrice = Number(prompt('Введите стоимость товара:'));
let totalPrice = productQuantity * productPrice;

console.log('productName: ', typeof productName);
console.log('productQuantity: ', typeof productQuantity);
console.log('productCategory: ', typeof productCategory);
console.log('productPrice: ', typeof productPrice);
console.log('totalPrice: ', typeof totalPrice);

console.log(`На складе ${productQuantity} единиц товара "${productName}" на сумму ${totalPrice} рублей.`);
