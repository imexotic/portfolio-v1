import useLocalStorage from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import { Header, Footer, Hero, About, Projects, Contact, SocialSidebar } from "../components/index.js";

const App = ({ pageProps }) => {
   const [defaultDark, setDefaultDark] = useState();
   const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

   useEffect(() => {
      setDefaultDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
   }, []);

   return (
      <div className="app" data-theme={theme}>
         <Header theme={theme} toggleTheme={toggleTheme} {...pageProps} />
         <SocialSidebar />
         <Hero />
         <About />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
};

export default App;
