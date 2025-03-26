import React from "react";
import WelcomePage from "./Welcome";
import Features from "./features";
import Categories from "./Categories";
import PopularCat from "./PopularCat";
import NewsLetter from "./NewsLetter";
import Stats from "./Stats";
import AnimatedSection from "./AnimatedSection";

export default function Home() {
  return (
    <div className="container-fluid font-dot">
      <WelcomePage />

      <AnimatedSection animation="fade-up">
        <Features />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <Categories />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <PopularCat />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <NewsLetter />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <Stats />
      </AnimatedSection>
    </div>
  );
}
