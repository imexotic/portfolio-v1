import styles from "../../styles/contact.module.css";

import { useState, memo } from "react";

const ContactForm = () => {
   const [data, setData] = useState({ name: "", email: "", message: "" });
   const [touched, setTouched] = useState({});

   const handleChange = ({ target }) => {
      setData((prev) => ({
         ...prev,
         [target.name]: target.value,
      }));
   };

   const onSubmit = async (e) => {
      e.preventDefault();

      await fetch("/api/mail", {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      });
   };

   const onBlur = ({ target }) => {
      setTouched((prev) => ({
         ...prev,
         [target.name]: true,
      }));
   };

   console.log(touched);

   return (
      <form className={styles["contact-form"]} onSubmit={onSubmit}>
         <div className={styles["form-section"]}>
            <label htmlFor="name-input">Name</label>
            <input type="text" name="name" id="name-input" className={touched.name && !data.name ? styles["wrong"] : null} onBlur={onBlur} onChange={handleChange} />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" name="email" id="email-input" onChange={handleChange} className={touched.name && !data.email ? styles["wrong"] : null} onBlur={onBlur} />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="message-input">Message</label>
            <textarea type="text" name="message" id="message-input" onChange={handleChange} className={touched.name && !data.message ? styles["wrong"] : null} onBlur={onBlur} />
         </div>
         <input type="submit" value="Send" className={styles["form-submit"]} disabled={!data.name || !data.email || !data.message} />
      </form>
   );
};

export default memo(ContactForm);
