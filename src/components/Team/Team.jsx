import { Tooltip } from 'react-tooltip';
import Marquee from 'react-fast-marquee';
import { memberData } from '../../data/team_data';
import { teacherData } from '../../data/team_data';
import './Team.css';

export function Team() {
   const mid = Math.ceil(memberData.length / 2);
   const firstRow = memberData.slice(0, mid);
   const secondRow = memberData.slice(mid);

   return (
      <div className='team-container' id='team' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>核心</span>
            <span className='text'>团队</span>
         </h2>
         <p>一群有想法、有能力、有梦想的青年和专业指导老师</p>

         <div className='teacher-container'>
            <h3 className='teacher-header'>
               指导
               <span className='text'>老师</span>
            </h3>

            <div className='teacher-card-container'>
               {teacherData.map((teacher, index) => {
                  return (
                     <div className='teacher-card' key={index}>
                        <div className='teacher-img'>
                           <img src={teacher.img} alt={teacher.name} />
                        </div>

                        <div className='teacher-info-container'>
                           <h3 className='teacher-name'>{teacher.name}</h3>

                           <span className='teacher-title'>
                              {teacher.title}
                           </span>

                           <span className='teacher-detail'>
                              {teacher.detail}
                           </span>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>

         <div className='member-container'>
            <h3 className='member-header'>
               学生
               <span className='text'>成员</span>
            </h3>

            <div className='member-scroll-wrapper'>
               <Marquee
                  pauseOnHover={true}
                  gradient={true}
                  gradientWidth={50}
                  speed={60}
               >
                  {firstRow.map((member, index) => (
                     <div
                        className='member-card'
                        key={index}
                        data-tooltip-id='member-tooltip'
                        data-tooltip-content={member.detail}
                     >
                        <div className='member-img'>
                           <img src={member.img} alt={member.name} />
                        </div>
                        <div className='member-info-container'>
                           <h3 className='member-name'>{member.name}</h3>
                           <span className='member-title'>{member.title}</span>
                        </div>
                     </div>
                  ))}
               </Marquee>
            </div>

            <div className='member-scroll-wrapper'>
               <Marquee
                  pauseOnHover={true}
                  gradient={true}
                  gradientWidth={50}
                  speed={60}
                  direction='right'
               >
                  {secondRow.map((member, index) => (
                     <div
                        className='member-card'
                        key={index}
                        data-tooltip-id='member-tooltip'
                        data-tooltip-content={member.detail}
                     >
                        <div className='member-img'>
                           <img src={member.img} alt={member.name} />
                        </div>
                        <div className='member-info-container'>
                           <h3 className='member-name'>{member.name}</h3>
                           <span className='member-title'>{member.title}</span>
                        </div>
                     </div>
                  ))}
               </Marquee>
            </div>
         </div>

         <Tooltip
            id='member-tooltip'
            className='custom-tooltip'
            style={{ zIndex: 1000 }}
         />
      </div>
   );
}
