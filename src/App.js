import SocialSidebar from "./components/SocialSidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import "./styles/App.css";

const App = () => {
   return (
      <div>
         <Header />
         <Hero />
         <SocialSidebar />
         <Footer />
      </div>
   );
};

export default App;
