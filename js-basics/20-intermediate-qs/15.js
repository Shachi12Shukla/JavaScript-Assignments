// Task : Deep merge two nested objects

let obj1 = { a: { x: 1, y: 2 } };
let obj2 = { a: { y: 3, z: 4 } };

// expected output : { a: { x: 1, y: 3, z: 4 } }
function deepMerge(obj1,obj2){
    let result = {...obj1};

    for(let key in obj2){

        if(typeof obj2[key] === "object" && obj2[key] !== null && typeof result[key] === "object"){
            console.log("result[key] ",result[key]);
            result[key] = deepMerge(result[key] , obj2[key]);
        }
        else{
            result[key] = obj2[key];
        }
    }

    return result;
}
console.log(deepMerge(obj1,obj2));

// dry run this 



