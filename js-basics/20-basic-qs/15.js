// task : Convert object to query string
let person = { name: "Alice", age: 25 };
// output : "name=Alice&age=25"

let result = "";
for(const [key,value] of Object.entries(person)){
    
    if(result) result+= "&"
    result += (key + "=" + person[key]).toString();
}

console.log(result);

// result = (key + "=" + person[key]).toString(); -> PROBLEM - override ho jayega string so 
// final key value pair hi bachega. And "&" kabhi ayega hi nahi instead 
// jab aapko ek key value pairs mil gae then usmein "&" lagao

