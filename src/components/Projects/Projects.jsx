import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { projectsData } from '../../data/projects-data';

import 'swiper/css';
import './Projects.css';

const engineeringNotes = [
   { date: '2026.08', tag: 'AI Systems', title: 'Designing reliable agent workflows' },
   { date: '2026.07', tag: 'Networking', title: 'Building TinyNet from first principles' },
   { date: '2026.06', tag: 'Architecture', title: 'Inside a five-stage RISC-V pipeline' },
];

export function Projects() {
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
         <section className='projects-container' id='projects'>
            <div className='projects-heading'>
               <span className='projects-kicker'>SELECTED WORK</span>
               <span className='projects-year'>2024—2026</span>
            </div>

            <div className='project-index'>
               {projectsData.slice(0, 3).map((item, index) => (
                  <article className='project-row' key={item.name} onClick={() => openModal(item)}>
                     <div className='project-row__number'>{String(index + 1).padStart(2, '0')}</div>
                     <div className='project-row__copy'>
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                        <span className='project-row__meta'>HSD / PROJECT {String(index + 1).padStart(2, '0')}</span>
                     </div>
                     <div className='project-row__visual'>
                        <img src={item.img} alt='' />
                        <span className='project-row__arrow'>↗</span>
                     </div>
                  </article>
               ))}
            </div>

            <section className='engineering-notes' aria-labelledby='engineering-notes-title'>
               <div className='engineering-notes__heading'>
                  <span id='engineering-notes-title'>ENGINEERING NOTES</span>
                  <span>2026</span>
               </div>
               <div className='engineering-notes__list'>
                  {engineeringNotes.map((note) => (
                     <a className='engineering-note' href='/about/messages' key={note.date}>
                        <span className='engineering-note__date'>{note.date}</span>
                        <span className='engineering-note__tag'>{note.tag}</span>
                        <span className='engineering-note__title'>{note.title}</span>
                        <span className='engineering-note__arrow'>↗</span>
                     </a>
                  ))}
               </div>
               <a className='engineering-notes__all' href='/about/messages'>View all notes <span>→</span></a>
            </section>
         </section>

         {selectedProject && createPortal(
            <div className='modal-overlay' onClick={closeModal}>
               <div className='modal-content' onClick={(event) => event.stopPropagation()}>
                  <button className='modal-close' onClick={closeModal}>×</button>
                  <div className='modal-header'><h2>{selectedProject.name}</h2></div>
                  <div className='modal-body'>
                     <div className='modal-images'>
                        <Swiper spaceBetween={10} slidesPerView={1} loop={selectedProject.images.length > 1} modules={[Autoplay]} autoplay={{ delay: 2500 }} className='modal-swiper'>
                           {selectedProject.images.map((image, index) => (
                              <SwiperSlide key={index}><img src={image} alt={`${selectedProject.name} ${index + 1}`} /></SwiperSlide>
                           ))}
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