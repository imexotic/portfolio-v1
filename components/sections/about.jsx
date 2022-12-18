import Image from "next/image";
import styles from "../../styles/about.module.css";
import heroImg from "../../public/assets/exotic.jpg";

export default () => {
   return (
      <section id="about-section">
         <div className={`${styles["container"]} container`}>
            <div className={styles["about-image"]}>
               <Image src={heroImg} alt="me :)" className={styles["img"]} />
            </div>
            <div className={styles["about-content"]}>
               <h1 className={styles["about-title"]}>About Me 👨‍💻</h1>
               <p className={styles["about-text"]}>
                  I'm a 1st year Computer Science student at{" "}
                  <a href="https://www.city.ac.uk/" className="url-link">
                     CUL
                  </a>{" "}
                  currently looking for a Software Engineering Intern position. Passionate about creating applications in various programming languages using the knowledge acquired over the years.
               </p>
               <button className={styles["about-cta"]}>Resume</button>
            </div>
         </div>
      </section>
   );
};
