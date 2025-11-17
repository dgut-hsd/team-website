import './Honors.css';

export function Honors() {
   return (
      <div className='honors-container' id='honors' data-aos='fade-up'>
         <h2 className="text-container">
            <span>荣誉</span>
            <span className="text">殿堂</span>
         </h2>
         <p>汗水与智慧的结晶，是我们实力的最好证明</p>

         <div className='honors-slider-wrapper'>
            <div className='honors-slider-btn-container'>
               <button className='honors-slider-btn honors-prev-btn btn'>
                  ←
               </button>
               <button className='honors-slider-btn honors-next-btn btn'>
                  →
               </button>
            </div>

            <div className='honors-slider'></div>
         </div>
      </div>
   );
}
