import React from "react";
import "./Contactuscontent.scss";
import callericon from "../../images/contactUsCallerIcon.png";
import locationicon from "../../images/contactUsLocationIcon1.png";
const Contactuscontent = () => {
  return (
    <div className="contactuscontent">
      <div className="contactuscontent-heading">CONTACT US</div>
      <hr className="contactuscontent-heading-ul"></hr>
      <div className="contactuscontent-columns">
        <div className="contactuscontent-column1">
          <img src={locationicon} alt="locationicon" />
          <div className="contactuscontent-column-heading">INDIA ADDRESS</div>
          <div className="contactuscontent-column-text">
            5-648,15th cross, 5th Road, Georgepet,Anantapur,Andhra
            Pradesh-515001.
          </div>
        </div>
        <div className="contactuscontent-column2">
          <img src={callericon} alt="locationicon" />
          <div className="contactuscontent-column-heading">PHONE NUMBER</div>
          <a href="tel:8885777505" className="contactuscontent-column-text-m">
            (INDIA): +91 88857 77505
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactuscontent;
