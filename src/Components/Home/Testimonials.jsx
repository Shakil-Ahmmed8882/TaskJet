import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Img from "./Img";

export default function Testimonials() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><Img img="https://images.pexels.com/photos/4348082/pexels-photo-4348082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></SwiperSlide>
        <SwiperSlide><Img img={"https://images.pexels.com/photos/7550421/pexels-photo-7550421.jpeg?auto=compress&cs=tinysrgb&w=400"}/></SwiperSlide>
        <SwiperSlide><Img img={"https://images.pexels.com/photos/6888760/pexels-photo-6888760.jpeg?auto=compress&cs=tinysrgb&w=400"}/></SwiperSlide>
        <SwiperSlide><Img img={"https://images.pexels.com/photos/6609394/pexels-photo-6609394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/></SwiperSlide>
        <SwiperSlide><Img img={"https://images.pexels.com/photos/8546024/pexels-photo-8546024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/></SwiperSlide>
        <SwiperSlide><Img img={"https://images.pexels.com/photos/7181173/pexels-photo-7181173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/></SwiperSlide>

      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
}
