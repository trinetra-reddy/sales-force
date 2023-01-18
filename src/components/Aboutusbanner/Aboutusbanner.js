import React from "react";
import './Aboutusbanner.scss';
import bannerimage from "../../images/aboutusbannerimg.jpg";

const Aboutbanner = () => {
    return (
        <div className="aboutusbanner">
            <img src={bannerimage} alt="bannerimage" />
            <div className="aboutusbanner-content">
            <div className="aboutusbanner-heading">
                ABOUT US
            </div>
            <div className="aboutusbanner-paragraph">
              BEYONDSYNTAXLLC is an IT Services organization, dedicated to provide the best IT solutions in the areas of Staffing, data management and infrastructure management
            </div>
            </div>
        </div>
    );
};

export default Aboutbanner;