import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// 组件
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutUs } from './components/AboutUs/AboutUs';
import { TimeLine } from './components/Timeline/TimeLine';
import { TechStack } from './components/TechStack/TechStack';
import { Honors } from './components/Honors/Honors';
import { Team } from './components/Team/Team';
import { Projects } from './components/Projects/Projects';
import { Faq } from './components/Faq/Faq';
import { Events } from './components/Events/Events';
import { Footer } from './components/Footer/Footer';
import { JoinUs } from './components/JoinUs/JoinUs';

export default function App() {
   useEffect(() => {
      AOS.init({
         delay: 100,
         duration: 700,
         easing: 'linear',
         once: true,
      });

      console.log('HSD欢迎你╰(*°▽°*)╯');
   }, []);

   console.log(window.innerWidth);

   return (
      <div className='wrapper'>
         <Header />

         <main>
            <HeroSection />
            <AboutUs />
            <TimeLine />
            <TechStack />
            <Honors />
            <Team />
            <Projects />
            <Events />
            <Faq />
            <JoinUs />
         </main>

         <Footer />
      </div>
   );
}
