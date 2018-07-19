let climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    //set new array to keep track of already calculated #'s 
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    //we know that 1 stair case can only have 1 possible steps combination
    //2 stair case can have 2 possible steps combination
    //so all we need to do with 3 or more steps is we just need to look back at the previous
    //2 already calculated elements and add them up.
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
