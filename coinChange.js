let coinChange = function(coins, amount) {
    let max = amount + 1;             
    let dp = new Array(amount + 1);  
    //set to plus one because at the end of the function if the amount is more than 
    //dp[amount], none of the coin combinations make the total amount.
    dp.fill(max);  
    dp[0] = 0;   
    //the DP array represents how many coins does it minimally take to make the amount.
    //each i, represents what the amount you're on so you can backtrack and do dynamic programming.

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            //checks to see if the value of the coin is more than i. Obviously, if the value
            //is too high, you wouldn't be able to add it to make the amount because it 
            //goes OVER the value.
            if (coins[j] <= i) {
                //this will take the minimum amount it takes the make the required amount.
                //dp[i - coins[j]] + 1, specifically is interesting.
                //obviously coins[j] makes the entire TOTAL amount of one of the previous dp[i]s.
                //which is why you need to subtract that first and take the remainder which
                //still can be found on the array and add + 1 since you are on the NEXT iteration 
                //because we're counting up to the amount 1 by 1.
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}