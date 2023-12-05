import logo from "../img/logo.jpg";
import "../style/bar.css";

export function Bar() {
  return (
    <section className="bar ">
      <nav className="  navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/3d">
                  Impresion 3D
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gym">
                  Accesorios GYM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/order">
                  Pedidos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
