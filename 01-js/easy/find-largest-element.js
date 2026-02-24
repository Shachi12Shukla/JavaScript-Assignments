/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if(numbers.length === 0)return undefined;
  return Math.max(...numbers);          
}

// console.log(findLargestElement([-3,-7,-2,-9,-1]));
module.exports = findLargestElement;

// Key learning :-
// 1. the spread operator here does not creates a copy of array, instead expands the array into function(max) args
// 2. the above approach works only for small arrays , js engine does not handles large number of arguments => throws error
// 3. alternative approach is to use reduce. 

function findLargestElementAlternative(numbers){
  return numbers.reduce((max,num) => Math.max(max,num));  // alternative approach - Reduce hand;es 2 elements at a time
}

// console.log(findLargestElementAlternative([3,7,2,9,1]));