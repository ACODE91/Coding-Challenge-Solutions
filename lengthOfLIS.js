//Alternate DP solution with O(n^2) time complexity
let lengthOfLIS = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    //initialize a DP array to keep track
    let dp = new Array(nums.length);
    //the first element would be 1 because 1 elements length is still 1.
    dp[0] = 1;
    let maxans = 1;
    //maxans is for the same reason above.
    for (let i = 1; i < dp.length; i++) {
        //max val keeps track of the largest number as you iterate through with the j loop
        let maxval = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                //we need to keep track of max subsequence by choosing either the previously 
                //recorded max length or the current max length to see which is bigger.
                maxval = Math.max(maxval, dp[j]);
            }
        }
        dp[i] = maxval + 1;
        //overwrites if it finds anything larger than the previous max answer
        //so you don't have to loop through it to overwrite 
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
}

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