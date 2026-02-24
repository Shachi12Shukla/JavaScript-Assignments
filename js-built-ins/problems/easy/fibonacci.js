/*
  Write two functions to generate the Fibonacci sequence:

  1. `fibonacci` (Iterative Version):
     - Takes an integer `n` as input and returns an array containing the first `n` numbers in the Fibonacci sequence.
     - The Fibonacci sequence is calculated iteratively.
  
  2. `fibonacciRecursive` (Recursive Version):
     - Takes an integer `n` as input and returns the `n`-th number in the Fibonacci sequence using recursion.
  
  What is the Fibonacci sequence?
  - The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

  Example:
  - Input: 10
  - Output (Iterative): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  - Output (Recursive): 34
  
  - Input: 5
  - Output (Iterative): [0, 1, 1, 2, 3]
  - Output (Recursive): 3

  - Input: 1
  - Output (Iterative): [0]
  - Output (Recursive): 0
  
  - Input: 0
  - Output (Iterative): []
  - Output (Recursive): 0

  Note:
  - The iterative function should return the first `n` numbers of the sequence.
  - The recursive function should return the `n`-th Fibonacci number (0-based index).

  Once you've implemented the logic, test your code by running
  - `npm run test-fibonacci`
*/


// Iterative Fibonacci function
function fibonacci(n) {
  // Your code here
  let output = [];
  for(let i = 0; i < n; i++){

    if(i === 0 || i === 1){
      output.push(i);
    }

    else{
        output.push(output[i-1] + output[i-2]);
    }
   
  }
  return output;
}

// Recursive Fibonacci function
function fibonacciRecursive(n) {
  // Your code here

  // base case
  if(n === 0) return 0;  // in this PS , fib(0) === 0 , but this 0 is not considered as first fibonacci number 
  // fib(1) === 1 , fib(2) === 1, fib(3) === 2 , fib(4) === 3
  if(n === 2 || n === 1) return 1;  // that is indexing starts from 1 not 0 , in this PS
  
  // recursive call
  let ans = fibonacciRecursive(n-1) + fibonacciRecursive(n-2);

  return ans;

}

console.log(fibonacci(5))
console.log(fibonacciRecursive(5));
module.exports = { fibonacci, fibonacciRecursive };


