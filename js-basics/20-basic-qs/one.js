//  Task : Sum values in object arrays
let givenObj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

// expected output : { food: 60, travel: 20, bills: 100 }

// my solution
let result = {};
for (let key in givenObj) {
    result[key] = givenObj[key].map((a,b) => a + b);  // map se sum nahi hoga
}

console.log(result);




