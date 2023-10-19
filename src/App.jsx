import "./App.css";
import Grid from "./components/grid/Grid";
import { setBombPlacment, createStatusCells, generateGrid } from "../bombs";

import Alert from "./components/alert/alert";
import { useState } from "react";

function App() {
  const [grid, setGrid] = useState(setBombPlacment(10, 10, 20));
  const [oppenedCells, setOppenedCells] = useState(generateGrid(10, 10));
  const [isGameOver, setIsGameOver] = useState(false);

  function setGameOver() {
    setIsGameOver(true);
  }
  function restart() {
    setGrid(setBombPlacment(10, 10, 20));
    setIsGameOver(false);
    setOppenedCells(generateGrid(10, 10));
  }
  function openCheck(x, y) {
    setOppenedCells((curState) => {
      const newState = [...curState];
      return createStatusCells(x, y, newState, grid);
    });
    if (grid[y][x] == -1) {
      setGameOver();
    }
  }
  return (
    <>
      {isGameOver ? <Alert restart={restart} /> : null}
      <Grid grid={grid} openCheck={openCheck} oppenedCells={oppenedCells} />
    </>
  );
}

export default App;
