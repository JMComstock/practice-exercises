"use strict";

//  Monday Morning Warmup
// TODO: PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"   --- EXPECTED OUTPUT 2: 34 (edited)

let input = "42958372"
let sum = "0";

function addString () {
    for(let i=0; i<input.length-1;i++) {
        let stringToAdd = input.split(i);
        sum += parseInt(input);
    }

    return sum + parseInt(input);
}
console.log(addString());