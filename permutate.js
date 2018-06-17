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
