import React from "react";
import './Aboutbeyondsyntax.scss';
import backgroundimg from "../../images/aboutbeyondimg.jpg";

const Aboutbeyondsyntax = () => {
    return (
        <div className="aboutbeyondsyntax">
            <img src={backgroundimg} alt="backgroundimage" />
            <div className="aboutbeyondsyntax-content">
                <h2>Fountain Cloud Tech</h2>
                <p>At Fountain Tech, we understand the unique challenges that companies face in the fountain
                     industry and we're here to help. Our team of Salesforce certified professionals are dedicated
                      to delivering customized solutions that drive growth and streamline your business operations.</p>
                <button className="aboutbeyond-button">VIEW DETAILS</button>
            </div>
        </div>
    );
};

export default Aboutbeyondsyntax;