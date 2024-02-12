import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import { Card } from "../components/props";

import "../style/3d.css";

export function Impresion() {
  return (
    <section className="dark">
      <Bar />

      <h1 className="title">IMPRESION 3D</h1>

      <h3 className="title">PRODUCTOS</h3>

      <div id="grid">
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_600273-MLA73140637134_122023-O.webp"
          }
          title={"Red Skull 34cm "}
          p={"sin envio gratis"}
          price={"15.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1394454645-red-skull-34cm-capitan-america-1-_JM#position=1&search_layout=stack&type=item&tracking_id=ca611dc9-224c-4085-a"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_943474-MLA73433255380_122023-O.webp"
          }
          title={"Set De 9 Skibidi Toilet "}
          p={"envio gratis a todo el pais"}
          price={"34.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1399394217-set-de-9-skibidi-toilet-_JM#position=2&search_layout=stack&type=item&tracking_id=e9ca7d92-8e60-4f66-858b-2b916ee2ce15"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_769710-MLA73140680550_122023-O.webp"
          }
          title={"Tiffany Novia De Chucky 25cm"}
          p={"envio gratis a todo el pais "}
          price={"20.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1554964298-tiffany-novia-de-chucky-3d-_JM#position=5&search_layout=stack&type=item&tracking_id=960408fd-6567-4397-a8fa-55a67e21409d"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_681955-MLA73140674924_122023-O.webp"
          }
          title={"Copa Mundial 25cm"}
          p={"sin envio gratis"}
          price={"5.800"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1494573074-copa-mundial-25cm-impresion-3d-_JM#position=3&search_layout=stack&type=item&tracking_id=bc0ae05e-c1bb-4c96-8ddc-d52da8d29929"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_892513-MLA73268808933_122023-O.webp"
          }
          title={"Cabeza De Chucky 20cm"}
          p={"envio gratis a todo el pais"}
          price={"17.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1398182805-cabeza-de-chucky-20cm-impresion-3d-_JM#position=1&search_layout=stack&type=item&tracking_id=9cbc90c0-5f20-4469-b1a5-ca12c6c0e017"
          }
        />
        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_966253-MLA73183729594_122023-O.webp"
          }
          title={"South Park Set De 5personajes"}
          p={"sin envio gratis"}
          price={"17.000"}
          href={
            "https://articulo.mercadolibre.com.ar/MLA-1398169861-figuras-south-park-set-de-5-personajes-8cm-_JM#position=1&search_layout=stack&type=item&tracking_id=1a35d2fe-86f9-4e12-869e-22c8e80b5680"
          }
        />

        <Card
          image={
            "https://http2.mlstatic.com/D_NQ_NP_2X_874995-MLA73224722305_122023-F.webp"
          }
          title={"Cubo Hellraiser"}
          p={"Medida 7x7cm Material: plastico Color: dorado"}
          price={"20.500"}
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
