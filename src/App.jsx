import "./App.css";
import Grid from "./components/grid/Grid";
import {
  setBombPlacment,
  updateGridBasedOnClick,
  generateGrid,
  copyGrid,
  revealBombs,
  CELL_UNOPENED,
  GRID_BOMB,
} from "../bombs";

import Alert from "./components/alert/alert";
import { useState, useCallback } from "react";

function App() {
  const [grid, setGrid] = useState(setBombPlacment(10, 10, 20));
  const [oppenedCells, setOppenedCells] = useState(
    generateGrid(10, 10, CELL_UNOPENED)
  );
  const [isGameOver, setIsGameOver] = useState(false);

  function restart() {
    setGrid(setBombPlacment(10, 10, 20));
    setIsGameOver(false);
    setOppenedCells(generateGrid(10, 10, CELL_UNOPENED));
  }
  const openCheck = useCallback(
    (x, y, e) => {
      if (e.type == "click" && grid[y][x] == GRID_BOMB) {
        setIsGameOver(true);
        setOppenedCells((curState) => revealBombs(curState, grid));
      } else {
        setOppenedCells((curState) => {
          const newState = copyGrid(curState);
          return updateGridBasedOnClick(x, y, newState, grid, e);
        });
      }
    },
    [grid]
  );
  return (
    <>
      {isGameOver ? <Alert restart={restart} /> : null}
      <Grid grid={grid} openCheck={openCheck} oppenedCells={oppenedCells} />
    </>
  );
}

export default App;
