import Image from "next/image";
import heroImg from "../../public/assets/exotic.jpg";
import styles from "../../styles/hero.module.css";

import SocialLinks from "../misc/socialLinks";

const Hero = () => {
   return (
      <section id={styles["hero-section"]}>
         <div className={`${styles["container"]} container`}>
            <div className={styles["hero-image"]}>
               <Image src={heroImg} alt="me :)" className={styles["img"]} />
            </div>
            <div className={styles["hero-content"]}>
               <h3 className={styles["hero-pretitle"]}>
                  <span className={styles["wave"]}>👋</span> Hi there, my name is
               </h3>
               <h1 className={styles["hero-title"]}>Hubert Stoklosa</h1>
               <h2 className={styles["hero-subtitle"]}>
                  <span>{"{ "}</span>
                  student & developer
                  <span>{" }"}</span>
               </h2>
               <p className={styles["hero-text"]}>
                  I'm a 1st year Computer Science student at{" "}
                  <a href="https://www.city.ac.uk/" className="url-link">
                     CUL
                  </a>{" "}
                  currently looking for a Software Engineering Intern position. Passionate about creating applications in various programming languages using the knowledge acquired over the years.
               </p>
               <SocialLinks _styles={styles} />
               <button className={styles["hero-cta"]}>Resume</button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
