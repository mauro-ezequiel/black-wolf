import "../style/props.css";

export const Card = ({ image, title, price, p, href }) => {
  return (
    <>
      <div className="card">
        <img className="image " src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{p}</p>
          <h3 className="price">{price}</h3>
          <a href={href} className="btn btn-primary">
            comprar
          </a>
        </div>
      </div>
    </>
  );
};
