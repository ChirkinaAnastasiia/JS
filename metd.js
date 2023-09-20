'use strict';

///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 1                             //
///////////////////////////                       ///////////////////////////


// let a = 1;
// {
//   a = 2;
//   console.log(a);
// }
// console.log(a);

// let c = 3;
// {
//   let c = 4;
//   console.log(c);
// }
// console.log(c);

// {
//   b = 5;
//   console.log(b);
// }
// console.log(b);

//////////////////////////////////
// const array = [1, 2, 3];
// console.log(array);
// array.push(4);
// console.log(array);
// array = [1, 2, 3, 4];
// console.log(array);

//////////////////////////////////
// const obj = {age: 20, gender: 'male'};
// console.log(obj);
// obj.age = 25;
// console.log(obj);
// obj = {age: 30};
// console.log(obj);
// obj = {firstName: 'John'};
// console.log(obj);

//////////////////////////////////
// let a = 1;
// let b;
// b = a;
// console.log(a);
// console.log(b);
// a = 2;
// console.log(a);
// console.log(b);

//////////////////////////////////
// console.error('Ошибка');
// console.info('Информация');
// console.warn('Предупреждение');
// console.log('Hello!');



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 2                             //
///////////////////////////                       ///////////////////////////


// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(typeof NaN);
// console.log(900077000088000660000000);

// const myName = 'John';
// console.log('My name is ' + myName + '!');
// console.log(`My name is ${myName}!`);
// document.body.innerHTML = "<h1 class=\"title\">Hello!</h1>";
// document.body.innerHTML = '<h1 class="title">Hello!</h1>';
// document.body.innerHTML = `<h1 class="title">Hello ${myName}!</h1>`;

// const birthYear = 1957;
// const nowYear = new Date().getFullYear();
// console.log(`I'm ${nowYear - birthYear} years old!`);
// //с 1-го января считает
// console.log(`Now is ${new Date().getFullYear()} year!`);

// console.log(2 === 2);
// console.log(5 > 8);

// let a;
// console.log(a);

// const array = [1, 2];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// const object = {
//   a: 1,
//   b: 2
// };
// console.log(object.a);
// console.log(object.c);
// console.log(object);

// console.log(Symbol() === Symbol());
// console.log(Symbol('key1') === Symbol('key1'));

//////////////////////////////////
// const object = {

// };
// console.log('object: ', object);
// console.log('object: ', typeof object);
// const array = [];
// console.log('array: ', array);
// console.log('array: ', typeof array);
// const foo = () => {};
// console.log('foo: ', foo);
// console.log('foo: ', typeof foo);
// const err = new Error();
// console.log('err: ', err);
// console.log('err: ', typeof err);

// const emptyBox = null;
// console.log('emptyBox: ', emptyBox);
// console.log('emptyBox: ', typeof emptyBox);

// const obj = {
//   number: 5,
//   string: 'str',
//   boolean: true,
//   foo() {

//   },
//   array: [1, 2],
//   object: {
//     a: 1,
//     b: ''
//   }
// };

// const arr = [[1, 2], {a: 1, b: 2}, 55, 'str', false, () => {}];

// const regularExpression = RegExp('');
// const regExp = /А-Я/i;

//////////////////////////////////
// const cssColor = 'color: yellow; text-shadow: 2px 2px 3px blue;';
// console.log('%cРандомный текст', cssColor);

//////////////////////////////////
// let num = 5;
// console.log(+num);
// console.log(-num);

// let numStr = '5';
// console.log(+numStr);
// console.log(typeof +numStr);
// console.log(-numStr);
// console.log(typeof -numStr);

// let numString ='str';
// console.log(+numString);
// console.log(typeof +numString);

// let num2 = 3;
// console.log(++num2);
// console.log(++num2);
// console.log(++num2);
// console.log(--num2);
// console.log(--num2);
// console.log(--num2);

// let num3 = 3;
// console.log(num3++);
// console.log(num3++);
// console.log(num3++);
// console.log(num3--);
// console.log(num3--);
// console.log(num3--);

// let numb = 6;
// numb = numb - 2;
// console.log(numb);
// let numb2 = 6;
// numb2 -= 7;
// console.log(numb2);
// numb2 += 3;
// console.log(numb2);
// numb2 *= 3;
// console.log(numb2);
// numb2 /= 2;
// console.log(numb2);

// console.log(0.1 + 0.2);
// console.log(1e5);
// console.log(1e5 + 7e4);
// console.log(3e-6);
// console.log(3e-16);

// console.log(Number.isNaN(5));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN('str'));

// console.log(Number.isFinite(5));
// console.log(Number.isFinite(5.5));
// console.log(Number.isFinite(5n));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite('7'));

// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));
// console.log(Number.isInteger(5n));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger('7'));

//////////////////////////////////
// console.log(Math.pow(5, 2));
// console.log(5 ** 2);
// console.log(Math.sqrt(25));

// console.log(Math.floor(1.4));
// console.log(Math.floor(1.8));
// console.log(Math.ceil(1.4));
// console.log(Math.ceil(1.8));
// console.log(Math.round(1.4));
// console.log(Math.round(1.8));
// console.log(Math.trunc(1.4));
// console.log(Math.trunc(1.8));

// console.log(Math.max(12, 5, 1));
// console.log(Math.min(12, 5, 1));

// console.log(Math.random());
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 100));

//////////////////////////////////
// let str = 'Hello';
// let newStr = str.concat(' world', '!');
// console.log(newStr);

// str = 'Hello World';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.charAt(1));
// console.log(str[1]);
// console.log(str.substring(2));
// console.log(str.substring(2, 4));
// console.log(str.slice(2));
// console.log(str.slice(2, 4));
// console.log(str.slice(-2));
// console.log(str.indexOf('l'));
// console.log(str.indexOf('L'));
// console.log(str.indexOf('llo'));
// console.log(str.includes('ll'));
// console.log(str.includes('LL'));
// console.log(str.replace('He', 'Yu'));
// console.log(str.replace('World', ''));
// console.log(str.replace('LL', ''));
// console.log(str.split(''));
// console.log(str.split(' '));
// str = 'Hello, Word, Peace';
// console.log(str.split(','));
// str = '    hello world   ';
// console.log('!' + str.trim() + '!');
// console.log('!' + str.trimStart() + '!');
// console.log('!' + str.trimEnd() + '!');
// str = 'Hi!';
// console.log(str.padStart(7, '#'));
// console.log(str.padEnd(5, '*'));

// let str1 = 'Anna';
// let str2 = 'Elizabeth';
// let str3 = 'Maria';
// console.log(str1.padEnd(15, ' ') + '|');
// console.log(str2.padEnd(15, ' ') + '|');
// console.log(str3.padEnd(15, ' ') + '|');
// console.log(str1.padStart(15, ' ') + ' |');
// console.log(str2.padStart(15, ' ') + ' |');
// console.log(str3.padStart(15, ' ') + ' |');

