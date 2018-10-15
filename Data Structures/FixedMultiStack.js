let FixedMultiStack = function(stackSize) {
	this.stackCapacity = stackSize;
	this.values = new Array(stackSize * 3);
	this.sizes = [0, 0, 0];
};

FixedMultiStack.prototype.push = function(stackNum, value) {
	if (this.isFull(stackNum)) {
		return 'stack is full';
	}
	this.sizes[stackNum]++; 
	this.values[indexOfTop(stackNum)] = value;
};

FixedMultiStack.prototype.pop = function(stackNum) {
	if (this.isEmpty(stackNum)) {
		return 'Nothing to pop';
	}
    
	let topIndex = indexOfTop(stackNum);
	let value = this.values[topIndex];
	this.values[topIndex] = 0;
	this.sizes[stackNum]--;
	return value;
};

FixedMultiStack.prototype.peek = function(stackNum) {
	if(this.isEmpty()) {
		return 'Stack is empty';
	}

	return this.values[indexOfTop(stackNum)];
};

FixedMultiStack.prototype.isFull = function(stackNum) {
	return this.sizes[stackNum] == this.stackCapacity;
};

FixedMultiStack.prototype.isEmpty = function(stackNum) {
	return !this.sizes[stackNum];
};

FixedMultiStack.prototype.indexOfTop = function(stackNum) {
//given stack size of 7 indices will be
//first stack: 0 ~ 6
//second stack: 7 ~ 14
//third staack: 15 ~ 20
    let offSet = 
};