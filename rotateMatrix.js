let rotate = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
        throw new Error('invalid matrix');
      }
      if (matrix.length < 2) {
        return matrix; // no need to do anything to rotate a 1,1 matrix
      } 
      let n = matrix.length;
      for(let layer = 0; layer < Math.floor(n / 2); layer++) {
        let first = layer,
        last = n - 1 - layer;
        for(let i = first; i < last; i++) {
            let offset = i - first,
            top = matrix[first][i];
            
            matrix[first][i] = matrix[last - offset][first];

            matrix[last - offset][first] = matrix[last][last - offset];

            matrix[last][last - offset] = matrix[i][last];

            matrix[i][last] = top;
        }
        
      }
      return matrix;
}


function rotateMatrix(matrix) {
    if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
      throw new Error('invalid matrix');
    }
    if (matrix.length < 2) {
      return matrix; // no need to do anything to rotate a 1,1 matrix
    }
  
    let len = matrix.length - 1,
      half = Math.floor(matrix.length / 2);
    // loop through diagonal
    for (let start = 0; start < half; ++start) {
  
      // loop through x axis
      for (let i = 0; i < len - (start * 2); ++i) {
        //the var x and y initalizes points. Prev parepares for swap.
        let y = start,
          x = start + i,
          prev = matrix[y][x];
  
        //loop through all 4 corners
        //this algorithm is supposed to move in a spiral shape from the outer four corners always
        //working it's way in.
        for (let j = 0; j < 4; ++j) {
        //this loop deals with the four corners of the matrix.
        //nextY 
          let nextY = x,
          //as the var y increases from the loop, it allows the corners to move in for nextX.
            nextX = len - y,
            next = matrix[nextY][nextX];
          matrix[nextY][nextX] = prev; //this line overwrites the picked point.
          prev = next; //prev then becomes next
          x = nextX; //points get overwritten so that you can cover all corners
          y = nextY;
        }
      }
    }
  
    return matrix;
  }