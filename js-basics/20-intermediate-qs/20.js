// Task : Merge two objects (no sum, override second)
let obj1 = { a: 10, b: 20 };
let obj2 = { a: 5, c: 15 };

function merge(obj1,obj2){
    let result = {...obj1}
    for(let key in obj2){

        if(typeof obj2[key] === "object" && obj2[key] !== null && typeof result[key] === "object"){
            result[key] = merge(result[key],obj2[key]);
        }
        else{
            result[key] = obj2[key];
        }
    }
    return result;
}

console.log(merge(obj1,obj2));

// same as question 15