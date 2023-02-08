 import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Contactusbanner, Contactuscontent, Contactusform,Locations  } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import LocationIcon from "./LocationIcon.svg";
import './Contact.scss';

const Contact = () => {
    const location1="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975927.9236631559!2d75.47574729999998!3d14.699342100000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6b57ba85275bb%3A0x2415d1769c313736!2sTHE%20RURAL%20EDUCATION%20AND%20DEVELOPMENT%20TRUST!5e0!3m2!1sen!2sin!4v1669902750578!5m2!1sen!2sin";
    return (
        <div>
            <Header />
            <Contactusbanner />
            <Contactuscontent />
            <Contactusform />
            <Locations
            img={LocationIcon}
            address="Prasanthi nagar, near amaravati car decors, beside Rural development and Educational trust school, Anantapuram town, Anantapuram - 515 001."
            locationmap={location1}
          />
            <Footer />
        </div>
    );
};

export default Contact;