import { useState } from "react";
import Row from "../row/Row";
import "./grid.css";
import { createStatusCells, generateGrid } from "../../../bombs";

function Grid({ grid }) {
  const [oppenedCells, setOppenedCells] = useState(generateGrid(30, 16));
  function openCheck(x, y) {
    setOppenedCells((curState) => {
      const newState = [...curState];
      return createStatusCells(x, y, newState, grid);
    });
  }
  console.log(oppenedCells);
  return (
    <div className="grid">
      {grid.map((row, index) => (
        <Row
          row={row}
          y={index}
          openCheck={openCheck}
          oppendRow={oppenedCells[index]}
        />
      ))}
    </div>
  );
}

export default Grid;
