// Task : Find intersection of all arrays in object
const input = { a: [1,2,3], b: [2,3,4], c: [3,4,5] };
// expected output : [3]

function intersection_all_arrs(input){
    const arrays = Object.values(input);
    let intersection = arrays[0];

    for(let i = 1; i < arrays.length; i++){
        intersection = intersection.filter(num => arrays[i].includes(num));
    }

    return intersection;
}

console.log(intersection_all_arrs(input));

// Dry run this 