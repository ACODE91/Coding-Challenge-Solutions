let numMagicSquaresInside = function(grid) {
	let R = grid.length, C = grid[0].length;
	let ans = 0;
	for (let r = 0; r < R-2; ++r) 
		for (let c = 0; c < C-2; ++c) {
			if (grid[r+1][c+1] != 5) continue;  // optional skip
			if (magic(grid[r][c], grid[r][c+1], grid[r][c+2],
				grid[r+1][c], grid[r+1][c+1], grid[r+1][c+2],
				grid[r+2][c], grid[r+2][c+1], grid[r+2][c+2]))
				ans++;
		}

	return ans;
};

let magic = function(...vals) {
	let count = new Array(16)
	for (let v = 0; v < vals.length; v++) count[vals[v]] = 1;
	for (let v = 1; v <= 9; ++v)
		if (count[v] != 1)
			return false;

	return (vals[0] + vals[1] + vals[2] == 15 &&
                vals[3] + vals[4] + vals[5] == 15 &&
                vals[6] + vals[7] + vals[8] == 15 &&
                vals[0] + vals[3] + vals[6] == 15 &&
                vals[1] + vals[4] + vals[7] == 15 &&
                vals[2] + vals[5] + vals[8] == 15 &&
                vals[0] + vals[4] + vals[8] == 15 &&
                vals[2] + vals[4] + vals[6] == 15);
};
