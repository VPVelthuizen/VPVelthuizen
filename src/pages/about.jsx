import React from "react";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import LandingComp from "../components/about/about.jsx";

const About = () => {
return (
    <div className="About">
      <Header />
      <LandingComp  />
      <Footer />
    </div>
  );
}

export default About;