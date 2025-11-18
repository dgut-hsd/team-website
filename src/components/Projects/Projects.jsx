import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { projectsData } from '../../data/projects-data';

import 'swiper/css/scrollbar';
import 'swiper/css';
import './Projects.css';

export function Projects() {
   return (
      <div className='projects-container' id='projects' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>项目</span>
            <span className='text'>展示</span>
         </h2>

         <div className='projects-wrapper'>
            <Swiper
               scrollbar={{
                  hide: true,
               }}
               modules={[Scrollbar]}
               spaceBetween={15}
               slidesPerView={1}
               loop={projectsData.length > 1}
               breakpoints={{
                  769: { slidesPerView: 2 },
                  1441: { slidesPerView: 3 },
               }}
               className='projects-swiper'
            >
               {projectsData.map((item, index) => (
                  <SwiperSlide key={index}>
                     <div className='gallery-item'>
                        <img src={item.img} alt={item.name} />
                        <div className='gallery-item-body'>
                           <h3 className='gallery-item-text'>{item.name}</h3>
                           <p className='gallery-item-text'>{item.text}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
