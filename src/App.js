import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ProductInfo from "./components/Product_info";
import Products from "./components/products";
import Cart from "./components/Cart";

function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/productInfo" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
