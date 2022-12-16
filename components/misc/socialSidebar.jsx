import styles from "../../styles/socialSidebar.module.css";
import SocialLinks from "./socialLinks";

const SocialSidebar = () => {
   return (
      <div className={styles["social-sidebar"]}>
         <SocialLinks />
         <div className={styles["line"]}></div>
      </div>
   );
};

export default SocialSidebar;
