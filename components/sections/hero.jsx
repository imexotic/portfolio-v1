import Image from "next/image";
import heroImg from "../../public/assets/exotic-round.png";
import styles from "../../styles/hero.module.css";

import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "../misc/socialLinks";

const Hero = () => {
   return (
      <section id={styles["hero-section"]}>
         <div className={styles["line"]}></div>
         <div className={`${styles["container"]} container`}>
            <h3 className={styles["hero-pretitle"]}>
               <span className={styles["wave"]}>👋</span> Hi there, my name is
            </h3>
            <h1 className={styles["hero-title"]}>Hubert Stoklosa</h1>
            <h2 className={styles["hero-subtitle"]}>
               <span>
                  {"{ "}
                  <Typewriter words={["student", "developer"]} loop={true} cursor={true} />
                  {" }"}
               </span>
            </h2>
            <div className={styles["hero-image"]}>
               <Image src={heroImg} alt="me :)" className={styles["img"]} />
            </div>

            <SocialLinks _styles={styles} />
         </div>
      </section>
   );
};

export default Hero;
