const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);

const arrSet = [...set];

console.log('set =', set);
console.log('arr set values =', arrSet);
console.log('first value =', arrSet[0]);
