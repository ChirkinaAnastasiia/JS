'use strict';

const getLeapYears = (start, end) => {
  let startArray;

  if (end < start) {
    startArray = Array.from({ length: start - end + 1}, (item, i) => end + i);

    console.log(startArray);
  } else {
    startArray = Array.from({ length: end - start + 1}, (item, i) => start + i);

    console.log(startArray);
  }

  return startArray.filter(item => ((item % 100) && !(item % 4)) || !(item % 400));;
};

console.log(getLeapYears(-10, 10));
console.log(getLeapYears(2023, 2000));


