import React from "react";
import "./TextComponent.scss";

const TextComponent = (props) => {
    return (
        <>
            <div className="whypartnerwithus">
                <div className="whypartnerwithus-heading">{props.heading}</div>
                <hr class="whypartnerwithus-heading-ul"></hr>
                <div className="whypartnerwithus-paragraph">
                    {props.description}
                </div>
            </div>
        </>
    );
};

export default TextComponent;