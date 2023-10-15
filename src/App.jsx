import { useState } from "react";
import "./App.css";
import Grid from "./components/grid/grid";
import { StatusContext } from "../StatusContext";

function App() {
  const [oppenedEmptys, setOppenEmptys] = useState([]);
  const statusContext = {
    oppenedEmptys: oppenedEmptys,
    setOppenEmptys: setOppenEmptys,
  };
  return (
    <>
      <StatusContext.Provider value={statusContext}>
        <Grid />
      </StatusContext.Provider>
    </>
  );
}

export default App;
