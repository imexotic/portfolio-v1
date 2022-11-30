import "./Header.css";

import { IconContext } from "react-icons";
import { FiSun, FiMoon } from "react-icons/fi";

import useScrollDirection from "../../hooks/useScrollDirection";

const Header = ({ theme, toggleTheme }) => {
   const [scrollPosition, scrollDirection] = useScrollDirection();

   return (
      <header className={`${scrollDirection === "down" ? "hide" : "show"} ${scrollPosition === 0 ? "top" : "scroll"}`}>
         <div className="container">
            <h1>Hubert.</h1>
            <nav className="navbar">
               <ul>
                  <li className="nav-item">
                     <a href="#hero-section" className="nav-link">
                        About
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href="#project-section" className="nav-link">
                        Projects
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href="#contact-section" className="nav-link">
                        Contact
                     </a>
                  </li>
                  <li className="nav-item">
                     <button className="theme-btn" onClick={toggleTheme}>
                        <IconContext.Provider value={{ className: "theme-icon" }}>
                           <>{theme === "dark" ? <FiSun /> : <FiMoon />}</>
                        </IconContext.Provider>
                     </button>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
