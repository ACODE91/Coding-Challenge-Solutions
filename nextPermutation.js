// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


var nextPermutation = function(nums) {
    let sortedDescArr = nums.slice().sort((a, b) => {return b - a});
    let index = 0;
    let swap;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === sortedDescArr[index]) {
            index++;
            swap = nums[i];
        }
    }
    
    for(let i = 0; i < sortedDescArr.length; i++) {
        if(sortedDescArr[i] === swap) {
            sortedDescArr.splice(i, 1);
        }
    }
    
    //swap indices
    
    };
    
    nextPermutation([1,2,3]);