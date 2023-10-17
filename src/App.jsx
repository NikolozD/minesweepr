import "./App.css";
import Grid from "./components/grid/Grid";
import { setBombPlacment } from "../bombs";

function App() {
  const grid = setBombPlacment(10, 10, 16);
  return (
    <>
      <Grid grid={grid} />
    </>
  );
}

export default App;
