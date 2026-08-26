import { useEffect, useState } from 'react';
import './Header.css';

export function Header() {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSticky(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
         <div className='icon-container'>
            <a href='#' className='icon'>
               HSD / DONGGUAN UNIVERSITY OF TECHNOLOGY
            </a>
         </div>

         <input type='checkbox' id='menu-toggle' className='menu-toggle' />
         <label htmlFor='menu-toggle' className='hamburger'>
            <span></span>
         </label>

         <ul className='menu'>
            <li>
               <a href='#about-us' className='nav-links'>
                  关于我们
               </a>
            </li>
            <li>
               <a href='#timeline' className='nav-links'>
                  发展历程
               </a>
            </li>
            <li>
               <a href='#tech-stack' className='nav-links'>
                  技术武器库
               </a>
            </li>
            <li>
               <a href='#honors' className='nav-links'>
                  荣誉殿堂
               </a>
            </li>
            <li>
               <a href='#team' className='nav-links'>
                  核心团队
               </a>
            </li>
            <li>
               <a href='#projects' className='nav-links'>
                  项目展示
               </a>
            </li>
            <li>
               <a href='#events' className='nav-links'>
                  活动剪影
               </a>
            </li>
            <li>
               <a href='#faq' className='nav-links'>
                  FAQ
               </a>
            </li>
         </ul>

         <a href='#join' className='nav-join-link'>
            加入我们
         </a>
      </header>
   );
}
