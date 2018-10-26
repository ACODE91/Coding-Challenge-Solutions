var Stack = function() {
	this.storage = [];
};

Stack.prototype.push = function(item) {
	this.storage.push(item);
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.peek = function() {
	return this.storage[this.storage.length - 1];
};

Stack.prototype.isEmpty = function() {
	return this.storage.length == 0;
};

var calPoints = function(ops) {
	let sum = 0, stack = new Stack();

	for(let i = 0; i < ops.length; i++) {
		let val = 0;
		if (ops[i] == '+') {
			if(stack.storage.length > 1) {
				val = stack.storage[stack.storage.length - 1] + stack.storage[stack.storage.length - 2]; 
			} 
		} else if(ops[i] == 'D') {
			if(!stack.isEmpty()) {
				val = stack.peek() * 2;
			}
		} else if(ops[i] == 'C') {
			if(!stack.isEmpty()) {
				val = -1 * stack.peek();
				stack.pop();
				sum += val;
				continue;
			}
		} else {
			val = parseInt(ops[i]);
		}
		stack.push(val);
		sum += val;
	}
	return sum;
};