import './HeroSection.css';

function SystemDiagram() {
   return (
      <div
         className='hero-system'
         role='img'
         aria-label='RISC-V 五级流水线与网络拓扑系统示意图'
      >
         <div className='hero-system__header'>
            <span>SYSTEMS / 01</span>
            <span>RUNNING</span>
         </div>

         <div className='hero-pipeline' aria-hidden='true'>
            <div className='hero-pipeline__track'>
               {['IF', 'ID', 'EX', 'MEM', 'WB'].map((stage) => (
                  <span className='hero-pipeline__stage' key={stage}>
                     {stage}
                  </span>
               ))}
               <span className='hero-pipeline__pulse'></span>
            </div>
            <div className='hero-pipeline__label'>RISC-V / RV32IMF</div>
         </div>

         <div className='hero-topology' aria-hidden='true'>
            <svg viewBox='0 0 420 176' focusable='false'>
               <g className='hero-topology__links'>
                  <path d='M52 89H147L210 35L282 89H368' />
                  <path d='M147 89L210 142L282 89' />
                  <path d='M210 35V142' />
               </g>
               <g className='hero-topology__nodes'>
                  <circle cx='52' cy='89' r='7' />
                  <circle cx='147' cy='89' r='7' />
                  <circle cx='210' cy='35' r='7' />
                  <circle cx='210' cy='142' r='7' />
                  <circle cx='282' cy='89' r='7' />
                  <circle cx='368' cy='89' r='7' />
               </g>
               <circle className='hero-topology__packet' r='5'>
                  <animateMotion
                     dur='7s'
                     repeatCount='indefinite'
                     path='M52 89H147L210 35L282 89H368'
                  />
               </circle>
            </svg>
            <div className='hero-topology__legend'>NETWORK TOPOLOGY / ACTIVE</div>
         </div>
      </div>
   );
}

export function HeroSection() {
   return (
      <section className='hero-section' id='hero-section'>
         <div className='hero-shell'>
            <div className='hero-kicker'>
               <span>HSD / DONGGUAN UNIVERSITY OF TECHNOLOGY</span>
               <span>RESEARCH &amp; ENGINEERING</span>
            </div>

            <div className='hero-grid'>
               <div className='hero-copy'>
                  <h1 className='hero-title'>
                     <span>从软件系统</span>
                     <span>到人工智能</span>
                  </h1>

                  <p className='hero-description'>
                     这是一个由学生主导的研究与工程共同体，
                     <br />
                     我们通过构建真实系统理解计算，并探索新的可能。
                  </p>

                  <a className='hero-explore' href='#projects'>
                     <span>探索我们的工作</span>
                     <span className='hero-explore__arrow' aria-hidden='true'>
                        ↓
                     </span>
                  </a>
               </div>

               <SystemDiagram />
            </div>

            <div className='hero-index' aria-label='HSD 研究方向'>
               <span>01 / AI SYSTEMS</span>
               <span>02 / SYSTEMS SOFTWARE</span>
               <span>03 / ARCHITECTURE</span>
            </div>
         </div>
      </section>
   );
}
