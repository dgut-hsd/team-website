import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { rp } from './base';

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
import { NotesIndexPage } from './components/NotesIndexPage/NotesIndexPage';

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

   const P = window.location.pathname;

   if (P === rp('/notes')) {
      return <NotesIndexPage />;
   }

   if (P === rp('/notes/ai-bid-review')) {
      return <EngineeringNotesPage />;
   }

   if (P === rp('/projects')) {
      return <ProjectsPage />;
   }

   if (P === rp('/about')) {
      return <AboutPage />;
   }

   if (P === rp('/about/skills')) {
      return <SkillsPage />;
   }

   if (P === rp('/about/honors')) {
      return <HonorsPage />;
   }

   if (P === rp('/join')) {
      return <JoinPage />;
   }

   if (P === rp('/about/life')) {
      return <EventsPage />;
   }

   if (P === rp('/about/messages')) {
      return <MessagesPage />;
   }

   if (P === rp('/members')) {
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
