import "../../styles/Hero.css";
import me from "../../assets/me.jpg";
import SocialLinks from "../SocialLinks";

const Hero = () => {
   return (
      <section id="hero-section">
         <div className="container">
            <div className="hero-image">
               <img src={me} alt="me" />
            </div>
            <div className="hero-content">
               <h3 className="hero-pretitle">
                  <span className="wave">👋</span> Hi there, my name is
               </h3>
               <h1 className="hero-title">Hubert Stoklosa</h1>
               <h2 className="hero-subtitle">
                  <span>{"{ "}</span>
                  student & developer
                  <span>{" }"}</span>
               </h2>
               <p className="hero-text">
                  I'm a 1st year Computer Science student at{" "}
                  <a href="https://www.city.ac.uk/" className="url-link">
                     CUL
                  </a>{" "}
                  currently looking for a Software Engineering Intern position. Passionate about creating applications in various programming languages using the knowledge acquired over the years.
               </p>
               <SocialLinks />
               <button className="hero-cta">Resume</button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
