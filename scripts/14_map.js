const map = new Map();
const objKey = { id: 5 };
map.set(objKey, 'test');
map.set('key', 'value');

console.log('By obj =', map.get(objKey));
console.log('By "key" =', map.get('key'));
