import React from "react";
import "./Aboutusbanner.scss";
import bannerimage from "../../images/aboutsusbanner.jpg";

const Aboutbanner = () => {
  return (
    <div className="aboutusbanner">
      <img
        className="aboutusbanner-image"
        src={bannerimage}
        alt="bannerimage"
      />
      <div className="aboutusbanner-content">
        <div className="aboutusbanner-heading">ABOUT US</div>
        <div className="aboutusbanner-paragraph">
          Fountain Tech is a innovative Salesforce solutions provider, that
          helps companies leverage the full potential of the Salesforce platform
          to streamline their business operations and drive growth.
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;
