// Task : Remove duplicate objects by id
let given = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

// expected output : [{ id: 1, name: "A" },{ id: 2, name: "B" }]

// Approach 1 : Traditional 
let seen = new Set();
// for(const index in given){

//     let obj = given[index];

//     if(!(seen.has(obj.id))){
//         seen.add(obj.id); 
//     }
//     else{
//         given.splice(index,1);
//     } 
// };
// console.log(given);

// Approach 2 (better): Using filter 
given = given.filter(obj =>{

      if(seen.has(obj.id)){
          return false;
      }
      seen.add(obj.id);
      return true;

    });
console.log(given);



