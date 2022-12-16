import styles from "../../styles/footer.module.css";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

import { SocialLinks } from "../index";

const Footer = () => {
   return (
      <footer id={styles["footer"]}>
         <div className={`${styles["container"]} container`}>
            <SocialLinks _styles={styles} />
            <p className={styles["footer-text"]}>
               Site developed with &nbsp;
               <IconContext.Provider value={{ color: "#61DBFB", className: styles["footer-icon"] }}>
                  <FaReact />
               </IconContext.Provider>
               &nbsp;
            </p>
            <p className={styles["copyright"]}>
               &copy;&nbsp;
               <a href="about" className="url-link">
                  Hubert Stoklosa
               </a>
               &nbsp; 2022 — All Rights Reserved
            </p>
         </div>
      </footer>
   );
};

export default Footer;
