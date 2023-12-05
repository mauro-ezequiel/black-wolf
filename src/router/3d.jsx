import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

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

export function Impresion() {
  return (
    <section className="dark">
      <Bar />

      <h1 className="title">IMPRESION 3D</h1>

      <h1 className="title">PRODUCTOS</h1>

      <div id="grid">
        <Card image={lib} title={12} p={129} price={11111} />
        <Card
          image={tif}
          title={"Tiffany Novia De Chucky"}
          p={"Impresa en 3d Plástico Medida 25cm También está de 30,40cm"}
          price={20000}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1554964298-tiffany-novia-de-chucky-3d-_JM#position=5&search_layout=stack&type=item&tracking_id=960408fd-6567-4397-a8fa-55a67e21409d"
          }
        />
        <Card image={llav} title={123} p={129} price={11111} href={"3"} />
        <Card image={cart} title={123} p={129} price={11111} href={"3"} />
        <Card image={south} title={123} p={129} price={11111} href={"3"} />
        <Card image={poke} title={123} p={129} price={11111} href={"3"} />
        <Card image={trofeo} title={123} p={129} price={11111} href={"3"} />

        <Card image={llavm} title={123} p={129} price={11111} href={"3"} />
        <Card
          image={hel}
          title={"Cubo Hellraiser"}
          p={"Medida 7x7cm Material: plastico Color: dorado"}
          price={"19000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1554646906-cubo-hellraiser-impresion-3d-_JM#position=3&search_layout=stack&type=item&tracking_id=960705a1-37c3-4abd-9243-5d9c6eacf7ac"
          }
        />
      </div>

      <div className="dark">
        <h2 className="title"> Pedido</h2>
        <div className="container">
          <h4 className="txt"> podes pedir tu pedido de la siguiente forma:</h4>
          <ul className="list">
            <li>
              1) Entra en alguna de las siguientes paginas.
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-primary">
                  <a
                    href="https://cults3d.com/es/b%C3%BAsqueda?only_free=true&q=navidad"
                    target="-blank"
                  >
                    cults3d
                  </a>
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <a
                    href="https://www.thingiverse.com/search?q=maceta&page=1&type=things&sort=relevant"
                    target="-blank"
                  >
                    thingiverse
                  </a>
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <a
                    href="https://thangs.com/search/trofeo?scope=all&view=grid&freeModels=true"
                    target="-blank"
                  >
                    thangs
                  </a>
                </button>
              </div>
            </li>
            <li>2) Busca en el buscador lo que quieres imprimir</li>
            <li>
              3) Una vez que lo encuentres (descárgalo o copia el enlace) y
              envíamelo por whatsapp
            </li>
          </ul>
        </div>
      </div>

      <Bottom />
    </section>
  );
}
