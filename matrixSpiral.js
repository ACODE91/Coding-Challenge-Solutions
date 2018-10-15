//fix matrix spiral bugs
let matrixSpiral = function(n) {
	let startCol = 0, endCol = n - 1, startRow = 0, endRow = n - 1, count = 1, res = new Array(n);
   
	for(let i = 0; i < res.length; i++) {
		res[i] = [];
	}

	while(count < (n * n)) {
		//left to right
		for(let i = startCol; i <= endCol; i++) {
			res[startRow][i] = count;
			count++; 
		}
		//top to bottom
        startRow++;
        
		for(let i = startRow; i <= endRow; i++) {
			res[i][endCol] = count;
			count++;
		}

		endCol++;
		//right to left
		for(let i = endCol; i >= startCol; i--) {
			res[endRow][i] = count;
			count++;
		}

		endRow--;
		//bottom to top
		for(let i = endRow; i >= startRow; i--) {
			res[i][startCol] = count;
			count++;
		}
		startCol++;
	}

	return res;
};