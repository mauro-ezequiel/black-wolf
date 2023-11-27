import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

import md from "../img/md.jpg";
import lib from "../img/lib40.jpg";
import tif from "../img/tif.jpg";
import llav from "../img/llavp.jpg";
import cart from "../img/cartman.jpg";
import south from "../img/south.jpg";
import hel from "../img/he.jpg";
import llavm from "../img/llavmer.jpg";
import poke from "../img/poke.jpg";
import trofeo from "../img/trofeos.jpg";

import "../style/3d.css";
import { Order } from "../components/order";

export function Impresion() {
  return (
    <section className="dark">
      <Bar />
      <h1 className="title">IMPRESION 3D</h1>
      <div className="container-3d">
        <img className="imge" src={md} />
        <div className="pres">
          <h2 className="txt-3d">Medida maxima del proyecto</h2>
          <p className="ph">
            dependiendo el modelo vamos a poder construirlo en partes.
            <p className="p">(a una medida mayor si es lo deseado)</p>
          </p>
        </div>
      </div>

      <h1 className="title">PRODUCTOS</h1>

      <div id="grid">
        <Card image={lib} title={12} p={129} price={11111} />
        <Card image={tif} title={123} p={129} price={11111} />
        <Card image={llav} title={123} p={129} price={11111} />
        <Card image={cart} title={123} p={129} price={11111} />
        <Card image={south} title={123} p={129} price={11111} />
        <Card image={poke} title={123} p={129} price={11111} />
        <Card image={trofeo} title={123} p={129} price={11111} />

        <Card image={llavm} title={123} p={129} price={11111} />
        <Card image={hel} title={123} p={129} price={11111} />
      </div>

      <>
        <Order />
      </>

      <Bottom />
    </section>
  );
}
