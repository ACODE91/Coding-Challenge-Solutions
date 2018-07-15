let rotate = function(nums, k) {
    //initialize k to be k % nums in case k becomes larger than nums length
    k = k % nums.length;

    let count = 0;

    for (let start = 0; count < nums.length; start++) {
        //purpose of start is so that when you successfully swapped out
        //current and next, the do while loop can exit.
        let current = start;
        let prev = nums[start];
        
        do {
            //current is initialized by 0 and you use it to keep track of the index
            //you are at. This while loop will not end until current gets transformed all the way.
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start != current)
    }
    return nums;
}
