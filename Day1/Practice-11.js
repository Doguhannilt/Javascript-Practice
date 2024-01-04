/*
Practice: 12

Write a JS program to replace the first digit in a string (should containt
    at least digit) with $ character
*/

const isReplacing = (val) => {
    return /\d/.test(val) ? val.replace(/\d/, '$') : val;
}

console.log(isReplacing("Hello")); // "$ello"
