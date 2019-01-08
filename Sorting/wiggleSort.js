var wiggleSort = function(nums) {
    for(let i=0; i<nums.length-1; i++) {
         if((i%2 == 0 && nums[i] <= nums[i+1]) || (i%2 != 0 && nums[i] >= nums[i+1])) {
             continue;
         } else {
             let temp = nums[i];
             nums[i] = nums[i+1];
             nums[i+1] = temp;
         }
     }
 }
};