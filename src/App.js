import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import CheckOutPrice from "./pages/CheckOutPrice";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/productlist/:id" element={<ProductList />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/check" element={<CheckOutPrice />} />
    </Routes>
  );
}

export default App;
