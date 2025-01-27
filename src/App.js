import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/carousel";
import Features from "./components/features";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <hr />
      <Carousel />
      <Features />
      <Categories />
    </div>
  );
}

export default App;
