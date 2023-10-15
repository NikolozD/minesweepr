import { useContext, useEffect, useState } from "react";
import "./cell.css";
import { StatusContext } from "../../../StatusContext";

function Cell({ x, y }) {
  const { oppenedEmptys, setOppenEmptys } = useContext(StatusContext);
  const [cellStatus, setCellStatus] = useState({
    bomb: false,
    open: false,
    neighbors: 0,
  });
  const cellPosition = [x, y];
  const bombs = [
    [1, 1],
    [5, 4],
    [9, 9],
    [5, 3],
    [3, 3],
    [3, 2],
    [4, 2],
    [5, 2],
    [4, 4],
    [3, 4],
  ];

  useEffect(() => {
    for (const bomb of bombs) {
      if (cellPosition.join() === bomb.join()) {
        setCellStatus((curState) => {
          return { ...curState, bomb: true };
        });
      } else {
        let neighborsCount = 0;
        for (let i = 0; i < bombs.length; i++) {
          for (let j = 0; j < 3; j++) {
            if (bombs[i][0] == x + 1 && bombs[i][1] == y - 1 + j) {
              neighborsCount++;
            }
            if (bombs[i][0] == x - 1 && bombs[i][1] == y - 1 + j) {
              neighborsCount++;
            }
          }
          if (bombs[i][0] == x && bombs[i][1] == y - 1) {
            neighborsCount++;
          }
          if (bombs[i][0] == x && bombs[i][1] == y + 1) {
            neighborsCount++;
          }
        }
        setCellStatus((curState) => {
          return { ...curState, neighbors: neighborsCount };
        });
      }
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < oppenedEmptys.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          oppenedEmptys[i][0][0] + 1 == x &&
          oppenedEmptys[i][0][1] - 1 + j == y
        ) {
          return setCellStatus((curState) => {
            return { ...curState, open: true };
          });
        }
        if (
          oppenedEmptys[i][0][0] - 1 == x &&
          oppenedEmptys[i][0][1] - 1 + j == y
        ) {
          return setCellStatus((curState) => {
            return { ...curState, open: true };
          });
        }
      }
      if (oppenedEmptys[i][0][0] == x && oppenedEmptys[i][0][1] - 1 == y) {
        return setCellStatus((curState) => {
          return { ...curState, open: true };
        });
      }
      if (oppenedEmptys[i][0][0] == x && oppenedEmptys[i][0][1] + 1 == y) {
        return setCellStatus((curState) => {
          return { ...curState, open: true };
        });
      }
    }
    console.log(oppenedEmptys);
  }, [oppenedEmptys]);

  function handleClick() {
    setCellStatus((curState) => {
      return { ...curState, open: true };
    });
    if (cellStatus.neighbors == 0 && !cellStatus.bomb) {
      setOppenEmptys((curState) => {
        const newState = [...curState];
        newState.push([cellPosition]);
        return newState;
      });
    }
  }

  if (!cellStatus.open) {
    return (
      <div className="cell" onClick={handleClick}>
        Def
      </div>
    );
  } else if (cellStatus.open) {
    if (cellStatus.open && cellStatus.bomb) {
      return <div className="cell">Bomb</div>;
    } else if (cellStatus.neighbors == 0) {
      return <div className="cell">Empty</div>;
    } else {
      return <div className="cell">{cellStatus.neighbors}</div>;
    }
  }
}

export default Cell;
