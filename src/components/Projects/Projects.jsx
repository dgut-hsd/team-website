import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { projectsData } from '../../data/projects-data';

import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css';

export function Projects() {
   return (
      <div className='projects-container' id='projects'>
         <h2>项目展示</h2>

         <div className='projects-wrapper'>
            <Swiper
               modules={[Navigation]}
               spaceBetween={15}
               slidesPerView={1}
               navigation 
               loop={true}
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
                           <p>{item.text}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}
