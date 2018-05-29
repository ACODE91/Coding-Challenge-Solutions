// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


var nextPermutation = function(nums) {
let i = nums.length - 2;
while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
}
if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
        j--;
    }
    swap(nums, i, j);
}
    reverse(nums, i + 1);

    return nums;
};

var reverse = function(nums, start) {
let i = start;
let j = nums.length - 1;
while(i < j) {
    swap(nums, i, j);
    i++;
    j--;
}
}

var swap = function(nums, i, j) {
let temp = nums[i];
nums[i] = nums[j];
nums[j] = temp;
}
    
nextPermutation([1,2,3]);