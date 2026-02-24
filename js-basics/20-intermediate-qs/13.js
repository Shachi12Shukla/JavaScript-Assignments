// Task : Find most repeated word across categories
const input = { drinks: ["apple","tea"] , fruits: ["apple","apple","banana"]};
// expected output : apple 

let most_repeated = [];
function Most_Repeated_Word(){
    for(let key in input){
    let value_array = input[key];
    for(let index = 0; index < value_array.length ; index++){
        let word = value_array[index];
        if(input.drinks.includes(word)){
            most_repeated.push(word);
        }
    }
    }
    return most_repeated[most_repeated.length - 1];
}

console.log(Most_Repeated_Word());
