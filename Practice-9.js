/*
Exercise: 9

Write a JS program to check whether a given array of integers is sorted in 
asc order
*/

const sortedOrNot = (arr) => {
    return arr.sort();
}

sortedOrNot([12,54,1,45,76,12])

const Ascending = (arr) => {
    for ( let i =0; arr.length; i +=1) {
        if (arr[i+1] < arr[i]) return false
    }
    return true
}


