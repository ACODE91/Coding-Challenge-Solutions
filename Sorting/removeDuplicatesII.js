var removeDuplicates = function(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }

  let last = 0;
  let count = 1;

  for (let candidate = 1; candidate < nums.length; candidate++) {
    // put the candidate into position at the end of the list we're building
    nums[last + 1] = nums[candidate];

    // determine if the candidate is equal to the last element in our list
    let equal = nums[last] == nums[last + 1];

    // if the candidate isn't equal to the last element in our list,
    // or if the count is less than 2,
    // we can append the candidate to the end of our list
    if (!equal || count < 2) {
      // append the candidate to the end of the list
      last++;

      // update the count
      count = !equal ? 1 : count + 1;
    }
  }

  return last + 1;
};
