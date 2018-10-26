var majorityElement = function(nums) {
	let target = Math.floor(nums.length/2), map = {};
	if(nums.length == 1) {
		return nums[0];
	}
        
	for(let i = 0; i < nums.length; i++) {
		if(map[nums[i]]) {
			map[nums[i]]++;
			if(map[nums[i]] > target) {
				return nums[i];
			} 
		} else {
			map[nums[i]] = 1;
		} 
	}
        
};