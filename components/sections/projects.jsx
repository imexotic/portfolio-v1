import styles from "../../styles/projects.module.css";

import { IconContext } from "react-icons";
import { FiCode, FiEye } from "react-icons/fi";
import GitHubCalendar from "react-github-calendar";

const Projects = () => {
   return (
      <section id="project-section">
         <div className={`${styles["container"]} container`}>
            <h1 className={styles["title"]}>Projects</h1>
            <p className={styles["subtitle"]}>
               Here's a list of my other noteworthy projects made using transistors (sourced on{" "}
               <a href="https://github.com/imexotic" className={styles["link"]}>
                  GitHub
               </a>
               )
            </p>
            <div className={styles["projects"]}>
               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>imexotic/ExoBot</h3>
                  <p className={styles["project-description"]}>🤖 An open-source & multi-purpose discord bot running on Discord.py.</p>
                  <a href="#" className={styles["link"]}>
                     <IconContext.Provider value={{ className: styles["icon"] }}>
                        <>
                           <FiCode />
                        </>
                     </IconContext.Provider>
                     &nbsp;&nbsp;Code
                  </a>
               </div>

               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>Ticket System</h3>
                  <p className={styles["project-description"]}>🎫 Lorem Lorem ipsum dolor sit amet consectetur.</p>
                  <div className={styles["project-links"]}>
                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>Google Drive Clone</h3>
                  <p className={styles["project-description"]}>📂 Lorem Lorem ipsum dolor sit amet consectetur.</p>
                  <div className={styles["project-links"]}>
                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>TypingSpeed (ala MonkeyType)</h3>
                  <p className={styles["project-description"]}>⌨️ A simple Google Keep clone to make quick notes.</p>
                  <div className={styles["project-links"]}>
                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>

               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>Simple Google Keep Clone</h3>
                  <p className={styles["project-description"]}>📝 A simple Google Keep clone to make quick notes.</p>
                  <div className={styles["project-links"]}>
                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiCode />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Code
                     </a>

                     <a href="#" className={styles["link"]}>
                        <IconContext.Provider value={{ className: styles["icon"] }}>
                           <>
                              <FiEye />
                           </>
                        </IconContext.Provider>
                        &nbsp;&nbsp;Live
                     </a>
                  </div>
               </div>
            </div>
            <div className={styles["github-calendar"]}>
               <h2 style={{ textAlign: "center" }}>Github Contributions</h2>
               <GitHubCalendar username="imexotic" hideMonthLabels={true} hideTotalCount={true} hideColorLegend={true} />
            </div>
         </div>
      </section>
   );
};

export default Projects;
