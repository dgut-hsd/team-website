import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { projectsData } from '../../data/projects-data';

import 'swiper/css/scrollbar';
import 'swiper/css';
import './Projects.css';

export function Projects() {
   const [selectedProject, setSelectedProject] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = (project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
      document.body.classList.add('modal-open');
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
      document.body.classList.remove('modal-open');
   };

   return (
      <>
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
                        <div className='gallery-item' onClick={() => openModal(item)}>
                           <img src={item.img} alt={item.name} />
                           <div className='gallery-item-body'>
                              <h3 className='gallery-item-text'>{item.name}</h3>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         {/* Global Modal using Portal */}
         {isModalOpen && selectedProject && createPortal(
            <div className='modal-overlay' onClick={closeModal}>
               <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                  <button className='modal-close' onClick={closeModal}>
                     ×
                  </button>
                  
                  <div className='modal-header'>
                     <h2>{selectedProject.name}</h2>
                  </div>

                  <div className='modal-body'>
                     <div className='modal-images'>
                        <Swiper
                           spaceBetween={10}
                           slidesPerView={1}
                           loop={selectedProject.images.length > 1}
                           className='modal-swiper'
                        >
                           {selectedProject.images.map((image, index) => (
                              <SwiperSlide key={index}>
                                 <img src={image} alt={`${selectedProject.name} ${index + 1}`} />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                     
                     <div className='modal-description'>
                        <p>{selectedProject.detailedDescription}</p>
                     </div>
                  </div>
               </div>
            </div>,
            document.body
         )}
      </>
   );
}
