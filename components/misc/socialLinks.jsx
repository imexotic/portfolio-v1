// import styles from "../styles/socialLinks.module.css";

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const SocialLinks = ({ _styles }) => {
   return (
      <ul className={`${_styles?.["social-links"]} social-links`}>
         <li>
            <a href="https://github.com/imexotic/" target="__blank" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiGithub />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            <a href="https://www.linkedin.com/in/hubert-stoklosa-8b9416224/" target="__blank" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiLinkedin />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            {" "}
            <a href="https://twitter.com/exotic2137" target="__blank" className={`${_styles?.["social-link"]} social-link`}>
               <IconContext.Provider value={{ className: `${_styles?.["social-icon"]} social-icon` }}>
                  <>
                     <FiTwitter />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            {" "}
            <a href="mailto:hubert.stoklosa23@gmail.com" target="__blank" className={`${_styles?.["social-link"]} social-link`}>
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
