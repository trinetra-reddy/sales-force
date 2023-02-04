import React from "react";
import "./GetTouch.scss";
import GetTouchImage from "./GetTouch-Bg.svg";
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
              Lorem ipsum dolor sit amet, adipisicing elit. Ratione provident
              omnis iusto, veniam libero accusamus esse ab, enim temporibus.
            </p>
          </div>
          <div className="GetTouch-form">
            <input
              className="GetTouch-input"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="GetTouch-button">SUBSCRIBE</button>
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