//////////////////////////////////
// let test;
// test = 5;
// console.log(test);
// console.log(typeof test);
// test = String(5);
// console.log(typeof test);
// test = String(5 + 50);
// console.log(test);
// console.log(typeof test);

// test = (50).toString();
// console.log(test);
// console.log(typeof test);
// test = (false).toString();
// console.log(test);
// console.log(typeof test);
// test = ([1, 2]).toString();
// console.log(test);
// console.log(typeof test);

// test = ({a: 1}).toString();
// console.log(test);
// console.log(typeof test);
// test = JSON.stringify({a: 1, b: 'js'});
// console.log(test);
// console.log(typeof test);
// test = JSON.parse(test);
// console.log(test);
// console.log(typeof test);

// test = 50 + '';                   //null+, [1, 2]+
// console.log(test);
// console.log(typeof test);

//////////////////////////////////
// test = '5';
// console.log(test);
// console.log(typeof test);
// test = '5' / 1;
// console.log(test);
// console.log(typeof test);
// test = '5' * 1;
// console.log(test);
// console.log(typeof test);

// test = Number('5');
// console.log(test);
// console.log(typeof test);

// test = +'5';
// console.log(test);
// console.log(typeof test);

// test = +'str';
// console.log(test);
// console.log(typeof test);

// test = +true;
// console.log(test);
// console.log(typeof test);
// test = +false;
// console.log(test);
// console.log(typeof test);
// test = +null;
// console.log(test);
// console.log(typeof test);
// test = +undefined;
// console.log(test);
// console.log(typeof test);
// test = +'';
// console.log(test);
// console.log(typeof test);
// test = +'Hi';
// console.log(test);
// console.log(typeof test);

//////////////////////////////////
// test = '5';
// console.log(test);
// console.log(typeof test);
// test = Boolean('5');
// console.log(test);
// console.log(typeof test);
// test = !!'5';               //5, [1, 2], {a: 1}
// console.log(test);
// console.log(typeof test);
// test = !'5';
// console.log(test);
// console.log(typeof test);

// test = !!'0';
// console.log(test);
// console.log(typeof test);
// test = !!0;
// console.log(test);
// console.log(typeof test);
// test = !!'';
// console.log(test);
// console.log(typeof test);
// test = !!NaN;
// console.log(test);
// console.log(typeof test);
// test = !!null;
// console.log(test);
// console.log(typeof test);
// test = !!undefined;
// console.log(test);
// console.log(typeof test);

//////////////////////////////////
// test = [] + [];
// console.log(test);
// console.log(typeof test);
// test = [] + [1];
// console.log(test);
// console.log(typeof test);
// test = 1 + [1];
// console.log(test);
// console.log(typeof test);
// test = 1 - [1];
// console.log(test);
// console.log(typeof test);
// test = {} + {};
// console.log(test);
// console.log(typeof test);
// test = {} - {};
// console.log(test);
// console.log(typeof test);

//////////////////////////////////
// console.log(parseInt('100px'));
// console.log(parseInt('10.5px'));
// console.log(parseInt('px100'));
// console.log(parseFloat('12.5px'));
// console.log(parseFloat('12.5.7px'));
// console.log(parseFloat('px100'));

// console.log(parseInt('0xfff', 16));
// console.log(parseInt('fff', 16));

// console.log(123..toString(2));
// console.log((123).toString(2));

// console.log(1.23456.toFixed(2));
// console.log(1.23456.toFixed(3));
// console.log(1.23456.toFixed(8));

// console.log(1e3);
// console.log(1.23e3);
// console.log(1e-3);
// console.log(1.23e-3);

//////////////////////////////////
// let str = 'belissimo belissimo';
// console.log(str[3]);
// console.log(str[-2]);
// console.log(str.at(3));
// console.log(str.at(-2));
// console.log(str.charAt(3));
// console.log(str.charAt(-2));

// console.log(str[str.length - 2]);

// console.log(str.indexOf('ss', 3));
// console.log(str.indexOf('ss', 5));

// console.log(str.lastIndexOf('i'));
// console.log(str.lastIndexOf('i', 14));
// console.log(str.lastIndexOf('i', 12));

// console.log(str.includes('li', 1));
// console.log(str.includes('li', 14));

// console.log(str.startsWith('bel'));
// console.log(str.endsWith('bel'));

// console.log(str.substr(3, 5));
// console.log(str.substr(-9, 5));

// console.log('z'.codePointAt(0));
// console.log('Z'.codePointAt(0));
// console.log(String.fromCodePoint(80));

// let testString = '';
// for (let i = 65; i <= 220; i++) {
//   testString += String.fromCodePoint(i);
// }
// console.log(testString);

// console.log('a'.localeCompare('á'));
// console.log('á'.localeCompare('a'));
// console.log('a'.localeCompare('a'));


///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 3                             //
///////////////////////////                       ///////////////////////////

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 5);
// console.log('14' > '2');
// console.log('14' < '2');
// console.log(5 == '5');
// console.log(5 === '5');
// console.log(5 != '5');
// console.log(5 !== '5');
// console.log(null == 0);
// console.log(null == undefined);
// console.log(null === 0);
// console.log(null === undefined);
// console.log(true > 8);
// console.log(false == 0);
// console.log(true === 1);
// console.log('one' > 'zero');
// console.log('One' < 'zero');
// console.log('ё' > 'а');
// console.log('А' < 'Я');

//////////////////////////////////
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let a = 5;
// let b = 'abc';
// let c = 0;
// let d = '';
// console.log(a || b);
// console.log(b || c);
// console.log(d || a);
// console.log(d || c);
// console.log(c || b || a);
// console.log(b || c || a);
// console.log(d || c || a);
// console.log(d || c || d);

// a ||= b; // a ||= (a = b)
// console.log(a);
// c ||= b;
// console.log(c);

// let userComment = '';
// // userComment ||= 'no comments';
// // console.log(userComment);

// if (userComment == false) {
//   userComment = 'no comments';
// }
// console.log(userComment);

//////////////////////////////////
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// let a = 5;
// let b = 'abc';
// let c = 0;
// let d = '';
// console.log(a && b);
// console.log(b && c);
// console.log(d && a);
// console.log(c && d);
// console.log(a || c && b || d);
// console.log(a && d || c && b);

// a &&= b;
// console.log(a);
// c &&= b;
// console.log(c);

// let greeting = 'Hello';
// // greeting &&= greeting + ', friend!';
// // console.log(greeting);

// if (greeting) {
//   greeting = greeting + ', friend!';
// }
// console.log(greeting);

// let a = 10;
// a && console.log('something');
// let b;
// b && console.log('something'); // undefined
// day === "monday" && foo();

//////////////////////////////////
// result = !value;
// console.log(!1);
// console.log(!!1);
// console.log(!false);
// console.log(!!false);
// console.log(!'abc');
// console.log(!!'abc');
// console.log(!'');
// console.log(!!'');

//////////////////////////////////
// console.log(typeof 10 === 'number');
// console.log(typeof '10' === 'number');
// console.log(typeof 10 === 'string');
// console.log(typeof true === 'boolean');
// console.log(typeof null === 'object');
// console.log(typeof undefined === 'undefined');

