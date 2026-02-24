/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/

// function compression(str) {
//   // Your code here

//   //1. find freq
//   // 2. compression - string with freq
  
//   let freq = {};
//   let unique_chars = new Set();

//   for(char of str){
//     freq[char] = (freq[char] || 0) + 1;
//     unique_chars.add(char);
//   }
  

//   let compressed = "";
//   for(let char of unique_chars){
//     compressed = compressed + char;
//     if(freq[char] > 1){
//       compressed = compressed + freq[char];
//     }
    
//   }
//   return compressed;
// }

// console.log(compression("aaAAa"));  // *** The following code runs fine for 5 test cases but fails at this case ****
// BECAUSE LOGIC IS WRONG

// CORRECT ALGORITHM

// 1. Start from first character

// 2. Count how many times it repeats consecutively

// 3. When character changes → append result

// 4. Reset counter

function compression(str){
  if(str.length === 0) return "";
  
  let count = 1;
  let result = "";
  for(let i = 1; i <= str.length; i++){  // i = 0 to i < str.length would give undefineda2A2
    if(str[i] === str[i-1]){
      count++;
    }

    else{
      result += str[i-1];
      if(count > 1){
        result += count;
      }
      count = 1;
    }
  }
  return result;
}

console.log(compression("abbba"));
module.exports = compression;

// good problem 
// DRY RUN 
