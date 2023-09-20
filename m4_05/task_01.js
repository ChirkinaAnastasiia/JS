'use strict';

let pow;

for (let x = 1; x <= 10; x++) {
  let powCell = '';

  for (let y = 1; y <= 10; y++) {
    pow = x ** y;
    powCell += `${pow.toString().padStart(13, ' ')} |`;
  }

  console.log(powCell);
}


// let table = [];

// for (let i = 1; i <= 10; i++) {
//   let row = {};

//   for(let j = 1; j <= 10; j++) {
//     row[j] = i ** j;
//   }

//   table.push(row);
// }

// console.table(table);