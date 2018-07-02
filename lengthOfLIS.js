//DP solution with O(n^2) time complexity;
var lengthOfLIS = function(nums) {
    let longest = 0;
    let i = 1;
    let j = 0;
    let array = new Array(nums.length);
    array.fill(1);
  
    let dp = function(i, j, array) {
        if(i == array.length) {
            return;
        }
        
        while(i !== j){
        if(nums[j] < nums[i]) {
            array[i] = array[j] + 1;
        }
            j++;
        }
        
        dp(i + 1, 0, array);
    }

    dp(i, j, array);
    
    return array[array.length - 1];
    };