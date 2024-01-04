/*
Exercise: 1

Write a JS program to check two numbers and return true if one of the number
is 100 or if the sum of the two numbers is 100
*/

 // Solving 1
const isEqualTo100 = (a,b) => {
    a === 100 || b === 100 || (a+b) === 100
}

 // Solving 2

 const isEqualTo100IfElse = (a, b) => (a === 100) ? true : ((b === 100) ? true : (a + b === 100 ? true : false));

 console.log(isEqualTo100IfElse(100, 100)); // true
 

 // Solving 3

const isEqualTo100IfElse2 = (a, b) => (a === 100) || (b === 100) || (a + b === 100);

console.log(isEqualTo100IfElse(100, 100)); // true
