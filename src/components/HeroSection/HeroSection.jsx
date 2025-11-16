import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './HeroSection.css';

export function HeroSection() {
   const [init, setInit] = useState(false);

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const options = {
      fullScreen: {
         enable: false,
      },
      background: {
         color: {
            value: 'transparent',
         },
      },
      fpsLimit: 120,
      interactivity: {
         events: {
            onHover: {
               enable: true,
               mode: 'grab',
               parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
               },
            },
            onClick: {
               enable: true,
               mode: 'push',
            },
            resize: true,
         },
         modes: {
            grab: {
               distance: 200,
               links: {
                  opacity: 0.5,
               },
            },
            push: {
               quantity: 2,
            },
         },
      },
      particles: {
         color: {
            value: '#808080',
         },
         links: {
            color: '#808080',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
         },
         move: {
            direction: 'none',
            enable: true,
            outModes: {
               default: 'out',
            },
            random: false,
            speed: 2,
            straight: false,
         },
         number: {
            density: {
               enable: true,
               area: 800,
            },
            value: 40,
         },
         opacity: {
            value: 0.5,
         },
         shape: {
            type: ['circle', 'triangle', 'square'],
         },
         size: {
            value: { min: 1, max: 5 },
         },
      },
      detectRetina: true,
      responsive: [
         {
            maxWidth: 768,
            options: {
               particles: {
                  number: {
                     value: 150,
                     density: {
                        enable: true,
                        area: 800,
                     },
                  },
               },
               interactivity: {
                  events: {
                     onClick: {
                        enable: false,
                     },
                  },
               },
            },
         },
      ],
   };

   return (
      <div className='hero-section' id='hero-section'>
         <div className='sparkles-background'>
            {init && <Particles id='tsparticles' options={options} />}
            <div className='radial-gradient-mask'></div>
         </div>

         <div className='hero-content'>
            <div className='text-container'>
               <h1>
                  代码构造<span className='text'>世界</span>
               </h1>
            </div>
            <div className='text-container'>
               <h1>
                  梦想点燃<span className='text'>未来</span>
               </h1>
            </div>

            <p>我们是HSD，一个有热情、有成果、有温度的学生开发组织。</p>
            <p>我们用代码探索未知，用创新定义可能。</p>

            <a href='#join' className='hero-join-link'>
               成为我们的一员
            </a>
         </div>
      </div>
   );
}
