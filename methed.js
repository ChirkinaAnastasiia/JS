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



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 4                             //
///////////////////////////                       ///////////////////////////



///////////////////////////                       ///////////////////////////
//                             Модуль 4 Урок 5                             //
///////////////////////////                       ///////////////////////////



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
// animals.lenght = 10;
// console.log(animals);
// console.log(animals.length);
// console.log(animals[4]);
// console.log(animals[5]);

//////////////////////////////////
// const animals = ['cat', 'dog',,, 'rat'];
// animals.lenght = 2;
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
