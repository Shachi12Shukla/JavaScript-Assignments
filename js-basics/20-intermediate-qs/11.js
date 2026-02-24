// **** not easy ****
// Task : Check if two objects are deeply equal
const obj1 = { a: { x: 1, y: 2 } };
const obj2 = { a: { x: 3, y: 2 } };
// expected output : true

function check_equal(obj1, obj2) {
    // same reference or primitive equality
    if (obj1 === obj2) return true;

    // if either is not object → not equal
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // different number of keys
    if (keys1.length !== keys2.length) return false;

    // compare each key recursively
    for (let key of keys1) {
        if (!keys2.includes(key) || !check_equal(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}


console.log(check_equal(obj1, obj2)); // true
