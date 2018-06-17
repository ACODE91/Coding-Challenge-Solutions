// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */

let BST = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}


BST.prototype.addNode = function(nodeValue) {
    if(this.value < nodeValue && !this.right) {
        this.right = new BST(nodeValue);
    } else if(this.value > nodeValue && !this.left) {
        this.left = new BST(nodeValue);    
    } else if(this.right && this.value < nodeValue) {
        this.right.addNode(nodeValue);
    } else if(this.left && this.value > nodeValue) {
        this.left.addNode(nodeValue);
    }
}


let permutateSubset = function(nums) {
    //use helper to permutate subsets.
    let list = [];
    backtrack(list, [], nums);
    return list;
}

let backtrack = function(list, tempList, nums) {
    if(tempList.length == nums.length) {
        list.push(tempList);
    }else{
      for(let i = 0; i < nums.length; i++){ 
         if(tempList.includes(nums[i])){continue}; // element already exists, skip
         tempList.push(nums[i]);
         backtrack(list, tempList, nums);
         tempList.pop();
      }
   }

}

var numTrees = function(n) {
    let uniqueBSTs = [];
    let range = [];
    
    for(let i = 1; i <= n; i++) {
        range.push(i);
    }

    for(let i = 0; i < range.length; i++) {
        let subset = range.slice();
        subset.splice(i, 1);

    }

};

// let test = new BST(1);
// test.addNode(2);
// test.addNode(3);
// numTrees(3)

permutateSubset([1,2,3]);