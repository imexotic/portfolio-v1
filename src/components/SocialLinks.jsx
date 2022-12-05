import "../styles/SocialLinks.css";

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialLinks = () => {
   return (
      <ul className="social-links">
         <li>
            <a href="https://github.com/imexotic/" className="social-link">
               <IconContext.Provider value={{ className: "social-icon" }}>
                  <>
                     <FiGithub />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            <a href="https://www.linkedin.com/in/hubert-stoklosa-8b9416224/" className="social-link">
               <IconContext.Provider value={{ className: "social-icon" }}>
                  <>
                     <FiLinkedin />
                  </>
               </IconContext.Provider>
            </a>
         </li>
         <li>
            <a href="mailto:hubert.stoklosa23@gmail.com" className="social-link">
               <IconContext.Provider value={{ className: "social-icon" }}>
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
