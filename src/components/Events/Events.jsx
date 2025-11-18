import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Events.css';
import { eventImages } from '../../data/event-data';
import { Tooltip } from 'react-tooltip';

export function Events() {
   // Split images into two arrays for two swipers
   const firstRowImages = eventImages.slice(
      0,
      Math.ceil(eventImages.length / 2)
   );
   const secondRowImages = eventImages.slice(Math.ceil(eventImages.length / 2));

   const handleImageClick = (fullImageSrc) => {
      // Open image in new tab or implement lightbox
      window.open(fullImageSrc, '_blank');
   };

   return (
      <div className='events-container' id='events' data-aos='fade-up'>
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
                     />
                  </SwiperSlide>
               ))}
               {/* Duplicate slides for seamless loop */}
               {firstRowImages.map((image, index) => (
                  <SwiperSlide key={`row1-dup-${index}`}>
                     <img
                        src={image.thumb}
                        alt={image.alt}
                        onClick={() => handleImageClick(image.full)}
                        data-tooltip-id='event-tooltip'
                        data-tooltip-content={image.alt}
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
                     />
                  </SwiperSlide>
               ))}
               {/* Duplicate slides for seamless loop */}
               {secondRowImages.map((image, index) => (
                  <SwiperSlide key={`row2-dup-${index}`}>
                     <img
                        src={image.thumb}
                        alt={image.alt}
                        onClick={() => handleImageClick(image.full)}
                        data-tooltip-id='event-tooltip'
                        data-tooltip-content={image.alt}
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
