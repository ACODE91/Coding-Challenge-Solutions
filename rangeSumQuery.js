//optimal solution
let NumArray = function(nums) {
    sum = new Array(nums.length + 1);
    for (let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
}

NumArray.prototype.sumRange(i, j) {
    return sum[j + 1] - sum[i];
}

//my brute force solution
var NumArray = function(nums) {
    this.dp = new Array(nums.length);
    this.nums = nums;    
    
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    this.dp[i] = sum;
    }
    
    };
    
    NumArray.prototype.sumRange = function(i, j) {
        sum = this.dp[j];
        for(let low = 0; low < i; low++) {
            sum -= this.nums[low];
        }
        return sum;
    };
    