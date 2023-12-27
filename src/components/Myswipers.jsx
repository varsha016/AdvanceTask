import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./../assets/css/myswiper.css"
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { resume, resumeGuy, resumeSec, resumeSop, resumeSophia } from '../assets/img';

const Myswipers = () => {
  return <>

    <div className="bg-container">
      <h3 className='center'>Explore the library</h3>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        // pagination={true}
        pagination={{
          clickable: true,
        }}

        modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={resume} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeGuy} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSec} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSop} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSophia} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resume} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeGuy} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSec} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSop} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeSophia} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={resumeGuy} />
        </SwiperSlide>
      </Swiper>
    </div>
  </>
}

export default Myswipers