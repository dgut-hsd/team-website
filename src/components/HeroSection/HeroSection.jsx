import './HeroSection.css';
import heroAbstract from '../../assets/hero-abstract.svg';

export function HeroSection() {
   return (
      <section className='hero-section' id='hero-section'>
         <div className='hero-shell'>
            <div className='hero-grid'>
               <div className='hero-copy'>
                  <h1 className='hero-title'>
                     <span>从软件系统<span className='hero-title__punct'>，</span></span>
                     <span>到人工智能<span className='hero-title__punct'>。</span></span>
                  </h1>

                  <p className='hero-description'>
                     这是一个由学生主导的研究与工程团队，
                     <br />
                     我们通过构建真实系统理解计算，并探索新的可能。
                  </p>

                  <a className='hero-explore' href='#projects'>
                     <span>查看项目</span>
                     <span className='hero-explore__arrow' aria-hidden='true'>
                        ↓
                     </span>
                  </a>
               </div>

               <div className='hero-art' aria-hidden='true'>
                  <img src={heroAbstract} alt='' />
               </div>
            </div>
         </div>
      </section>
   );
}
