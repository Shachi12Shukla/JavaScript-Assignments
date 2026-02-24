// Task : Find top N keys by value
const input = { a: 10, b: 50, c: 30, d: 40 }, N=2

const result = Object.entries(input)
    .sort((a,b) => b[1] - a[1]) // decending order
    .slice(0,N)
    .map(entry => entry[0]);
console.log(result);


// logically not too difficult 