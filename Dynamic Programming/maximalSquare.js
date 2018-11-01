var maximalSquare = function(matrix) {
	if(matrix.length<1){
		return 0;
	}
	var biggerMatrix = [];
	for(var i=0; i<matrix.length+1; i++){
		var row = [];
		for(var j=0; j<matrix[0].length+1; j++){
			row.push(0);
		}
		biggerMatrix.push(row);
	}
    
	var max = 0;
	for(var i=0; i<matrix.length; i++){
		for(var j=0; j<matrix[0].length; j++){
			if(parseInt(matrix[i][j])===0){
				biggerMatrix[i+1][j+1] = 0;
			} else {
				biggerMatrix[i+1][j+1] = parseInt(matrix[i][j])+
                Math.min(biggerMatrix[i][j], biggerMatrix[i+1][j], 
                	biggerMatrix[i][j+1]);
				max = Math.max(max, biggerMatrix[i+1][j+1]);
			}
		}
	}
	return max*max;
};
