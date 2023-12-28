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
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="z-50 bg-blend-lighten absolute text-[white]">
          Streamlining my tasks changed everything—now I conquer my day, not the other way around
          </div>
          <Img img="https://images.pexels.com/photos/4348082/pexels-photo-4348082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="z-50 bg-blend-lighten absolute text-[white]">
        Finding a great task manager felt like discovering my personal productivity wizard</div>
          <Img
            img={
              "https://images.pexels.com/photos/7550421/pexels-photo-7550421.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="z-50  bg-blend-lighten absolute text-[white]">
        With the right tools, my to-dos became triumphs, one task at a time</div>
          <Img
            img={
              "https://images.pexels.com/photos/6888760/pexels-photo-6888760.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="z-50 bg-blend-lighten absolute text-[white]">
        Organizing tasks became a joy, not a chore, thanks to this incredible app.</div>
          <Img
            img={
              "https://images.pexels.com/photos/6609394/pexels-photo-6609394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="z-50 bg-blend-lighten absolute text-[white]">
        Task management: where chaos meets order, transforming stress into accomplishment</div>
          <Img
            img={
              "https://images.pexels.com/photos/8546024/pexels-photo-8546024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="z-50 bg-blend-lighten absolute text-[white]">
        A good task manager turns busy into productive effortlessly</div>
          <Img
            className="rounded-lg"
            img={
              "https://images.pexels.com/photos/7181173/pexels-photo-7181173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
