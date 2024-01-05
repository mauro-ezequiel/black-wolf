import trofeo from "../img/trofeos.jpg";

import skib from "../img/skibbidit.jpg";
import "../style/carousel.css";

export const Carousel = () => {
  return (
    <>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner img-fluid">
          <div className="carousel-item active" data-bs-interval="10000">
            <a href="/3d">
              <img src={trofeo} className="d-block w-100 img" alt="repair" />
            </a>
          </div>
          <div loading="lazy" className="carousel-item">
            <a href="/3d">
              <img className="d-block w-100 img" src={skib} alt="skibitoilet" />
            </a>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <a href="/gym">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_736811-MLA73175731038_122023-O.webp"
                className="d-block w-100 img"
                alt="samsung-s10"
              />
            </a>
          </div>
          <div loading="lazy" className="carousel-item">
            <a href="/3d">
              <img
                className="d-block w-100 img"
                src="https://http2.mlstatic.com/D_NQ_NP_966253-MLA73183729594_122023-O.webp"
                alt="airpods"
              />
            </a>
          </div>
          <div loading="lazy" className="carousel-item">
            <a href="/gym">
              <img
                className="d-block w-100 img"
                src="https://http2.mlstatic.com/D_NQ_NP_682370-MLA73335802439_122023-O.webp"
                alt="airpods"
              />
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
