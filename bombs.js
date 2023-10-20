import Cell from "./src/components/cell/cell";

export const CELL_UNOPENED = 0;
export const CELL_OPEN = 1;
export const CELL_FLAGGED = -1;
export const GRID_NONEIGHBORS = 0;
export const GRID_BOMB = -1;

export function generateGrid(x, y, value) {
  return Array(y)
    .fill()
    .map(() => Array(x).fill(value));
}
export function copyGrid(grid) {
  return grid.map((row) => [...row]);
}

export function setBombPlacment(x, y, totalBombs) {
  const grid = generateGrid(x, y, GRID_NONEIGHBORS);

  for (let i = 0; i < totalBombs; ) {
    const bombX = Math.floor(Math.random() * x);
    const bombY = Math.floor(Math.random() * y);

    if (grid[bombY][bombX] != GRID_BOMB) {
      grid[bombY][bombX] = GRID_BOMB;
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
          if (grid[j][k] != GRID_BOMB) {
            grid[j][k]++;
          }
        }
      }
      i++;
    }
  }
  return grid;
}

export function updateGridBasedOnClick(x, y, oppendCells, grid, e) {
  console.log(e);
  if (e.type == "contextmenu") {
    e.preventDefault();
    if (oppendCells[y][x] != CELL_FLAGGED) {
      console.log("Shemovedi");
      oppendCells[y][x] = CELL_FLAGGED;
    } else {
      console.log("aqac Shemovedi");
      oppendCells[y][x] = CELL_UNOPENED;
    }
    return oppendCells;
  } else if (e.type == "click") {
    if (oppendCells[y][x] === CELL_OPEN) {
      return oppendCells;
    }
    if (grid[y][x] > GRID_NONEIGHBORS) {
      oppendCells[y][x] = CELL_OPEN;
      return oppendCells;
    }
    if (grid[y][x] === GRID_NONEIGHBORS) {
      const emptyCells = [[x, y]];
      while (emptyCells.length > 0) {
        const firstElement = emptyCells[0];
        emptyCells.shift();
        const a = firstElement[0];
        const b = firstElement[1];

        if (oppendCells[b][a] === CELL_OPEN) {
          continue;
        }
        oppendCells[b][a] = CELL_OPEN;
        if (grid[b][a] === GRID_NONEIGHBORS) {
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
              if (oppendCells[i][j] === CELL_UNOPENED) {
                emptyCells.push([j, i]);
              }
            }
          }
        }
      }
      return oppendCells;
    }
  } else {
    return oppendCells;
  }
}

export function revealBombs(oppendCells, grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == GRID_BOMB) {
        oppendCells[i][j] = CELL_OPEN;
      }
    }
  }
  return oppendCells;
}
