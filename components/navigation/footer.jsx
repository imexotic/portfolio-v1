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
               Built with&nbsp;
               <a className="url-link" href="https://nextjs.org/" target="__blank">
                  Next.js
               </a>
               &nbsp;&nbsp;&nbsp;Powered by&nbsp;
               <a className="url-link" href="https://vercel.com/" target="__blank">
                  Vercel
               </a>
            </p>
            <p className={styles["copyright"]}>
               &copy;&nbsp;
               <a href="#about-section" className="url-link">
                  Hubert Stoklosa
               </a>
               &nbsp; 2022 — All Rights Reserved
            </p>
         </div>
      </footer>
   );
};

export default Footer;
