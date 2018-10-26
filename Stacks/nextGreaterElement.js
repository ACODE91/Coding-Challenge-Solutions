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
	//loop backwards because there are no elements greater than
	//the last element.
	for(let i = nums.length - 1; i >= 0; i--) {
		//empty out stack until you find an element greater than 
		//or equal to your current element. We need to keep the 
		//element inside of the stack because if you get an element
		//next that is less than what is in stack but have the one 
		//after the next to be greater, we still need the reference
		//to the greatest element.
		//ie [6,5,7] stack:[7] goes in first, 5 gets assigned to 7 in map
		//5 adds onto stack: [7, 5], then 6 compares with 5 and 5 gets popped
		//then 6 compares with 7 and 6 gets assigned to 7!
		while(!stack.isEmpty() && stack.peek() <= nums[i]) {
			stack.pop();
		}
		//check if stack is empty because if it is, that would mean
		//you can't find the next greater element.
		if(stack.isEmpty()) map[nums[i]] = -1;
		//if you did find it, it would be the the first item in the stack
		else map[nums[i]] =  stack.peek();
		//push current element into the stack
		stack.push(nums[i]);
	}
	for(let i = 0; i < findNums.length; i++) {
		ret[i] = map[findNums[i]];
	}
	return ret;
};