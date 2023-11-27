import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

import v from "../img/agarre-v.jpg";
import tif from "../img/tif.jpg";
import llav from "../img/llavp.jpg";
import cart from "../img/cartman.jpg";
import south from "../img/south.jpg";
import hel from "../img/he.jpg";
import llavm from "../img/llavmer.jpg";
import poke from "../img/poke.jpg";
import trofeo from "../img/trofeos.jpg";

import "../style/3d.css";

export function Gym() {
  return (
    <section className="dark">
      <Bar />
      <h1 className="title">ACCESORIOS GYM</h1>

      <h1 className="title">PRODUCTOS</h1>

      <div id="grid">
        <Card image={v} title={12} p={129} price={11111} />
        <Card image={tif} title={123} p={129} price={11111} />
        <Card image={llav} title={123} p={129} price={11111} />
        <Card image={cart} title={123} p={129} price={11111} />
        <Card image={south} title={123} p={129} price={11111} />
        <Card image={poke} title={123} p={129} price={11111} />
        <Card image={trofeo} title={123} p={129} price={11111} />

        <Card image={llavm} title={123} p={129} price={11111} />
        <Card image={hel} title={123} p={129} price={11111} />
      </div>

      <Bottom />
    </section>
  );
}
