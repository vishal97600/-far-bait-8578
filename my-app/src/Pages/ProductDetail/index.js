import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./../../mock/product";

import "./style.css";

const ProductDetail = (props) => {
  const { className } = props;
  const navigate = useNavigate();

  const [disable, setDisabled] = useState(false);
  const [cartList, setCartList] = useState(false);
  let { id } = useParams();

  const product = products.find((item) => item.id === id);

  const handlecart = () => {
    cartList.push(product);
    localStorage.setItem("product", JSON.stringify(cartList));
    setDisabled(true);
    navigate(`/cart`);
  };
  useEffect(() => {
    const cartList = localStorage.getItem("product");
    const list = JSON.parse(cartList);
    const checkItem = list?.find((item) => item.id === id);
    if (checkItem?.id === id) {
      setDisabled(true);
    }
    setCartList(list || []);
  }, []);
  return (
    <div className={`product-detail-section ${className ? className : ""}`}>
      <div className="product-detail-section-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-detail-section-content">
        <div className="season">{product.type}</div>
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
        <div className="price">
          $ {product.price}
          <p>Import duties included</p>
        </div>
        <div className="price">
          <p>One Size available</p>
          <button
            type="button"
            className="btn"
            disabled={disable}
            onClick={handlecart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
