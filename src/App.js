import "./App.css";
import Header from "./components/Header";
import WelcomePage from "./components/Welcome";
import Features from "./components/features";
import Categories from "./components/Categories";
import WhyLarksper from "./components/why_choose";
import PopularCat from "./components/PopularCat";
import NewsLetter from "./components/NewsLetter";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Products from "./components/products";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/women",
      element: <Products />,
    },
  ]);
  return (
    <div className="container-fluid">
      <Header />
      <hr />
      <WelcomePage />
      <Features />
      <Categories />
      <WhyLarksper />
      <PopularCat />
      <NewsLetter />
      <Stats />
      <Footer />
      <Products />
    </div>
  );
}

export default App;
