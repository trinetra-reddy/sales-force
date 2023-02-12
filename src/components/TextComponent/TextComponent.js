import React from "react";
import "./TextComponent.scss";

const TextComponent = (props) => {
  return (
    <>
      <div className="textcomponent">
        <div className="textcomponent-heading">{props.heading}</div>
        <hr className="textcomponent-heading-ul"></hr>
        <div className="textcomponent-paragraph">{props.description}</div>
      </div>
    </>
  );
};

export default TextComponent;
