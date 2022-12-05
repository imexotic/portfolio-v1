import { useState, useEffect } from "react";

import "./Header.css";

import { IconContext } from "react-icons";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

import useScrollDirection from "../../hooks/useScrollDirection";

const Header = ({ theme, toggleTheme }) => {
   const [scrollPosition, scrollDirection] = useScrollDirection();
   const [toggle, setToggle] = useState(false);

   toggle ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");

   return (
      <header className={`${scrollDirection === "down" ? "hide" : "show"} ${scrollPosition === 0 ? "top" : "scroll"} ${toggle ? "show-menu" : "hide-menu"}`}>
         <div className="container">
            <h1>Hubert.</h1>
            <nav className="navbar">
               <ul className={toggle === true ? "show-nav" : "hide-nav"}>
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
               </ul>
            </nav>
            <div className="header-btns">
               <button className="header-btn" onClick={toggleTheme}>
                  <IconContext.Provider value={{ className: "theme-icon" }}>
                     <>{theme === "dark" ? <FiSun /> : <FiMoon />}</>
                  </IconContext.Provider>
               </button>
               <button className="header-btn burger-btn" onClick={() => setToggle(!toggle)}>
                  <IconContext.Provider value={{ className: "theme-icon" }}>
                     <>
                        <FiMenu />
                     </>
                  </IconContext.Provider>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
