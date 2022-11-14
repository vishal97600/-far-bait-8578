import "./style.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Productcard = (props) => {
  const { className, data } = props;
  const navigate = useNavigate();
  let { type } = useParams();
  return (
    <div
      className={`product-card-section ${className ? className : ""}`}
      onClick={() => navigate(`/${type}/product/${data.id}`)}
    >
      <div className="product-card-section-image">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="product-card-section-content">
        <div className="season">{data.type}</div>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <div className="price">$ {data.price}</div>
      </div>
    </div>
  );
};

export default Productcard;
