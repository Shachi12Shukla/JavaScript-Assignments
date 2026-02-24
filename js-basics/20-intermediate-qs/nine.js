// Task : Build index of ids grouped by category

const given = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
];

// output : { fruit: [1,3], veggie: [2] }
let output = {};
for(let index in given){
  let current_record = given[index];
  
  if(!output[current_record.category]){
    output[current_record.category] = [];
  }
  output[current_record.category].push(current_record.id);
}

console.log(output);

// Key insight : Use dot notation when you want to create a key with the key name 
// Use bracket notation when you want to create a key dynamically 

// So, output[current_record.category] = id_array;  // Uses the VALUE as the key
// example This dynamically uses the value of the variable ("fruit", "veggie", etc.) as the key, so you get: { fruit: [...], veggie: [...] }.