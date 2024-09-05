import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carousel.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel({news,chat,game,lang}) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-4 h-80">
                        <div className='mx-auto pt-12 pb-4 border-y-8'><img src='https://cdn-icons-png.flaticon.com/128/2644/2644746.png' width={140} /></div>
                        <div className='pt-8 text-center'><pre className='font-bold'>{news}</pre></div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-4 h-80">
                        <div className='mx-auto pt-12 pb-4 border-y-8'><img src='https://cdn-icons-png.flaticon.com/128/6873/6873405.png' width={140} /></div>
                        <div className='pt-8 text-center'><pre className='font-bold'>{chat}</pre></div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-4 h-80">
                        <div className='mx-auto pt-12 pb-4 border-y-8'><img src='https://cdn-icons-png.flaticon.com/128/2641/2641457.png' width={140} /></div>
                        <div className='pt-8 text-center '><pre className='font-bold'>{game}</pre></div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-4 h-80">
                        <div className='mx-auto pt-12 pb-4 border-y-8'><img src='https://cdn-icons-png.flaticon.com/128/3898/3898082.png' width={140} /></div>
                        <div className='pt-8 text-center'><pre className='font-bold'>{lang}</pre></div>
                    </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}