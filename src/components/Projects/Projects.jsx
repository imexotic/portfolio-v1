import "./styles/Projects.css";

import { IconContext } from "react-icons";
import { FiCode, FiEye } from "react-icons/fi";

const Projects = () => {
   return (
      <section id="project-section">
         <div className="container">
            <h1>Projects</h1>
            <p className="subtitle">
               Here's a list of my projects made using 1s and 0s (more work sourced on{" "}
               <a href="https://github.com/imexotic" className="link">
                  GitHub
               </a>
               )
            </p>
            <div className="projects">
               <div className="project-card">
                  <h3 className="title">imexotic/ExoBot</h3>
                  <p className="description">🤖 An open-source & multi-purpose discord bot running on Discord.py.</p>
                  <a href="#" className="link">
                     <IconContext.Provider value={{ className: "icon" }}>
                        <>
                           <FiCode />
                        </>
                     </IconContext.Provider>
                     &nbsp;&nbsp;Code
                  </a>
               </div>

               <div className="project-card">
                  <h3 className="title">Ticket System</h3>
                  <p className="description">🎫 Lorem Lorem ipsum dolor sit amet consectetur.</p>
                  <div className="project-links">
                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className="project-card">
                  <h3 className="title">Google Drive Clone</h3>
                  <p className="description">📂 Lorem Lorem ipsum dolor sit amet consectetur.</p>
                  <div className="project-links">
                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className="project-card">
                  <h3 className="title">TypingSpeed (ala MonkeyType)</h3>
                  <p className="description">⌨️ A simple Google Keep clone to make quick notes.</p>
                  <div className="project-links">
                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className="project-card">
                  <h3 className="title">Simple Google Keep Clone</h3>
                  <p className="description">📝 A simple Google Keep clone to make quick notes.</p>
                  <div className="project-links">
                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className="link">
                        <IconContext.Provider value={{ className: "icon" }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
