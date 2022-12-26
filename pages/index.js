import { useState, useEffect, useRef } from "react";
import { Header, Footer, Hero, About, Projects, Contact } from "../components/index.js";
import useLocalStorage from "../hooks/useLocalStorage";
import useScrollDirection from "../hooks/useScrollDirection";

const App = () => {
   const [defaultDark, setDefaultDark] = useState();
   const [theme, setTheme] = useLocalStorage("theme", undefined);
   const [scrollPosition, scrollDirection] = useScrollDirection();
   const ref = useRef();

   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

   useEffect(() => {
      setDefaultDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
   });

   useEffect(() => {
      if (defaultDark !== undefined) {
         setTheme(defaultDark ? "dark" : "light");
      }
   }, [defaultDark]);

   useEffect(() => {
      // change data-theme attribute on app div
      const el = ref.current;
      const attr = el.getAttribute("data-theme");

      el.setAttribute("data-theme", theme);
   }, [theme]);

   return (
      <div className="app" ref={ref}>
         {ref.current && (
            <>
               <Header theme={theme} toggleTheme={toggleTheme} scrollPosition={scrollPosition} scrollDirection={scrollDirection} />
               <Hero />
               <About scrollDirection={scrollDirection} />
               <Projects />
               <Contact />
               <Footer />
            </>
         )}
      </div>
   );
};

export default App;
