'use strict';

import { listIPv4 } from  './ipv4.js';

const getUniqueIp = (arr) => {
  return new Set(arr).size;
};

console.log(getUniqueIp(listIPv4));