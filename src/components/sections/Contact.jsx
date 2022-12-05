import "../../styles/Contact.css";

import ContactForm from "../ContactForm";

const Contact = () => {
   return (
      <section id="contact-section">
         <div className="container">
            <h1 className="title">Lets get in touch!</h1>
            <p className="description">Feel free to use the contact form below (or other communcation method 😎) to get in touch with me!</p>
            <ContactForm />
         </div>
      </section>
   );
};

export default Contact;
