let Node = function(val) {
	this.val = val;
	this.left = this.right = null;
};

var sortedArrayToBST = function(nums) {
	let mid = Math.floor(nums.length / 2), left = mid - 1, right = nums.length - 1;
	let root = new Node(nums[mid]);
    
	while(left > -1 && right > mid) {
		let leftNode = new Node(nums[left]);
		let rightNode = new Node(nums[right]);
		helper(root, leftNode);
		helper(root, rightNode);
		right--;
		left--;
	}
    
	if(left > 0) {
		helper(nums[mid], left);
	} else if(right > mid) {
		helper(nums[mid], right);
	}
    
	return root;
};


let helper = function(root, node) {
	if(!root.left && node.val < root.val) {
		root.left = node;
	} else if(!root.right && node.val > root.val) {
		root.right = node;
	} else if(root.left && node.val < root.val) {
		helper(root.left, node);
	} else if (root.right && node.val > root.val) {
		helper(root.right, node);
	}
};

//alt solution
var sortedArrayToBST = function(nums) {
	if(!nums.length) return null;   
	var mid = Math.floor((nums.length)/2);
	var root = new TreeNode(nums[mid]);
	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid+1));
	return root;
};
