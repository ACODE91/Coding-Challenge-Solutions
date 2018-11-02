let BinaryTree = function(rootVal) {
	this.root = new Node(rootVal);
};

let Node = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}; 

BinaryTree.prototype.add = function(node) {
	let queue = [this.root];

	while(queue.length > 0) {
		if(!queue[0].left) {
			return queue[0].left = node;
		} else if(!queue[0].right) {
			return queue[0].right = node;
		} else {
			queue.push(queue[0].left);
			queue.push(queue[0].right);
			queue.shift();
		}
	}
};

BinaryTree.prototype.mapNodes = function(nodeArray) {
	for(let i = 0; i < nodeArray.length; i++) {
		this.add(new Node(nodeArray[i]));
	}
};