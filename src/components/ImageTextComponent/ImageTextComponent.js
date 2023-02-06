import React from "react";
import "./ImageTextComponent.scss";
import { Link } from "react-router-dom";

const Howcanwehelpyou = (props) => {
  return (
    <div className={`imagetextcomponent ${props.imgposition}`}>
      <div className="imagetextcomponent-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="imagetextcomponent-content">
        <div className="imagetextcomponent-content-heading">
          {props.heading}
        </div>
        <hr class="imagetextcomponent-heading-ul"></hr>
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

export default Howcanwehelpyou;
