import ImageWithDetailShop from "../../Components/imageWithDetailShop";
import ImagewithDescription from "../../Components/imagewithDescription";
import ImageShop from "../../Components/imageshop";
import Productcard from "../../Components/productcard";
import { useParams } from "react-router-dom";
import {
  imageWithDetailShopData,
  imageWithDescriptionData,
  imageShopData,
  imagewithHeading,
  artData,
} from "./../../mock/home";
import { products } from "./../../mock/product";
import "./style.css";

const Home = (props) => {
  const { className } = props;
  let { type } = useParams();
  const productList = products.filter((item) => item.category === type);
  const imagewithHeading1 = imagewithHeading
    .filter((item) => item.category === type)
    .slice(0, 3);
  const imagewithHeading2 = imagewithHeading
    .filter((item) => item.category === type)
    .slice(3, 6);
  const productList1 = productList.slice(0, 4);
  const productList2 = productList.slice(4, 9);
  const imageWithDetailShopDataList = imageWithDetailShopData.filter(
    (item) => item.category === type
  )[0];
  const imageWithDescriptionDataList = imageWithDescriptionData.filter(
    (item) => item.category === type
  )[0];
  const imageShopDataList = imageShopData.filter(
    (item) => item.category === type
  )[0];
  const artDataList = artData.filter((item) => item.category === type);
  return (
    <div className={`home-page ${className ? className : ""}`}>
      <div>
        <ImageWithDetailShop
          data={imageWithDetailShopDataList}
          className={imageWithDetailShopDataList.className}
        />
      </div>
      <div className="advertise-section">
        <ImagewithDescription data={imageWithDescriptionDataList} />
        <ImageShop data={imageShopDataList} type={type} />
      </div>
      <div className="product-heading">
        <h3>
          New in: handpicked daily from the world’s best brands and boutiques
        </h3>
        <button type="button" className="btn">
          Shop Now
        </button>
      </div>
      <div className="product-list">
        {productList1.map((item, index) => (
          <Productcard key={index} data={item} />
        ))}
      </div>
      <div className="mt40">
        {artDataList.map((item, index) => (
          <ImageWithDetailShop
            key={index}
            data={item}
            className={item.className}
          />
        ))}
      </div>
      <div className="product-heading gift-section">
        <h3>Shop gifts by category</h3>
      </div>
      <div className="product-list">
        {imagewithHeading1.map((item, index) => (
          <ImagewithDescription key={index} data={item} />
        ))}
      </div>
      <div className="product-list">
        {productList2.map((item, index) => (
          <Productcard key={index} data={item} />
        ))}
      </div>
      <div className="product-heading gift-section">
        <h3>Shop gifts by Brand</h3>
      </div>
      <div className="product-list">
        {imagewithHeading2.map((item, index) => (
          <ImagewithDescription key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
