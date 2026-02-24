// Task : Unique values across all object arrays

let obj = { x: [1,2,3], y: [2,3,4], z: [4,5] };

// expected output : [1,2,3,4,5];

let unique = [];

for(let keys in  obj){
    let values = obj[keys];
    values.forEach(element => {
        if(!(unique.includes(element))){
            unique.push(element);
        }
    });
}

console.log(unique);

