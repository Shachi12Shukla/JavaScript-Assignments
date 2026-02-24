// Task : Find common keys between two objects
let  obj1 = { a: 1, b: 2, c: 3 };
let obj2 =  { b: 4, c: 5, d: 6 };

// output : ["b","c"]

let common = [];
for(const key1 in obj1){
   for(const key2 in obj2){
    if(key1 === key2){
        common.push(key1);
    }
   }
}
console.log(common);





