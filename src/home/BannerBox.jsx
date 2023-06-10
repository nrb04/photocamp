// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import "./banner.css";

import { EffectCube, Pagination } from "swiper";

const BannerBox = () => {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="swiper-container" // Update class name to "swiper-container"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src="/banner/b4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/b1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/b2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/b3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerBox;
