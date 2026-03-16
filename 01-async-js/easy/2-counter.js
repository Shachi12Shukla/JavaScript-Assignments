// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let count = 1;

function Counter(){
    console.log(count);
    count++;

    if(count <= 30){
        setTimeout(Counter,1000);
    }
}

Counter();