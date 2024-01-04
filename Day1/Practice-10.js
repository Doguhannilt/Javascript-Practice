/*
Exercise: 10

Write a JS program to get the largest even number from an array of integers
*/

const largestEvent = (arr) => Math.max(...arr.filter(
    num => num % 2 === 0
))