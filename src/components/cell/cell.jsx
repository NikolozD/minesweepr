import { cloneElement } from "react";
import "./cell.css";

function Cell({ cell, x, y, oppendCell, openCheck }) {
  function handleClick() {
    openCheck(x, y);
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
  if (oppendCell === 0) {
    return (
      <div className="cell" onClick={handleClick}>
        <img src="\assets\defsquare.png" alt="Def" />
      </div>
    );
  } else if (oppendCell === 1) {
    if (oppendCell && cell === -1) {
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
  }
  return <div>{cell}</div>;
}

export default Cell;
