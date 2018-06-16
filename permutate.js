var permute = function(nums) {
    let list = [];
    backtrack(list, [], nums);
    return list;
}

var backtrack = function(list, tempList, nums) {
   if(tempList.length === nums.length) {
       list.push(tempList.slice());
   } else {
       for(let i = 0; i < nums.length; i++) {
       tempList.push(nums[i]);
       backtrack(list, tempList, nums);
       tempList.pop();
   }       
   }

}