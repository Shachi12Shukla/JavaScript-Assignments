// find the largest value key
let obj = { a: 10, b: 50, c: 20 };

let ans;
let max = -Infinity;

for(let key in obj){
    if(obj[key] > max){
        max = obj[key];
        ans = key;
    }
}
console.log(ans);
