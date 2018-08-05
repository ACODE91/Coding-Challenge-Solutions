let numWays = function(n, k) {
    if(n == 0) return 0;
    else if(n == 1) return k;

    let diffColorCounts = k*(k-1); //different colors would be k(# of options) 
    //* k - 1(all the other options except itself)
    //because you need all of the permutations of each option.
    
    let sameColorCounts = k;
    for(let i=2; i<n; i++) {
        let temp = diffColorCounts;
        diffColorCounts = (diffColorCounts + sameColorCounts) * (k-1);
        sameColorCounts = temp;
    }
    return diffColorCounts + sameColorCounts;
}