import React from "react";
import './Ourclients.scss';
import ourclientsimg_1 from "../../images/ourclientsimg_1.jpg";
import ourclientsimg_2 from "../../images/ourclientsimg_2.jpg";
import ourclientsimg_3 from "../../images/ourclientsimg_3.jpg";
import ourclientsimg_4 from "../../images/ourclientsimg_4.jpg";
import ourclientsimg_5 from "../../images/ourclientsimg_5.jpg";
import ourclientsimg_6 from "../../images/ourclientsimg_6.jpg";



const Ourclients = () => {
    return (
        <div className="ourclients">
                <div className="ourclients-heading">
                    OUR CLIENTS
                </div>
                <div className="ourclients-heading-underline">
                    <hr/>
                </div>
                <div className="ourclients-image-wrapper">
                    <div className="ourclients-image">
                        <img src={ourclientsimg_1} alt="ourclients-img-1" />
                    </div>
                    <div className="ourclients-image">
                        <img src={ourclientsimg_2} alt="ourclients-img-2" />
                    </div>
                    <div className="ourclients-image">
                        <img src={ourclientsimg_3} alt="ourclients-img-3" />
                    </div>
                    <div className="ourclients-image">
                        <img src={ourclientsimg_4} alt="ourclients-img-4" />
                    </div>
                    <div className="ourclients-image">
                        <img src={ourclientsimg_5} alt="ourclients-img-5" />
                    </div>
                    
                </div>
        </div>
    );
};

export default Ourclients;