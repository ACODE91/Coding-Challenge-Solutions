let solution = function(nums) {
let combos = [];
backtrack(combos, [], 0, nums);
return combos;
}

let backtrack = function(combos, combo, start, nums) {
let copy = combo.slice();
combos.push(copy);

for(let i = start; i < nums.length; i++) {
    combo.push(nums[i]);
    backtrack(combos, combo, i + 1, nums);
    combo.pop();
}
}