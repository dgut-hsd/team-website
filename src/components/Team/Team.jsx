import './Team.css';

export function Team() {
   return (
      <div className='team-container' id='team' data-aos='fade-up'>
         <h2>核心团队</h2>
         <p>一群有想法、有能力、有梦想的青年和专业指导老师</p>

         <div className='team-card-wrapper'>
            <div className='team-card-container'></div>

            <div className='team-content-container'></div>
         </div>

         <div className='team-slider-btn'>
            <button className='team-btn team-prev-btn btn'>
               <span>←</span>
            </button>
            <button className='team-btn team-next-btn btn'>
               <span>→</span>
            </button>
         </div>
      </div>
   );
}
