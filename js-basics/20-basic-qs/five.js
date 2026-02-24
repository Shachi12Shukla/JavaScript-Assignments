// Flatten object of arrays into one array

let givenObj = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// expected output : ["apple", "banana", "carrot", "pea"]

// my solution
let result = [];

for(let key in givenObj){
    result = result.concat(givenObj[key]);
}
console.log(result);