/*
Exercise: 6

Write a JS program to concatenate two strings except their first character
*/

const concatenate = (first_string, second_string) => {
       return  first_string.slice(1) + second_string.slice(1)
}

concatenate("Ahmet","Mehmet")