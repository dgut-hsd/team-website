import { useState, useEffect } from 'react';

export const useBreakpoint = () => {
   const [breakpoint, setBreakpoint] = useState({
      isLaptop: false,
      isDesktop: false,
   });

   useEffect(() => {
      const handleResize = () => {
         const isLaptop = window.matchMedia('(min-width: 1100px)').matches;
         const isDesktop = window.matchMedia('(min-width: 1920px)').matches;
         setBreakpoint({ isLaptop, isDesktop });
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return breakpoint;
};
