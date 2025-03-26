import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ProductInfo from "./components/Product_info";
import Products from "./components/products";
import Cart from "./components/Cart";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
