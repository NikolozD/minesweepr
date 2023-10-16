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
    [2, 4],
    [9, 9],
    [5, 3],
    [7, 1],
    [3, 8],
    [4, 2],
    [6, 6],
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
    if (cellStatus.open) {
      return;
    }
    for (let i = 0; i < oppenedEmptys.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          oppenedEmptys[i][0][0] + 1 == x &&
          oppenedEmptys[i][0][1] - 1 + j == y
        ) {
          if (cellStatus.neighbors !== 0) {
            return setCellStatus((curState) => {
              return { ...curState, open: true };
            });
          } else {
            return (
              setCellStatus((curState) => {
                return { ...curState, open: true };
              }),
              setOppenEmptys((curState) => {
                const newState = [...curState];
                newState.push([cellPosition]);
                return newState;
              })
            );
          }
        }
        if (
          oppenedEmptys[i][0][0] - 1 == x &&
          oppenedEmptys[i][0][1] - 1 + j == y
        ) {
          if (cellStatus.neighbors !== 0) {
            return setCellStatus((curState) => {
              return { ...curState, open: true };
            });
          } else {
            return (
              setCellStatus((curState) => {
                return { ...curState, open: true };
              }),
              setOppenEmptys((curState) => {
                const newState = [...curState];
                newState.push([cellPosition]);
                return newState;
              })
            );
          }
        }
      }
      if (oppenedEmptys[i][0][0] == x && oppenedEmptys[i][0][1] - 1 == y) {
        if (cellStatus.neighbors !== 0) {
          setCellStatus((curState) => {
            return { ...curState, open: true };
          });
          return;
        } else {
          setCellStatus((curState) => {
            return { ...curState, open: true };
          });
          setOppenEmptys((curState) => {
            const newState = [...curState];
            newState.push([cellPosition]);
            return newState;
          });

          return;
        }
      }
      if (oppenedEmptys[i][0][0] == x && oppenedEmptys[i][0][1] + 1 == y) {
        if (cellStatus.neighbors !== 0) {
          return setCellStatus((curState) => {
            return { ...curState, open: true };
          });
        } else {
          return (
            setCellStatus((curState) => {
              return { ...curState, open: true };
            }),
            setOppenEmptys((curState) => {
              const newState = [...curState];
              newState.push([cellPosition]);
              return newState;
            })
          );
        }
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
        <img src="\src\assets\defsquare.png" alt="Def" />
      </div>
    );
  } else if (cellStatus.open) {
    if (cellStatus.open && cellStatus.bomb) {
      return (
        <div className="cell">
          <img src="\src\assets\bomb.png" alt="" />
        </div>
      );
    } else if (cellStatus.neighbors == 0) {
      return <div className="cell"></div>;
    } else {
      return <div className="cell">{cellStatus.neighbors}</div>;
    }
  }
}

export default Cell;
