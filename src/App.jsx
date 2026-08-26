import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// 组件
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutUs } from './components/AboutUs/AboutUs';
import { TechStack } from './components/TechStack/TechStack';
import { Honors } from './components/Honors/Honors';
import { MembersPage } from './components/MembersPage/MembersPage';
import { Projects } from './components/Projects/Projects';
import { Faq } from './components/Faq/Faq';
import { Events } from './components/Events/Events';
import { Footer } from './components/Footer/Footer';
import { JoinUs } from './components/JoinUs/JoinUs';
import { MessagesPage } from './components/MessagesPage/MessagesPage';
import { AboutPage } from './components/AboutPage/AboutPage';
import { SkillsPage } from './components/SkillsPage/SkillsPage';

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

   if (window.location.pathname === '/about') {
      return <AboutPage />;
   }

   if (window.location.pathname === '/about/skills') {
      return <SkillsPage />;
   }

   if (window.location.pathname === '/about/messages') {
      return <MessagesPage />;
   }

   if (window.location.pathname === '/members') {
      return <MembersPage />;
   }

   return (
      <div className='wrapper'>
         <Header />

         <main>
            <HeroSection />
            <AboutUs />
            <TechStack />
            <Honors />
            <Projects />
            <Events />
            <Faq />
            <JoinUs />
         </main>

         <Footer />
      </div>
   );
}
