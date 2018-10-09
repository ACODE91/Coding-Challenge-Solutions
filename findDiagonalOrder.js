var findDiagonalOrder = function(matrix) {
    let res = [], ceiling = false, col = 0, row = 0;
        
    while(col !== matrix[0].length - 1 && row !== matrix.length - 1) {
        while(!ceiling) {
            res.push(matrix[row][col]);
            if(matrix[row - 1] && matrix[row + 1][col - 1]) {
                row = row - 1;
            } else {
                ceiling = true;
            }
            
            if(matrix[row][col + 1]) {
                col = col + 1;
            } else {
                row = row - 1;
            }
        }
        
        while(ceiling) {
            res.push(matrix[row][col]);
            if(matrix[row + 1] && matrix[row + 1][col - 1]) {
                row = row + 1;
            } else {
                ceiling = false;
            }
    
            if(matrix[row][col - 1]) {
               col = col - 1;   
            } else {
               row = row + 1;
            }
        }
    }
    
    return res;
    };
    
    findDiagonalOrder([
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
    ])