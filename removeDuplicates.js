//brute force
var removeDuplicates = function(nums) {
    let prev = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] == prev) {
            nums.splice(i, 1);
            i--;
        } else {
            prev = nums[i];
        }
    }
      return nums.length;
  };
//solution
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
