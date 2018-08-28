var maxIncreaseKeepingSkyline = function(grid) {
    var xMax = [];
    var yMax = [];
    var leni = grid.length;
    var result = 0;
    for (var i = 0; i < leni; i++) {
        var lenj = grid[i].length;
        if (typeof xMax[i]=== 'undefined') {
            xMax[i] = grid[i][0];
            for (var k = 1; k < lenj; k++) {
                if (grid[i][k] > xMax[i]) {
                    xMax[i] = grid[i][k];
                }
            }
        } 
        for (var j = 0; j < lenj; j++) {
            if (typeof yMax[j] === 'undefined') {
                yMax[j] = grid[0][j];
                for (var l = 1; l < leni; l++) {
                    if (grid[l][j] > yMax[j]) {
                        yMax[j] = grid[l][j];
                    }
                }
            }
            result += ((xMax[i] > yMax[j] ? yMax[j] : xMax[i]) - grid[i][j]);
        }
    }
    return result;
};