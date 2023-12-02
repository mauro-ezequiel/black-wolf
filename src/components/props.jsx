import "../style/props.css";

export const Card = ({ image, title, price, p, href }) => {
  return (
    <>
      <div className="card ">
        <img src={image} alt={title} className="image card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className=" info-product card-text">{p}</p>
        </div>
        <h3 className="price">{price}</h3>
        <a href={href} className="btn btn-primary" target="-blank">
          comprar
        </a>
      </div>
    </>
  );
};
