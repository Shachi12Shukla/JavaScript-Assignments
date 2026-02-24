let cities = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];

// expected : { Delhi: ["A", "C"], Mumbai: ["B"] }

let result = {};
for(let person of cities){

    if(result[person.city]){
        result[person.city].push(person.name);
    }

    else{
        result[person.city] = [person.name];
    }
}
console.log(result);

