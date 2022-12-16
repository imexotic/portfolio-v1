// import styles from "../styles/socialLinks.module.css";

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialLinks = ({ _styles }) => {
   return (
      <ul className={`${_styles?.["social-links"]} social-links`}>
         <li>
            <a href="https://github.com/imexotic/" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiGithub />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            <a href="https://www.linkedin.com/in/hubert-stoklosa-8b9416224/" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiLinkedin />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            {" "}
            <a href="mailto:hubert.stoklosa23@gmail.com" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiMail />
                  </>
               </IconContext.Provider>
            </a>
         </li>
      </ul>
   );
};

export default SocialLinks;
