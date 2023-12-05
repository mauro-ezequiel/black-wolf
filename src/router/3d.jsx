import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

import "../style/3d.css";

export function Impresion() {
  return (
    <section className="dark">
      <Bar />

      <h1 className="title">IMPRESION 3D</h1>

      <h1 className="title">PRODUCTOS</h1>

      <div id="grid">
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={12}
          p={129}
          price={11111}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={"Tiffany Novia De Chucky"}
          p={"Impresa en 3d Plástico Medida 25cm También está de 30,40cm"}
          price={20000}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1554964298-tiffany-novia-de-chucky-3d-_JM#position=5&search_layout=stack&type=item&tracking_id=960408fd-6567-4397-a8fa-55a67e21409d"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_681955-MLA73140674924_122023-O.webp"
          }
          title={"Copa Mundial 25cm"}
          p={
            "Impresión 3d. Tambien tenemos las siguientes medidas: 20,25,30 y 40cm "
          }
          price={5800}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1494573074-copa-mundial-25cm-impresion-3d-_JM#position=3&search_layout=stack&type=item&tracking_id=bc0ae05e-c1bb-4c96-8ddc-d52da8d29929"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={123}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={123}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={123}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={123}
          p={129}
          price={11111}
          href={"3"}
        />

        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={123}
          p={129}
          price={11111}
          href={"3"}
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_2X_874995-MLA73224722305_122023-F.webp"
          }
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
