import React from "react";
import './Ourtechnologies.scss';
import backgroundimage from "../../images/backgroundimg.jpg";
import image_1 from "../../images/ourtechwebdevimg.jpeg";
import image_2 from "../../images/ourtechitstaffingimg.jpeg";
import image_3 from "../../images/ourtechappdevimg.jpg";


const Ourtechnologies = () => {
    return (
        <div className="ourtech">
            <div className="ourtech-backgroundwrapper">
                <img src={backgroundimage} alt="backgroundimage" />
            </div>
            <div className="ourtech-contentwrapper">
                <div className="ourtech-heading">
                    OUR TECHNOLOGIES
                </div>
                <hr class="ourtech-heading-ul"></hr>
                <div className="ourtech-image-wrapper">
                    <div className="ourtech-image">
                        <img src={image_1} alt="ourtech-img-1" />
                    </div>
                    <div className="ourtech-image">
                        <img src={image_2} alt="ourtech-img-2" />
                    </div>
                    <div className="ourtech-image">
                        <img src={image_3} alt="ourtech-img-3" />
                    </div>
                </div>
                <div className="ourtech-button-wrapper">
                    <button>MORE TECHNOLOGIES</button>
                </div>
            </div>
        </div>
    );
};

export default Ourtechnologies;