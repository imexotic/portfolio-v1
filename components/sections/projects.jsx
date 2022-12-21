import styles from "../../styles/projects.module.css";

import { IconContext } from "react-icons";
import { FiGithub, FiExternalLink, FiCode, FiEye } from "react-icons/fi";

import Image from "next/image";
import testProject from "../../public/assets/test-project.jpg";

import GitHubCalendar from "react-github-calendar";

const Projects = () => {
   return (
      <section id="project-section">
         <div className={`${styles["container"]} container`}>
            <h1 className={styles["title"]}>Projects</h1>
            <div className={styles["featured-projects"]}>
               <div className={styles["project"]}>
                  <a href="#" className={styles["project-image_container"]}>
                     <Image src={testProject} alt="Featured project #1" />
                  </a>
                  <div className={styles["project-info"]}>
                     <h2 className={styles["title"]}>Ticket System 🎫</h2>
                     <p className={styles["description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati. Tenetur fugit neque quo voluptatum cum nobis atque, facere omnis eveniet id voluptas quidem, quae libero non eaque officia doloribus.</p>
                     <div className={styles["project-links"]}>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiGithub />
                           </IconContext.Provider>
                        </a>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiExternalLink />
                           </IconContext.Provider>
                        </a>
                     </div>
                  </div>
               </div>
               <div className={styles["project"]}>
                  <a href="#" className={styles["project-image_container"]}>
                     <Image src={testProject} alt="Featured project #2" />
                  </a>
                  <div className={styles["project-info"]}>
                     <h2 className={styles["title"]}>Google Drive Clone 📂</h2>
                     <p className={styles["description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati. Tenetur fugit neque quo voluptatum cum nobis atque, facere omnis eveniet id voluptas quidem, quae libero non eaque officia doloribus.</p>
                     <div className={styles["project-links"]}>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiGithub />
                           </IconContext.Provider>
                        </a>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiExternalLink />
                           </IconContext.Provider>
                        </a>
                     </div>
                  </div>
               </div>
               <div className={styles["project"]}>
                  <a href="#" className={styles["project-image_container"]}>
                     <Image src={testProject} alt="Featured project #3" />
                  </a>
                  <div className={styles["project-info"]}>
                     <h2 className={styles["title"]}>imexotic/ExoBot 🤖</h2>
                     <p className={styles["description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, obcaecati. Tenetur fugit neque quo voluptatum cum nobis atque, facere omnis eveniet id voluptas quidem, quae libero non eaque officia doloribus.</p>
                     <div className={styles["project-links"]}>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiGithub />
                           </IconContext.Provider>
                        </a>
                        <a href="#" className={styles["link"]}>
                           <IconContext.Provider value={{ className: styles["icon"] }}>
                              <FiExternalLink />
                           </IconContext.Provider>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <p className={styles["subtitle"]}>
               Here's a list of my other noteworthy projects & contributions (sourced on{" "}
               <a href="https://github.com/imexotic" className={styles["link"]}>
                  GitHub
               </a>
               )
            </p>

            <div className={styles["projects"]}>
               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>TypingPractice</h3>
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

               <div className={styles["project-card"]}>
                  <h3 className={styles["project-title"]}>Projectile Game</h3>
                  <p className={styles["project-description"]}>✈️ Projectile Shooting Game w/ Canvas API</p>
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
                  <h3 className={styles["project-title"]}>Clean Dashboard</h3>
                  <p className={styles["project-description"]}>Lorem Lorem ipsum dolor sit amet consectetur.</p>
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
         </div>
      </section>
   );
};

export default Projects;
