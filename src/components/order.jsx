import "../style/order.css";

export const Order = () => {
  return (
    <section>
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
    </section>
  );
};
