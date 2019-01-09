const search = function (nums, left, right) {
  if (left == right) {
    return left;
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] > nums[mid + 1]) {
    return search(nums, left, mid);
  }

  return search(nums, mid + 1, right);
};

const findPeakEleftement = function (nums) {
  return search(nums, 0, nums.length - 1);
};
