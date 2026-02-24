// Task : Count number of keys in object
// expected output : 3

let count = 0;
let obj = { a: 1, b: 2, c: 3 };

for(let key in obj){
    if(key){
        count++;
    }
}
console.log(count);



