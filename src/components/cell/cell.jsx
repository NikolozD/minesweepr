import { useState } from "react";
import "./cell.css";
import { CELL_FLAGGED, CELL_OPEN, GRID_BOMB } from "../../../bombs";

function Cell({ cell, x, y, oppendCell, openCheck }) {
  function handleClick(e) {
    openCheck(x, y, e);
  }

  const colors = [
    "cyan",
    "green",
    "yellow",
    "red",
    "pink",
    "brown",
    "purple",
    "blue",
  ];
  if (oppendCell === CELL_OPEN) {
    if (oppendCell && cell === GRID_BOMB) {
      return (
        <div className="cell">
          <img src="\assets\bomb.png" alt="" />
        </div>
      );
    } else if (cell === 0) {
      return <div className="cell"></div>;
    } else {
      return (
        <div className="cell" style={{ color: colors[cell - 1] }}>
          {cell}
        </div>
      );
    }
  } else {
    return (
      <div className="cell">
        {oppendCell == CELL_FLAGGED ? (
          <img onContextMenu={handleClick} src="\assets\flag.png" alt="Def" />
        ) : (
          <img
            onClick={handleClick}
            onContextMenu={handleClick}
            src="\assets\defsquare.png"
            alt="Def"
          />
        )}
      </div>
    );
  }
}

export default Cell;
