import React from "react";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import ContactComp from "../components/contact/contact.jsx";

const Contact = () => {
return (
    <div className="About">
      <Header />
      <ContactComp  />
      <Footer />
    </div>
  );
}

export default Contact;