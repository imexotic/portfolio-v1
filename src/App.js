import SocialSidebar from "./components/SocialSidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import "./styles/App.css";

const App = () => {
   return (
      <>
         <Header />
         <Hero />
         <SocialSidebar />
         <Footer />
      </>
   );
};

export default App;
