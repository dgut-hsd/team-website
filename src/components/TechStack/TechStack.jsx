import './TechStack.css';

export function TechStack() {
   return (
      <div className='tech-stack-container' id='tech-stack' data-aos='fade-up'>
         <h2>技术武器库</h2>
         <p>我们用这些工具构建未来，也为你规划了清晰的成长路径</p>

         <div className='tech-pics-wrapper'>
            <div className='tech-scroller'>
               <ul className='tech-list'></ul>
            </div>

            <div className='tech-scroller' data-direction='right'>
               <ul className='tech-list'></ul>
            </div>
         </div>
      </div>
   );
}
