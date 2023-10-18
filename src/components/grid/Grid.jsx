import { useEffect, useState } from "react";
import Row from "../row/Row";
import "./grid.css";

function Grid({ grid, oppenedCells, openCheck }) {
  return (
    <>
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
    </>
  );
}

export default Grid;
