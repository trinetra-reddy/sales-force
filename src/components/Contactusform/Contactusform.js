import React from "react";
import "./Contactusform.scss";
import homeicon from "../../images/contactUsHomeIcon.png";
import callericon from "../../images/contactUsCallerIcon.png";
import locationicon from "../../images/contactUsLocationIcon.png";

const Contactusform = () => {
  return (
    <div className="contactus ">
      <div className="contactus-col1">
        <div className="contactus-col1-heading">
          <div className="contactus-col1-heading1">LET'S TALK</div>
          <div className="contactus-col1-heading2">Call us NOW</div>
        </div>
        <div className="contactus-col1-wrpr1">
          <img src={homeicon} alt="icon_1" />
          <div className="contactus-col1-wrpr1-text">
            <div className="contactus-col1-wrpr1-text-h">
              Fountain Cloud Tech
            </div>
            <div className="contactus-col1-wrpr1-text-p">
              support@fountaincloudtech
            </div>
          </div>
        </div>
        <div className="contactus-col1-wrpr1">
          <img src={callericon} alt="icon_1" />
          <div className="contactus-col1-wrpr1-text">
            <div className="contactus-col1-wrpr1-text-h">Phone:</div>
            <div className="contactus-col1-wrpr1-text-p">+91 88857 77505</div>
          </div>
        </div>
        <div className="contactus-col1-wrpr1">
          <img src={locationicon} alt="icon_1" />
          <div className="contactus-col1-wrpr1-text">
            <div className="contactus-col1-wrpr1-text-h">Address</div>
            <div className="contactus-col1-wrpr1-text-p">
              5-648,15th cross, 5th Road, Georgepet,Anantapur,Andhra
              Pradesh-515001.
            </div>
          </div>
        </div>
      </div>
      <div className="contactus-col2">
        <form
          className="contactus-form"
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/xlevpvdb"
          method="post"
        >
          <div className="contactus-col2-input1">
            <input
              className="contactus-inputs"
              id="name"
              placeholder="Full Name"
              name="name"
              type="text"
            ></input>
          </div>
          <div className="contactus-col2-input2">
            <div className="contactus-col2-input2-sub1">
              <input
                className="contactus-inputs"
                id="name"
                placeholder="E-mail"
                name="name"
                type="text"
              ></input>
            </div>
            <div className="contactus-col2-input2-sub2">
              <input
                className="contactus-inputs"
                id="name"
                placeholder="Phone Number"
                name="name"
                type="text"
              ></input>
            </div>
          </div>
          <div className="contactus-col2-input3">
            <input
              className="contactus-inputs"
              // id="name"
              id="contactus-inputmessage"
              placeholder="Your Message Here"
              name="name"
              type="text"
            ></input>
          </div>
          <div className="contactus-button-">
            <button className="contactus-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactusform;
