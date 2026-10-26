// fuckin hell of a question

// BFS prologue question

function Test(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];

  // find the max min it takes to rotton
  let maxminutes = 0;

  // if the orange is rotton [2] put it in the queue

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }
  console.log(grid);

  // find the rotton adjcents if there is rotton adjacents then replace the original orange [1] as rotton [2] 1--> 2

  while (queue.length) {
    let [x, y, min] = queue.shift();

    // right
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, min + 1]);
    }

    // left
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, min + 1]);
    }
    // top
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, min + 1]);
    }

    // bottom
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, min + 1]);
    }

    // now find the max minutes b/w the adjacent times

    maxminutes = Math.max(min, maxminutes);
  }

  // if there is no rotton oranges means return -1

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  console.log(maxminutes);

  return maxminutes;
}
let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(Test(grid));
