let numbers = [1,2,3,4,5,6];

// output : { even: 3, odd: 3 }
// Task : Count even and odd numbers

let output = {even:0, odd:0 };
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        // even
        output.even += 1; 
    }
    else{
        // odd
        output.odd += 1;
    }
}

console.log(output);

