import Productcard from "../../Components/productcard";
import { products } from "./../../mock/product";
import { useParams } from "react-router-dom";
import "./style.css";

const Product = (props) => {
  const { className } = props;
  let { type } = useParams();
  const productList = products.filter((item) => item.category === type);

  return (
    <div class={`product-page ${className ? className : ""}`}>
      <div className="product-list-section">
        {productList.map((item) => (
          <Productcard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
