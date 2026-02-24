// Task : Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language 
const languages = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
};
// expected output : { hello: { en: "Hello", fr: "Bonjour", es: "Hola" },bye: { en: "Goodbye", fr: "Au revoir" }};

let output = {hello : {}, bye: {}}
for(let  language in languages){

}


