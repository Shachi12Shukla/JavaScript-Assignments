// Task : Check if all values in object are numbers
const obj = { a: 1, b: "hello", c: 3 };

let ans = true;
for(const value of Object.values(obj)){
    if(typeof(value) !== 'number'){
        ans = false;
        break;
    }
    
}
console.log(ans);

// key insight : typeof returns a string not a type.

