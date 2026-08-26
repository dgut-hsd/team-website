import { useEffect, useState } from 'react';
import './Header.css';

function getActiveNav() {
   const path = window.location.pathname;
   const hash = window.location.hash;
   if (path === '/members') return 'members';
   if (path === '/projects') return 'projects';
   if (path === '/about/messages') return 'notes';
   if (path === '/about' || path === '/about/skills' || path === '/about/honors' || path === '/about/life') return 'about';
   if (hash === '#projects') return 'projects';
   if (hash === '#about-us' || hash === '#tech-stack' || hash === '#honors' || hash === '#events') return 'about';
   return path === '/' && !hash ? 'home' : '';
}

export function Header() {
   const [isAboutOpen, setIsAboutOpen] = useState(false);
   const [activeNav, setActiveNav] = useState(getActiveNav);

   useEffect(() => {
      const syncActiveNav = () => setActiveNav(getActiveNav());
      window.addEventListener('hashchange', syncActiveNav);
      window.addEventListener('popstate', syncActiveNav);
      return () => {
         window.removeEventListener('hashchange', syncActiveNav);
         window.removeEventListener('popstate', syncActiveNav);
      };
   }, []);

   const navClass = (name) => `nav-links ${activeNav === name ? 'is-active' : ''}`;

   return (
      <header className='header'>
         <div className='icon-container'>
            <a href='/' className='icon'>HSD / DONGGUAN UNIVERSITY OF TECHNOLOGY</a>
         </div>
         <input type='checkbox' id='menu-toggle' className='menu-toggle' />
         <label htmlFor='menu-toggle' className='hamburger'><span></span></label>
         <ul className='menu'>
            <li><a href='/' className={navClass('home')}>首页</a></li>
            <li><a href='/members' className={navClass('members')}>成员</a></li>
            <li><a href='/projects' className={navClass('projects')}>项目</a></li>
            <li><a href='/about/messages' className={navClass('notes')}>工程笔记</a></li>
            <li className={`nav-dropdown ${isAboutOpen ? 'is-open' : ''}`}>
               <button type='button' className={`nav-links nav-dropdown__trigger ${activeNav === 'about' ? 'is-active' : ''}`} onClick={() => setIsAboutOpen((open) => !open)}>关于 <span className='nav-dropdown__chevron' aria-hidden='true'></span></button>
               <div className='nav-dropdown__menu'>
                  <a href='/about' className='nav-dropdown__link'>关于我们</a>
                  <a href='/about/messages' className='nav-dropdown__link'>消息</a>
                  <a href='/about/skills' className='nav-dropdown__link'>技能库</a>
                  <a href='/about/honors' className='nav-dropdown__link'>荣誉</a>
                  <a href='/about/life' className='nav-dropdown__link'>HSD生活</a>
               </div>
            </li>
            <li><a href='https://github.com/dgut-hsd' className='nav-links' target='_blank' rel='noreferrer'>GitHub ↗</a></li>
            <li className='mobile-join-item'><a href='/join' className='nav-links'>加入我们</a></li>
         </ul>
      </header>
   );
}
