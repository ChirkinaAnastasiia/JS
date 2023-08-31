'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filterStudents = (arr1, arr2) => {
  const passedStudents = allStudents.slice();

  for (const key in arr1) {
    if (arr1.includes(arr2[key])) {      
      passedStudents.splice(passedStudents.indexOf(arr2[key]), 1);
    }
    
  }

  return passedStudents;
};

const newArray = filterStudents(allStudents, failedStudents);
console.log(newArray);

console.log(allStudents);