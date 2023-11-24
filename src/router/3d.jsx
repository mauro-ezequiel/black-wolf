import { Bar } from "../components/bar";
import { Bottom } from "../components/bottom";
import md from "../img/md.jpg";
import "../style/3d.css";

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
            dependiendo el modelo vamos a poder contruirlo en partes.
            <p className="p">(a una medida mayor si es lo deseado)</p>
          </p>
        </div>
      </div>
      <Bottom />
    </section>
  );
}
