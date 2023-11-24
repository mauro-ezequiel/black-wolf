import acces from "../img/accesorios.jpg";
import trofeo from "../img/trofeos.jpg";
import south from "../img/south.jpg";
import v from "../img/agarre-v.jpg";
import "../style/carousel.css";

export const Carousel = () => {
  return (
    <>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner img-fluid">
          <div className="carousel-item active" data-bs-interval="10000">
            <a href="home">
              <img src={trofeo} className="d-block w-100 img" alt="repair" />
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <a href="home">
              <img
                src={acces}
                className="d-block w-100 img"
                alt="samsung-s10"
              />
            </a>
          </div>
          <div loading="lazy" className="carousel-item">
            <a href="home">
              <img className="d-block w-100 img" src={south} alt="airpods" />
            </a>
          </div>
          <div loading="lazy" className="carousel-item">
            <a href="home">
              <img className="d-block w-100 img" src={v} alt="airpods" />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
