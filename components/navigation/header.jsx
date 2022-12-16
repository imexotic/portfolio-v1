import { useState, useEffect } from "react";

import styles from "../../styles/header.module.css";

import { IconContext } from "react-icons";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

import useScrollDirection from "../../hooks/useScrollDirection";

const Header = ({ theme, toggleTheme }) => {
   const [toggle, setToggle] = useState(false);
   const [icon, setIcon] = useState(theme === "dark" ? <FiSun /> : <FiMoon />);
   const [scrollPosition, scrollDirection] = useScrollDirection();

   useEffect(() => {
      toggle ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
   }, [toggle]);

   useEffect(() => {
      setIcon(theme === "dark" ? <FiSun /> : <FiMoon />);
   }, [theme]);

   return (
      <header id={styles["header"]} className={`${scrollDirection === "down" ? styles["hide"] : styles["show"]} ${scrollPosition === 0 ? styles["top"] : styles["scroll"]} ${toggle ? styles["show-menu"] : styles["hide-menu"]}`}>
         <div className={`${styles["container"]} container`}>
            <h1>Hubert.</h1>
            <nav className={styles["navbar"]}>
               <ul className={toggle === true ? styles["show-nav"] : styles["hide-nav"]}>
                  <li className={styles["nav-item"]}>
                     <a href="#hero-section" className={styles["nav-link"]}>
                        About
                     </a>
                  </li>
                  <li className={styles["nav-item"]}>
                     <a href="#project-section" className={styles["nav-link"]}>
                        Projects
                     </a>
                  </li>
                  <li className={styles["nav-item"]}>
                     <a href="#contact-section" className={styles["nav-link"]}>
                        Contact
                     </a>
                  </li>
               </ul>
            </nav>
            <div className={styles["header-btns"]}>
               <button className={styles["header-btn"]} onClick={toggleTheme}>
                  <IconContext.Provider value={{ className: styles["theme-icon"] }}>
                     <>{icon}</>
                  </IconContext.Provider>
               </button>
               <button className={(styles["header-btn"], styles["burger-btn"])} onClick={() => setToggle(!toggle)}>
                  <IconContext.Provider value={{ className: styles["theme-icon"] }}>
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
