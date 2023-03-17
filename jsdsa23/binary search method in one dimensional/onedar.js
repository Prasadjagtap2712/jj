/*
13) JavaScript program to search insert elements using binary search method in one dimensional
array
*/

function binarySearch(arr, value) {
let start = 0;
let end = arr.length - 1;
let mid = Math.floor((start + end) / 2);
while (arr[mid] !== value && start <= end) {
if (value < arr[mid]) {
end = mid - 1;
} else {
start = mid + 1;
}
mid = Math.floor((start + end) / 2);
}
if (arr[mid] === value) {
return mid;
}
return -1;
}
function insert(arr, value) {
let i = arr.length - 1;
while (i >= 0 && arr[i] > value) {
arr[i + 1] = arr[i];
i--;
}
arr[i + 1] = value;
return arr;}
// Test the binarySearch and insert functions
const arr = [2, 5, 7, 10, 13, 18, 21];
console.log(binarySearch(arr, 13)); // Expected output: 4
console.log(binarySearch(arr, 20)); // Expected output: -1
insert(arr, 15);
console.log(arr); // Expected output: [2, 5, 7, 10, 13, 15, 18, 21]
