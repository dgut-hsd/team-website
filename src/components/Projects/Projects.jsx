import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { projectsData } from '../../data/projects-data';

import 'swiper/css';
import './Projects.css';

export function Projects({ gridView = false }) {
   const [selectedProject, setSelectedProject] = useState(null);

   const openModal = (project) => {
      setSelectedProject(project);
      document.body.classList.add('modal-open');
   };

   const closeModal = () => {
      setSelectedProject(null);
      document.body.classList.remove('modal-open');
   };

   return (
      <>
         <section className={`projects-container ${gridView ? 'projects-container--grid' : ''}`} id='projects'>
            {gridView ? (
               <>
                  <div className='projects-heading'>
                     <span className='projects-kicker'>PROJECTS</span>
                     <span className='projects-year'>2024—2026</span>
                  </div>
                  <div className='project-grid'>
                     {projectsData.map((item, index) => (
                        <article className='project-card' key={item.name} onClick={() => openModal(item)}>
                           <div className='project-card__visual'><img src={item.img} alt='' /><span>↗</span></div>
                           <div className='project-card__body'>
                              <span className='project-card__number'>{String(index + 1).padStart(2, '0')}</span>
                              <h2>{item.name}</h2>
                              <p>{item.text}</p>
                              <small>HSD / PROJECT {String(index + 1).padStart(2, '0')}</small>
                           </div>
                        </article>
                     ))}
                  </div>
               </>
            ) : (
               <>
                  <div className='project-index'>
                     {projectsData.slice(0, 3).map((item, index) => (
                        <article className='project-row' key={item.name} onClick={() => openModal(item)}>
                           <div className='project-row__number'>{String(index + 1).padStart(2, '0')}</div>
                           <div className='project-row__copy'>
                              <h2>{item.name}</h2>
                              <p>{item.text}</p>
                           </div>
                           <div className='project-row__visual'><img src={item.img} alt='' /></div>
                        </article>
                     ))}
                  </div>
                  <a className='projects-more' href='/projects'>更多项目 <span>→</span></a>
               </>
            )}
         </section>

         {selectedProject && createPortal(
            <div className='modal-overlay' onClick={closeModal}>
               <div className='modal-content' onClick={(event) => event.stopPropagation()}>
                  <button className='modal-close' onClick={closeModal}>×</button>
                  <div className='modal-header'><h2>{selectedProject.name}</h2></div>
                  <div className='modal-body'>
                     <div className='modal-images'>
                        <Swiper spaceBetween={10} slidesPerView={1} loop={selectedProject.images.length > 1} modules={[Autoplay]} autoplay={{ delay: 2500 }} className='modal-swiper'>
                           {selectedProject.images.map((image, index) => <SwiperSlide key={index}><img src={image} alt={`${selectedProject.name} ${index + 1}`} /></SwiperSlide>)}
                        </Swiper>
                     </div>
                     <div className='modal-description'><p>{selectedProject.detailedDescription}</p></div>
                  </div>
               </div>
            </div>,
            document.body
         )}
      </>
   );
}