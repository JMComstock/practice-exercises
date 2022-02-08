"use strict";

//  Monday Morning Warmup
// TODO: PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"   --- EXPECTED OUTPUT 2: 34 (edited)

// let input = "42958372"
// let sum = "0";
//
// function addString () {
//     for(let i=0; i<input.length-1;i++) {
//         let stringToAdd = input.split(i);
//         sum += parseInt(input);
//     }
//
//     return sum + parseInt(input);
// }
// console.log(addString());

// TODO: Write a function that returns an object displaying any number/letter that appears consecutively in a string of numbers.
//  The object should display how many times that letter/number appears consecutively
// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
// ---
// INPUT: “BQAAIPPPPFFA”
// EXPECTED OUTPUT: {a: 2, p: 4, F: 2}

const str = "BQAAIPPPPFFA";
function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            result.push(elem[0]);
        });
    }
    return result;
}
console.log(...howManyRepeated(str));

// TODO: remove duplicates from an array of integers

let arr = [4, 5, 73, 34, 5, 73, 51, 89];

function removeDuplicates (data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr));

