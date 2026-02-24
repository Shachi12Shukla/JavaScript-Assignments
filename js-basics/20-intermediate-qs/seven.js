// Task : Chunk object entries into groups of size
const entries = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;
// output : [ [["a",1],["b",2]], [["c",3],["d",4]] ]

let result = [];
for(let key in entries){
    let group = [];
    let key_string = key.toString();
    if(!(group.includes(key) && group.includes(entries.key))){
        group.push(key_string);
        group.push(entries[key]);
        result.push(group);
    };
}

console.log(result);

// Task 2 : Find longest string among object values
const fruits = { a: "apple", b: "banana", c: "kiwi" };

let longest_string;
let longest_length = 0;
for(key in fruits){
    let str = fruits[key];
    if(str.length > longest_length){
        longest_length = str.length
        longest_string = str;
    }
}
console.log(longest_string);
console.log(longest_length);

