let findMissingRanges = function(nums, lower, upper) {
    let results =[];
  
    // the next number we need to find
    let next = lower;
    
    for (let i = 0; i < nums.length; i++) {
      // not within the range yet
      if (nums[i] < next) continue;
      
      // continue to find the next one
      if (nums[i] == next) {
        next++;
        continue;
      }
      
      // get the missing range string format
      results.push(getRange(next, nums[i] - 1));
      
      // now we need to find the next number
      next = nums[i] + 1;
    }
    
    // do a final check
    if (next <= upper) results.push(getRange(next, upper));
  
    return results;
}

let getRange = function(n1, n2) {
    return (n1 == n2) ? n1.toString() : n1.toString() + '->' + n2.toString();
}

//brute force method
var findMissingRanges = function(nums, lower, upper) {
    let lowerR = lower;
    let upperR;
    let results = [];
        
    for(let i = 0; i < nums.length; i++) {
        if(lowerR == nums[i]) {
            lowerR = nums[i];
            upperR = nums[i + 1];
            continue;
        }
    
        if(lowerR + 1 < upperR - 1) {
            results.push((lowerR + 1).toString() + '->' + (upperR - 1).toString());   
        } else if(lowerR + 1 == upperR - 1) {
            results.push((lowerR + 1).toString());
           
        }
    
        lowerR = nums[i];
        upperR = nums[i + 1];
    }
    
        if(nums[nums.length - 1] + 1 < upper) {
            results.push((nums[nums.length - 1] + 1).toString() + '->' + upper.toString());
        } else if(nums[nums.length - 1] + 1 > upper) {
             results.push(lower.toString());
        } else {
            results.push(lower.toString())
        }
        
        
        return results;
    };