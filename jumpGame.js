
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.

let jump = function(array) {
    if(n < 2) {
        return 0;
    }

    let level = 0;
    let currentMax = 0;
    let i = 0;
    let nextMax = 0;

    while(currentMax-i+1 > 0) {
        level++;
        for(i; i <= currentMax; i++) {
            nextMax = Math.max(nextMax, array[i] + i);
            if(nextMax >= n-1) {
                return level;
            }
            currentMax = nextMax;
        }
    }
    return 0;
}