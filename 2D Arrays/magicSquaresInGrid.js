let numMagicSquaresInside = function(grid) {
    //initialize row and column lengths
	let R = grid.length, C = grid[0].length;
    let ans = 0;
    //stop at R - 2/C - 2 because magic squares need at least 3 x 3 cells
	for (let r = 0; r < R-2; ++r) 
		for (let c = 0; c < C-2; ++c) {
            if (grid[r+1][c+1] != 5) continue;  // optional skip
            //if grid center is not 5, it would be impossible for magic square
            //to have all the same sum all around.

            //plug in all elements of grid into magic function to find out if sum = 15
			if (magic(grid[r][c], grid[r][c+1], grid[r][c+2],
				grid[r+1][c], grid[r+1][c+1], grid[r+1][c+2],
				grid[r+2][c], grid[r+2][c+1], grid[r+2][c+2]))
				ans++;
		}

	return ans;
};

let magic = function(...vals) {
    let count = new Array(9);
    //the purpose of all of the code before the return statement is for ensuring that
    //the elements on your current grid only ranges from 1 - 9. 
    for (let v = 0; v < vals.length; v++) count[vals[v]] = 1;
    for (let v = 1; v <= 9; ++v)
		if (count[v] != 1)
			return false;
    //ensures that our grid provides us 15 all around
	return (vals[0] + vals[1] + vals[2] == 15 && //first row
                vals[3] + vals[4] + vals[5] == 15 && //second row
                vals[6] + vals[7] + vals[8] == 15 && //third row
                vals[0] + vals[3] + vals[6] == 15 && //first col
                vals[1] + vals[4] + vals[7] == 15 && //second col
                vals[2] + vals[5] + vals[8] == 15 && //third col
                vals[0] + vals[4] + vals[8] == 15 && //left diag
                vals[2] + vals[4] + vals[6] == 15);//right diag
};