//////////////////////////////////
// const a = 5;
// if (a > 4) {
//   console.log(a);
// }

// if (a >= 10) {
//   console.log(a);
// } else {
//   console.log(a * 3);
// }

// if (a > 10 && a < 100) {
//   console.log(a);
// } else if (a === 5) {
//   console.log(a - 2);
// } else {
//   console.log(a + 10);
// }

//////////////////////////////////
// const b = '';
// if (!b) {
//   console.log('empty');
// }

// if (b) {
//   console.log('empty'); // не выполнится
// } else {
//   console.log('empty');
// }

//////////////////////////////////
// const user = {
//   age: 30,
//   // name: '',
// };

// if (!user.name) {
//   console.log('noname');
// }

// // let value = 0;
// // if (externalValue) {
// //   value = externalValue;
// // }
// // const value = externalValue || 0;
// const value = externalValue ?? 0;

//////////////////////////////////
// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return `один из аргументоа не число`;
//   }

//   if (a <= 0 || b <= 0) {
//     return `одно из чисел отрицательное`;
//   }

//   return a + b;
// };

// console.log(sumPositiveNumbers('8', 10));
// console.log(sumPositiveNumbers(-6, 10));
// console.log(sumPositiveNumbers(3, 10));

//////////////////////////////////
// console.log(5 < 1 ? 'true' : 'false');
// console.log(5 > 1 ? 'true' : 'false');

// 5 > 1 ? console.log('true') : console.log('false'); // не делать так!
// // возвращает не значение, а то что возвращает console.log

// const password = prompt('enter password');
// (password === '123') ?
//   alert('come in') : alert('go away'); // не делать так!
// // не присваивает значение переменной, а выполняет различный код, в зависимости от условия

// let value = 10;
// console.log(value >= 0 ? value : -value);
// value = -5;
// console.log(value >= 0 ? value : -value);
// const result = (value >= 0 ? value : -value);
// console.log(result);

// let age = 108;
// let res = 
//   (age >= 18 && age < 100) ? 'adult' :
//   (age < 18 && age >= 13) ? 'teenager' :
//   (age < 13) ? 'child' :
//   'centenarian';

// console.log(res);

//////////////////////////////////
// let discount = 0;
// const price = 1000;
// const clientStatus = 'gold';

// // if (clientStatus == 'silver') {
// //   discount = price * 0.05;
// // }
// // if (clientStatus == 'gold') {
// //   discount = price * 0.08;
// // }
// // if (clientStatus == 'diamond') {
// //   discount = price * 0.1;
// // }
// // const totalPrice = price - discount;
// // console.log(totalPrice);


// switch (clientStatus) { // clientStatus === ''
//   case 'silver':
//     discount = price * 0.05;
//     break;
//   case 'gold':
//     discount = price * 0.08;
//     // break;
//   case 'diamond':
//     discount = price * 0.1;
//     break;
//   default:
//     discount = 0;
// }
// const totalPrice = price - discount;
// console.log(totalPrice);

//////////////////////////////////
// const a = 1;
// switch (true) {
//   case a > 5:
//     console.log('a > 5');
//     break;
//   case a > 2 && a != 4:
//     console.log('3-5');
//     break;
//   default:
//     console.log(a);
// }

// switch (a) {
//   case 1:
//   case 2:
//     console.log('1 or 2');
//     break;
//   case 3:
//     console.log('3');
//     break;
//   default:
//     console.log(a);
// }



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 4                             //
///////////////////////////                       ///////////////////////////




///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 5                             //
///////////////////////////                       ///////////////////////////

// let n = 0;
// // while (n < 3) {
// //   console.log(n);
// //   n++;
// // }

// // while (n < 3) {
// //   n++;
// //   console.log(n);
// // }

// // do {
// //   console.log(n);
// //   n++;
// // } while (n < 3);

// // do {
// //   n++;
// //   console.log(n);
// // } while (n < 3);

// // do {
// //   n++;
// //   console.log(n);
// // } while (n = 0);

// // do {
// //   console.log(n);
// //   n++;
// // } while (n = 0);

// while (n < 5) {
//   console.log(n);
//   n++;

//   if (n === 3) break;
// }

//////////////////////////////////
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);

//   if (i === 3) break;
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 3) continue;

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (!(i % 2)) continue;

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5 || i === 6) continue;

//   console.log(i);
// }

//////////////////////////////////
// let i = 0;
// for (;;) {
//   // i += 1;
//   console.log(i);
//   i += 1;

//   if (i >= 5) break;
// }

//////////////////////////////////
// for (let i = 1; i < 10; i++) {
//   console.log('---------------------');

//   for(let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//////////////////////////////////
// let table = [];
// for (let i = 1; i <= 10; i++) {
//   let row = {};

//   for(let j = 1; j <= 10; j++) {
//     row[j] = i ** j;
//   }

//   table.push(row);
// }
// console.table(table);

//////////////////////////////////
// const foo = () => {
//   for (let i = 1; i < 10; i++) {
//     console.log('---------------------');
  
//     for(let j = 1; j < 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);

//       // if (i > 3) return;
//     }

//     if (i >= 3) return;
//   }

//   console.log('не сработает');
// };
// foo();

//////////////////////////////////
// for (let i = 1; i <= 2; i++) {

//   for(let j = 1; j <= 2; j++) {
//     let input = prompt(`координаты ${i}, ${j}`);

//     if (!input) break;
//   }
// }
// alert('готово');

// outer: for (let i = 1; i <= 2; i++) {

//   for(let j = 1; j <= 2; j++) {
//     let input = prompt(`координаты ${i}, ${j}`);

//     if (!input) break outer; // разорвать внешний цикл
//   }
// }
// alert('готово');



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 6                             //
///////////////////////////                       ///////////////////////////

// const array1 = [];
// const array2 = [1, 2, 3];
// let array3 = new Array();
// let array4 = new Array(1,2);
// let array5 = new Array(10);
// console.log(array5);

// const animals = ['cat', 'dog',,, 'rat'];
// console.log(animals.length);
// animals.length = 10;
// console.log(animals);
// console.log(animals.length);
// console.log(animals[4]);
// console.log(animals[5]);

//////////////////////////////////
// const animals = ['cat', 'dog',,, 'rat'];
// animals.length = 2;
// console.log(animals);

// console.log(animals[1]);
// console.log(animals[0]);
// console.log(animals[animals.length - 1]);
// console.log(animals[animals.length - 2]);
// console.log(animals[animals.length - 4]);
// console.log(animals[9]);

// animals[1] = 'bird';
// console.log(animals);

// animals[3] = 'fish';
// console.log(animals);

// animals = [1, 2];

//////////////////////////////////
// const array = [1, 2, 3];
// console.log(array);

// array[4] = 0;
// console.log(array);

// array.push(4, 5);
// console.log(array);

// array.unshift(4, 5);
// console.log(array);

// array.pop();
// array.pop();
// array.shift();
// console.log(array);

