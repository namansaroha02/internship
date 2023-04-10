import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Ally } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import vittbi from "./assets/vittbi.jpg";
import nidhi from "./assets/nidhi.jpg";
import startup from "./assets/startup.jpg";
import startupTN from "./assets/startupTN.jpg";
import solid from "./assets/solidworks.jpg";
import vamkha from "./assets/vamkha.jpg";
import "../Styles/slide.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

SwiperCore.use([Navigation, Pagination, Scrollbar]);


function Slide() {
    return (
        <div className='mainArea'>
            <h1>Our Collaborators/Customers/Recognitions/our Partners</h1>
            <div className='swiperArea '>
                <div className="swiper-button image-swiper-button-prev">
                    <IoIosArrowBack />
                </div>
                <Swiper style={{
                    "--swiper-pagination-color": "black",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                }}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation]}
                    loop={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className='imagesSlides'>
                        <SwiperSlide><img className='slideImage' src={vittbi} /></SwiperSlide>
                        <SwiperSlide><img className='slideImage' src={nidhi} /></SwiperSlide>
                        <SwiperSlide><img className='slideImage' src={startup} /></SwiperSlide>
                        <SwiperSlide><img className='slideImage' src={startupTN} /></SwiperSlide>
                        <SwiperSlide><img className='slideImage' src={solid} /></SwiperSlide>
                        <SwiperSlide><img className='slideImage' src={vamkha} /></SwiperSlide>
                    </div>
                </Swiper>
                <div className="swiper-button image-swiper-button-next">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default Slide;