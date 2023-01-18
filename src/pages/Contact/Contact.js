 import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, Contactusbanner, Contactuscontent, Contactusform,  } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <Header />
            <Contactusbanner />
            <Contactuscontent />
            <Contactusform />
            <Footer />
        </div>
    );
};

export default Contact;