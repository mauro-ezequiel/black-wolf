import "../style/order.css";
import { Bar } from "./bar";
import { Bottom } from "./bottom";

import md from "../img/md.jpg";
export const Order = () => {
  return (
    <section className="dark">
      <Bar />

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

      <Bottom />
    </section>
  );
};
