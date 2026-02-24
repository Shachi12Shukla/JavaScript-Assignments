// Task : Transform API response to object (id → name)
const API_response = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
// expected output : { 1: "Alice", 2: "Bob" }

let output = {};

for(let index in API_response){
    const obj = API_response[index];
    output[obj.id] = obj.name;
}

console.log(output);