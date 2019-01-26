var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = nums[i];
    else sum += nums[i];
    if (sum > max) max = sum;
  }
  return max;
};
