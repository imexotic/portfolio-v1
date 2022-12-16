import styles from "../../styles/contact.module.css";

const ContactForm = () => {
   return (
      <form className={styles["contact-form"]} action="/xxx.xxx" method="post">
         <div className={styles["form-section"]}>
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="message-input">Message</label>
            <textarea type="text" id="message-input" />
         </div>
         <input className={styles["form-submit"]} type="submit" value="Send" />
      </form>
   );
};

export default ContactForm;
