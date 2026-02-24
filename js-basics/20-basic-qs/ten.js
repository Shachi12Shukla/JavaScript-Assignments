let user = { name: "Rahul", age: 23, city: "Noida" };
let arr = ["name","city"];
// Task : Pick only given keys from the object

let result = {};

for(const [keys,values] of Object.entries(user)){
    if(arr.includes(keys)){
        result[keys] = values;
    }
}

console.log(result);

