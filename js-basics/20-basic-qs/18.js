// task : Convert array of objects to lookup by id

let arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

// expected output : { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

let output = {};
for(let index = 0; index <2; index++){
    output[index + 1] = arr[index];
}

console.log(output);

