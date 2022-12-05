import useLocalStorage from "./hooks/useLocalStorage";

import { Header, Footer, Hero, Projects, Contact, SocialSidebar } from "./components/index.js";

import "./styles/App.css";

const App = () => {
   const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
   const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

   const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };

   return (
      <div className="app" data-theme={theme}>
         <Header theme={theme} toggleTheme={toggleTheme} />
         <SocialSidebar />
         <Hero />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
};

export default App;
