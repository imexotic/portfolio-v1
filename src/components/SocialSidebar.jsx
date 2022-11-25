import "../styles/SocialSidebar.css";

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SocialSidebar = () => {
   return (
      <div className="social-sidebar">
         <ul>
            <li>
               <a href="#xd">
                  <IconContext.Provider value={{ className: "sidebar-icon" }}>
                     <>
                        <FiGithub />
                     </>
                  </IconContext.Provider>
               </a>
            </li>
            <li>
               <a href="#xd">
                  <IconContext.Provider value={{ className: "sidebar-icon" }}>
                     <>
                        <FiLinkedin />
                     </>
                  </IconContext.Provider>
               </a>
            </li>
            <li>
               <a href="#xd">
                  <IconContext.Provider value={{ className: "sidebar-icon" }}>
                     <>
                        <FiMail />
                     </>
                  </IconContext.Provider>
               </a>
            </li>
         </ul>
         <div className="line"></div>
      </div>
   );
};

export default SocialSidebar;