// const one = array.pop();
// console.log(one);

// const two = array.shift();
// console.log(two);

// delete array[1];
// console.log(array);

//////////////////////////////////
// const animals = ['cat', 'dog', 'mouse'];

// const printArr = arr => {
//   console.log(`Размер массива ${arr.length}`);

//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     // console.log(`Элемент под индексом ${i} - ${arr[i]}`);
//     console.log(`Элемент под индексом ${i} - ${elem}`);
//   }

//   for (const key in arr) {
//     console.log(`Элемент под индексом ${key} - ${arr[key]}`);
//   }

//   for (const element of arr) {
//     console.log(`Элемент ${element}`);
//   }
// };

// printArr(animals);

//////////////////////////////////
// const arr = [1, 2, 3];

// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(Array.isArray([]));
// console.log(Array.isArray([1, 2]));
// console.log(Array.isArray(new Array()));

// console.log(Array.isArray(10));
// console.log(Array.isArray(true));
// console.log(Array.isArray({}));
// console.log(Array.isArray('string'));

//////////////////////////////////
// const foo = function() {
//   console.log(arguments);
//   console.log(Array.isArray(arguments));
// };

// foo();
// foo(1, 2);

//////////////////////////////////
// const numbers = [0, 1, 2, 3, 4, 5];

// const newNum = 'string';
// const newNumbers = numbers.splice(2, 3, 'a', newNum);
// const newNumbers2 = numbers.splice(2, 'd');
// console.log(numbers);
// console.log(newNumbers);
// console.log(newNumbers2);

//////////////////////////////////
// const numbers = [0, 1, 2, 3, 4, 5];

// console.log(numbers.includes(4));
// console.log(numbers.includes('f'));

//////////////////////////////////
// const numbers = [0, 1, 2, 3, 4, 5];

// console.log(numbers.join());
// console.log(numbers.join(''));
// console.log(numbers.join(' '));
// console.log(numbers.join(' # '));
// console.log(numbers.join(', '));
// console.log(numbers.join(9));

//////////////////////////////////
// const numbers = [2, 101, 168, 55, 227, -4389, 7, 454, 591, -29, 19];
// const alphabet = ['a', 'A', 'ann', 'hi', 'hoy', 'Zon', 'za', 'diz', 'daw', 'D'];
// const multi = ['хот', 23, 'Ave', 'acer', -17, 'sos', 'za', 'Zar', -129, 'аюм', 2389, 'ёт', 'Арк', 'Ёж', 33, 3157];

// const sortNumbers = arr => {
//   console.log(numbers);

//   arr.sort();
//   console.log(numbers);

//   arr.sort((a, b) => a - b);
//   console.log(numbers);

//   arr.sort((a, b) => b - a);
//   console.log(numbers);

//   return arr;
// };
// sortNumbers(numbers);

// const sortAlphabet = arr => {
//   console.log(alphabet);

//   arr.sort();
//   console.log(alphabet);

//   return arr;
// };
// sortAlphabet(alphabet);

// const sortMulti = arr => {
//   console.log(multi);

//   arr.sort();
//   console.log(multi);

//   arr.sort((a, b) => a - b);
//   console.log(multi);

//   arr.sort((a, b) => b - a);
//   console.log(multi);

//   return arr;
// };
// sortMulti(multi);

//////////////////////////////////
// const numbers = [2, 101, 168, 55, 227, -4389, 7, 454, 591, -29, 19];

// console.log(numbers.reverse());

// const sortNumbers = arr => {
//   console.log(numbers);

//   arr.sort((a, b) => a - b);
//   console.log(numbers);

//   return arr.reverse();
// };
// console.log(sortNumbers(numbers));

//////////////////////////////////
// const numbers = [0, 1, 2, 3, 4];

// console.log(numbers[1]);
// const a = numbers[3];
// console.log(a);

// const [x, ,,, y, z] = numbers;
// console.log(x);
// console.log(y);
// console.log(z);

// const numbers1 = [0, [1, 2], [3, 4]];

// const [, b, c] = numbers1;
// console.log(b);
// console.log(c);

// const [, [d, e], f] = numbers1;
// console.log(d);
// console.log(e);
// console.log(f);

// const numbers2 = [0, 1, 2];

// const [,, j = 9, i = 8] = numbers2;
// console.log(j);
// console.log(i);

//////////////////////////////////
// const numbers = [0, 1, 2, 3, 4];

// const [x, y, ...rest] = numbers;
// console.log(rest);

// const string = 'Hello!';
// const [a, b, ...str] = string;
// console.log(str);
// console.log(str.join(''));

// const string2 = 'heLLo!';
// const [c, ...str2] = string2;

// const newString2 = c.toLocaleUpperCase() + str2.join('').toLowerCase();
// console.log(newString2);

//////////////////////////////////
// const numbers = [1, 2, 3, 4];
// const newNumbers = [11, 22, 33, 44, ...numbers];
// console.log(newNumbers);

// const newNumbers2 = [11, 22, ...numbers, 33, 44];
// console.log(newNumbers2);

// const newNumbers3 = [...numbers, 11, 22, ...numbers, 33, 44, ...newNumbers];
// console.log(newNumbers3);

// const cloneNumbers = [...numbers];
// console.log(cloneNumbers);
// console.log(cloneNumbers === numbers);

// cloneNumbers[2] = 333;
// console.log(cloneNumbers);
// console.log(numbers);

// const otherNumbers = numbers;
// console.log(otherNumbers === numbers);

// otherNumbers[2] = 333;
// console.log(otherNumbers);
// console.log(numbers);

// numbers[0] = 1111;
// console.log(cloneNumbers);
// console.log(otherNumbers);
// console.log(numbers);

//////////////////////////////////
// const numbers = [1, 2, 3, 4];

// const newNumbers = numbers.slice();
// const newNumbers2 = numbers.slice(2);
// console.log(newNumbers);
// console.log(newNumbers2);

// console.log(newNumbers === numbers);
// numbers.push(5, 6, 7);
// console.log(numbers);
// console.log(newNumbers);

//////////////////////////////////
// const numbers = [1, 2, 3, 4];

// const concatNumbers = [1, 2].concat(numbers);
// console.log(concatNumbers);

////////////////////////////////
// const numbers = [2, 101, 168, 55, 227, -4389, 7, 454, 591, -29, 19];

// const sortNumbers = arr => {
//   console.log(numbers);

//   arr.sort((a, b) => a - b);
//   console.log(numbers);

//   return arr;
// };

// const newNumbers = sortNumbers(numbers);
// console.log(numbers);
// console.log(newNumbers);


// const numbers2 = [2, 101, 168, 55, 227, -4389, 7, 454, 591, -29, 19];

// const sortNumbers2 = arr => {
//   console.log(numbers2);

//   // const cloneNumbers = [...arr];
//   const cloneNumbers = [...numbers2];

//   cloneNumbers.sort((a, b) => a - b);

//   return cloneNumbers;
// };

// const newNumbers2 = sortNumbers2(numbers2);
// console.log(numbers2);
// console.log(newNumbers2);


