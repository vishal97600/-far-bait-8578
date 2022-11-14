import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/cart";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";

function RouteComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/:type" element={<Home />} />
      <Route exact path="/:type/product" element={<Product />} />
      <Route exact path="/:type/product/:id" element={<ProductDetail />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default RouteComponent;
