import "./CarrouselQuotes.css";

import React from "react";

export default function CarrouselQuotes() {
  return (
    <section className="c-quotes-cont">
      <swiper-container spaceBetween={30}
        centeredSlides={true}
        autoplay="true" 
          delay= "20"
          disableOnInteraction="true"
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop="true">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper-container>
    </section>
  );
}
