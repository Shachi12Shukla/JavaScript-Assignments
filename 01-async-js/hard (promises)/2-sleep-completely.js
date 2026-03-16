/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

const fs = require("fs");

function sleep(milliseconds) {
    return new Promise(function(resolve,reject){
       
        const start = Date.now();
        while(Date.now() - start < milliseconds){

        }
         let seconds = milliseconds/1000;
         resolve();
        
    });
};

// sleep(600000000);

// let sum = 0;
// for(let i = 0; i < 200; i++){
//     sum += i;
// }
// console.log(sum);

module.exports = sleep;
