let Stack = function() {
	this.storage = [];
};

Stack.prototype.peek = function() {
	return this.storage[this.storage.length - 1];
};

Stack.prototype.isEmpty = function() {
	return this.storage.length == 0;
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.push = function(item) {
	this.storage.push(item);
};

let nextGreaterElement = function(findNums, nums) {
	let ret = new Array(findNums.length);
	let stack = new Stack();
	let map = {};
	for(let i = nums.length - 1; i >= 0; i--) {
		while(!stack.isEmpty() && stack.peek() <= nums[i]) {
			stack.pop();
		}
		if(stack.isEmpty()) map[nums[i]] = -1;
		else map[nums[i]] =  stack.peek();
		stack.push(nums[i]);
	}
	for(let i = 0; i < findNums.length; i++) {
		ret[i] = map[findNums[i]];
	}
	return ret;
};