//brute force attempt
var threeSum = function(nums) {
    let results = [];
      
    if(nums.length < 2) {
        return [];
    } 
      
    nums.sort((a,b) => {return a - b});
    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 2;
      
    while(i !== k) {
      let sum = nums[i] + nums[k] + nums[j];
      
      if(sum < 0) {
          i++;
      } else if(sum > 0) {
          k--;
      } else {
          results.push([nums[i], nums[k], nums[j]]);
          k--;
      }
    }
      
    j--;
    
    while(j !== k) {
    let sum = nums[i] + nums[k] + nums[j];
      
    if(sum > 0) {
        j--;
    } else if(sum < 0) {
        k++;
    } else {
        results.push([nums[i], nums[k], nums[j]]);
        j--;
    }
  
    }
     return results; 
  };