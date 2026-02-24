// Task : Deep flatten nested arrays inside object
let input = { a: [1, [2, [3]]], b: [4, [5], [6]] };

// output : { a: [1,2,3], b: [4,5] }
for(let key in input){
    let arr = input[key];
    console.log("Length ",arr.length);
    let newArr = arr.flat(arr.length);
    input[key] = newArr;
}

console.log(input);
// key insight : there's a method in array that flatens each element. This method accepts recursion depth as arg.
