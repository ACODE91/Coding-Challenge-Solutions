// depthFirstSearch function is used for stubbing out 1's into 0's.

const depthFirstSearch = function (grid, row, column) {
  let nr = grid.length;

        
let nc = grid[0].length;

  grid[row][column] = 0;
  // checks up
  if (row - 1 >= 0 && grid[row - 1][column] == 1) {
    depthFirstSearch(grid, row - 1, column);
  }
  // checks down
  if (row + 1 < nr && grid[row + 1][column] == 1) {
    depthFirstSearch(grid, row + 1, column);
  }
  // checks left
  if (column - 1 >= 0 && grid[row][column - 1] == 1) {
    depthFirstSearch(grid, row, column - 1);
  }
  // checks right
  if (column + 1 < nc && grid[row][column + 1] == 1) {
    depthFirstSearch(grid, row, column + 1);
  }
};

const numIslands = function (grid) {
  const nr = grid.length;
  if (!nr) {
    return 0;
  }

  const nc = grid[0].length;

  let num_islands = 0;

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] == 1) {
        ++num_islands;
        depthFirstSearch(grid, r, c);
      }
    }
  }

  return num_islands;
};
