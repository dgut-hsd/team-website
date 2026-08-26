import { useState } from 'react';
import './Header.css';

export function Header() {
   const [isAboutOpen, setIsAboutOpen] = useState(false);

   return (
      <header className='header'>
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
            <li><a href='#team' className='nav-links'>成员</a></li>
            <li><a href='#projects' className='nav-links'>项目</a></li>
            <li><a href='#timeline' className='nav-links'>工程笔记</a></li>
            <li className={
av-dropdown }>
               <button type='button' className='nav-links nav-dropdown__trigger' onClick={() => setIsAboutOpen((open) => !open)}>关于 <span className='nav-dropdown__chevron' aria-hidden='true'></span></button>
               <div className='nav-dropdown__menu'>
                  <a href='#about-us' className='nav-dropdown__link'>About</a>
                  <a href='#timeline' className='nav-dropdown__link'>消息</a>
                  <a href='#tech-stack' className='nav-dropdown__link'>技术</a>
                  <a href='#honors' className='nav-dropdown__link'>荣誉</a>
                  <a href='#events' className='nav-dropdown__link'>Life at HSD</a>
               </div>
            </li>
            <li><a href='https://github.com/dgut-hsd' className='nav-links' target='_blank' rel='noreferrer'>GitHub ↗</a></li>
         </ul>

         <a href='#join' className='nav-join-link'>加入我们</a>
      </header>
   );
}