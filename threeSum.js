let threeSum = function(nums) {
    nums.sort((a,b) => {return a - b});
    let res = [];
    for (let i = 0; i < nums.length-2; i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
            let lo = i+1, hi = nums.length-1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] == sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] == nums[lo+1]) lo++;
                    while (lo < hi && nums[hi] == nums[hi-1]) hi--;
                    lo++; hi--;
                } else if (nums[lo] + nums[hi] < sum) lo++;
                else hi--;
           }
        }
    }
    return res;
}

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