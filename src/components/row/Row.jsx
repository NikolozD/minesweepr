import Cell from "../cell/cell";
import "./row.css";

function Row({ row, y, openCheck, oppendRow }) {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Cell
          cell={cell}
          x={index}
          y={y}
          openCheck={openCheck}
          oppendCell={oppendRow[index]}
        />
      ))}
    </div>
  );
}

export default Row;
