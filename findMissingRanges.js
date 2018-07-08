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