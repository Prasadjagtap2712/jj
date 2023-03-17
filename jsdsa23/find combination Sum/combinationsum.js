/*
17) Javascript program to find combination Sum
*/

function combinationSum(candidates, target) {
const result = [];
function backtrack(start, curr, sum) {
if (sum === target) {
result.push([...curr]);
return;
}
if (sum > target) {
return;
}
for (let i = start; i < candidates.length; i++) {
curr.push(candidates[i]);
backtrack(i, curr, sum + candidates[i]);
curr.pop();
}
}
backtrack(0, [], 0);
return result;
}
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result);
