import "./App.css";
import { Bar } from "./components/bar";
import { Bottom } from "./components/bottom";

import { Home } from "./components/home";
import { Material } from "./components/material";

function App() {
  return (
    <>
      <Bar />
      <section className="dark">
        <h2 className="title">BLACK WOLF</h2>
        <Home />
        <div className="container-title">
          <h3 className="title">IMPRESION 3D & ACCESORIOS GYM</h3>
        </div>
        <div>
          <div className="material">
            <h3 className="tit">materiales:</h3>
            <Material />
          </div>
        </div>

        <Bottom />
      </section>
    </>
  );
}

export default App;
