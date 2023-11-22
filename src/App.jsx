import "./App.css";
import { Bar } from "./components/bar";
import { Bottom } from "./components/bottom";

import { Home } from "./components/home";

function App() {
  return (
    <>
      <Bar />
      <section className="dark">
        <h2 className="title">BLACK WOLF</h2>
        <Home />
        <div className="container">
          <h3 className="title">IMPRESION 3D & ACCESORIOS GYM</h3>
        </div>
      </section>
      <Bottom />
    </>
  );
}

export default App;
