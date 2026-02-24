let obj = { a: 20, b: 60, c: 40, d: 90 };

let output = {};
for(let key in obj){
    if(obj[key] > 50){
        output[key] = obj[key];
    }
}

console.log(output);

