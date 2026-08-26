import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// 组件
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { MembersPage } from './components/MembersPage/MembersPage';
import { Projects } from './components/Projects/Projects';
import { ProjectsPage } from './components/ProjectsPage/ProjectsPage';
import { Footer } from './components/Footer/Footer';
import { MessagesPage } from './components/MessagesPage/MessagesPage';
import { AboutPage } from './components/AboutPage/AboutPage';
import { SkillsPage } from './components/SkillsPage/SkillsPage';
import { HonorsPage } from './components/HonorsPage/HonorsPage';
import { EventsPage } from './components/EventsPage/EventsPage';
import { JoinPage } from './components/JoinPage/JoinPage';
import { EngineeringNotesPage } from './components/EngineeringNotesPage/EngineeringNotesPage';

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

   if (window.location.pathname === '/notes') {
      return <EngineeringNotesPage />;
   }

   if (window.location.pathname === '/projects') {
      return <ProjectsPage />;
   }

   if (window.location.pathname === '/about') {
      return <AboutPage />;
   }

   if (window.location.pathname === '/about/skills') {
      return <SkillsPage />;
   }

   if (window.location.pathname === '/about/honors') {
      return <HonorsPage />;
   }

   if (window.location.pathname === '/join') {
      return <JoinPage />;
   }

   if (window.location.pathname === '/about/life') {
      return <EventsPage />;
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
            <Projects />
         </main>

         <Footer />
      </div>
   );
}
