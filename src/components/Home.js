import React from "react";
import WelcomePage from "./Welcome";
import Features from "./features";
import Categories from "./Categories";
// import WhyLarks  per from "./why_choose";
import PopularCat from "./PopularCat";
import NewsLetter from "./NewsLetter";
import Stats from "./Stats";

export default function Home() {
  return (
    <div className="container-fluid font-dot">
      <WelcomePage />
      <Features />
      <Categories />
      {/* <WhyLarksper /> */}
      <PopularCat />
      <NewsLetter />
      <Stats />
    </div>
  );
}
