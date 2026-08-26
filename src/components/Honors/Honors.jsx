import Marquee from 'react-fast-marquee';
import { Tooltip } from 'react-tooltip';
import { honorsData } from '../../data/honors-data';
import './Honors.css';

export function Honors({ staticGrid = false }) {
   const cards = honorsData.map((honor) => (
      <div className='honor-card' key={honor.id} data-tooltip-id='honor-tooltip' data-tooltip-content={honor.title}>
         <img src={honor.src} alt={honor.title} />
      </div>
   ));

   return (
      <div className={`honors-container ${staticGrid ? 'honors-container--static' : ''}`} id='honors' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>荣誉</span>
            <span className='text'>殿堂</span>
         </h2>
         {staticGrid ? (
            <div className='honors-grid'>{cards}</div>
         ) : (
            <Marquee speed={60} gradient gradientColor={[240, 244, 248]} gradientWidth={100}>{cards}</Marquee>
         )}
         <Tooltip id='honor-tooltip' className='custom-tooltip' />
      </div>
   );
}
