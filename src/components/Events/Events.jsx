import './Events.css';

export function Events() {
   return (
      <div className='events-container' id='events' data-aos='fade-up'>
         <h2>活动剪影</h2>
         <p>在HSD，我们不仅编码，更注重分享与交流</p>

         <div className='events-gallery-wrapper'>
            <div className='swiper events-swiper-1'>
               <div className='swiper-wrapper'></div>
            </div>

            <div className='swiper events-swiper-2'>
               <div className='swiper-wrapper'></div>
            </div>
         </div>
      </div>
   );
}
