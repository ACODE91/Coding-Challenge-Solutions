var swap = function(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

var removeElement = function(nums, val) {
	if(nums.length < 1) {
		return 0;
	}

	let left = 0, right = nums.length - 1, lastIndex= 0;

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] == val) {
			lastIndex = i;
			if(i - left < right - i) {
				while(i - 1 >= 0 && i > 0) {
					swap(nums, i, i - 1);
					i--;
				}
				nums.shift();
			} else {
				while(i + 1 <= nums.length - 1 && i < nums.length - 1) {
					swap(nums, i, i + 1);
					i++;
				}
				nums.pop();
			}
			i = lastIndex - 1;
		} 
	}
	return nums.length;
}; 