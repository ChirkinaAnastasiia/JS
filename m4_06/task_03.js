'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const newNames = [...names];

  for (let i = 0; i < arr.length; i++) {
    newNames[i] = arr[i].replace(arr[i], prefix.concat(' ', arr[i]));
  }

  return newNames;
};

const namesWithPrefix = addPrefix(names, 'Mr');
console.log(namesWithPrefix);

console.log(names);