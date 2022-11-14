import { useNavigate } from "react-router-dom";
import "./style.css";

const ImageShop = (props) => {
  const { className, data } = props;
  const navigate = useNavigate();
  return (
    <div className={`image-shop-section ${className ? className : ""}`}>
      <div className="image-shop-section-image">
        <a href="#">
          <img src={data.imageUrl} alt={data.title} />
        </a>
      </div>
      <div className="image-shop-section-content">
        <h3>{data.title}</h3>
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

export default ImageShop;
