import "./CarrouselQuotes.css";

import React from "react";

export default function CarrouselQuotes() {
  return (
    <section className="c-quotes-cont">
      <swiper-container
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={true}
        delay={1000}
        disableOnInteraction={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop="true"
      >
        <swiper-slide class="slide-cont slide-1">
          <div className="slide-text-cont">
            <div className="container slide-text">
              <h3>Slide 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                nesciunt dolores, dolore porro quibusdam totam doloribus. Ipsa
                dolores dolor dignissimos enim veniam voluptatum facilis ipsum!
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-cont slide-2">
          <div className="slide-text-cont">
            <div className="container slide-text">
              <h3>Slide 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, earum. Provident eligendi tempore voluptate
                repellendus, rerum consequuntur dicta sed sequi.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-cont slide-3">
          <div className="slide-text-cont">
            <div className="container slide-text">
              <h3>Slide 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quasi rerum ab aut assumenda, dolor omnis. Culpa
                reiciendis, sapiente quaerat possimus iste ut! Impedit similique
                optio blanditiis deleniti. Corrupti, voluptate.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  );
}
