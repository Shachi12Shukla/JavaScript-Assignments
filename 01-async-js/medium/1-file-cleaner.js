// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

// let cleaned = data.replace(/\s+/g, " ").trim();

// read file
let data = fs.readFileSync("01-async-js\\medium\\clean-this-file.txt","utf-8");

let cleaned = data.replace(/\s+/g, " ").trim();

// write file
fs.writeFileSync("01-async-js\\medium\\clean-this-file.txt", cleaned);

console.log("file cleaned successfully!");




