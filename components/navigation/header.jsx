import styles from "../../styles/header.module.css";

import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

const Header = ({ scrollPosition, scrollDirection, theme, toggleTheme }) => {
   const [toggle, setToggle] = useState(false); // burger menu toggler

   useEffect(() => {
      toggle ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
   }, [toggle]);

   // check if burger menu is open
   const handleMenuClose = () => toggle && setToggle(false);

   return (
      <header id={styles["header"]} className={`${scrollDirection === "down" ? styles["hide"] : styles["show"]} ${scrollPosition === 0 ? styles["top"] : styles["scrolling"]} ${toggle ? styles["show-menu"] : styles["hide-menu"]}`}>
         <div className={`${styles["container"]} container`}>
            <h1>Hubert.</h1>
            <nav className={styles["navbar"]} onClick={() => setToggle(false)}>
               <ul onClick={(e) => e.stopPropagation()}>
                  <li className={styles["nav-item"]}>
                     <a href="#about-section" className={styles["nav-link"]} onClick={() => handleMenuClose()}>
                        About
                     </a>
                  </li>
                  <li className={styles["nav-item"]}>
                     <a href="#project-section" className={styles["nav-link"]} onClick={() => handleMenuClose()}>
                        Projects
                     </a>
                  </li>
                  <li className={styles["nav-item"]}>
                     <a href="#contact-section" className={styles["nav-link"]} onClick={() => handleMenuClose()}>
                        Contact
                     </a>
                  </li>
                  <li className={styles["nav-item"]}>
                     <input type="checkbox" className={styles["checkbox"]} id="checkbox" defaultChecked={theme === "light" ? true : false} onChange={() => toggleTheme()} />
                     <label for="checkbox" className={styles["checkbox-label"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <FiSun />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <FiMoon />
                        </IconContext.Provider>
                        <span className={styles["ball"]}></span>
                     </label>
                  </li>
               </ul>
            </nav>
            <button className={(styles["header-btn"], styles["burger-btn"])} onClick={(e) => setToggle(!toggle)}>
               <IconContext.Provider value={{ className: styles["icon"] }}>
                  <>
                     <FiMenu />
                  </>
               </IconContext.Provider>
            </button>
         </div>
      </header>
   );
};

export default Header;
