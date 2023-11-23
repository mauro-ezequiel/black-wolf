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
        <h1 className="title t">BLACK WOLF</h1>
        <Home />
        <div className="container-title">
          <h2 className="title">IMPRESION 3D & ACCESORIOS GYM</h2>
        </div>
        <div>
          <div className="material">
            <h3 className="title">materiales:</h3>
            <Material />
          </div>
        </div>

        <Bottom />
      </section>
    </>
  );
}

export default App;
