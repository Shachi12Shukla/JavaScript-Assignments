// Remove deeply nested key from object
let nested_object = { a: { b: { c: 1, d: 2 } } };
let remove = "c";

/// Approach 1
// for(let key in input){
//     let first_object = input[key];
//     let second_object = first_object.b;
//     console.log(second_object);
//     delete second_object[remove];  // delete second_object.remove wouldn't go
// }
// console.log(nested_object);

/// Approach 2
function removeDeep(obj) {
    for (let key in obj) {
        let value = obj[key];

        if (key === remove) {
            delete obj[key];
        }
        else if (typeof value === "object" && value !== null) {
            removeDeep(value); // go deeper
        }
    }
}

removeDeep(nested_object);
console.log(nested_object);

/// Approach 1 better written 
// for (let key in nested_object) {
//     let first_object = nested_object[key];
//     if (first_object && typeof first_object === "object") {
//         for (let innerKey in first_object) {
//             let second_object = first_object[innerKey];
//             if (second_object && typeof second_object === "object") {
//                 delete second_object[remove];
//             }
//         }
//     }
// }

// console.log(nested_object);