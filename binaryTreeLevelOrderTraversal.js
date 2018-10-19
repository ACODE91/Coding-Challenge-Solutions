let Queue = function() {
	this.storage = [];
};

Queue.prototype.peek = function() {
	return this.storage[0];
};

Queue.prototype.push = function(item) {
	this.storage.push(item);
};

Queue.prototype.isEmpty = function() {
	if(this.storage.length == 0) {
		return true;
	}
	return false;
};

Queue.prototype.size = function() {
	return this.storage.length;
};

Queue.prototype.pop = function() {
	return this.storage.shift();
};

let levelOrder = function(root) {
	let list = [];     
	let queue = new Queue();
	let wrapList = [];
    
	if(root == null) return wrapList;
        
	queue.push(root);
        
	while(!queue.isEmpty()){
		let levelNum = queue.size();
		let subList = [];

		for(let i=0; i<levelNum; i++) {
			if(queue.peek().left != null) queue.push(queue.peek().left);
			if(queue.peek().right != null) queue.push(queue.peek().right);
			subList.push(queue.pop().val);
		}
		wrapList.push(subList);
	}
	return wrapList;
};