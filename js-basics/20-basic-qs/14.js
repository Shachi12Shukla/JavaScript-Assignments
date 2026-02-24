let obj = { name: "alice", city: "delhi" };

// task : Capitalize string values inside object
// output : { name: "Alice", city: "Delhi" }

// using external object
// function capitalizeStringsInObject(o){
//     const result = {};
//     for(const [k, v] of Object.entries(o)){
//         if(typeof v === 'string' && v.length > 0){
//             result[k] = v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
//         } else {
//             result[k] = v;
//         }
//     }
//     return result;
// }

// const output = capitalizeStringsInObject(obj);
// console.log(output);


// doing in-place
function capitalizeStringsInObject(obj){
    
    for(let key of Object.keys(obj)){
        let value = obj[key];
        if(typeof value === 'string' && value.length > 0){
            value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            obj[key] = value;  // assigned transformed string back 
            // we could have also write directly to thr property like
            // obj[key] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
    }
}

capitalizeStringsInObject(obj);
console.log(obj);


