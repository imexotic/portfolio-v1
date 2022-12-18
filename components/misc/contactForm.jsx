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
      const temp = data;

      // reset form data
      setData({ name: "", email: "", message: "" });
      setTouched({});

      await fetch("/api/mail", {
         method: "POST",
         body: JSON.stringify(temp),
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

   return (
      <form className={styles["contact-form"]} onSubmit={onSubmit}>
         <div className={styles["form-section"]}>
            <label htmlFor="name-input">Name</label>
            <input type="text" name="name" id="name-input" className={touched.name && !data.name ? styles["wrong"] : null} value={data.name} onChange={handleChange} onBlur={onBlur} />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" name="email" id="email-input" className={touched.email && !data.email ? styles["wrong"] : null} value={data.email} onChange={handleChange} onBlur={onBlur} />
         </div>
         <div className={styles["form-section"]}>
            <label htmlFor="message-input">Message</label>
            <textarea type="text" name="message" id="message-input" className={touched.message && !data.message ? styles["wrong"] : null} value={data.message} onChange={handleChange} onBlur={onBlur} />
         </div>
         <input type="submit" value="Send" className={styles["form-submit"]} disabled={!data.name || !data.email || !data.message} />
      </form>
   );
};

export default memo(ContactForm);
