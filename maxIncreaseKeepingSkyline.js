var maxIncreaseKeepingSkyline = function(grid) {

    let rowMaxes = new Array(grid[0].length), colMaxes = new Array(grid[0].length), N = grid.length;
    rowMaxes.fill(0);
    colMaxes.fill(0);
            for (let r = 0; r < N; ++r)
                for (let c = 0; c < N; ++c) {
                    rowMaxes[r] = Math.max(rowMaxes[r], grid[r][c]);
                    colMaxes[c] = Math.max(colMaxes[c], grid[r][c]);
            }
            let ans = 0;
            for (let r = 0; r < N; ++r)
                for (let c = 0; c < N; ++c)
                    ans += Math.min(rowMaxes[r], colMaxes[c]) - grid[r][c];
    
            return ans;
     
    }