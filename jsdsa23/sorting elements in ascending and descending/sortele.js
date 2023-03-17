//1) JavaScript Program to demonstrate sorting elements in ascending and descending in array

// Sample array of numbers
const numbers = [3, 7, 1, 9, 2, 8, 5, 4, 6];
// Sorting elements in ascending order
const ascendingOrder = numbers.sort((a, b) => a - b);
console.log("Array in ascending order:", ascendingOrder);
// Sorting elements in descending order
const descendingOrder = numbers.sort((a, b) => b - a);
console.log("Array in descending order:", descendingOrder);
