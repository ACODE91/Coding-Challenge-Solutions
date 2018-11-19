let Stack = function() {
	this.storage = [];
};

Stack.prototype.isEmpty = function() {
	return this.storage.length == 0;
};

Stack.prototype.push = function(item) {
	this.storage.push(item);
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

let stack = new Stack();

var BSTIterator = function(root) {
	this.pushAllNodes(root);
};

/** @return whether we have a next smallest number */
BSTIterator.prototype.hasNext = function(){
	return !stack.isEmpty();
};

/** @return the next smallest number */
BSTIterator.prototype.next = function() {
	let minNode = stack.pop();
	this.pushAllNodes(minNode.right);
	return minNode.val;
};

BSTIterator.prototype.pushAllNodes = function(node) {
	while(node != null)
	{
		stack.push(node);
		node = node.left;
	}
};