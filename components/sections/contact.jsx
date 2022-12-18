import styles from "../../styles/contact.module.css";

import ContactForm from "../misc/contactForm";

const Contact = () => {
   return (
      <section id="contact-section">
         <div className={`${styles["container"]} container`}>
            <h1 className={styles["title"]}>Let's get in touch!</h1>
            <p className={styles["description"]}>Feel free to use the contact form below (or other communcation method 😎) to get in touch with me!</p>
            <ContactForm />
         </div>
      </section>
   );
};

export default Contact;