// const numbers3 = [2, 101, 168, 55, 227, -4389, 7, 454, 591, -29, 19];

// const sortNumbers3 = ([...arr]) => {
//   console.log(numbers3);

//   arr.sort((a, b) => a - b);

//   return arr;
// };

// const newNumbers3 = sortNumbers3(numbers3);
// console.log(numbers3);
// console.log(newNumbers3);

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];

// const foo = arr => {
//   const newNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     // newNumbers[i] = arr[i] ** 2;
//     newNumbers.push(arr[i] ** 2);
//   }

//   return newNumbers;
// };

// console.log(foo(numbers));
// console.log(numbers);

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];

// const foo = arr => {
//   const newNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(!(arr[i] % 2)) {
//       // newNumbers[i] = arr[i];     //empty
//       newNumbers.push(arr[i]);
//     }
//   }

//   return newNumbers;
// };

// console.log(foo(numbers)); //новый [с чётными]  
// console.log(numbers);      //if((arr[i] % 2))  новый [с нечётными]

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];

// const foo = arr => {
//   const newNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if((arr[i] % 2)) {
//       newNumbers.push(arr[i]);
//     } else {
//       newNumbers.push(arr[i] + 1);
//     }
//   }

//   return newNumbers;
// };

// console.log(foo(numbers)); 
// console.log(numbers);

////////////////////////////////
// const numbers = [1, 201, 3, 4, 5, 22];

// const foo = arr => {

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 200) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(foo(numbers));  //если есть хотя бы 1 > 200 //false  //каждый должен быть не > 200

////////////////////////////////
// const numbers = [1, 201, 3, 4, 5, 22];

// const foo = arr => {

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 200) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(foo(numbers));  //если есть хотя бы 1 > 200, выполняет условие //true // хоть 1 > 200

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];

// const foo = arr => {
//   let n = 0;

//   for (let i = 0; i < arr.length; i++) {
//     n += arr[i];
//   }

//   return n;
// };

// console.log(foo(numbers));  //сумма всех чисел  // 15
// console.log(numbers);       // -=  //-15

////////////////////////////////
// const numbers = [8, 11, 7];

// const foo = arr => {
//   let n = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//       n += arr[i];
//     } else {
//       n -= arr[i];
//     }
//   }

//   return n;
// };

// console.log(foo(numbers));  // есть остаток % 2  - эти складывает
// console.log(numbers);       // нет остатка - делает отрицательными 
//                             // (складывает отрицательные и вычитает эту сумму из положительных)

////////////////////////////////
// const numbers = [1, 2, 3];

// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[numbers.length - 2]);

// console.log(numbers.at(-1));
// console.log(numbers.at(-2));
// console.log(numbers.at(-5));

////////////////////////////////
// const num = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(num[0][1]);
// console.log(num[2][2]);

////////////////////////////////
// console.log([] + 1);
// console.log([1] + 1);
// console.log([1, 2] + 1);

// console.log('' + 1);
// console.log('1' + 1);
// console.log('1,2' + 1);


///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 7                             //
///////////////////////////                       ///////////////////////////


// const numbers = [1, 2, 3, 4, 5];

// const newArr = numbers.forEach((item, index, arr) => {
//   // console.log(item);
//   // console.log(index);
//   // console.log(arr);
//   console.log(item, index);
// });
// console.log(newArr);

////////////////////////////////
// const numbers = [1, 2, 3, 1, 2, 3];

// const newArr = numbers.find((item) => {
//   return item === 3;
// });
// console.log(newArr);

// const newArr2 = numbers.find(item => item % 2 === 0);
// console.log(newArr2);

////////////////////////////////
// const numbers = [1, 2, 3, 1, 2, 3];

// const newArr = numbers.filter((item) => {
//   return item === 3;
// });
// console.log(newArr);

// const newArr2 = numbers.filter(item => item > 0 && item < 2);
// console.log(newArr2);

////////////////////////////////
// const numbers = [1, 2, 3, 1, 2, 3];

// const newArr = numbers.findIndex((item) => {
//   return item === 1;
// });
// console.log(newArr);

// const newArr2 = numbers.findIndex(item => !(item % 3));
// console.log(newArr2);

// console.log(numbers. indexOf(1));

////////////////////////////////
// const numbers = [1, 2, 3, 1, 2, 3];
// const newArr = numbers.map((item) => {
//   return item === 1;
// });
// console.log(newArr);

// const newArr2 = numbers.map(item => item * 2);
// console.log(newArr2);

// const newArr3 = numbers.map(item => item.toString());
// console.log(newArr3);

// const words = ['hEllO', 'woRLd'];
// const newWords = words.map(item => 
//   item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(newWords);

// const numbers2 = [1, 2, 3, 1, 2, 3];
// const newArr4 = numbers2.map((item) => {
//   const n = item * 2;

//   if (n > 5) return null;
//   return item;
// });
// console.log(newArr4);

////////////////////////////////
// const numbers = [1, '2', 3, '1', 2, 3];
// const newArr = numbers.some(item => typeof item === 'string');
// console.log(newArr);

// const numbers2 = [1, 2, 3, 1, 2, 3];
// const newAr2 = numbers2.some(item => typeof item === 'string');
// console.log(newAr2);

////////////////////////////////
// const numbers = [1, '2', 3, '1', 2, 3];
// const newArr = numbers.every(item => typeof item === 'number');
// console.log(newArr);

// const numbers2 = [1, 2, 3, 1, 2, 3];
// const newAr2 = numbers2.every(item => typeof item === 'number');
// console.log(newAr2);

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// const newAr = numbers.reduce((accumulator, item , index, arr) => {
//   console.log(acc);
//   // return 3;
//   // return item;
//   return item + acc;
// });
// console.log(newAr);

// const newAr2 = numbers.reduce((acc, item , index, arr) => {
//   console.log(acc);
//   return item + acc;
// }, 0);
// console.log(newAr2);

// const newAr3 = numbers.reduce((acc, item , index, arr) => {
//   console.log(acc);
//   return item * acc;
// }, 1);
// console.log(newAr3);

////////////////////////////////
// const scientist = [
//   {
//     name: 'mendeleev',
//     count: 4
//   },
//   {
//     name: 'aristotel',
//     count: 7
//   }
// ];

// const newItem = scientist.reduce((acc, item, i, arr) => {
//   return acc + item.count;
// }, 0);
// console.log(newItem);

// const newItem2 = scientist.reduce((acc, item, i, arr) => {
//   return acc + item.count;
// });
// console.log(newItem2);

// const newItem3 = scientist.reduce((acc, item, i, arr) => {
//   return acc + item.name + ', ';
// }, '');
// console.log(newItem3);

// const newItem4 = scientist.reduceRight((acc, item, i, arr) => {
//   return acc + item.name + ', ';
// }, '');
// console.log(newItem4);

////////////////////////////////
// const numbers = [[1, 2], [3, 4], 5, 6, [[7, 8], [9, 10]]];

