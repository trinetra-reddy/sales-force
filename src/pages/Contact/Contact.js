import React, {useEffect} from "react";
import {
  Footer,
  Header,
  Contactusbanner,
  Contactuscontent,
  Contactusform,
  Locations,
} from "../../components";
import LocationIcon from "../../images/contactUsLocationIcon1.png";
import "./Contact.scss";

const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.4233898313705!2d77.5874847140147!3d14.688632778853142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac93b2c4289%3A0x54c738d693e49cdb!2s5%2C%205th%20Rd%2C%20Revenue%20Colony%2C%20Rangaswamy%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515004!5e0!3m2!1sen!2sin!4v1675865657203!5m2!1sen!2sin";
  return (
    <div>
      <Header />
      <Contactusbanner />
      <Contactuscontent />
      <Contactusform />
      <Locations
        img={LocationIcon}
        address="5-648,15th cross, 5th Road, Georgepet,Anantapur,Andhra Pradesh-515001."
        locationmap={location1}
      />
      <Footer />
    </div>
  );
};

export default Contact;
