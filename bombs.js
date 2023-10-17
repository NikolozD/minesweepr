import Cell from "./src/components/cell/cell";

export function generateGrid(x, y) {
  return Array(y)
    .fill()
    .map(() => Array(x).fill(0));
}

export function setBombPlacment(x, y, totalBombs) {
  const grid = generateGrid(x, y);

  for (let i = 0; i < totalBombs; ) {
    const bombX = Math.floor(Math.random() * x);
    const bombY = Math.floor(Math.random() * y);

    if (grid[bombY][bombX] != -1) {
      grid[bombY][bombX] = -1;
      for (
        let j = Math.max(bombY - 1, 0);
        j <= Math.min(bombY + 1, y - 1);
        j++
      ) {
        for (
          let k = Math.max(bombX - 1, 0);
          k <= Math.min(bombX + 1, x - 1);
          k++
        ) {
          if (grid[j][k] >= 0 && grid[j][k] != -1) {
            grid[j][k]++;
          }
        }
      }
      i++;
    }
  }
  return grid;
}

export function createStatusCells(x, y, oppendCells, grid) {
  if (oppendCells[y][x] === 1) {
    return oppendCells;
  }
  if (grid[y][x] > 0) {
    oppendCells[y][x] = 1;
    return oppendCells;
  }
  if (grid[y][x] === 0) {
    const emptyCells = [[x, y]];
    while (emptyCells.length > 0) {
      const firstElement = emptyCells[0];
      emptyCells.shift();
      const a = firstElement[0];
      const b = firstElement[1];

      if (oppendCells[b][a] === 1) {
        continue;
      }
      oppendCells[b][a] = 1;
      if (grid[b][a] === 0) {
        for (
          let i = Math.max(b - 1, 0);
          i <= Math.min(b + 1, grid.length - 1);
          i++
        ) {
          for (
            let j = Math.max(a - 1, 0);
            j <= Math.min(a + 1, grid[0].length - 1);
            j++
          ) {
            if (oppendCells[i][j] != 1) {
              emptyCells.push([j, i]);
            }
          }
        }
      }
    }
    return oppendCells;
  }
  if (grid[y][x] === -1) {
    oppendCells[y][x] = 1;
    return oppendCells;
  }
}
