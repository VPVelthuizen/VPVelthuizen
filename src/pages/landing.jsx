import React from "react";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import LandingComp from "../components/landing/landing.jsx";

const Landing = () => {
return (
    <div className="Landing">
      <Header />
      <LandingComp  />
      <Footer />
    </div>
  );
}

export default Landing;
