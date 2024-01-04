/*
Exercise: 8

Write a JS program to find the number of even digits in an array of integers
*/

// Solving 1
const countEventNumber = (arr) => {
    arr.filter(num => num % 2 === 0).length
}

// Solving 2
const countEvenNumberWLoop = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvenNumberWLoop([10, 2, 1, 6, 7])); // Output: 3
