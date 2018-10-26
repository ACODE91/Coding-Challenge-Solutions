//first solution with queue
var moveZeroes = function(nums) {
	let queue = [];

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] == 0) {
			queue.push(i);
		} else {
			if(queue.length > 0) {
				let tmp = nums[i];
				nums[i] = nums[queue[0]];
				nums[queue[0]] = tmp;
				queue.shift();
				queue.push(i);
			} else {
				continue;
			}
		}
	}
};