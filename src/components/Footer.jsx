import "../styles/Footer.css";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <p>
               Designed & Built with&nbsp;
               <IconContext.Provider value={{ color: "#61DBFB", className: "footer-icon" }}>
                  <FaReact />
               </IconContext.Provider>
               &nbsp;by&nbsp;
               <a href="about" className="">
                  Hubert Stoklosa
               </a>
            </p>
            <p className="copyright">&copy; 2022 — All Rights Reserved</p>
         </div>
      </footer>
   );
};

export default Footer;
