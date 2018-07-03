//DP solution with O(n^2) time complexity;
var lengthOfLIS = function(nums) {
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

//n Log(n) Binary Search Solution

let lengthOfLIS = function(nums) {
    let tails = new Array(nums.length);
    let size = 0;

    for(let x = 0; x < nums.length; x++) {
        let i = 0; 
        let j = size;

        while(i !== j) {
            let m = (i + j)/2;
            if (tails[m] < nums[x]) {
                i = m + 1;
            } else {
                j = m;
            }
        }
        tails[i] = nums[x];
        if(i == size) {
            size++;
        }
    }
    return size;
}