// console.log(numbers.flat());
// console.log(numbers.flat().flat());
// console.log(numbers.flat(2));
// console.log(numbers.flat(Infinity));

// const phrases = ['Привет мир!', 'Как дела?'];
// const allWords = phrases.map(str => str.split(' '));
// console.log(allWords);

// const allWords2 = phrases.flatMap(str => str.split(' '));
// console.log(allWords2);

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.fill('f', 2, 4));
// console.log(numbers.fill('z', 4));
// console.log(numbers.fill(9));

////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6];

// // console.log(numbers.copyWithin(0, 2));
// // console.log(numbers.copyWithin(0, 2, 4));
// // console.log(numbers.copyWithin(0, -2, -1));
// console.log(numbers.copyWithin(5, -2, -1));



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 8                             //
///////////////////////////                       ///////////////////////////


// const obj = {};
// const obj1 = new Object();

// const emptyObject = Object.create(null);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   'favorite food': 'pizza',
//   favoriteDrink: ['coffee', 'tea',],
//   age: 10,
//   status: {
//     alive: true,
//     free: false,
//   },
//   sayHi() {
//     console.log('Hello!');
//   },
// };

// console.log(user.age);
// console.log(user['favorite food']);
// console.log(user.favoriteDrink);
// console.log(user['firstName']);
// console.log(user.status.alive);
// user.sayHi();

// delete user.lastName;
// console.log(user.lastName);

// user.firstName = null;
// console.log(user.firstName);

////////////////////////////////
// const obj = {
//   first: 1,
//   second:2,
// };

// const number = 'first';
// console.log(obj[number]);
// console.log(obj);

////////////////////////////////
// const user = {
//   age: 30,
//   'favorite food': 'pizza',
//   favoriteDrink: ['coffee', 'tea',],
//   status: {
//     alive: true,
//     free: false,
//   },
//   sayHi() {
//     console.log('Hello!');
//   },
// };

// user.login = '1a5Xe7';
// user.status.free = true;
// console.log(user);

////////////////////////////////
// const firstName = 'John';
// const lastName = 'Doe';

// const user = {
//   firstName: firstName,
//   lastName: lastName,
// };
// console.log(user);

// const user2 = {
//   firstName,
//   lastName,
// };
// console.log(user2);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const user2 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// console.log(user === user2);
// user.firstName = 'Anna';
// console.log(user);
// console.log(user2);

// const user3 = user2;
// console.log(user3 === user2);
// user2.firstName = 'Tom';
// console.log(user2);
// console.log(user3);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const decorObject = obj => {
//   obj.age = 30;
// };

// decorObject(user);
// console.log(user);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
// };

// for (const prop in user) {
//   console.log(`user.${prop} = ${user[prop]}`);
// }

// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
//   console.log(`user.${key} = ${user[key]}`);
// }

// const values = Object.values(user);
// console.log(values);
// for (const key of values) {
//   console.log(key);
// }

// const entries = Object.entries(user);
// console.log(entries);
// for (const [key, value] of entries) {
//   console.log(key, value);
// }


// const arr = [
//   ["firstName", "John"],
//   ["lastName","Doe"],
//   ["age", 30],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
// };

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('hobby'));

////////////////////////////////
// const obj1 = {
//   a: 1,
//   b: {
//     a: 2
//   },
// };

// const obj2 = {
//   c: 3,
//   b: {
//     d: 4
//   },
// };

// // console.log(Object.assign(obj1, obj2));
// // console.log(obj1); // перезаписывается
// // console.log(obj2); // не меняется

// // const obj3 = Object.assign({}, obj1, obj2);
// // console.log(obj3); // новый
// // console.log(obj1); // не меняется
// // console.log(obj2); // не меняется

// // const obj3 = Object.assign({}, obj1, obj2, {a: 7});
// // console.log(obj3);
// // console.log(obj1);
// // console.log(obj2);

// const obj3 = Object.assign({}, obj1);
// console.log(obj3); // другой объект
// obj3.a = 10;
// console.log(obj1.a);
// console.log(obj3.a);

// const obj4 = obj1; // один обект
// obj4.a = 100;
// console.log(obj4.a);
// console.log(obj1.a);

// const obj5 = {...obj1}; // другой объект
// obj5.a = 77;
// console.log(obj5.a); // свойства уникальные
// console.log(obj1.a);
// obj5.b.a = 88;
// console.log(obj5.b.a); // обекты внутри те же, ссылки
// console.log(obj1.b.a);

// const obj6 = {...obj1, 'g': 9, ...obj3};
// console.log(obj6); // а из obj3, приоритет последнего

////////////////////////////////
// const obj = {
//   a: 1,
//   b: 2,
//   c: ['a', 'b'],
//   d: {
//     e: {
//       f: ['g', 'h'],
//       i: ['j', 'k']
//     }
//   },
//   l: 3,
//   m: 4,
// };

// console.log(obj.d.e);
// console.log(obj.d.e.f);
// console.log(obj.d.e.f[0]);

// const newObj = obj.d.e;
// console.log(newObj);
// console.log(newObj.f[0]);

// // деструктуризация
// // const {a, c, d} = obj;
// // console.log(a);
// // console.log(c);
// // console.log(d);

// // const {a, c, d:{e}} = obj;
// // console.log(a);
// // console.log(c);
// // console.log(e);

// // const {a,
// //   c,
// //   d:{
// //     e: {
// //     f, i
// //     }
// //   },
// // } = obj;
// // console.log(a);
// // console.log(c);
// // console.log(f);
// // console.log(i);

// const {a: newA, m = 8, y, z = 5} = obj;
// console.log(newA);
// console.log(m);
// console.log(y);
// console.log(z);

////////////////////////////////
// const obj1 = {
//   a: {
//     b: {
//       c: [1, 2],
//       d: [3, 4]
//     }
//   },
// };

// const obj2 = {
//   a: {
//     b: {
//       c: [1, 2],
//     }
//   },
// };

// const obj3 = {
//   a: {},
// };

// // const object = [obj1, obj2, obj3];
// // object.forEach (item => {
// //   // console.log(item);
// //   console.log(item.a.b);
// //   console.log(item.a.b.c);
// // });

// const object = [obj1, obj2, obj3];
// object.forEach (item => {
//   // console.log(item);
//   console.log(item?.a?.b);
//   console.log(item?.a?.b?.c);
// });

// const object2 = [obj1, obj2, obj3];
// object2.forEach (item => {
//   // console.log(item);
//   console.log(item?.a?.b ?? 'null');
//   console.log(item?.a?.b?.c ?? 'no prop');
// });

////////////////////////////////
// const obj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   sayHi() {
//     console.log(`Hello, ${obj.firstName}!`);
//     console.log(`Hello, ${this.firstName}!`);
//     console.log(`My name is ${this.getFullName()}!`);
//   },
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// obj.sayHi();
// console.log(obj.getFullName());

// const obj2 = {
//   firstName: 'Ann',
//   lastName: 'Hill',
//   sayHi() {
//     console.log(`My name is ${this.getFullName()}!`);
//   },
// };

