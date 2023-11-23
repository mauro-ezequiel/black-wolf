import "../style/material.css";

export function Material() {
  return (
    <div id="grid">
      <div className="card">
        <img
          src="https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg"
          className="image card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Filamento PLA</h5>
          <p className="card-text">
            Algunas de sus características incluyen ser biodegradable, fácil de
            imprimir, tener bajo olor y no tienen mucha resistencia. Es muy
            utilizado
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.LTq3na1Cw2aqiV6ze0ekYgHaE7&pid=Api&P=0&h=180"
          className="image card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Filamento FLEX</h5>
          <p className="card-text">
            Se caracteriza por su flexibilidad y elasticidad. lo que significa
            que puede doblarse y estirarse sin romperse. Esto lo hace ideal para
            imprimir objetos que requieren cierta flexibilidad
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.somosmakers.cl/wp-content/uploads/2018/11/DSC_1169a-600x397.jpg"
          className="image card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Filamento PETG</h5>
          <p className="card-text">
            se caracteriza por ser fuerte, resistente y duradero. Sus
            características incluyen una alta resistencia al impacto, una buena
            resistencia química, una baja contracción al enfriarse, la capacidad
            de ser reutilizado y reciclado
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://integrinox.com/assets/img/tuberia-acero-inoxidable.jpg"
          className="image card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Perfil de metal</h5>
          <p className="card-text">
            El perfil de metal galvanizado es un material que está recubierto de
            zinc para protegerlo de la corrosión. Algunas de sus características
            incluyen su resistencia a la humedad, su durabilidad.
          </p>
        </div>
      </div>

      <div className="card">
        <img
          src="https://okdiario.com/img/2017/02/02/caracteristicas-del-hierro-su-origen-y-para-que-se-utiliza-1.jpeg"
          className="image card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">hierro</h5>
          <p className="card-text">
            El hierro es un metal que se caracteriza por ser duro, resistente, y
            maleable. Además, tiene una alta conductividad térmica y eléctrica.
          </p>
        </div>
      </div>
    </div>
  );
}
