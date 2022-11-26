import "../styles/Footer.css";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

const Footer = () => {
   return (
      <footer>
         <div className="container">
            {/* <hr className="footer-line" /> */}
            <p className="footer-text">
               Site developed with &nbsp;
               <IconContext.Provider value={{ color: "#61DBFB", className: "footer-icon" }}>
                  <FaReact />
               </IconContext.Provider>
               &nbsp;
            </p>
            <p className="copyright">
               &copy;&nbsp;
               <a href="about" className="">
                  Hubert Stoklosa
               </a>
               &nbsp; 2022 — All Rights Reserved
            </p>
         </div>
      </footer>
   );
};

export default Footer;
