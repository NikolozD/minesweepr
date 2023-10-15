import { useState } from "react";
import Row from "../row/Row";
import "./grid.css";
import { StatusContext } from "../../../StatusContext";

function Grid() {
  return (
    <div className="grid">
      {Array(10)
        .fill()
        .map((_, index) => (
          <Row y={index} />
        ))}
    </div>
  );
}

export default Grid;
