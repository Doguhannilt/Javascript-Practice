/*
Exercise: 4

Write a JS program to create a new string from a given string
taking the first 3 characers and the last 3 characters of a string
and adding them together. The string length must be 3 or more, if not; the original
string is returned.

*/


const makeNewString = ( str ) => {
    return str.length < 3 ? str : str.slice(0,3) + str.slice(-3) 
}

makeNewString("DoguIlterandWhy")