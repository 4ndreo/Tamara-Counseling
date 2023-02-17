import "./Home.css";

import React from "react";
import Hero from "../../components/Hero/Hero";
import Work from "../../components/Work/Work";
import Questions from "../../components/Questions/Questions";
import CarrouselQuotes from "../../components/CarrouselQuotes/CarrouselQuotes";

export default function Home() {
  return (
    <div className="home-cont">
      <Hero></Hero>
      <Work></Work>
      <Questions></Questions>
      <CarrouselQuotes></CarrouselQuotes>
    </div>
  );
}
