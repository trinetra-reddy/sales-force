import React from "react";
import "./ImageTextComponent.scss";
import { Link } from "react-router-dom";

const ImageTextComponent = (props) => {
  return (
    <div className={`imagetextcomponent ${props.imgposition}`}>
      <div className="imagetextcomponent-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="imagetextcomponent-content">
        <div className="imagetextcomponent-content-heading">
          {props.heading}
        </div>
        <hr className="imagetextcomponent-heading-ul"></hr>
        <div className="imagetextcomponent-content-paragraph">
          {props.description}
          <Link className="imagetextcomponent-redirect" to="/services">
            {props.view}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
