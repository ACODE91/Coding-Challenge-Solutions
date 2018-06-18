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
        let subsetList = permute(subset);
        for(let j = 0; j < subsetList.length; j++) {
            makeTree(uniqueBSTs, range[i], subsetList[j]);
        }
    }
};

let makeTree = function(BSTList, start, subset) {
    let startingNode = new BST(start);
    for(let i = 0; i < subset.length; i++) {
        startingNode.addNode(subset[i]);
    }

    BSTList.push(startingNode);
    console.log(BSTList)
    return BSTList;
}

let permute = function(nums) {
    let list = [];
    backtrack(list, [], nums);
    return list;
}


let backtrack = function(list, tempList, nums) {
    if(tempList.length == nums.length) {
        let copy = tempList.slice();
        list.push(copy);
    } else {
        for(let i = 0; i < nums.length; i++) {
            if(tempList.includes(nums[i])) { continue }
            tempList.push(nums[i]);
            backtrack(list, tempList, nums);
            tempList.pop();
        }
    }
}