// obj2.getFullName = obj.getFullName;
// console.log(obj.getFullName());
// console.log(obj2.getFullName());
// obj2.sayHi();

// obj2.firstName = 'Tom';
// obj.sayHi();
// obj2.sayHi();

////////////////////////////////
// const user = {
//   age: 30,
//   'favorite food': 'pizza',
//   favoriteDrink: ['coffee', 'tea',],
//   status: {
//     alive: true,
//     free: false,
//   },
//   sayHi() {
//     console.log('Hello!');
//   },
// };

// const userJson = JSON.stringify(user);
// console.log(userJson);

// const userObject = JSON.parse(userJson); // новый объект, вложенные объекты тоже независимы
// console.log(userObject);

// const json = JSON.parse(JSON.stringify(user));
// console.log(json);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   age: 30,
// };

// let key = prompt('What', 'age');
// alert(user[key]);

////////////////////////////////
// const makeUser = (firstName, age) => {
//   return {
//     firstName: firstName,
//     age,
//   };
// };

// const user = makeUser('John', 30);
// console.log(user);

////////////////////////////////
// const reservedWords = {
//   let: 0,
//   const: 1,
//   return: 2,
//   0: 'test',
// };

// console.log(reservedWords[0]);
// console.log(reservedWords['0']);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   age: 30,
// };

// console.log(user.hobby === undefined);
// console.log('hobby' in user);
// console.log('age' in user);

// let key = 'age';
// console.log(key in user);

// console.log(user.test);
// console.log('test' in user);

////////////////////////////////
// const user = {
//   sayHi: function() {
//     console.log('Hi!');
//   },
//   sayBye() {
//     console.log('Bye!');
//   },
// };

// user.sayHi();
// user.sayBye();

////////////////////////////////
// const user = {
//   name: 'John',
// };

// let cloneUser = {};

// for (const key in user) {
//   cloneUser[key] = user[key];
// }

// console.log(cloneUser);
// cloneUser.name = 'Anna';
// console.log(user);
// console.log(cloneUser);

////////////////////////////////
// const number = {
//   a: 10,
// };

// console.log(number.a++);
// console.log(number.a);

////////////////////////////////
// const fruits = {
//   apple: 5,
//   banana: 10,
//   orange: 7,
// };

// const double = Object.fromEntries(
//   Object.entries(fruits).map(([key, value]) => [key, value * 2])
// );

// console.log(double);
// console.log(fruits.apple);
// console.log(double.apple);

////////////////////////////////
// const user = {
//   name: 'John',
//   sayHi() {
//     console.log('Hi!');
//   },
// };

// let key = 'name';
// let key2 = 'age';
// console.log(user?.[key]);
// console.log(user?.[key2]);

// user.sayHi?.();
// user.sayBye?.();

// delete user?.name;
// console.log(user.name);

////////////////////////////////
// let a = null;
// let b = undefined;
// let c = '';
// let d = 0;

// console.log(a ?? 'test');
// console.log(b ?? 'test');
// console.log(c ?? 'test');
// console.log(d ?? 'test');
// console.log(a ?? b ?? 'none');
// console.log(a ?? b ?? c ?? d ?? 'none');

// a ??= 7;
// console.log(a);
// d ??= 'str';
// console.log(d);

// const fruits = {
//   apple: 5,
//   banana: 10,
//   orange: 7,
// };

// Object.keys(fruits).forEach((key) => {
//   console.log(key);
// });

// Object.values(fruits).forEach((value) => {
//   console.log(value);
// });

// const word = 'abcdef';
// for (const letter of word) {
//   console.log(letter);
// }

///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 9                             //
///////////////////////////                       ///////////////////////////

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
// };

// // // Object.defineProperty(user, 'nickName', {value: 'Zero'});
// // // console.log(user.nickName);

// // Object.defineProperty(user, 'firstName', {
// //   configurable: true,
// //   enumerable: true,
// //   writable: true,
// // });
// // // user.firstName = 'Tom';
// // // console.log(user.firstName);

// // Object.defineProperty(user, 'nickName', {
// //   value: 'Zero',
// //   configurable: true,
// //   enumerable: true,
// //   writable: true,});
// // console.log(user.nickName);

// // // Object.defineProperty(user, 'fullName', {
// // //   get() {
// // //     return `${this.firstName} ${this.lastName}`;
// // //   },
// // //   set(value) {
// // //     this.name = value;
// // //   },
// // // });
// // // console.log(user.fullName);
// // // user.fullName = 'Ann Hill';
// // // console.log(user.fullName);
// // // console.log(user.name);
// // // user.name = 'Benjamin';
// // // console.log(user.fullName);
// // // console.log(user.name);

// Object.defineProperties(user, {
//   favoriteFood: {value: 'pizza', writable: true},
//   favoriteSeason: {value: 'summer', enumerable: false},
// });
// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user, 'favoriteFood'));
// console.log(Object.getOwnPropertyDescriptors(user));

// const userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
// console.log(userClone);
// userClone.age = 40;
// console.log(user);
// console.log(userClone);

////////////////////////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   get comment() {
//     return this.trueComment;
//   },
//   set comment(value) {
//     if (typeof value === 'string') {
//       this.trueComment = value;
//     }
//   },
//   trueComment: 'none',
// };

// console.log(user);
// console.log(user.comment);
// user.comment = 123;
// console.log(user.comment);
// user.comment = 'hi, there';
// console.log(user.comment);
// console.log(user.trueComment);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(' ');
//   },
// };

// console.log(user.fullName);
// user.fullName = 'Ann Hill';
// console.log(user.fullName);
// console.log(user);

// const user = {
//   get userName() {
//     return this._name;
//   },
//   set userName(value) {
//     if (value.length < 3) {
//       console.log(`too short name`);
//       return;
//     }

//     this._name = value;
//   },
// };

// user.userName = 'John';
// console.log(user.userName);
// user.userName = 'An';
// console.log(user.userName);
// user.userName = 'Ann';
// console.log(user.userName);
// console.log(user);

// delete user.userName;
// console.log(user);
// console.log(user.userName);

////////////////////////////////
// const favor = new Map();
// favor.set('fruit', 'banana');
// favor.set('vegetable', 'tomato');
// favor.set('berry', 'cherry');
// favor.set('nut', 'huzelnut');

// console.log(favor);
// console.log(favor.get('berry'));
// console.log(favor.get('meat'));

// console.log(favor.keys());
// console.log(favor.values());
// console.log(favor.entries());

// console.log([ ...favor.keys() ]);
// console.log([ ...favor.values() ]);
// console.log([ ...favor.entries() ]);

// console.log(favor.size);
// console.log(favor.has('fruit'));
// console.log(favor.has('meat'));
// // console.log(favor.delete('nut'));
// // console.log(favor.get('nut'));

// // favor.clear()
// // console.log(favor);

// for (const key of favor) {
//   console.log(key);
// }

// for (const [key, value] of favor) {
//   console.log(key);
//   console.log(value);
// }

// const bakery = {
//   title: 'bakery',
//   taste: 'sweet',
// };
// favor.set(bakery, 'pie');
// console.log(favor);

