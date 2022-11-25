import "../styles/Header.css";

import { IconContext } from "react-icons";
import { FiMoon } from "react-icons/fi";

const Header = () => {
   return (
      <header>
         <div className="container">
            <h1>Hubert.</h1>
            <div className="links">
               <ul>
                  <li>
                     <a href="#about" className="link">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#projects" className="link">
                        Projects
                     </a>
                  </li>
                  <li>
                     <a href="#contact" className="link">
                        Contact
                     </a>
                  </li>
                  <li>
                     <div className="theme-btn">
                        <IconContext.Provider value={{ className: "theme-icon" }}>
                           <>
                              <FiMoon />
                           </>
                        </IconContext.Provider>{" "}
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
