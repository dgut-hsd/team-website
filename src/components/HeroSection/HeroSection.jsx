import './HeroSection.css';
import heroAbstract from '../../assets/hero-abstract.svg';

export function HeroSection() {
   return (
      <section className='hero-section' id='hero-section'>
         <div className='hero-shell'>
            <div className='hero-kicker'>
               <span>HSD / DONGGUAN UNIVERSITY OF TECHNOLOGY</span>
               <span>RESEARCH &amp; ENGINEERING</span>
            </div>

            <div className='hero-composition'>
               <h1 className='hero-title'>
                  <span>从软件系统，</span>
                  <span>到人工智能。</span>
               </h1>
               <div className='hero-art' aria-hidden='true'>
                  <img src={heroAbstract} alt='' />
                  <span>FIELD STUDY / 01</span>
               </div>

               <div className='hero-statement'>
                  <p>这是一个由学生主导的研究与工程共同体。</p>
                  <p>我们通过构建真实系统理解计算，并探索新的可能。</p>
               </div>

               <a className='hero-explore' href='#projects'>
                  <span>探索我们的工作</span>
                  <span className='hero-explore__arrow' aria-hidden='true'>
                     ↓
                  </span>
               </a>
            </div>

            <div className='hero-footer-note'>
               <span>STUDENT-DRIVEN / EST. 2024</span>
               <span>DONGGUAN / CHINA</span>
            </div>
         </div>
      </section>
   );
}
