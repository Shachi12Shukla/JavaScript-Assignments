// Task : swap keys and values 

const obj = { a: 'x', b: 'y', c: 'z' };
// const swapped = {};

// for (let [key, value] of Object.entries(obj)) {
//   console.log(swapped[value]);
//   swapped[value] = key;
//   console.log(key);
// }

// console.log(swapped);

// // *** in-place ***
// store original keys first
const keys = Object.keys(obj);

for (let key of keys) {
  const value = obj[key];
  delete obj[key];     // remove old key
  obj[value] = key;    // add swapped key-value
}

console.log(obj);





