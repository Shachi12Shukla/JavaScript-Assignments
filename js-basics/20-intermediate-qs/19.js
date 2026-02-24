// Task : Reconcile two lists (missing + extra items)
let expected = ["a","b","c"];
let actual = ["b","c","d"];

let output = {missing : [],
    extra : []
};

// find missing : what is not present in actual 
for(let item of expected){
    if(!actual.includes(item)){
        output.missing = item;
    }
}

// find extra : what is not present in expected
for(let item of actual){
    if(!expected.includes(item)){
        output.extra = item;
    }
}

console.log(output);

// easy