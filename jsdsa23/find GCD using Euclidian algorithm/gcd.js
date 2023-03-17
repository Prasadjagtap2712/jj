/*
18) Javascript program to find GCD using Euclidian algorithm
*/

function gcd(a, b) {
if (b === 0) {
return a;
}
return gcd(b, a % b);
}
const a = 84;
const b = 36;
const result = gcd(a, b);
console.log(result);
