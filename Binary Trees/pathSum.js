//iterative solutions
Stack.prototype.push = function(item) {
	this.storage.push(item);
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.isEmpty = function() {
	return this.storage.length > 0 ? false : true;
};

var pathSum = function(root, sum) {
	if (root == null) {return false;}
	let path = new Stack();
	let sub = new Stack();
	path.push(root);
	sub.push(root.val);
	while (!path.isEmpty()) {
		let temp = path.pop();
		let tempVal = sub.pop();
		if (temp.left == null && temp.right == null) {if (tempVal == sum) return true;}
		else {
			if (temp.left != null) {
				path.push(temp.left);
				sub.push(temp.left.val + tempVal);
			}
			if (temp.right != null) {
				path.push(temp.right);
				sub.push(temp.right.val + tempVal);
			}
		}
	}
	return false;
};