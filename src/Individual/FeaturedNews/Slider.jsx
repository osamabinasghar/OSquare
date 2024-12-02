import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import './slider.css'

const Slider = () => {
  return (
    <>
    
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
            {/* Fixed Laptop Image */}
            <div
                style={{
                    position: "absolute",
                    zIndex: 10,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                }}
            >
                <img src="/laptop.png" alt="Fixed Laptop" style={{ width: "100%" }} />
            </div>

            {/* Swiper Slider */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: "100%" }}
            >
                <SwiperSlide>
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/screens/01.png" alt="Slide 1" style={{ width: "100%" }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/screens/02.png" alt="Slide 2" style={{ width: "100%" }} />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/screens/03.png" alt="Slide 3" style={{ width: "100%" }} />
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    </>
  )
}

export default Slider