/*
20) JavaScript program to implement function to sort elements using quick sort and merge two
sorted array elements.
*/

// Function to sort an array using Quick Sort algorithm
function quickSort(arr) {
if (arr.length <= 1) {
return arr;
}
const pivot = arr[0];
const left = [];
const right = [];
for (let i = 1; i < arr.length; i++) {
if (arr[i] < pivot) {
left.push(arr[i]);
} else {
right.push(arr[i]);
}
}
return [...quickSort(left), pivot, ...quickSort(right)];
}
// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
const mergedArr = [];
let i = 0;
let j = 0;
while (i < arr1.length && j < arr2.length) {
if (arr1[i] < arr2[j]) {
mergedArr.push(arr1[i]);i++;
} else {
mergedArr.push(arr2[j]);
j++;
}
}
return [...mergedArr, ...arr1.slice(i), ...arr2.slice(j)];
}
