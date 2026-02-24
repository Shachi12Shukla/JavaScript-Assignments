// Task : Nested object destructuring

let given_obj = { user: { profile: { name: "Alice", age: 25 } } };
// expected output : Alice 25

/* obj profile = {
        name: "Alice", age: 25
   }

   const {name,age} = profile

*/

const {user : {profile: {name,age}}} = given_obj;
console.log(name,age);
