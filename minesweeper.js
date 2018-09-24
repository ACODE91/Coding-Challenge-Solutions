let updateBoard = function(board, click) {
    let m = board.length, n = board[0].length;
    let row = click[0], col = click[1];
    
    if (board[row][col] == 'M') { // Mine
        board[row][col] = 'X';
    }
    else { // Empty
        // Get number of mines first.
        let count = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i == 0 && j == 0) continue;
                let r = row + i, c = col + j;
                if (r < 0 || r >= m || c < 0 || c < 0 || c >= n) continue;
                if (board[r][c] == 'M' || board[r][c] == 'X') count++;
            }
        }
        
        if (count > 0) { // If it is not a 'B', stop further DFS.
            board[row][col] = (char)(count + '0');
        }
        else { // Continue DFS to adjacent cells.
            board[row][col] = 'B';
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i == 0 && j == 0) continue;
                    let r = row + i, c = col + j;
                    if (r < 0 || r >= m || c < 0 || c < 0 || c >= n) continue;
                    if (board[r][c] == 'E') updateBoard(board, [r, c]);
                }
            }
        }
    }
    
    return board;
}