import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  return (
    <Swiper
      className="-z-10 md:h-[85vh]"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img
          className="mx-auto h-[100%] w-[90%]  rounded-2xl"
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto h-[100%] w-[90%]  rounded-2xl"
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto h-[100%] w-[90%]  rounded-2xl"
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto h-[100%] w-[90%]  rounded-2xl"
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};


export default Gallery