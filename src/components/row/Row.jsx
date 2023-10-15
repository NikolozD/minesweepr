import Cell from "../cell/cell";
import "./row.css";
function Row({ y }) {
  return (
    <div className="row">
      {Array(10)
        .fill()
        .map((_, index) => (
          <Cell x={index} y={y} />
        ))}
    </div>
  );
}

export default Row;
