// Task : Remove falsy values from object
let input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// expected output : { c: "hello", e: 5 }

//  Approach 1 using for "in" loop
// for(let key in input){
//     let value = input[key]; 
//     if(typeof(value) === 'undefined' || value === null || value === 0){
//         delete input[key];
//     }
// }
// console.log(input);

// Approach 2 using  for "of" loop
for(let [key,value] of Object.entries(input)){
    // let value = input[key]; 
    if(typeof(value) === 'undefined' || value === null || value === 0){
        delete input[key];
    }
}
console.log(input);
