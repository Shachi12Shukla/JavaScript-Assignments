// NOTE : 11th exercise is repeated

let entries = { a: 3, b: 1, c: 2 };

// TASK : Sort object entries by values (ascending)
// expected output : [["b",1], ["c",2], ["a",3]]

let tempArr = [];
for(let entry in entries){
    tempArr.push([entry , entries[entry]]);
}

console.log(tempArr);
tempArr.sort( function(a,b){
    return a[1] - b[1];
})
console.log(tempArr);

