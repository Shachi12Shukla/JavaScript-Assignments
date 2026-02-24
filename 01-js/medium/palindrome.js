/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");    // Key learning : replace(/[^a-z0-9]/g, "") -> detailed explaination in copy
    let l = 0;
    let h = str.length - 1;
    
    while(l <= h){
      if(str[l] === str[h]){
        l++;
        h--;
      }
      else if(str[l] !== str[h]) return false;
    }
    return true;
}

console.log(isPalindrome("Nan"));

module.exports = isPalindrome;