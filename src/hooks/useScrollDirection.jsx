import { useState, useEffect } from "react";

const useScrollDirection = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [scrollDirection, setScrollDirection] = useState(null);

   useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
         const scrollY = window.pageYOffset;
         const direction = scrollY > lastScrollY ? "down" : "up";

         if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
            setScrollDirection(direction);
         }

         setScrollPosition(scrollY);

         lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      window.addEventListener("scroll", updateScrollDirection); // add event listener

      return () => {
         window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
   }, [scrollDirection]);

   return [scrollPosition, scrollDirection];
};

export default useScrollDirection;
