import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Imagecarousel.scss';
import image_1 from "../../images/imagecarouselimg1.jpg";
import image_2 from "../../images/imagecarouselimg1.jpg";
import image_3 from "../../images/imagecarouselimg1.jpg";

const Imagecarousel = () => {
    return (
        <div className="Imagecarousel-Wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="floorplan-swiper"
            >
              <SwiperSlide>
              <img className="carouselImage-1" src={image_1} alt="Carouselimage1" />
              </SwiperSlide>
              <SwiperSlide>
              <img className="carouselImage-1" src={image_2} alt="Carouselimage1" />
              </SwiperSlide>
              <SwiperSlide>
              <img className="carouselImage-1" src={image_3} alt="Carouselimage1" />
              </SwiperSlide>
            </Swiper> 
        </div>
    );
};

export default Imagecarousel;