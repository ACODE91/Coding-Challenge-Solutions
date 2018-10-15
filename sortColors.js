let sortColors = function(nums) {
	let tmp = 0; 
	let low = 0;
	let mid = 0;
	let high = nums.size() - 1;
    
	while(mid <= high)
	{
		if(nums[mid] == 0)
		{
			tmp = nums[low];
			nums[low] = nums[mid];
			nums[mid] = tmp;
			low++;
			mid++;
		}
		else if(nums[mid] == 1)
		{
			mid++;
		}
		else if(nums[mid] == 2)
		{
			tmp = nums[high];
			nums[high] = nums[mid];
			nums[mid] = tmp;
			high--;
		}
	}
};