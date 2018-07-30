//recursive approach
var maxDepth = function(root, n) {
    if(n === undefined) n = 0;
    if(root == null) return n;
    return Math.max(maxDepth(root.left, n + 1), maxDepth(root.right, n + 1));
  };

//my BFS approach
let Queue = function() {
    this.storage = [];
}

Queue.prototype.pop = function() {
   return this.storage.shift();
}

Queue.prototype.isEmpty = function() {
    if(this.storage.length == 0) {
        return true;
    }
    return false;
}

var maxDepth = function(root) {
 
    if(root === null) {
        return 0;
    }
    
    let count = 0;
    let queue = new Queue();
    queue.storage.push(root);

    while(!queue.isEmpty()) {
        let n = queue.storage.length;

        for(let i = 0; i < n; i++) {
            if(queue.storage[i].left) {
                queue.storage.push(queue.storage[i].left);
            } 
            if(queue.storage[i].right) {
                queue.storage.push(queue.storage[i].right);
            }
        }

        while(n > 0) {
          queue.pop();
          n--;
        }

        count++;
    }

    return count;
};