/*
Exercise: 4

Write a JS program to get the current date
*/

const formatDate = (date =new Date()) => {
    const days = date.getDay()
    const months = date.getMonth()
    const years = date.getFullYear()
    
    return `${days} / ${months} / ${years}`
}