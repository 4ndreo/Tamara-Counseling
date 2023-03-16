import "./CarrouselQuotes.css";
import ReactSwipe from "react-swipe";

import React from "react";

export default function CarrouselQuotes() {
  let reactSwipeEl;

  // const mySwipe = new Swipe(document.getElementById('slider'), {
  //   startSlide: 2,
  //   speed: 400,
  //   widthOfSiblingSlidePreview: 10,
  //   auto: 3000,
  //   continuous: true,
  //   disableScroll: false,
  //   stopPropagation: false,
  //   callback: function(index, elem) {},
  //   transitionEnd: function(index, elem) {}
  // });

  return (
    <section className="c-quotes-cont">
      <div className="swipe-cont container">
        <ReactSwipe
          className="carousel container"
          swipeOptions={{ continuous: true, auto: 3000, speed: 700 }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <div class="slide-cont slide-1">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-2">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-3">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-4">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-5">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-6">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-7">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-8">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-9">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-10">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-11">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-12">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
          <div class="slide-cont slide-13">
            <div className="slide-text-cont">
              <div className="container slide-text"></div>
            </div>
          </div>
        </ReactSwipe>
        <i
          onClick={() => reactSwipeEl.prev()}
          className="action-btn btn-prev fa-solid fa-circle-arrow-left"
        ></i>
        <i
          onClick={() => reactSwipeEl.next()}
          className="action-btn btn-next fa-solid fa-circle-arrow-right"
        ></i>
      </div>

      {/* <swiper-container
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
        <div class="swiper-button-prev"></div>
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
      </swiper-container> */}
    </section>
  );
}
