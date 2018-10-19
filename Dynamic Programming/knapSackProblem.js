
// Returns the maximum value that can be put in a knapsack of capacity W
let knapSack = function(W, wt, val, n) {
	let i, w;
	let K = new Array(n+1);
	K.fill(new Array(W + 1));
	//first for loop represents the number of items
	for (i = 0; i <= n; i++)
	{
		//second for loop represents the capacity
		for (w = 0; w <= W; w++)
		{
			//fills table with 0s to initialize
			if (i==0 || w==0)
				K[i][w] = 0;
			//w represents which capacity limit you currently are on, on the table
			//this line triggers if the weight is less than the capacity
			else if (wt[i-1] <= w)
			//chooses best value between choosing the current item + best value of 
			//remaining capacity VERSUS if you don't choose the current item
			//and get previous best value

			//but how does this know the weight capacity if you add the two?

				K[i][w] = Math.max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]);
			else
			//in the case where weight of the item is more than capacity
			//assign row/column block to be previous value since that is the optimal
			//value you can receive from the limitations.
				K[i][w] = K[i-1][w];
		}
	}
              
	return K[n][W];
};
//brute force
let knapSackProblem = function(array, max) {
	let totalWeight = 0, index = 0, totalValue = 0, knapSack = [];
    
	array.sort((a, b) => {
		return b.value - a.value;
	});

	for(let i = 0; i < array.length; i++) {
		if(totalWeight + array[i].weight < max) {
			totalWeight += array[i].weight;
			knapSack.push(array[i]);
			index++;
			totalValue += array[i].value;
		} else {
			break;
		} 
	}

	while(index <= array.length - 1) {
		for(let i = array.length - 1; i >= index; i--) {
			if(totalWeight + array[i].weight < max) {
				knapSack.push(array[i]);
			}

			if(
				array[i].value > knapSack[knapSack.length - 1] &&
            array[i] > knapSack[knapSack.length - 1] && 
            totalWeight - knapSack[knapSack.length - 1].weight + array[i].weight < max) {
				totalValue = totalValue - knapSack[knapSack.length - 1].value + array[i].value;
				knapSack[knapSack.length - 1] = array[i];
			}

			index++;
		}
	}
	return totalValue;
};