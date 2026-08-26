import { frontend, backend } from '../../data/tech-stack-data';
import './TechStack.css';

export function TechStack() {

   return (
      <div className='tech-stack-container' id='tech-stack' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>技能</span>
            <span className='text'>库</span>
         </h2>
         <p>我们用这些工具构建未来，也为你规划了清晰的成长路径</p>

         <div className='tech-pics-wrapper'>
            <div className='tech-scroller'>
               <ul className='tech-list'>
                  {frontend.concat(frontend).map((tech, index) => (
                     <li key={`frontend-${index}`}>
                        <img
                           src={tech.icon}
                           alt={tech.name}
                           title={tech.name}
                        />
                     </li>
                  ))}
               </ul>
            </div>

            <div className='tech-scroller' data-direction='right'>
               <ul className='tech-list'>
                  {backend.concat(backend).map((tech, index) => (
                     <li key={`backend-${index}`}>
                        <img
                           src={tech.icon}
                           alt={tech.name}
                           title={tech.name}
                        />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}
