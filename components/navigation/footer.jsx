import styles from "../../styles/footer.module.css";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

import { SocialLinks } from "../index";

const Footer = () => {
   return (
      <footer id={styles["footer"]}>
         <div className={`${styles["container"]} container`}>
            <SocialLinks _styles={styles} />
            <p className={styles["developer"]}>
               {/* &copy;&nbsp;
               <a href="#about-section" className="url-link">
                  Hubert Stoklosa
               </a>
               &nbsp; 2022 — All Rights Reserved */}
               Developed by{" "}
               <a href="https://github.com/imexotic" target="__blank" className="url-link">
                  Hubert Stoklosa
               </a>
            </p>
            <p className={styles["footer-text"]}>
               Built with&nbsp;
               <a className="url-link" href="https://nextjs.org/" target="__blank">
                  Next.js
               </a>
               &nbsp;&nbsp;Powered by&nbsp;
               <a className="url-link" href="https://vercel.com/dashboard" target="__blank">
                  Vercel
               </a>
            </p>
         </div>
      </footer>
   );
};

export default Footer;
