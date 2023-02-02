import React from "react";
import "./Howcanwehelpyou.scss";
import image from "../../images/howcanwehelpimg.jpg";

const Howcanwehelpyou = () => {
  return (
    <div className="howcanwehelpyou">
      <div className="howcanwehelpyou-content">
        <div className="howcanwehelpyou-content-heading">
          How can we help you ?
        </div>
        <hr class="howcanwehelpyou-heading-ul"></hr>
        <div className="howcanwehelpyou-content-paragraph">
          Fountain Tech's commitment to client success is evident in its high
          client retention rate and the long-term partnerships it builds with
          its clients. Whether you're a small business or a large enterprise,
          Fountain Tech has the skills and experience to help you unlock the
          full potential of Salesforce and drive your business forward.
        </div>
      </div>
      <div className="howcanwehelpyou-image">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Howcanwehelpyou;
