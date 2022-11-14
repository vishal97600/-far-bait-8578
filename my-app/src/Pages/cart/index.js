import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Cart = (props) => {
  const { className } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState(false);

  useEffect(() => {
    const cartLists = localStorage.getItem("product");
    const list = JSON.parse(cartLists);
    let count = 0;
    list.forEach((element) => {
      const price = element.price.split(",").join("");
      count = parseInt(price) + count;
    });
    setTotalPrice(count);
    setCartList(list || []);
  }, []);
  return (
    <div className="cart-page">
      {cartList &&
        cartList?.map((item, index) => {
          return (
            <div
              key={index}
              className={`product-detail-section ${className ? className : ""}`}
            >
              <div className="product-detail-section-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="product-detail-section-content">
                <div className="season">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="price">$ {item.price}</div>
              </div>
            </div>
          );
        })}
      <div className="total">
        <span>Cart Total:</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
