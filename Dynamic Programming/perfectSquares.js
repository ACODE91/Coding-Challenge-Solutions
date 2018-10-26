let numSquares = function(n) {
	let dp = new Array(n + 1);
	dp.fill(Number.MAX_VALUE);
	dp[0] = 0;
	//the purpose of dp in this case is that we want to track the least amount
	//of each number from 1 through n for each number, we can use the previous
	//least amount of perfect squares as reference.
	for(let i = 1; i <= n; ++i) {
		let min = Number.MAX_VALUE;
		let j = 1;
		//j is basically used to see if 
		while(i - j*j >= 0) {
			min = Math.min(min, dp[i - j*j] + 1);
			++j;
		}
		dp[i] = min;
	}		
	return dp[n];
};