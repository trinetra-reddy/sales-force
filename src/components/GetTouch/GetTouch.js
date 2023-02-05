import React from "react";
import "./GetTouch.scss";
import GetTouchImage from "../../images/GetTouch-Bg.svg";
const GetTouch = () => {
  return (
    <>
      <div className="GetTouch-container">
        <div>
          <div className="GetTouch-text">
            <h4 className="GetTouch-header-1">
              CONTACT US NOW IF YOU HAVE ANY QUESTION
            </h4>
            <h2 className="GetTouch-header-2">Get in Touch with us so Easy.</h2>
            <p className="GetTouch-paragraph">
              We're committed to building long-term partnerships with our
              clients and achieving their success.
            </p>
          </div>
          <div className="GetTouch-form">
            <div>
              <input
                className="GetTouch-input"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <button className="GetTouch-button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="GetTouch-image"
            src={GetTouchImage}
            alt="GetTouchImage"
            height="350"
            width="300"
          ></img>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
