/*
Practice: 7

Given two values, write a JS program to find out which one is nearest to 100
*/

const whoIsNearto100  = (first_val, second_val) => {
    if (Math.abs(100 - first_val) > Math.abs(100 - second_val)) {
        return `First value is near to 100`
    } else {
        return `Second value is near to 100`
    }
}


whoIsNearto100(10,30)