import CountUp from 'react-countup';
import './AboutUs.css';

export function AboutUs() {
   return (
      <div className='about-us-container' id='about-us' data-aos='fade-up'>
         <div className='text-container'>
            <h1>
               关于<span className='text'>HSD</span>
            </h1>

            <p>我们不止是代码的搬运工，更是思想的建筑师和问题的解决者。</p>
            <p>
               在HSD，每一行代码都承载着我们的奇思妙想，每一次技术攻坚都是为了创造更优的解决方案。
            </p>
         </div>

         <div className='data-container'>
            <div className='data-item'>
               <span className='counter'>
                  <CountUp
                     end={50}
                     duration={2}
                     enableScrollSpy
                     scrollSpyOnce={true}
                  />
               </span>
               <p>成员</p>
            </div>

            <div className='data-item'>
               <span className='counter'>
                  <CountUp
                     end={12}
                     duration={2}
                     enableScrollSpy
                     scrollSpyOnce={true}
                  />
               </span>
               <p>上线项目</p>
            </div>

            <div className='data-item'>
               <span className='counter'>
                  <CountUp
                     end={50}
                     duration={2}
                     enableScrollSpy
                     scrollSpyOnce={true}
                  />
               </span>
               <p>竞赛奖项</p>
            </div>
         </div>
      </div>
   );
}
