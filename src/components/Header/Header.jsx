import './Header.css';

export function Header() {
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
            <li><a href='#about-us' className='nav-links'>关于</a></li>
            <li><a href='https://github.com/HSD-DGUT' className='nav-links' target='_blank' rel='noreferrer'>GitHub ↗</a></li>
         </ul>

         <a href='#join' className='nav-join-link'>加入 HSD</a>
      </header>
   );
}