import { useNavigate } from "react-router-dom";
import "./style.css";

const ImageWithDetailShop = (props) => {
  const { className, data } = props;
  const navigate = useNavigate();

  return (
    <div
      className={`image-with-detail-shop-section ${className ? className : ""}`}
    >
      <div className="image-with-detail-shop-section-image">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="image-with-detail-shop-section-content">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <button
          type="button"
          className="btn"
          onClick={() => navigate(`./product`)}
        >
          {data.btnTitle}
        </button>
      </div>
    </div>
  );
};

export default ImageWithDetailShop;
