import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { eventImages } from '../../data/event-data';
import { Tooltip } from 'react-tooltip';
import { useEffect, useRef } from 'react';

import 'swiper/css';
import './Events.css';

export function Events() {
   const mid = Math.ceil(eventImages.length / 2);
   const firstRowImages = eventImages.slice(0, mid);
   const secondRowImages = eventImages.slice(mid);

   const handleImageClick = (fullImageSrc) => {
      window.open(fullImageSrc, '_blank');
   };

   const swiperRef1 = useRef(null);
   const swiperRef2 = useRef(null);
   const containerRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               swiperRef1.current?.swiper.autoplay.start();
               swiperRef2.current?.swiper.autoplay.start();
            } else {
               swiperRef1.current?.swiper.autoplay.stop();
               swiperRef2.current?.swiper.autoplay.stop();
            }
         },
         { threshold: 0.1 }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, []);

   return (
      <div
         className='events-container'
         id='events'
         data-aos='fade-up'
         ref={containerRef}
      >
         <h2 className='text-container'>
            <span>活动</span>
            <span className='text'>剪影</span>
         </h2>
         <p style={{ marginBottom: '2rem' }}>
            在HSD，我们不仅编码，更注重分享与交流
         </p>

         <div className='events-gallery-wrapper'>
            <Swiper
               className='events-swiper-1'
               modules={[Autoplay]}
               spaceBetween={20}
               slidesPerView='auto'
               loop={true}
               autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
               }}
               speed={8000}
               ref={swiperRef1}
               allowTouchMove={false}
            >
               {firstRowImages.map((image, index) => (
                  <SwiperSlide key={`row1-${index}`}>
                     <img
                        src={image.thumb}
                        alt={image.alt}
                        onClick={() => handleImageClick(image.full)}
                        data-tooltip-id='event-tooltip'
                        data-tooltip-content={image.alt}
                        loading='lazy'
                     />
                  </SwiperSlide>
               ))}
            </Swiper>

            <Swiper
               className='events-swiper-2'
               modules={[Autoplay]}
               spaceBetween={20}
               slidesPerView='auto'
               loop={true}
               autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
               }}
               speed={8000}
               ref={swiperRef2}
               allowTouchMove={false}
            >
               {secondRowImages.map((image, index) => (
                  <SwiperSlide key={`row2-${index}`}>
                     <img
                        src={image.thumb}
                        alt={image.alt}
                        onClick={() => handleImageClick(image.full)}
                        data-tooltip-id='event-tooltip'
                        data-tooltip-content={image.alt}
                        loading='lazy'
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <Tooltip
            id='event-tooltip'
            className='custom-tooltip'
            style={{ zIndex: 1000 }}
         />
      </div>
   );
}
