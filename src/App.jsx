import "./App.css";
import Grid from "./components/grid/Grid";
import { setBombPlacment } from "../bombs";

function App() {
  const grid = setBombPlacment(30, 16, 96);
  return (
    <>
      <Grid grid={grid} />
    </>
  );
}

export default App;
