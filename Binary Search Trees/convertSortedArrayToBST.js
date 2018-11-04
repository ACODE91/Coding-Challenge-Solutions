let Node = function(val) {
    this.val = val;
    this.left = this.right = null;
}

let Stack = function() {
    this.storage = [];
}

Stack.prototype.push = function(item) {
    this.storage.push(item);
}

Stack.prototype.pop = function() {
    return this.storage.pop();
}

Stack.prototype.isEmpty = function() {
    if(this.storage.length > 0) {
        return false;
    }
    return true;
}

var sortedArrayToBST = function(nums) {
  let mid = Math.floor(nums.length / 2), left = mid - 1, right = nums.length - 1;
  let root = new Node(nums[mid]), ans = new Stack();
  ans.push(nums[mid]);
    
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
    
    let currNode = root;
    
    while(currNode.left || currNode.right) {
        stack.push(currNode.left);
        stack.push(currNode.right);
    }
};

let traverse = function(node, l, r, arr) {
    if(!l && !r) {
        return arr;
    }
    
    arr.push(node);
    if(l) {
        traverse(l, )
    }
}

let helper = function(root, node) {
    if(!root.left && node.val < root.val) {
        root.left = node;
    } else if(!root.right && node.val > root.val) {
        root.right = node;
    } else if(root.left && node.val < root.val) {
        helper(root.left, node)
    } else if (root.right && node.val > root.val) {
        helper(root.right, node);
    }
}
