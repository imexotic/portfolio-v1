import useLocalStorage from "./hooks/useLocalStorage";

import SocialSidebar from "./components/SocialSidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
         <Hero />
         <SocialSidebar />
         <Footer />
      </div>
   );
};

export default App;
