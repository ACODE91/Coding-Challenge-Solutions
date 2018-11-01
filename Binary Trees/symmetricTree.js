//optimal recursive solution

let isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right);
}

let helper = function(p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    }
    
    if (p.val != q.val) {
        return false;
    }
    
    return helper(p.left,q.right) && helper(p.right, q.left); 
}


var Stack = function() {
	this.storage1 = [];
	this.storage2= [];
};

Stack.prototype.push = function(item) {
	this.storage2 = this.storage1;
	this.storage1 = [];
	this.storage1.push(item);
	this.storage1.concat(this.storage2);
	this.storage2 = [];
};

Stack.prototype.top = function() {
	return this.storage1[this.storage1.length - 1];
};

Stack.prototype.pop = function() {
	return this.storage1.pop();
};

var Queue = function() {
	this.storage = [];
};

Queue.prototype.peek = function() {
	return this.storage[0];
};

Queue.prototype.enqueue = function(item) {
	this.storage.push(item);
};

Queue.prototype.pop = function() {
	return this.storage.shift();
};

var isSymmetric = function(root) {
//check if root exists and if it has left and right
	if(!root || !root.right || !root.left) {
		return false;
	}
	//if not, then return false
	//initialize queue,stack ds
	let stack = new Stack(), queue = new Queue();
	stack.push(root.right);
	queue.enqueue(root.left);
    
	while(stack.storage1.length > 0 && queue.storage.length > 0) {
		let leftTemp, rightTemp; 
		if(queue.peek().val && stack.top().val && 
           queue.peek().val == stack.top().val) {
			leftTemp = queue.peek();
			rightTemp = stack.top();
			queue.pop();
			stack.pop();
			queue.enqueue(leftTemp.left);
			queue.enqueue(leftTemp.right);
			stack.push(rightTemp.right);
			stack.push(rightTemp.left);
		} else if(queue.peek().val == null && stack.top().val == null) {
			queue.pop();
			stack.pop();
		} else {
			return false;
		}
	}
	//store left and right into queue and stack
	//loop through nodes with while loop until left or right is empty in queue/stack
	//check for first item in queue and stack if they match
	//if yes, assign a temp variable to hold on to next             nodes and pop on both DS
	//push left/right on queue on stack for previous node
	//push right/left on stack 
	//if not, return false
	//return true
	return true;
};