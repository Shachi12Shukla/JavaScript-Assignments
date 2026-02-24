// Task : Count word occurences

let givenArr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let occurence = {};

for(let word of givenArr){
    
    if(occurence[word]){
        console.log(word);  
        occurence[word] += 1; // OR occurence[word]++; 
    }

    else{
        occurence[word] = 1;
    }

  //  occurence[word] = occurence[word] ? occurence[word] + 1 : 1;
    
}
console.log(occurence);

// second way
// var count = {};
// for (const word of givenArr) {
//   count[word] = (count[word] || 0) + 1;
// }
// console.log(count);

// third way - using "reduce"

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// count = arr.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);

