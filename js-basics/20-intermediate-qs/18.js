// Task : Sort array of objects by name then age
let input = [ { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
];

input.sort((a,b) => {
    // step 1. compare names
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;

    // step 2. if names are equal then compare age
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
})

console.log(input);

// easy

