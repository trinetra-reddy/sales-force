import React from "react";
import './Howcanwehelpyou.scss';
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
            Beyond Syntax LLC is founded to serve its customers with a core set of values. 
            These core values guide our actions as we engage with our customers, employees, partners, and 
            all whom we serve. We believe strongly in the value of high-quality processes to deliver 
            consistent results, and a continuous improvement process to ensure we can be nimble and adopt 
            quickly to technology, industry and market change 
            </div>
        </div>
        <div className="howcanwehelpyou-image">
            <img src={image} alt="image" />
        </div>
      </div>
    );
};

export default Howcanwehelpyou;