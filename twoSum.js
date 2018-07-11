var twoSum = function(nums, target) {
    let map = {}

    for (i = 0; i < nums.length; i++) {
        //if you ever run into problems that involve sums and you can't sort the order
        //use something like complement and store the remaining values in map.
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
   
  return [];
};