// favor.forEach((value, key, map) => {
//   console.log(value, key);
// });

////////////////////////////////
// const bakery = {
//   title: 'bakery',
//   taste: 'sweet',
// };

// const cheese = {
//   title: 'cheese',
//   taste: 'salty',
// };

// const favor = new WeakMap();
// favor.set(bakery, 'pie');
// favor.set(cheese, 'cheddar');
// console.log(favor);

// console.log(favor.size);
// console.log(favor.get(cheese));
// console.log(favor.has(cheese));
// console.log(favor.delete(cheese));
// console.log(favor);

////////////////////////////////
// const map = new Map();
// map.set('fruit', 'banana');
// map.set(1, 77);
// map.set(true, false);
// console.log(map);

////////////////////////////////
// const obj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
// };
// const map = new Map(Object.entries(obj));
// console.log(map);
// console.log(map.get('age'));


// const map2 = new Map();
// map2.set('name', 'John');
// map2.set('age', 30);
// // const obj2 = Object.fromEntries(map2.entries());
// const obj2 = Object.fromEntries(map2);
// console.log(obj2);

////////////////////////////////
// const original = new Map([[1, 'one'], [2, 'two']]);

// const clone = new Map(original);
// console.log(original === clone);

// const clone2 = original;
// console.log(original === clone2);

////////////////////////////////
// const first = new Map([[1, 'one']]);
// const second = new Map([[2, 'two']]);
// console.log(first);
// console.log(second);

// const merged = new Map([ ...first, ...second, [3, 'three']]);
// console.log(merged);

////////////////////////////////
// const obj1 = {name: 'Ann'};
// const obj2 = obj1;
// const map = new Map();
// map.set(obj1, 'value1');
// map.set(obj2, 'value2');
// console.log(map.size);
// console.log(map.get(obj1));
// console.log(map.get(obj2));


// const obj3 = {name: 'Ann'};
// const obj4 = {name: 'Ann'};
// const map2 = new Map();
// map2.set(obj3, 'value3');
// map2.set(obj4, 'value4');
// console.log(map2.size);
// console.log(map2.get(obj3));
// console.log(map2.get(obj4));

////////////////////////////////
// const number = new Set([1, 2, 3, 4, 4, 3]);
// console.log(number);

// const array = [1, 2, 7, 2, 1, 8, 9, 9, 8];
// console.log(array);
// console.log([ ...new Set(array) ]);

// console.log(Array.from(new Set([1, 2, 7, 2, 1, 8, 9, 9, 8])));
// console.log(Array.from(new Set(array)));

////////////////////////////////
// const fruits = new Set();
// fruits.add('banana');
// fruits.add('orange');
// fruits.add('apple');
// fruits.add('mango');
// fruits.add('orange');
// console.log(fruits);

// console.log(fruits.has('mango'));
// console.log(fruits.has('kiwi'));
// console.log(fruits.size);
// console.log(fruits.length);
// // console.log(fruits.delete('mango'));
// // console.log(fruits.delete('kiwi'));
// // fruits.clear()
// // console.log(fruits);

// console.log(fruits.keys());
// console.log(fruits.values());
// console.log(fruits.entries());

// console.log([ ... fruits.values() ]);
// console.log(Array.from(fruits));

// for (const value of fruits) {
//   console.log(value);
// }

// fruits.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

////////////////////////////////
// const one = {a: 1};
// const two = {a: 1};
// const set = new Set();
// set.add(one).add(two);
// console.log(set);


// const three = {a: 1};
// const four = three;
// const set2 = new Set();
// set2.add(three).add(four);
// console.log(set2);

// const set3 = new Set();
// set3.add();
// console.log(set3);
// console.log(set3.has());
// console.log(set3.delete());
// console.log(set3.delete());
// console.log(set3);

////////////////////////////////
// const set = new Set([
//   {a: 1},
// ]);
// console.log(set.has({a: 1}));


// const obj = {a: 1};
// const set2 = new Set([obj]);
// console.log(set2.has(obj));


///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 10                            //
///////////////////////////                       ///////////////////////////
// const checkNum = n => {
//   let x = Number(parseFloat(n));

//   if (!Number.isFinite(x)) {
//     console.warn(`${x} число не целое`);
//     return;
//   }

//   if (x < 0) {
//     console.error(`${x} число меньше нуля`);
//     return;
//   }

//   if (x === 0) {
//     console.log(`${x} число равно нулю`);
//     // console.debug(`${x} число равно нулю`);
//     return;
//   }

//   console.trace(`${x} число подходит`);
// };

// const arr = ['27', '-5', '270', '4.5', 0, '90', 'o', '30', '-7', '50', '1.75', '25'];

// console.time('timer');
// arr.forEach(checkNum);
// console.timeEnd('timer');

////////////////////////////////
// const checkNum = obj => {
//   try {
//     const changeNumber = obj.result.lastNumber - obj.result.number;
//     console.log(`изменение позиции в рейтинге ${obj.name} ${changeNumber}`);
//   } catch(error) {
//     // console.error('error');
//     console.log(error);
//     console.dir(error);
//     console.warn(error.name);
//     console.warn(error.message);
//     console.warn(error.stack);
//   } finally {
//     console.log(true);
//   }
// };

// const race = [
//   {
//     result: {
//       number: '27',
//       lastNumber: '6',
//     },
//     name: 'reno',
//   },
//   {
//     result: {
//       number: '-5',
//       lastNumber: '5',
//     },
//     name: 'sitroen',
//   },
//   {
//     name: 'vaz',
//   },
//   {
//     result: {
//       number: '4.5',
//       lastNumber: '3',
//     },
//     name: 'opel',
//   },
// ];

// race.forEach(checkNum);
// console.warn(`остальные скрипты`);

////////////////////////////////
// {
//   const fact = function(x) {
//     if (x === 0) return 1;
//     return x * fact(x - 1);
//   };
  
//   console.log(fact(5));
// }

// // {
// // const fact = function(x) {
// //   if (x < 0) return 1;
// //   return x * fact(x - 1);
// // };

// // console.log(fact(5));
// // }

////////////////////////////////
// export const user = {};
// const admin = {};
// export {admin};
// export {admin as siteAdmin};
// export {admin, user};
// export {admin as siteAdmin, user as siteUser};
// export default function(a, b) {};
// export {sayHi};
// export {sayHi as default};

// import {user, admin} from './script.js';
// import {admin as siteAdmin, user as siteUser} from './script.js';
// import user from './script.js';
// import siteUser from './script.js';
// import './script.js';
// import * as say from './script.js';
// say.sayHi();
// say.sayBye();
// export {sayHi as Hi};
// import * as say from './script.js';
// say.Hi();
// import {default as User, sayHi} from './script.js';
// import * as user from './script.js';
// let User = user.default;
// new User('John');

// import User from './user.js';
// import loginForm from './loginForm.js';
// import func from './path/to/func.js';


///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 10                            //
///////////////////////////                       ///////////////////////////