import "./styles/Header.css";

import { IconContext } from "react-icons";
import { FiSun, FiMoon } from "react-icons/fi";

import useScrollDirection from "../../hooks/useScrollDirection";

const Header = ({ theme, toggleTheme }) => {
   const [scrollPosition, scrollDirection] = useScrollDirection();

   return (
      <header className={`${scrollDirection === "down" ? "hide" : "show"} ${scrollPosition === 0 ? "top" : "scroll"}`}>
         <div className="container">
            <h1>Hubert.</h1>
            <div className="links">
               <ul>
                  <li>
                     <a href="#hero-section" className="link">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#project-section" className="link">
                        Projects
                     </a>
                  </li>
                  <li>
                     <a href="#contact-section" className="link">
                        Contact
                     </a>
                  </li>
                  <li>
                     <button className="theme-btn" onClick={toggleTheme}>
                        <IconContext.Provider value={{ className: "theme-icon" }}>
                           <>{theme === "dark" ? <FiSun /> : <FiMoon />}</>
                        </IconContext.Provider>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
